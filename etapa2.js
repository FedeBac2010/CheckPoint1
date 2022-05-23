let autos = require ('./autos.js');

const concesionaria= {
    autos: autos,

    buscarAuto: function (patente){
        autoBuscado= null;
        this.autos.forEach( autos=>{
        if (autos.patente=== patente){
            autoBuscado= autos;
        }})
        return autoBuscado;
    }

    

}


