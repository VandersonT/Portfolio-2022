/*-----------------*/
/* GLOBAL_HELPERS  */
/*-----------------*/
    const select = (e)=> document.querySelector(e);
    const selectAll = (e)=> document.querySelectorAll(e);
    let projects = [
        {id: 0, name: 'EnglishVtp', desc: 'gosto', techs: ['Js', 'html'], img: './assets/images/project.png', link: 'https://www.youtube.com/watch?v=y_eKewEgL-Y&ab_channel=SomDasTeclas'},
        {id: 1, name: 'Teste', desc: 'gosto2', techs: ['Js', 'html'], img: './assets/images/project.png', link: 'https://www.youtube.com/watch?v=y_eKewEgL-Y&ab_channel=SomDasTeclas'},
        {id: 2, name: 'BloghVtp', desc: 'gosto3', techs: ['Js', 'html'], img: './assets/images/project.png', link: 'https://www.youtube.com/watch?v=y_eKewEgL-Y&ab_channel=SomDasTeclas'},
        {id: 3, name: 'ControladorT', desc: 'gosto4', techs: ['Js', 'html'], img: './assets/images/project.png', link: 'https://www.youtube.com/watch?v=y_eKewEgL-Y&ab_channel=SomDasTeclas'}
    ]
    let projectOpened = select('.projectOpened');

/*-----------------*/
/* RENDER_PROJECTS */
/*-----------------*/
    projects.map((project, index)=>{
        let portfolioSingle = select('.models .portfolio__portfolioSingle').cloneNode(true);

        //set infos
        portfolioSingle.querySelector('.portfolioSingle__name').innerHTML = project['name'];
        portfolioSingle.querySelector('.portfolioSingle__img').src = project['img'];

        //Set events
        portfolioSingle.addEventListener('mouseover', function(){
            portfolioSingle.querySelector('.portfolioSingle__hover').style.display = "block";
        })

        portfolioSingle.addEventListener('mouseout', function(){
            portfolioSingle.querySelector('.portfolioSingle__hover').style.display = "none";
        })

        portfolioSingle.addEventListener('click', function(){
            openProject();
            projectOpened.querySelector('.projectOpened__content h2').innerHTML = project['name'];
            projectOpened.querySelector('.projectOpened__content p').innerHTML = project['desc'];
            projectOpened.querySelector('.content__img img').innerHTML = project['img'];
            projectOpened.querySelector('.content__img a').href = project['link'];
        })

        select('.portfolio__box').append(portfolioSingle);
    });



    
/*-------------------*/
/* FUNCTIONS_HELPERS */
/*-------------------*/
function openProject(){
    select('body').style.overflowY = 'hidden';
    projectOpened.style.display = 'block';
}

projectOpened.querySelector('.projectOpened__return').addEventListener('click', ()=>{
    select('body').style.overflowY = 'auto';
    projectOpened.style.display = 'none';
});