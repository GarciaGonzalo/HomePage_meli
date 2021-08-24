import React from 'react';

export default function SvgJuegos(props) {
  return (
    <svg
      width={50}
      height={48}
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={24.491} cy={26.355} r={20} stroke="#3782F7" strokeWidth="2" />
      <path
        d="M7.491 14.855c-5.5-2.5-6.026-7.036-4-10 2.026-2.963 9-5 11 3.5M41.937 14.855c5.5-2.5 6.027-7.036 4-10-2.026-2.963-9-5-11 3.5"
        stroke="#3782F7"
        strokeWidth="2"
      />
      <circle cx={17.491} cy={22.355} r={2} fill="#3782F7" strokeWidth="2" />
      <circle cx={31.491} cy={22.355} r={2} fill="#3782F7" strokeWidth="2" />
      <path d="M19.491 37.355h10" stroke="#3782F7" strokeWidth="2" />
      <path d="M28.5 28.855l-4.009 4.5-3.991-4.5h8z" fill="#3782F7" strokeWidth="2" />
      <path
        d="M24.491 37.355v-4m0 0l4.009-4.5h-8l3.991 4.5z"
        stroke="#3782F7"
        strokeWidth="2"
      />
    </svg>
  )
}