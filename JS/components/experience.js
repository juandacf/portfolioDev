class experience extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
        <div class="education__Container">
            <div class="education__part" id="education__left">
                <div class="education__container">
                    <p class="tab__name">UIS.txt</p>
                    <div class="education__left__container education__container__background">
                        <h2 class="introduction__string education__container__background education__title">[Asistente de enseñanza de inglés]</h2>
                        <p class="education__container__background education__container__textColor">
                            /* Desempeñé el rol de asistente de enseñanza de inglés en el Instituto Técnico Dámaso Zapata en Bucaramanga, Santander durante doce (12) meses (2021-2022) durante mi práctica pedagógica. */
                            <br>
                        </p>
                    </div>
                </div>
    
                <div class="education__container">
                    <p class="tab__name">CS.txt</p>
                    <div class="education__left__container education__container__background">
                        <h2 class="introduction__string education__container__background education__title">[Representante de Servicio al Cliente]</h2>
                        <p class="education__container__background education__container__textColor">
                            /* Me desempeñé como representante de atención al cliente en Teleperformance de forma remota durante tres (3) meses (2022). <br>
                            También, me desempeñé como representante de atención al cliente en WebHelp en Bucaramanga desde Junio (2023) hasta Abril (2024). */
                            <br>
                        </p>
                    </div>
                </div>
            </div> 
    
            <div class="education__part" id="education__right">
                <div class="education__container">
                    <p class="tab__name">traduc.txt</p>
                    <div class="education__left__container education__container__background">
                        <h2 class="introduction__string education__container__background education__title">[Traductor independiente]</h2>
                        <p class="education__container__background education__container__textColor">
                            /* Desde el año 2021, he trabajado como traductor independiente. He traducido documentos académicos de distintas disciplinas como ingeniería, medicina y literatura. */
                            <br>
                        </p>
                    </div>
                </div>
    
                <div class="education__container">
                    <p class="tab__name">dev.txt</p>
                    <div class="education__left__container education__container__background">
                        <h2 class="introduction__string education__container__background education__title">[Desarrollador de Software]</h2>
                        <p class="education__container__background education__container__textColor">
                            /* Desde septiembre del año 2024, he estado aprendiendo múltiples tecnologías de desarrollo de software a través de la realización proyectos que plantean situaciones reales del mercado laboral utilizando tecnologías de backend y frontend */
                            <br>
                        </p>
                    </div>
                </div>
            </div> 
        </div>

        `
    }
}

customElements.define("self-experience", experience);