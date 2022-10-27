/*-----------------*/
/*  HEADER-TEXTS   */
/*-----------------*/

    /*Variables*/
    let mainText = document.querySelector('.header__content h1');
    let currentText = 0;


    /*Ant-Errors*/
    if(typeof delay == "undefined")
        var delay = 100000;

    if(typeof texts == "undefined")
        var texts = ['Desenvolvedor Web'];


    mainText.innerText=texts[currentText].toUpperCase();

    /*Change Texts*/
    setInterval(()=>{
        if(currentText < texts.length-1){
            currentText++;
        }else {
            currentText = 0;
        }
        
        mainText.innerText=texts[currentText].toUpperCase();
    }, delay);
