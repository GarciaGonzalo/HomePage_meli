import React, {useState, useEffect} from 'react';
import Article from './common/Article';
import CardsContainer from './CardsContainer';
import CardAdvertising from './CardAdvertising';

export default function Advertising(props){
    const [datos, setdatos] = useState(null);
    const cards = [];

    useEffect(() => {
        const getDatos = async(url) => {
            let res = await fetch(url),
            data = await res.json();

            setdatos(data);
        }
    
        getDatos(props.url);
    }, []);


    const getData = () => {
        if(datos !== null){
            datos.forEach((el, index) => {
                cards.push(
                    <CardAdvertising
                        title={el.title}
                        description1={el.description1}
                        description2={el.description2}
                        textButton={el.textButton}
                        imagen={el.imagen}
                        imagenAlt={el.title}
                    />
                );
            });
        }
    }
    
    getData();


    return(
        <Article
            clase= "cards row-container-small"
            title= {props.title}
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