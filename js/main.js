// ------------------------ CHANGE LANGUAGES START ---------------------------------------------

const elChooseLanguages = document.querySelector(".header__inner__end__languages");
elChooseLanguages.addEventListener("click", (evt)=>{
    evt.preventDefault();
    
    document.querySelector(".header__inner__end__languages__icon").classList.toggle("show-icon");
    document.querySelector(".header__show-list").classList.toggle('header__visually__list');
})
// ------------------------ CHANGE LANGUAGES END ------------------------------------------------


// ------------------------- FOR HEADER SCROLL START -----------------------------------------------------

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.querySelector(".header").style.backgroundColor = "white";
     document.querySelector(".header").style.borderBottomStyle = "#fafafa";
     document.querySelector(".header__inner__end__languages").style.backgroundColor = "#EEF0F2";
     document.querySelector(".header__inner__end__btn").style.backgroundColor = "#0D9676";
     document.querySelector(".header__inner__end__btn").style.color = "#fff";
    document.querySelector(".header__inner__link__logo").src = "../images/icons/green-logo.svg";
  }else {
    document.querySelector(".header").style.backgroundColor = "";
    document.querySelector(".header").style.borderBottomStyle = "";
    document.querySelector(".header__inner__end__languages").style.backgroundColor = "";
    document.querySelector(".header__inner__end__btn").style.backgroundColor = "";
    document.querySelector(".header__inner__end__btn").style.color = "";
    document.querySelector(".header__inner__link__logo").src = "../images/icons/white-logo.svg";


  }
}
// -------------------------- FOR HEADER SCROLL END ---------------------------------------------------