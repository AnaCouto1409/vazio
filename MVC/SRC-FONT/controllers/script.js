//consulta de documentação 

let newArray = new AnotaçõesController();

let botao=document.querySelector("#botao-submit");

botao.addEventListener('click', function(event){
    event.preventDefault();
    novoArray.addAnotação();
    console.log(novoArray)
});
//faz menção do codigo