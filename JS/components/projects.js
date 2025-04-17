class projects extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
        <div class="projects__main__container">
            <div class="education__container1"> <p class="tab__name"> <img class="file__image" src="./media/icons/python.png" alt="">liga.py</p>
                <div class="education__left__container education__container__background projects__container">
                    
                    <h2 class="introduction__string education__container__background education__title">[ligaBetplay.py]</h2>
                    <p class="education__container__background education__container__textColor">
                        /*La Liga Betplay es un sistema de control y gestión inspirado en una liga de futbol colombiana. Este fue realizado en python y archivos JSON fueron usados para garantizar la permanencia de datos. El sistema permite la creación, eliminación, edición y consulta de equipos, jugadores y partidos.*/
                    </p>
                    <img class="projects__image" src="./media/images/betplay.png" alt="">
                </div>
            </div> 

            <div class="education__container1"> <p class="tab__name"> <img class="file__image" src="./media/icons/js.png" alt="">f1.js</p>
                <div class="education__left__container education__container__background projects__container">
                    
                    <h2 class="introduction__string education__container__background education__title">[formula1.js]</h2>
                    <p class="education__container__background education__container__textColor">
                        /*Este es un proyecto de simulación de Fórmula 1 desarrollado con Vite, que utiliza JSON Server como backend simulado y Spline para objetos 3D. El sistema permite la creación, eliminación, edición y consulta de circuitos, equipos, pilotos y vehículos, además de simular una carrera con tiempos y vueltas. */
                    </p>
                    <img class="projects__image" src="./media/images/formula1.png" alt="">
                </div>
            </div> 


            <div class="education__container1"> <p class="tab__name"> <img class="file__image" src="./media/icons/html-5.png" alt="">EM.html</p>
                <div class="education__left__container education__container__background projects__container">                    
                    <h2 class="introduction__string education__container__background education__title">[eventosMusicales.html]</h2>
                    <p class="education__container__background education__container__textColor">
                        /*Este proyecto consiste en el desarrollo de una aplicación de eventos de música, a través de html y css, que permite a los usuarios explorar, comprar y gestionar entradas para diversos conciertos y eventos musicales. */
                    </p>
                    <img class="projects__image" src="./media/images/coldplay.jpeg" alt="">
                </div>
            </div> 
            <div class="education__container1"> <p class="tab__name"> <img class="file__image" src="./media/icons/python.png" alt="">liga.py</p>
                <div class="education__left__container education__container__background projects__container">
                    
                    <h2 class="introduction__string education__container__background education__title">[ligaBetplay.py]</h2>
                    <p class="education__container__background education__container__textColor">
                        /*La Liga Betplay es un sistema de control y gestión inspirado en una liga de futbol colombiana. Este fue realizado en python y archivos JSON fueron usados para garantizar la permanencia de datos. */
                    </p>
                    <img class="projects__image" src="./media/images/betplay.png" alt="">
                </div>
            </div> 

            </div>
        </div>

        `
    }
}

customElements.define("self-projects", projects);