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




/*-----------------*/
/*  PROJECT_HOVER  */
/*-----------------*/
let projects = document.querySelectorAll('.portfolio__portfolioSingle');
let projectHovers = document.querySelectorAll('.portfolioSingle__hover');


for(let i = 0; i < projects.length; i++){
    
    projects[i].addEventListener('mouseover', function(){
        clearAllHovers();
        projectHovers[i].style.display = "block";
    });

    projects[i].addEventListener('mouseout', function(){
        projectHovers[i].style.display = "none";
    });

}

function clearAllHovers(){
    for(let j = 0; j < projects.length; j++)
        projectHovers[j].style.display = "none";
}