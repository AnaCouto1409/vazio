class AnotaçõesController{
    constructor(){
        this.arr=[];
    }
    addAnotação(){
        let title=document.querySelector('#titulo').value;
        let note=document.querySelector('#nota').value;
        let novo= new Anotações(title,note);
        this.arr.push(novo);
    }
}
