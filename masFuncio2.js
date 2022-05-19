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
        },
        
        totalDeVentas:function (){
            listaDePrecios= this.listaDeVentas();
            if (listaDePrecios.length>0)
           { total= listaDePrecios.reduce(function (acum=0,precio){
                return acum + precio
            })
            return total}
            else {return 0}
            


        }
        
    
}
console.log (concesionaria.venderAuto())
console.log (concesionaria.listaDeVentas())
console.log (concesionaria.totalDeVentas());


/* Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, 
que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. 
Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear! */