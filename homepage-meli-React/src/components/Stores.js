import React, {useState, useEffect} from 'react';
import Card from './CardStores';
import Article from './common/Article';
import CardsContainer from './CardsContainer';


export default function Stores(){
    const [datos, setdatos] = useState(null);
    const cards = [];

    useEffect(() => {
        const getDatos = async(url) => {
            let res = await fetch(url),
            data = await res.json();

            setdatos(data);
        }
    
        getDatos('/data/cardStores.json');
    }, []);


    const getData = () => {
        if(datos !== null){
            datos.forEach((el, index) => {
                cards.push(
                <Card
                key= {index}
                title={el.title}
                imageBackground={el.imageBackground}
                imageLogo={el.imageLogo}
                storeItem1={el.storeItem1}
                storeItem2={el.storeItem2}
                storeItem3={el.storeItem3}
                />
                );
            });
        }
    }
    
    getData();


    return(
        <Article
            clase= "cards row-container"
            title= "Las mejores marcas te esperan"
            titleLink= "Ver tiendas"
            component={
            
            <CardsContainer
                button= {true}
                card= {cards}
            />}
        />
    )
}