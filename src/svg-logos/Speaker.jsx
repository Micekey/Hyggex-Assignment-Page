import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="w-7 h-7 cursor-pointer"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.8249 7.50143V4.58258C26.5067 5.87197 30.7433 10.9445 30.7433 17.0089C30.7433 23.0733 26.5067 28.1459 20.8249 29.4353V26.5164C24.9198 25.2979 27.9094 21.5005 27.9094 17.0089C27.9094 12.5173 24.9198 8.71997 20.8249 7.50143ZM5.2388 12.7582V21.2597H10.9065L17.991 28.3443V5.67361L10.9065 12.7582H5.2388ZM24.3672 17.0089C24.3669 15.8217 24.0351 14.6582 23.4093 13.6493C22.7834 12.6405 21.8884 11.8264 20.8249 11.2988V22.7049C22.9219 21.6706 24.3672 19.5169 24.3672 17.0089Z"
      fill="#F5F5F5"
    />
  </svg>
);
export default SVGComponent;
