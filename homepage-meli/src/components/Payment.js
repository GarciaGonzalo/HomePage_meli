import React from 'react';
import '../styles/sass/payment.scss'
import credit_card from '../Imagenes/payment/credit_card.svg';
import debit_card from '../Imagenes/payment/debit_card.svg';
import mercado_credits from '../Imagenes/payment/mercado_credits.svg';
import cash from '../Imagenes/payment/cash.svg';
import view_more from '../Imagenes/payment/view_more.svg';

export default function Payment(){
    return(

        <article className="payment">
            <section className="container-payment">

                <div className="paymentSection">
                    <img src={credit_card} alt="Credit card" />
                    <div>
                        <p>Tarjera de crédito</p>
                        <a href="a">Ver promociones bancarias</a>
                    </div>
                </div>

                <div className="paymentSection">
                    <img src={debit_card} alt="Debit card" />
                    <div>
                        <p>Tarjera de débito</p>
                        <a href="a">Ver más</a>
                    </div>
                </div>

                <div className="paymentSection">
                    <img src={mercado_credits} alt="Mercado credits" />
                    <div>
                        <p>Cuotas sin tarjeta</p>
                        <a href="a">Conocé mercado crédito</a>
                    </div>
                </div>

                <div className="paymentSection">
                    <img src={cash} alt="cash" />
                    <div>
                        <p>Efectivo</p>
                        <a href="a">Ver Más</a>
                    </div>
                </div>

                <div className="viewMore">
                    <img src={view_more} alt="view more" />
                </div>
                
            </section>
        </article>

    )
}