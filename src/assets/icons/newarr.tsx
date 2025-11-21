import * as React from "react";
const NewArr = (props:any) => (
  <svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={34.75}
      cy={34.75}
      r={34.75}
      fill="url(#paint0_linear_0_16741)"
    />
    <path
      d="M27.832 22.5793L27.7157 25.9871L41.8162 26.0837L21.2328 46.237L23.7512 48.8091L44.3346 28.6558L44.1093 42.7305L47.6162 42.7361L47.8184 22.6774L27.832 22.5793Z"
      fill="black"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_16741"
        x1={-104.25}
        y1={-18.7838}
        x2={93.9189}
        y2={69.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4C88FC" />
        <stop offset={1} stopColor="#75F2F6" />
      </linearGradient>
    </defs>
  </svg>
);
export default NewArr;
