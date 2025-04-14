class introduction extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
                    <div id="main__introduction">

                <p class="greeting">Hola, a todos. Mi nombre es</p>
                <h1 class="myName">Juan Caballero</h1>
                <h3 class="profession">>Desarrollador Web</h3>
                <p class="introduction__comment">//Mi número</p>
                <p class="introducion__codeLine"><span class="introduction__const">Const</span> <span class= "introduction__string">telephoneNumber = </span> '+57 3008307198'; </p>
                <p class="introduction__comment">//Mi email</p>
                <p class="introducion__codeLine"> <span class="introduction__const">Const</span> <span class= "introduction__string" >email = </span> 'juandacf@gmail.com'; </p>
                <p class="introduction__comment">//Mi Github</p>
                <p class="introducion__codeLine"><span class="introduction__const">Const</span> <span class= "introduction__string">githubLink = </span>
                    'https://github.com/juandacf'; </p>
                <p class="introduction__comment">//Mi Linkedin</p>
                <p class="introducion__codeLine"><span class="introduction__const">Const</span> <span class= "introduction__string">linkedinLink = </span>
                    'https://www.linkedin.com/in/juan-david-caballero-fuentes-a89b6125b/'; </p>


            </div>
        
        `
    }
}

customElements.define("self-introduction", introduction);