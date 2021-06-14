document.addEventListener("DOMContentLoaded", function(event) {

        //  --Variables--
    let buttonsCarousel = [
        {button: document.getElementById('radio1'), value: 1},
        {button: document.getElementById('radio2'), value: 2},
        {button: document.getElementById('radio3'), value: 3},
        {button: document.getElementById('radio4'), value: 0}
    ]

    let buttonLeft_Carousel = document.getElementById('carousel-buttons-before');
    let buttonRight_Carousel = document.getElementById('carousel-buttons-after');

    let counterCarousel = 1;

    let temporizador = setInterval(slideCarousel, 5000);
    

        //  --Funciones--
    const reiniciarTemporizador = () => {
        clearTimeout(temporizador);
        temporizador = setInterval(slideCarousel, 5000);
    }

    function slideCarousel() {
        for (const key in buttonsCarousel) {
            if(buttonsCarousel[key].button.checked == true){
                counterCarousel = buttonsCarousel[key].value;
                break;
            }
        }
        
        counterCarousel++;
        document.getElementById('radio' + counterCarousel).checked = true;
        if(counterCarousel > 3) counterCarousel = 1;
    };

    const botonesLaterales = () =>{
        buttonLeft_Carousel.addEventListener("click",() =>{
            reiniciarTemporizador();

            for (const key in buttonsCarousel) {
                if(buttonsCarousel[0].button.checked == true){
                    buttonsCarousel[3].button.checked = true;
                    break;
                }
                else if(buttonsCarousel[key].button.checked == true){
                    buttonsCarousel[parseInt(key) - 1].button.checked = true;
                    break;
                }
            }
        });
        
        buttonRight_Carousel.addEventListener("click",() =>{
            reiniciarTemporizador();

            for (const key in buttonsCarousel) {
                if(buttonsCarousel[3].button.checked == true){
                    buttonsCarousel[0].button.checked = true;
                    break;
                }
                else if(buttonsCarousel[key].button.checked == true){
                    buttonsCarousel[parseInt(key) + 1].button.checked = true;
                    break;
                }
            }
        });

    }


        //  --Ejecucion--
    buttonsCarousel[0].button.checked = true;
    botonesLaterales();
});

