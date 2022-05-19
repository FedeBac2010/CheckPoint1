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
            },
        
        puedeComprar: function (auto,persona){
            valorCuota= auto.precio / auto.cuotas
            if (persona.capacidadDePagoTotal> auto.precio && persona.capacidadDePagoEnCuotas > valorCuota){
                return true
            }
            else {return false}
        }
        
    }
console.log (concesionaria.puedeComprar({
    marca: 'Ford',
    modelo:'fiesta',
    precio: 150000,
    km: 200,
    color:'azul',
    cuotas: 12,
    anio:2019,
    patente:'APL123',
    vendido: false
 }, {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
    }))


/* Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: 
la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, 
puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. 

Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. 
Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. 
Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y 
devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. */