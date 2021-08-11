import React from 'react';
import '../styles/sass/header.scss';
import logo_large from '../Imagenes/navbar/logo_large.png';
import point from '../Imagenes/navbar/point.jpg';
import user from '../Imagenes/navbar/user.webp'

export default function Header(){
    return(
    <header>
        <div className="nav-header">

            <div className="nav-logo">
                <img src={logo_large} alt="Mercado libre. Donde comprar y vender todo" />

                <div className="nav-maps">
                    
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="3" stroke="#484848"/>
                        <path d="M16.5 8.5C16.5 9.55749 16.0721 10.8733 15.3652 12.2883C14.6639 13.6921 13.7134 15.1443 12.7252 16.4602C11.7375 17.7754 10.721 18.9428 9.89473 19.7771C9.48064 20.1952 9.12179 20.5221 8.84348 20.7408C8.70353 20.8507 8.59384 20.9254 8.51458 20.9701C8.50943 20.973 8.50458 20.9757 8.5 20.9782C8.49543 20.9757 8.49057 20.973 8.48542 20.9701C8.40616 20.9254 8.29647 20.8507 8.15652 20.7408C7.87821 20.5221 7.51936 20.1952 7.10527 19.7771C6.27903 18.9428 5.2625 17.7754 4.27481 16.4602C3.28663 15.1443 2.33608 13.6921 1.63479 12.2883C0.92793 10.8733 0.5 9.55749 0.5 8.5C0.5 4.08172 4.08172 0.5 8.5 0.5C12.9183 0.5 16.5 4.08172 16.5 8.5Z" stroke="#484848"/>
                    </svg>
                         
                    
                    <div>
                        <p>Enviar a Gonzalo</p>
                        <p className="street">Calle falsa 123</p>
                    </div>
                </div>
            </div>


            <div className="nav-menu">
                <div className="nav-menu-input">
                    
                    <input type="text" placeholder="Buscar productos, marcas y más..." />
                    
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" stroke="#484848"/>
                            <path d="M10 10L15 15" stroke="#484848" strokeLinecap="square" strokeLinejoin="round"/>
                        </svg>        
                    </button>
                
                </div>

                <div className="nav-menu-list">
                    <ul>
                        <li><a href="a" className="categorias">Categorias</a></li>
                        <li><a href="a">Ofertas</a></li>
                        <li><a href="a">Historial</a></li>
                        <li><a href="a">Supermercado</a></li>
                        <li><a href="a">Moda</a></li>
                        <li><a href="a">Vender</a></li>
                        <li><a href="a">Ayuda</a></li>
                    </ul>
                </div>
            </div>


            <div className="nav-menu-user">
                <img src={point} alt="Mercado Pago point." />


                <div className="nav-menu-user-list">

                    <div className="usuario">
                        <img src={user} alt="Perfil del usuario" className="user" />
                        <a href="a" className="userName">Gonzalo</a>
                    </div>
                    <a href="a" className="misCompras">Mis compras</a>
                    <a href="a" className="favoritos">Favoritos</a>
                    
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 13.5H1.20711C0.761654 13.5 0.538309 12.9617 0.853292 12.6467C1.29535 12.2046 1.82917 11.6708 2.25 11.25C3.12868 10.3713 4.5 9 4.5 9V5.5C4.5 3.01472 6.01472 1 8.5 1C10.9853 1 12.5 3.01472 12.5 5.5L12.7059 9L14.9559 11.25L16.3526 12.6467C16.6676 12.9617 16.4443 13.5 15.9988 13.5H10.7059" stroke="#484848"/>
                        <path d="M11 13C11 14.3807 10.5 16.5 8.5 16.5C6.5 16.5 6 14.3807 6 13" stroke="#484848"/>
                    </svg>
                        
                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.5" cy="14" r="2" stroke="#484848"/>
                        <circle cx="17.5" cy="14" r="2" stroke="#484848"/>
                        <path d="M5.5 3H21.5L18.5 10H8L5.5 3ZM5.5 3L4.5 1H1" stroke="#484848" strokeLinecap="square" strokeLinejoin="round"/>
                    </svg>
                        
                    
                </div>
            </div>

        </div>
   
    </header>
    )
}