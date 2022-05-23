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
    },

    venderAuto: function (patente){
        autosBuscado= this.buscarAuto(patente);
        if (autoBuscado != null){
            autoBuscado.vendido= true
        }
        return autoBuscado
    }

    }

    


