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
            if (persona.capacidadDePagoTotal>= auto.precio && persona.capacidadDePagoEnCuotas > valorCuota){
                return true
            }
            else {return false}
        },

        autosQuePuedeComprar: function (persona){
            autos= this.autosParaLaVenta();
            //puede= this.puedeComprar(autos[0],persona)
            puede= autos.filter(function (auto){
                if (persona.capacidadDePagoTotal>= auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas) ){ //
                    return auto;
                }
            })
            return puede
        }
        }

 

        console.log(concesionaria.autosQuePuedeComprar({
            nombre: 'Juan',
            capacidadDePagoEnCuotas: 7200,
            capacidadDePagoTotal: 150000
            }));

/* Hay que escribir la función autosQuePuedeComprar,que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Por cada uno (forEach) de los autos debe de probar si la persona puede comprarlo(==true), ¿ya hay alguna funcionalidad que me permita hacer esto?(puedeComprar).

3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?





Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. */