/*-----------------*/
/*     GO_TOP      */
/*-----------------*/
    let goTopButton = document.querySelector('.goTop');

    goTopButton.addEventListener('click', function(){
        window.scrollTo(0, 0);
    })

    /*Show/Hide depending on scroll position*/
    document.addEventListener('scroll', ()=>{
        if(window.scrollY >= 140)
            goTopButton.style.display = "flex";
        else
            goTopButton.style.display = "none";
    })

/*-----------------*/
/*    BG-HEADER    */
/*-----------------*/
let header = document.querySelector('.headerBar');
document.addEventListener('scroll', ()=>{
    if(window.scrollY >= 100)
        header.style.background = "#000000";
    else
        header.style.background = "transparent";
})