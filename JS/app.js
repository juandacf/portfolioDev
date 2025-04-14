import './components/introduction.js'

const headerButtons = document.getElementsByClassName("header__element");
const mainContainer = document.querySelector('#middleContainer');


for (let headerButton of headerButtons) {
  headerButton.addEventListener("click", () => {

    for (let button of headerButtons){
        button.classList.remove('header__buttonSelected');
    }
    const buttonID = document.getElementById (headerButton.id)
    buttonID.classList.add('header__buttonSelected');

  });
}
