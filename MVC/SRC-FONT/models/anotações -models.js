class Anotações{
    constructor(titulo, notas){
        if(typeof titulo=='string' && typeof notas=='string'){
            this.titulo=titulo;
            this.notas=notas;
        }
        else{
            alert('criação de notas-dados invalidos');
        }
    }
}