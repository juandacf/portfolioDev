import './components/introduction.js'
import './components/education.js'

const headerButtons = document.getElementsByClassName("header__element");
const mainContainer = document.querySelector('#middleContainer');
const folders = document.getElementsByClassName("folder");

// mainContainer.innerHTML= '<self-education> </self-education>';

for(let folder of folders){
  folder.addEventListener("click", ()=>{
    const folderContainer = folder.id.toString();
    switch (folderContainer){
      case "container_welcome":
        let items = document.getElementsByClassName("tab__welcome");
        for (let item of items){
          const display = window.getComputedStyle(item).display;
          if(display==='flex'){
            item.style.display = 'none';
          } else {
            item.style.display = 'flex';
          }
        }
      break;
      case "container_education":
        let itemss = document.getElementsByClassName("tab__education");
        for (let item of itemss){
          const display = window.getComputedStyle(item).display;
          if(display==='flex'){
            item.style.display = 'none';
          } else {
            item.style.display = 'flex';
          }
        }
      break;
      case "container_experience":
        let itemsss = document.getElementsByClassName("tab__experience");
        for (let item of itemsss){
          const display = window.getComputedStyle(item).display;
          if(display==='flex'){
            item.style.display = 'none';
          } else {
            item.style.display = 'flex';
          }
        }
      break;
      case "container_proyects":
        let itemssss = document.getElementsByClassName("tab__proyect");
        for (let item of itemssss){
          const display = window.getComputedStyle(item).display;
          if(display==='flex'){
            item.style.display = 'none';
          } else {
            item.style.display = 'flex';
          }
        }
      break;
    }

  })
}


for (let headerButton of headerButtons) {
  headerButton.addEventListener("click", () => {

    for (let button of headerButtons){
        button.classList.remove('header__buttonSelected');
    }
    const buttonID = document.getElementById (headerButton.id)
    buttonID.classList.add('header__buttonSelected');
  });
}
