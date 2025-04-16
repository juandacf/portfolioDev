class education extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
  

        `
    }
}

customElements.define("self-education", education);