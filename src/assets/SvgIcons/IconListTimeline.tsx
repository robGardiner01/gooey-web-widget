import SvgIcon from "src/components/shared/SvgIcon";

const IconListTimeline = (props: any) => {
  const size = props.size || 16;
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={size} width={size}>
        // !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc
        <path d="M213.3 128H416V64L213.3 64l-32 32 32 32zM190.6 41.4c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3zM64 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM32 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm181.3 32H416V384H213.3l-32 32 32 32zm-22.6-86.6c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3zM181.3 256l32 32H480V224l-266.7 0-32 32zm-33.9-11.3l43.3-43.3c6-6 14.1-9.4 22.6-9.4H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6z" />
      </svg>
    </SvgIcon>
  );
};

export default IconListTimeline;
