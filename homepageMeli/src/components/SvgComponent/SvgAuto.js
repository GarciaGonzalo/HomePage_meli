import React from 'react';

export default function SvgComponent(props) {
  return (
    <svg width={46} height={40} viewBox="0 0 46 40" fill="none" {...props}>
      <path
        d="M41 15L38.5 1H7L5 15m36 0l4 6v12H1V21l4-6m36 0H5m14 10h7M4 33v6h9v-6M33 33v6h9v-6"
        stroke="#3782F7"
        strokeWidth="2"
      />
      <circle cx={10} cy={25} r={3} stroke="#3782F7" strokeWidth="2"/>
      <path d="M38 25a3 3 0 11-6 0 3 3 0 016 0z" stroke="#3782F7" strokeWidth="2"/>
    </svg>
  );
}