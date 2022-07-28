// fix AOS library scrollX on navlink clicks
window.scroll(0, window.scrollY)
let menu_items = document.querySelectorAll('#menu_items li a');

for(let i=0; i<menu_items.length; i++) {
    menu_items[i].addEventListener("click", function() {
       
        setTimeout(() => {
          
           window.scroll(0, window.scrollY)
        }, 2000);
    })
}

let navSwitchBtn = document.querySelector('.navSwitchBtn');
let main_nav = document.querySelector('#main-nav');
navSwitchBtn.addEventListener("click", function() {
        let navMenus = document.querySelector("#menu_items")
       
        let icon = document.querySelector('.navSwitchBtn i');

        if(icon.getAttribute('class') === 'fa fa-close') {
            icon.setAttribute('class', 'fa fa-bars')
            navMenus.style.display = "none";
            main_nav.style.background = 'transparent !important'
            

        }
        else {
            icon.setAttribute('class', 'fa fa-close')
            navMenus.style.display = "flex"
        }
        
})