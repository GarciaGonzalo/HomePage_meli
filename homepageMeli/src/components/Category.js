import React, { useState, useEffect } from 'react';
import Article from './common/Article';
import CardsContainer from './CardsContainer';
import CardCategory from './CardCategory';
import SvgAuto from './SvgComponent/SvgAuto';
import SvgTelefono from './SvgComponent/SvgTelefono';
import SvgComputacion from './SvgComponent/SvgComputacion';
import SvgElectronica from './SvgComponent/SvgElectronica';
import SvgElectrodomesticos from './SvgComponent/SvgElectrodomenticos';
import SvgRopa from './SvgComponent/SvgRopa';
import SvgDeportes from './SvgComponent/SvgDeportes';
import SvgHogar from './SvgComponent/SvgHogar';
import SvgInmuebles from './SvgComponent/SvgInmuebles';
import SvgVehiculos from './SvgComponent/SvgVehiculos';
import SvgBelleza from './SvgComponent/SvgBelleza';
import SvgConsolas from './SvgComponent/SvgConsolas';
import SvgJuegos from './SvgComponent/SvgJuegos';
import SvgAlimentos from './SvgComponent/SvgAlimentos';

export default function Category(){
    return(
        <Article
            clase= "cards row-container"
            title= "Categorías populares"
            titleLink= ""
            component={
            
            <CardsContainer
                button= {true}
                card= {[
                    <CardCategory
                        svg1={<SvgAuto />}
                        svg2={<SvgTelefono />}
                        title1="Autos, Motos y otros"
                        title2="Celulares y Teléfonos" 
                        />,
                    <CardCategory
                        svg1={<SvgComputacion />}
                        svg2={<SvgElectronica />}
                        title1="Computación"
                        title2="Electrónica, Audio y Video" 
                        />,
                    <CardCategory
                        svg1={<SvgElectrodomesticos />}
                        svg2={<SvgRopa />}
                        title1="Electrodomésticos y Aires Ac."
                        title2="Ropa y Accesorios" 
                        />,
                    <CardCategory
                        svg1={<SvgDeportes />}
                        svg2={<SvgHogar />}
                        title1="Deportes y Fitness"
                        title2="Hogar, Muebles y Jardín" 
                        />,
                    <CardCategory
                        svg1={<SvgInmuebles />}
                        svg2={<SvgVehiculos />}
                        title1="Inmuebles"
                        title2="Accesorios para Vehículos" 
                        />,
                    <CardCategory
                        svg1={<SvgBelleza />}
                        svg2={<SvgConsolas />}
                        title1="Belleza y Cuidado Personal"
                        title2="Consolas y Videojuegos" 
                        />,
                    <CardCategory
                        svg1={<SvgJuegos />}
                        svg2={<SvgAlimentos />}
                        title1="Juegos y Juguetes"
                        title2="Alimentos y Bebidas" 
                        />
                    ]}
            />}
        />
    );
}