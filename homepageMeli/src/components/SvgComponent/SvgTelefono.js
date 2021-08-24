import React from 'react';

export default function SvgComponent(props) {
  return (
    <svg width={32} height={46} viewBox="0 0 32 46" fill="none" {...props}>
      <path
        d="M28 1H4a3 3 0 00-3 3v38a3 3 0 003 3h24a3 3 0 003-3V4a3 3 0 00-3-3zM1 11h30M1 33h30M13 6h6"
        stroke="#3782F7"
        strokeWidth="2"
      />
    </svg>
  )
}