import React, {useState, useEffect} from 'react';
import Article from './common/Article';
import CardsContainer from './CardsContainer';
import CardSubscriptions from './CardSubscriptions';
import '../styles/sass/subcriptions.scss';

export default function Subcriptions(){
    const [datos, setdatos] = useState(null);
    const cards = [];

    useEffect(() => {
        const getDatos = async(url) => {
            let res = await fetch(url),
            data = await res.json();

            setdatos(data);
        }
    
        getDatos('/data/cardSubscriptions.json');
    }, []);


    const getData = () => {
        if(datos !== null){
            datos.forEach((el, index) => {
                cards.push(
                    <CardSubscriptions
                    key={index}
                    imagen={el.imagen}
                    title={el.title}
                    partner={el.partner}
                    daysFree={el.daysFree}
                    offer={el.offer}
                    />                
                );
            });
        }
    }
    
    getData();

    return(
        <Article
            clase= "cards row-container-small"
            title= "Beneficios de Mercado Puntos"
            titleLink=""
            component={

                <CardsContainer
                    button= {false}
                    card= {cards}
                />
            }
        />
    );
}