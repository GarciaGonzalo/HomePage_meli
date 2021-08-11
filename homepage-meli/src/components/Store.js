import React from 'react';
import '../styles/sass/store.scss';
import sportline_store_background from '../Imagenes/store/sportline/store_background.jpg';
import sportline_store_logo from '../Imagenes/store/sportline/store_logo.webp';
import sportline_store_items_store_tirem01 from '../Imagenes/store/sportline/store_items/store_item01.webp';
import sportline_store_items_store_tirem02 from '../Imagenes/store/sportline/store_items/store_item02.webp';
import sportline_store_items_store_tirem03 from '../Imagenes/store/sportline/store_items/store_item03.webp';

export default function Store(){
    return(
    <article className="store row-container">

        <div className="row-header">
            <h2>Las mejores tiendas te esperan</h2>
            <a href="a">Ver tiendas</a>
        </div>
        
        <div className="row-body">

            <div className="slide-cards">

                <div className="store-card firstCard">
                    <div className="store-background"><img src={sportline_store_background} alt="sportline background" /></div>
                    <div className="store-logo"><img src={sportline_store_logo} alt="sportline logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Sportline</div>
                        <div className="store-items">
                            <a href="a"><img src={sportline_store_items_store_tirem01} alt="store-items sportline" /></a>
                            <a href="a"><img src={sportline_store_items_store_tirem02} alt="store-items sportline" /></a>
                            <a href="a"><img src={sportline_store_items_store_tirem03} alt="store-items sportline" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>
            
                <div className="store-card">
                    <div className="store-background"><img src="Imagenes/store/Whirlpool/store_background.jpg" alt="Whirlpool background" /></div>
                    <div className="store-logo"><img src="Imagenes/store/Whirlpool/store_logo.webp" alt="Whirlpool logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Whirlpool</div>
                        <div className="store-items">
                            <a href="a"><img src="Imagenes/store/Whirlpool/store_items/store_item01.webp" alt="store-items Whirlpool" /></a>
                            <a href="a"><img src="Imagenes/store/Whirlpool/store_items/store_item02.webp" alt="store-items Whirlpool" /></a>
                            <a href="a"><img src="Imagenes/store/Whirlpool/store_items/store_item03.webp" alt="store-items Whirlpool" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>
            
                <div className="store-card">
                    <div className="store-background"><img src="Imagenes/store/samsung/store_background.jpg" alt="samguns background" /></div>
                    <div className="store-logo"><img src="Imagenes/store/samsung/store_logo.webp" alt="samsung logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Samsung</div>
                        <div className="store-items">
                            <a href="a"><img src="Imagenes/store/samsung/store_items/store_item01.webp" alt="store_items samsung" /></a>
                            <a href="a"><img src="Imagenes/store/samsung/store_items/store_item02.webp" alt="store_items samsung" /></a>
                            <a href="a"><img src="Imagenes/store/samsung/store_items/store_item03.webp" alt="store_items samsung" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>

                <div className="store-card">
                    <div className="store-background"><img src="Imagenes/store/simmons/store_background.jpg" alt="simmons background" /></div>
                    <div className="store-logo"><img src="Imagenes/store/simmons/store_logo.webp" alt="simmons logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Simmons</div>
                        <div className="store-items">
                            <a href="a"><img src="Imagenes/store/simmons/store_items/store_item01.webp" alt="store-items simmons" /></a>
                            <a href="a"><img src="Imagenes/store/simmons/store_items/store_item02.webp" alt="store-items simmons" /></a>
                            <a href="a"><img src="Imagenes/store/simmons/store_items/store_item03.webp" alt="store-items simmons" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>


                <div className="store-card">
                    <div className="store-background"><img src="Imagenes/store/Whirlpool/store_background.jpg" alt="Whirlpool background" /></div>
                    <div className="store-logo"><img src="Imagenes/store/Whirlpool/store_logo.webp" alt="Whirlpool logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Whirlpool</div>
                        <div className="store-items">
                            <a href="a"><img src="Imagenes/store/Whirlpool/store_items/store_item01.webp" alt="store-items Whirlpool" /></a>
                            <a href="a"><img src="Imagenes/store/Whirlpool/store_items/store_item02.webp" alt="store-items Whirlpool" /></a>
                            <a href="a"><img src="Imagenes/store/Whirlpool/store_items/store_item03.webp" alt="store-items Whirlpool" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>
                
                <div className="store-card">
                    <div className="store-background"><img src="Imagenes/store/simmons/store_background.jpg" alt="simmons background" /></div>
                    <div className="store-logo"><img src="Imagenes/store/simmons/store_logo.webp" alt="simmons logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Simmons</div>
                        <div className="store-items">
                            <a href="a"><img src="Imagenes/store/simmons/store_items/store_item01.webp" alt="store-items simmons" /></a>
                            <a href="a"><img src="Imagenes/store/simmons/store_items/store_item02.webp" alt="store-items simmons" /></a>
                            <a href="a"><img src="Imagenes/store/simmons/store_items/store_item03.webp" alt="store-items simmons" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>

                <div className="store-card">
                    <div className="store-background"><img src="Imagenes/store/samsung/store_background.jpg" alt="samguns background" /></div>
                    <div className="store-logo"><img src="Imagenes/store/samsung/store_logo.webp" alt="samsung logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Samsung</div>
                        <div className="store-items">
                            <a href="a"><img src="Imagenes/store/samsung/store_items/store_item01.webp" alt="store_items samsung" /></a>
                            <a href="a"><img src="Imagenes/store/samsung/store_items/store_item02.webp" alt="store_items samsung" /></a>
                            <a href="a"><img src="Imagenes/store/samsung/store_items/store_item03.webp" alt="store_items samsung" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>

                <div className="store-card">
                    <div className="store-background"><img src="Imagenes/store/sportline/store_background.jpg" alt="sportline background" /></div>
                    <div className="store-logo"><img src="Imagenes/store/sportline/store_logo.webp" alt="sportline logo" /></div>
                    <div className="store-description">
                        <div className="store-title">Sportline</div>
                        <div className="store-items">
                            <a href="a"><img src="Imagenes/store/sportline/store_items/store_item01.webp" alt="store-items sportline" /></a>
                            <a href="a"><img src="Imagenes/store/sportline/store_items/store_item02.webp" alt="store-items sportline" /></a>
                            <a href="a"><img src="Imagenes/store/sportline/store_items/store_item03.webp" alt="store-items sportline" /></a>
                        </div>
                        <div className="store-link">Ver tienda</div>
                    </div>
                </div>


            </div>

            <div className="cards-button">
                
                <button className="button-left-slide">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 19L1 10L10 1" stroke="#3483FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                                                                               
                </button>
                
                <button className="button-right-slide">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L10 10L1 1" stroke="#3483FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                            
                </button>
            
            </div>

        </div>

    </article>
    )
}