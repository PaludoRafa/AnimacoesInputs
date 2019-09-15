const arrows = document.querySelectorAll(".fa-sort-down"); //Selecionamos as 3 setas dos inputs, e criamos um array[0,1,2] c as setas
console.log(arrows);




function animatedForm(){
    const arrows = document.querySelectorAll(".fa-sort-down");

    //O método forEach() executa uma dada função em cada elemento de um array.

    arrows.forEach(arrow => { // cada item do array entra como um parâmetro arrow
        arrow.addEventListener('click', () => {
            //Como padrão, ao clicar na seta, iremos validar o campo de input, depois selecionar a div e depois selecionar a próxima div para fazer o mesmo processo
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Validação
            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)){
                nextSlide(parent, nextForm);
            } else if(input.type === 'password'  && validateUser(input)){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = 'shake 0.5s ease';
            }

            parent.addEventListener('animationend', () =>{
                parent.style.animation ='';
            });
        });
    });
}

function validateUser(user){
    if (user.value.length < 8){
        console.log('Not enough character!!');
        error('rgb(189,87,87)');
    }else{
        error('aquamarine');
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)){
        error('aquamarine');
        return true
    } else{
        error('rgb(189,87,87)');
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}


animatedForm();