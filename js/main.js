const elChooseLanguages = document.querySelector(".header__inner__end__languages");
elChooseLanguages.addEventListener("click", (evt)=>{
    evt.preventDefault();
    
    document.querySelector(".header__inner__end__languages__icon").classList.toggle("show-icon");
    document.querySelector(".header__show-list").classList.toggle('header__visually__list');
})