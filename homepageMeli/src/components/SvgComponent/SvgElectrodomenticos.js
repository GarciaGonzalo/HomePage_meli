import React from 'react';

export default function SvgElectrodomesticos(props) {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 25v3h12v-3M1 1h44v44H1V1zm7 16h30v21H8V17z"
        stroke="#3782F7"
        strokeWidth="2"
      />
      <circle cx={10} cy={9} r={2} stroke="#3782F7" strokeWidth="2" />
      <circle cx={23} cy={9} r={2} stroke="#3782F7" strokeWidth="2" />
      <circle cx={36} cy={9} r={2} stroke="#3782F7" strokeWidth="2" />
    </svg>
  )
}