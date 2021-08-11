import React from 'react';
import './article.scss';


export default function Article(props){
    return(
    <article className="cards row-container">

        <div className="row-header">
            <h2>{props.title}</h2>
            <a href="a">{props.titleLink}</a>
        </div>

        <section className="row-body">
            {props.component}
        </section>

    </article>
    )
}