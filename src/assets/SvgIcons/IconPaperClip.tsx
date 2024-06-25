import SvgIcon from "src/components/shared/SvgIcon";

const IconPaperClip = (props: any) => {
  const size = props.size || 16;
  return (
    <SvgIcon>
      <svg
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M32 128C32 57.3 89.3 0 160 0s128 57.3 128 128V320c0 44.2-35.8 80-80 80s-80-35.8-80-80V160c0-17.7 14.3-32 32-32s32 14.3 32 32V320c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-35.3-28.7-64-64-64s-64 28.7-64 64V336c0 61.9 50.1 112 112 112s112-50.1 112-112V160c0-17.7 14.3-32 32-32s32 14.3 32 32V336c0 97.2-78.8 176-176 176s-176-78.8-176-176V128z"/>
      </svg>
    </SvgIcon>
  );
};
export default IconPaperClip;
