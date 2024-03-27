import SvgIcon from "src/components/shared/SvgIcon";

const CircleStop = (props: any) => {
const size = props.size || 16;
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size} width={size}>
        // --!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z" />
      </svg>
    </SvgIcon>
  );
};

export default CircleStop;
