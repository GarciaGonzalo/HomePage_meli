import React from 'react';
import Carrousel from '../Carrousel';
import Payment from '../Payment';
import Subcriptions from '../Subcriptions';
import Descubri from '../Descubri';
import Store from '../Store';
import TePuedeInteresar from '../TePuedeInteresar';
import CategoriasPopulares from '../CategoriasPopulares';
import Offers from '../Offers';


export default function Main(){
    return(
        <main>
            <Carrousel />
            <Payment />
            <Offers />

            <Subcriptions />
            <Descubri />
            <Store />
            <TePuedeInteresar />
            <CategoriasPopulares />
    </main>

    )
}