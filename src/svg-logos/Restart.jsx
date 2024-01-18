import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={30}
    height={31}
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="w-7 h-7 cursor-pointer"
  >
    <path
      d="M25.591 4.59365C24.2024 3.19562 22.5509 2.08626 20.7315 1.32955C18.9122 0.572829 16.9611 0.183719 14.9906 0.184648C6.69794 0.184648 0 6.90135 0 15.194C0 23.4867 6.69794 30.2034 14.9906 30.2034C21.9887 30.2034 27.8236 25.4192 29.4934 18.9464H25.591C24.8181 21.1406 23.3834 23.0409 21.4847 24.3851C19.586 25.7293 17.317 26.4511 14.9906 26.4511C8.78049 26.4511 3.73358 21.4042 3.73358 15.194C3.73358 8.9839 8.78049 3.93699 14.9906 3.93699C18.1051 3.93699 20.8818 5.23155 22.9081 7.27658L16.8668 13.3179H30V0.184648L25.591 4.59365Z"
      fill="url(#paint0_linear_1_169)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_169"
        x1={15}
        y1={0.184647}
        x2={15}
        y2={30.2034}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#06286E" />
        <stop offset={1} stopColor="#164EC0" />
      </linearGradient>
    </defs>
  </svg>
);
export default SVGComponent;
