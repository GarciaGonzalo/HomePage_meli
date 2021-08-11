import React, {useState, useEffect} from 'react';
import Card from './Card';
import Article from './common/Article';
import CardsContainer from './CardsContainer';

export default function Offers(){
    const [datos, setdatos] = useState(null);
    const cards = [];

    useEffect(() => {
        const getDatos = async(url) => {
            let res = await fetch(url),
            data = await res.json();

            setdatos(data);
        }
    
        getDatos('/data/cardData.json');
    }, []);


    const getData = () => {
        if(datos !== null){
            datos.forEach((el, index) => {
                cards.push(
                <Card
                key= {index}
                imagen={el.imagen}
                title={el.title}
                lastPriceValue={el.lastPrice.value}
                lastPriceCent={el.lastPrice.cent}
                actualPriceValue={el.actualPrice.value}
                actualPriceDiscount={el.actualPrice.discount}
                shippingFree={el.shippingFree}
                description={el.description}
                />
                );
            });
        }
    }
    
    getData();


    return(
        <Article 
            title="Ofertas"
            titleLink="Ver todas"
            component={
            
            <CardsContainer
                button= {true}
                card= {cards}
            />}
        />
    )
}