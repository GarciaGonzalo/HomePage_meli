import React from 'react';
import '../styles/sass/subcriptions.scss';
import subscription1 from '../Imagenes/subscription/subscription1.jpg';
import subscription2 from '../Imagenes/subscription/subscription2.png';
import subscription3 from '../Imagenes/subscription/subscription3.jpg';
import partner1 from '../Imagenes/subscription/partner1.png';
import partner2 from '../Imagenes/subscription/partner2.png';
import partner3 from '../Imagenes/subscription/partner3.png';
import CardSubscriptions from './CardSubscriptions';
import Article from './common/Article';

export default function Subcriptions(){
    
    // return(
    // <article className="subscriptions row-container">

    //     <div className="row-header">
    //         <h2>Beneficios de Mercado Puntos</h2>
    //     </div>

    //     <section className="row-body subscription">
        
    //         <div className="card-subscriptions">

    //             <img src={subscription1} alt="paramount+" />

    //             <div className="description-subscription">

    //                 <div className="description-subscription-image">
    //                     <img src={partner1} alt="partner" />
    //                 </div>

    //                 <div className="description-subscription-text">
    //                     <span className="description-subscription-daysFree">7 DÍAS GRATIS</span>
    //                     <span className="description-subscription-title">Hasta 40% OFF</span>
    //                     <span className="description-subscription-mark">Paramount+</span>
    //                 </div>
                    
    //             </div>

    //         </div>
            
    //         <div className="card-subscriptions">

    //             <img src={subscription2} alt="disney plus" />

    //             <div className="description-subscription">

    //                 <div className="description-subscription-image">
    //                     <img src={partner2} alt="partner" />
    //                 </div>

    //                 <div className="description-subscription-text">
    //                     <span className="description-subscription-daysFree"></span>
    //                     <span className="description-subscription-title">Hasta 4 meses de regalo</span>
    //                     <span className="description-subscription-mark">Disney+</span>
    //                 </div>
                    
    //             </div>

    //         </div>
            
    //         <div className="card-subscriptions">

    //             <img src={subscription3} alt="HBO GO" />
                
    //             <div className="description-subscription">

    //                 <div className="description-subscription-image">
    //                     <img src={partner3} alt="partner" />
    //                 </div>

    //                 <div className="description-subscription-text">
    //                     <span className="description-subscription-daysFree"></span>
    //                     <span className="description-subscription-title">Hasta 45% OFF</span>
    //                     <span className="description-subscription-mark">HBO GO</span>
    //                 </div>
                    
    //             </div>

    //         </div>
        
    //     </section>

    // </article>
    // )

    return(
        <Article 
            title="Ofertas"
            titleLink="Ver todas"
            component={ <CardSubscriptions /> }
        />
    )
}