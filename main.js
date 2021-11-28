const questions= document.querySelectorAll('.question');
const responses= document.querySelectorAll('.response');
const iniciar = ()=>{
    

    questions.forEach(element => {
        element.addEventListener('click',(event)=>{
            const divQuestion = (event.target);
            const path = event.path || (event.composedPath && event.composedPath());            
            const response = path[0].nextElementSibling;
            if (divQuestion.classList.contains('selected')){
                
                divQuestion.classList.remove('selected');                
                divQuestion.childNodes[1].classList.remove('rotate');
                
                response.classList.add('response')
            }else{
                
                divQuestion.classList.add('selected');                
                (divQuestion.childNodes[1].classList.add('rotate'));
                
                response.classList.remove('response');
            }
        });
    });
    
}

