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
/*  CONTACT_FORM   */
/*-----------------*/
    let form = document.querySelector('.box__contactForm');
    let inputs = document.querySelectorAll('.box__contactForm input');
    let textArea = document.querySelector('.box__contactForm textarea');
    let flashMessage = document.querySelector('.flashMessage');
    let button = document.querySelector('.buttonBox button');
    let blocked = false;


    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        if(!blocked){

            if(!formValidator()){
                alert("Preencha todos os campos do formulário!")
                return;
            }

            /*Envia o email aqui*/

            flashMessage.style.display = 'flex';

            blocked = true;
            setTimeout(()=>{blocked = false;}, 300000)

            clearForm();

            return;
        }

        alert("Aguarde um momento para enviar um novo email.")
    })

    button.addEventListener('click', function(){
        flashMessage.style.display = 'none';
    })

    /**FUNCTIONS**/
    function clearForm(){
        textArea.value="";
        
        for(let i =0; i < inputs.length; i++)
            inputs[i].value="";
    }

    function formValidator(){
        let valid = true;

        if(textArea.value == "")
            valid = false;

        for(let i =0; i < inputs.length; i++){
            if(inputs[i].value == "")
                valid = false;
        }

        return valid;
    }