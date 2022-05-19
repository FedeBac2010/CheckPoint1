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
    },

    autosParaLaVenta: function (autos){
        return autos = this.autos.filter(function(auto){
            return auto.vendido == false
        })
        },
    
    autosNuevos: function (){
        autosParaVender= this.autosParaLaVenta();
        autos0km= autosParaVender.filter (autos=> autos.km <100);
        return autos0km;
    }
    

}
console.log (concesionaria.venderAuto('JJK116'))
console.log (concesionaria.autosParaLaVenta()); 

console.log(concesionaria.autosNuevos());



/* La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. 
A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, 
aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. 
Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter. 

Recordá utilizar el this para llamar a una función definida dentro del mismo objeto literal.
Recordá que el filter devuelve una lista.
*/

