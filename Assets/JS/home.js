const open = document.querySelector('.hamburger');
const activateToggle = document.querySelector('.navigation-menu');

open.addEventListener('click', () => {
    const checkVisibility = activateToggle.getAttribute("data-visible");
    
    console.log(checkVisibility);
    
    if(checkVisibility === "false"){
        activateToggle.setAttribute("data-visible", true);
        open.setAttribute("aria-expanded", true);
    }
    else if(checkVisibility === "true"){
        activateToggle.setAttribute("data-visible", false);
        open.setAttribute("aria-expanded", false);
    }
});

