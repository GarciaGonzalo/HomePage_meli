import React from 'react';
import '../../styles/sass/footer.scss'

export default function Footer(){
    return(
        <footer>

        <div class="footer-card-container">

            <div class="footer-card">
                <svg width="88" height="59" viewBox="0 0 88 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 31H21" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 44H16" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 44H33" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 49H28" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27 31H40" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M46 31H59" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65 31H78" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="1" y="1" width="86" height="57" rx="4" stroke="#484848" stroke-width="2"/>
                    <rect x="64" y="41" width="16" height="11" rx="2" fill="#3782F7"/>
                    <circle cx="23" cy="14" r="6" stroke="#484848" stroke-width="2"/>
                    <circle cx="14" cy="14" r="7" fill="#3782F7"/>
                </svg>

                <div class="footer-card-description">
                    <h3>Elegí cómo pagar</h3>
                    <p>Con Mercado Pago, pagá con tarjeta, débito o efectivo. También podés pagar en hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
                    <a href="#">Cómo pagar con Mercado Pago</a>
                </div>
            </div>
            
            <div class="footer-card">
                <div class="border"></div>
                
                <svg width="74" height="65" viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 50L16.5 54L14 50L16.5 51L19 50Z" fill="#484848"/>
                    <rect x="4" y="14" width="66" height="50" rx="2" stroke="#484848" stroke-width="2"/>
                    <rect x="1" y="1" width="72" height="12" rx="2" stroke="#484848" stroke-width="2"/>
                    <rect x="10.5" y="43.5" width="26" height="15" stroke="#484848"/>
                    <path d="M22 47.5H32" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 51H29" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 54.5H31" stroke="#484848" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="16.5" cy="49.5" r="1.85" stroke="#484848" stroke-width="1.3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44 0H31V28C31 27.1716 32.1716 26 33 26C33.8284 26 35 27.1716 35 28H35.5C35.5 27.1716 36.6716 26 37.5 26C38.3284 26 39.5 27.1716 39.5 28H40C40 27.1716 41.1716 26 42 26C42.8284 26 44 27.1716 44 28V0Z" fill="#4C8CF1"/>
                </svg>

                <div class="footer-card-description">
                    <h3>Envío gratis desde $ 3.500</h3>
                    <p>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</p>
                    <a href="#">Conocé más sobre este beneficio</a>
                </div>
            </div>

            <div class="footer-card">
                <div class="border"></div>

                <svg width="68" height="73" viewBox="0 0 68 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.027 11C69.527 47 46.3603 64.6667 34.027 71.5C21.3603 65.6667 -2.87301 45.4 1.52699 11C21.527 12.6 31.527 5 34.027 1C39.227 10.6 57.527 11.6667 66.027 11Z" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.0269 34.5L30.5269 41.5L45.5269 26.5" stroke="#4C8CF1" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    
                    

                <div class="footer-card-description">
                    <h3>Seguridad, de principio a fin</h3>
                    <p>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                    <a href="#">Cómo te protegemos</a>
                </div>
            </div>

        </div>

        <div class="footer-regret">
            <div class="footer-regret-box">
                <p>¿Te arrepentiste de comprar?</p>
                <a href="#">Cómo cancelar una compra</a>
            </div>

            <div class="footer-regret-box">
                <p>Conocé las normas que aplican cuando comprás</p>
                <a href="#">Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor</a>
            </div>

        </div>
        
        <div class="financial-info">

            <a href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp">
                <img src="Imagenes/footer/bcra.svg" alt="Banco central de la republica Argentina" />
            </a>

            <a href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx">
                <img src="Imagenes/footer/afip.png" alt="Afip" />
            </a>

        </div>

        <div class="footer-navbar">
            
            <div class="label">
                <label for="">
                    Más información
                </label>
            </div>

            <div class="footer-navbar-body">

                <div class="footer-navbar-list">
                    <h5>Acerca de</h5>
    
                    <ul>
                        <li><a href="#">Mercado Libre</a></li>
                        <li><a href="#">Investor relations</a></li>
                        <li><a href="#">Tendencias</a></li>
                        <li><a href="#">Sustentabilidad</a></li>
                    </ul>
                </div>
    
                <div class="footer-navbar-list">
                    <h5>Otros sitios</h5>
    
                    <ul>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Mercado Pago</a></li>
                        <li><a href="#">Mercado Shops</a></li>
                        <li><a href="#">Mercado Envíos</a></li>
                        <li><a href="#">Mercado Ads</a></li>
                        <li><a href="#">Mercado Libre Ideas</a></li>
                    </ul>
                </div>
    
                <div class="footer-navbar-list">
                    <h5>Ayuda</h5>
    
                    <ul>
                        <li><a href="#">Comprar</a></li>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Resolución de problemas</a></li>
                        <li><a href="#">Centro de seguridad</a></li>
                    </ul>
                </div>
    
                <div class="footer-navbar-list">
                    <h5>Redes sociales</h5>
    
                    <ul>
                        <li><a href="https://twitter.com/ML_Argentina">Twitter</a></li>
                        <li><a href="https://www.facebook.com/MercadoLibre">Facebook</a></li>
                        <li><a href="https://www.instagram.com/mercadolibre.arg/">Instagram</a></li>
                        <li><a href="https://www.youtube.com/user/mercadolibre">YouTube</a></li>
                    </ul>
                </div>
    
                <div class="footer-navbar-list">
                    <h5>Mi cuenta</h5>
    
                    <ul>
                        <li><a href="#">Ingresá</a></li>
                        <li><a href="#">Vender</a></li>
                    </ul>
                </div>
    
                <div class="footer-navbar-list">
                    <h5>Mercado Puntos</h5>
    
                    <ul>
                        <li><a href="#">HBO GO</a></li>
                        <li><a href="#">Disney+</a></li>
                        <li><a href="#">Paramount+</a></li>
                    </ul>
                </div>
    
            </div>

        </div>

        <div class="footer-nav">
            <ul class="footer-nav-link">
                <li>Trabajá con nosotros</li>
                <li>Términosy condiciones</li>
                <li>Cómo cuidamos tu privacidad</li>
                <li>Información al usuario financiero</li>
                <li>Ayuda</li>
                <li>Defensa del Consumidor</li>
            </ul>

            <p class="copyright">Copyright © 1999-2021 MercadoLibre S.R.L.</p>
            <p>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
        </div>

    </footer>
    )
}