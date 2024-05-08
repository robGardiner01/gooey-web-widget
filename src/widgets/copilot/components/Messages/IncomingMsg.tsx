import { useSystemContext } from "src/contexts/hooks";
import Sources from "./Sources";
import { STREAM_MESSAGE_TYPES } from "src/api/streaming";
import CircleBeat from "src/assets/SvgIcons/CircleBeat";
import ResponseLoader from "../Loader";

import { addInlineStyle } from "src/addStyles";
import style from "./incoming.scss?inline";
addInlineStyle(style);

export const BotMessageLayout = () => {
  const branding = useSystemContext().config?.branding;
  return (
    <div className="d-flex align-center">
      {branding?.photoUrl && (
        <div
          className="bot-avatar bg-primary gmr-12"
          style={{ width: "24px", height: "24px", borderRadius: "100%" }}
        >
          <img
            src={branding?.photoUrl}
            alt="bot-avatar"
            style={{ width: "24px", height: "24px", borderRadius: "100%" }}
          />
        </div>
      )}
      <p className="font_14_600">{branding?.name}</p>
    </div>
  );
};
const getOutputText = (data: any) => {
  const { type = "", status = "", text, detail, output_text = {} } = data;
  let out = "";
  if (type === STREAM_MESSAGE_TYPES.MESSAGE_PART) {
    if (text) {
      out = text;
      out = out.replace("🎧 I heard", "🎙️");
      return out;
    }
    out = detail;
  }
  if (type === STREAM_MESSAGE_TYPES.FINAL_RESPONSE && status === "completed") {
    out = output_text[0];
  }

  // replace 🎧 I heard from out
  out = out.replace("🎧 I heard", "🎙️");
  return out;
};

function linkifyText(text: string) {
  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Replace URLs with <a> tags
  return text.replace(urlRegex, function (url: string) {
    return '<a href="' + url + '" target="_blank">' + url + "</a>";
  });
}

const IncomingMsg = (props: any) => {
  const { config } = useSystemContext();
  const { references = [], output_audio = [], type } = props.data;
  const audioTrack = output_audio[0];
  const output = getOutputText(props.data);
  const isStreaming = type !== STREAM_MESSAGE_TYPES.FINAL_RESPONSE;
  if (!output) return <ResponseLoader show={true} />;
  return (
    <div className="gooey-incomingMsg gpb-12 gpr-8">
      {config?.showSources && <Sources data={references} />}
      <div className="gpl-16">
        <BotMessageLayout />
        <div className="gml-36 gmt-4">
          <div>
            <p
              className="font_16_400 anim-typing gooey-output-text"
              id={props?.id}
              dangerouslySetInnerHTML={{ __html: linkifyText(output) }}
            />
            {isStreaming && (
              <CircleBeat
                className="anim-blink gml-4"
                size={16}
                style={{ display: "inline", marginBottom: "-2px" }}
              />
            )}
          </div>
          {audioTrack && (
            <div className="gmt-16">
              <audio controls src={audioTrack}></audio>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncomingMsg;
