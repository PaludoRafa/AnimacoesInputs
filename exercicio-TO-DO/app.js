const input = document.querySelector('input');
console.log(input.value);

var enter = document.querySelector('.fa-greater-than');
console.log(enter);

var totItem = 0;

enter.addEventListener('click', function(){
    criarItem( input.value, totItem );
});

function criarItem(value, num){
    if(value !== ''){
        newDiv(value);
        newAttributes(num);
        newEvents(num);
        this.totItem++
    }else{
        erro();
    }
}

function newDiv(value){
    const newDiv = document.createElement('DIV');
    const newPara = document.createElement('p');
    const newText = document.createTextNode(value);
    const newIconePre = document.createElement('i');
    const newIconePos = document.createElement('i');
    newDiv.appendChild(newIconePre);
    newPara.appendChild(newText);
    newDiv.appendChild(newPara);
    newDiv.appendChild(newIconePos);
    document.querySelector('form').appendChild(newDiv);
}

function newAttributes(num){
    let parent = document.querySelector('#fields').lastElementChild; //recupera a última div dentro de form
    parent.children[0].classList.add('far');
    parent.children[0].classList.add('fa-circle');
    parent.children[0].id = 'itemStrike' + num; 
    //adiciona classes e ids para o primeiro item

    parent.children[1].classList.add('.active');
    parent.children[1].id = 'item' + num;
    //adiciona classes e ids para o parágrafo
    
    parent.children[2].classList.add('fas');
    parent.children[2].classList.add('fa-times');
    parent.children[2].id = 'itemRemove' + num;
    //adiciona classes e ids para o ultimo item

    parent.style.backgroundColor = 'lightgreen';
}

function newEvents(){
    let parent = document.querySelector('#fields').lastElementChild; //recupera a última div dentro de form
    parent.children[0].addEventListener('click', function(){ strikeItem(parent) }); //adiciona evento ao primeiro icone
    parent.children[2].addEventListener('click', function(){ deleteItem(parent) }); //adiciona evento ao segundo icone
}

function deleteItem(elementoPai){//Exclui o item 
    elementoPai.remove();
}

function strikeItem(elementoPai){ //Troca a cor do item 
    if (elementoPai.children[1].style.backgroundColor !== 'red'){
        elementoPai.children[1].style.backgroundColor = 'red';
    }else{
        elementoPai.children[1].style.backgroundColor = 'transparent';
    }
}


function erro(){
    console.log('está com erro');
}