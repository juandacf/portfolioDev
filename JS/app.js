import './components/introduction.js'
import './components/education.js'
import './components/experience.js'
import './components/projects.js'

const headerButtons = document.getElementsByClassName("header__element");
const mainContainer = document.querySelector('#middleContainer');
const folders = document.getElementsByClassName("folder");
const menuButton = document.querySelector(".header__button");
const menuItems = document.getElementsByClassName("header__element");
const mediaQuery = window.matchMedia('(min-width: 1280px)');



mainContainer.innerHTML = '<self-introduction> </self-introduction>'

//validación para que el header se mantenga incluso después de usarse en móvil.

menuButton.addEventListener("click", ()=>{
  const menuItem = menuItems[1];
  const menuItemStyle =  window.getComputedStyle(menuItem).display;
  
  if(menuItemStyle==="none" || menuItemStyle==="" ){
    for(let menu of menuItems){
      menu.style.display ="flex"
    }
  } else {
    for(let menu of menuItems){
      menu.style.display ="none"
    }
  }
} )

mediaQuery.addEventListener('change', handleResize);

function handleResize(e) {
  if (e.matches) {
    for (let menu of menuItems) {
      menu.style.display = ''; 
    }
  }
}


 //esconder los folders
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

const mainButtons = document.getElementsByClassName("header__link");
for (const button of mainButtons){
  button.addEventListener("click", ()=> {
    const optionChosen = button.dataset.section;
    for (let button of headerButtons){
      button.classList.remove('header__buttonSelected');
  }
  console.log(headerButtons[0]);
    switch(optionChosen){
      case "[1]":
        mainContainer.innerHTML = '<self-introduction> </self-introduction>';
        headerButtons[1].classList.add('header__buttonSelected');   
        break;
      case "[2]":
        mainContainer.innerHTML = '<self-education> </self-education>';
        headerButtons[2].classList.add('header__buttonSelected');
        break;
      case "[3]":
        mainContainer.innerHTML = '<self-experience> </self-experience>';
        headerButtons[3].classList.add('header__buttonSelected');
        break;
      case "[4]":
        mainContainer.innerHTML = '<self-projects> </self-projects>';
        headerButtons[4].classList.add('header__buttonSelected');
        break;
    
    }
    
  })
}



