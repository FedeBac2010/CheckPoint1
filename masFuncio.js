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
        if (autosVender != null){
            autosVender.vendido= true
        }
        return autosVender
    },

    autosParaLaVenta: function (){
        return autos = this.autos.filter(function(auto){
            return auto.vendido == false
        })
        },

    autosNuevos: function (){
        autosParaVender= this.autosParaLaVenta();
        autos0km= autosParaVender.filter (autos=> autos.km <100);
        return autos0km;
    },

    
    listaDeVentas: function (){
        autosVendidos= this.autos.filter(function(auto){
                return auto.vendido == true
            });
        listaDePrecios=[]
        precios= autosVendidos.filter (auto=> listaDePrecios.push(auto.precio));
        return listaDePrecios
        }
        
    
}
console.log (concesionaria.venderAuto('JJK116'))
console.log (concesionaria.listaDeVentas())

/* El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta
de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....
estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

Recordá utilizar el this para llamar a una funcionalidad dentro del mismo objeto literal.
La función debe retornar un array de números. */


