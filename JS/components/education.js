class education extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
          <div class="education__Container"> 
            <div class="education__part" id="education__left">                
                    <div class="education__container"> <p class="tab__name">UIS.txt</p>
                    <div class="education__left__container education__container__background">                        
                        <h2 class="introduction__string education__container__background education__title">[Licenciatura en Lenguas
                            Extranjeras con Énfasis en Inglés]</h2>
                        <h3 class="education__container__background education__container__textColor">//Universidad
                            Industrial de Santander</h3>
                        <p class="education__container__background education__container__textColor">//Año de Graduación:
                            2022</p>     
                </div>
            </div>

            <div class="education__container"> <p class="tab__name">campuslands.txt</p>
                <div class="education__left__container education__container__background">
                    <h2 class="introduction__string education__container__background education__title">[Entrenamiento Integral en
                        Programación Backend]</h2>
                    <h3 class="education__container__background education__container__textColor">//Campuslands</h3>
                    <p class="education__container__background education__container__textColor">//Miembro desde
                        Septiembre (2024)</p>
                
                </div>
                </div>
                <div class="education__container"> <p class="tab__name">UIS.txt</p>
                <div class="education__left__container education__container__background ">
                    <h2 class="introduction__string education__container__background education__title">[Diplomado en Habilidades
                        Profesionales]</h2>
                    <h3 class="education__container__background education__container__textColor">//Universidad
                        Industrial de Santander</h3>
                    <p class="education__container__background education__container__textColor">//2021</p>
                </div>
            </div> 
        </div>
            <div class="education__part" id="education__right">
                <div class="education__container"> <p class="tab__name">stack.txt</p>
                <div class="education__left__container education__container__background">
                    <h2 class="introduction__string education__container__background education__title">[stack]</h2>
                    <div class="stack__container education__container__background">
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/python.png"
                                alt=""> python</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/js.png"
                                alt="">javascript</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/html-5.png"
                                alt="">html</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/css.png"
                                alt="">css</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/mysql.png"
                                alt="">mysql</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/postgre.png"
                                alt="">postgresql</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/linux.png"
                                alt="">linux</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/social.png"
                                alt="">git</div>
                    </div>
                </div>
            </div>
            <div class="education__container"> <p class="tab__name">lang.txt</p>
                <div class="education__left__container education__container__background education__left__content">
                    <h2 class="introduction__string education__container__background education__title">[lenguas]</h2>
                    <div class="stack__container education__container__background">
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon"
                                src="./media/icons/united-kingdom.png" alt=""> inglés</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/spain.png"
                                alt=""> español</div>
                        <div class="education__container__background stack__item"><img
                                class="education__container__background education__icon" src="./media/icons/france.png"
                                alt=""> francés</div>
                    </div>
                </div>
            </div>
            </div>

        </div>

    </div> 

        `
    }
}

customElements.define("self-education", education);