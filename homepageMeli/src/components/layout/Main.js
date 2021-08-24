import React from 'react';
import Carrousel from '../Carrousel';
import Payment from '../Payment';
import Subcriptions from '../Subcriptions';
import Offers from '../Offers';
import Advertising from '../Advertising';
import Stores from '../Stores';
import Category from '../Category';


export default function Main(){
    return(
        <main>
            <Carrousel />
            <Payment />
            <Offers />
            <Subcriptions />
            <Advertising 
                url='/data/cardAdvertising1.json'
                title="Descubrí"/>
            <Stores />
            <Advertising 
                url='/data/cardAdvertising2.json'
                title="Te puede interesar"/>
            <Category />
    </main>

    )
}