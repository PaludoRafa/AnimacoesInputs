const input = document.querySelector('input');
console.log(input);

var enter = document.querySelector('.fa-greater-than');
console.log(enter);

const filter = document.querySelector('.filter-itens');
var totItem = 0;
//Objetos principais para trabalharmos - campo input, botao de entrada, acumuladores...

input.addEventListener('keyup', function(event){   
    if (event.keyCode === 13 || event.which === 13){  
        event.preventDefault();
        document.querySelector('.fa-greater-than').click();
    }
}); //Quando clicar em ENTER, chamar o evento para criar os itens

enter.addEventListener('click', function(){
    criarItem( input.value, totItem );
});

function criarItem(value, num){
    if(value !== ''){
        newDiv(value);
        newAttributes(num);
        newEvents(num);
        this.totItem++
        filterItens();
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
    document.querySelector('#fields').appendChild(newDiv);
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

function deleteItem(elementoPai){  //Exclui o item 
    elementoPai.remove();
    filterItens();
    this.totItem--;
}

function strikeItem(elementoPai){ //Troca a cor do item 
    if (elementoPai.children[1].style.backgroundColor !== 'red'){
        elementoPai.children[1].style.backgroundColor = 'red';
    }else{
        elementoPai.children[1].style.backgroundColor = 'transparent';
    }
}

function filterItens(){
    let parent = document.querySelector("#fields");
    if (parent.childNodes.length > 0){
        document.querySelector('#filter-itens').style.display = 'flex';
    }else{
        document.querySelector('#filter-itens').style.display = 'none';
    }
}

function itensLeft(filter){
    filter.children[0].
    var parent = document.querySelector("#fields");
    if (parent.childNodes.backgroundColor = 'red'){

    }

}










function erro(){
    console.log('está com erro');
}