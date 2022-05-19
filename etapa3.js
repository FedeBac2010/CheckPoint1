let autos = require ('./autos.js');

const concesionaria = {
    autos: autos,

    buscarAuto: function (patente){
        let autoBuscado=null;
        this.autos.forEach(autos=>{
            if (autos.patente=== patente){
                autoBuscado=autos;
            }
        })
        return autoBuscado;
    },

    venderAuto: function (patente){
        let autosVender = this.buscarAuto(patente);
        if (autosVender){
            autosVender.vendido= true
        }
        return autosVender
    }
    
}

console.log (concesionaria.venderAuto('JJK116'));


/* Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso
de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, 
tendrás que utilizar la función buscarAuto. 
PISTA : Recordá que tenés que usar el this para acceder a la funcionalidad del mismo objeto literal.*/