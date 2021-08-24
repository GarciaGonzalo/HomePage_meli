import React from 'react';

export default function SvgVehiculos(props) {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={23} cy={23} r={22} stroke="#3782F7" strokeWidth="2" />
      <circle cx={23} cy={23} r={17} stroke="#3782F7" strokeWidth="2" />
      <circle cx={23} cy={24} r={4} stroke="#3782F7" strokeWidth="2" />
      <path
        d="M7 17c6.5-.833 21.2-2 32 0M6 23c4.167.5 12 6.5 13 16.5M40 23c-4.5 0-12 6-13 16.5"
        stroke="#3782F7"
        strokeWidth="2"
      />
    </svg>
  )
}