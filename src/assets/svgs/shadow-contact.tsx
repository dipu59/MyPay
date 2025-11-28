import * as React from "react";
const ShadowContact = (props:any) => (
  <svg
    width={841}
    height={845}
    viewBox="0 0 841 845"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_0_15497)">
      <ellipse
        cx={-75.501}
        cy={942.312}
        rx={165.435}
        ry={192.394}
        transform="rotate(176.617 -75.501 942.312)"
        fill="white"
        fillOpacity={0.6}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_0_15497"
        x={-991.044}
        y={0}
        width={1831.09}
        height={1884.62}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={375}
          result="effect1_foregroundBlur_0_15497"
        />
      </filter>
    </defs>
  </svg>
);
export default ShadowContact;
