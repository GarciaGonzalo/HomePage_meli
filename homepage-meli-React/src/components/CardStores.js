import React from 'react';
import '../styles/sass/store.scss';

export default function CardStores(props){
    return(
        <div className="store-card">
        <div className="store-background"><img src={props.imageBackground} alt="store-background" /></div>
        <div className="store-logo"><img src={props.imageLogo} alt="store-logo" /></div>
        <div className="store-description">
            <div className="store-title">{props.title}</div>
            <div className="store-items">
                <a href="a"><img src={props.storeItem1} alt="store-items" /></a>
                <a href="a"><img src={props.storeItem2} alt="store-items" /></a>
                <a href="a"><img src={props.storeItem3} alt="store-items" /></a>
            </div>
            <div className="store-link">Ver tienda</div>
        </div>
    </div>
    );
}