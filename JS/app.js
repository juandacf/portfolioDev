const headerButtons = document.getElementsByClassName("header__element");


for (let headerButton of headerButtons) {
  headerButton.addEventListener("click", () => {

    for (button of headerButtons){
        button.classList.remove('header__buttonSelected');
    }
    const buttonID = document.getElementById (headerButton.id)
    buttonID.classList.add('header__buttonSelected');
    
  });
}
