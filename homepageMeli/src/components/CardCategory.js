import React from 'react';
import '../styles/sass/cardCategory.scss'

export default function CardCategory(props){
    return(
        <div className="cardCategory">
        <a href="a">
            {props.svg1}
            <p>{props.title1}</p>
        </a>

        <a href="a">
            {props.svg2}
            <p>{props.title2}</p>
        </a>
    </div>
    );
}