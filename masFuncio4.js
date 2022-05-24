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
    },

    autosParaLaVenta: function (){
        lista= this.autos.filter (autos=> autos.vendido== false)
        return lista
    },

    autosNuevos: function (){
        autosDisponibles= this.autosParaLaVenta();
        autos0km= autosDisponibles.filter(auto0=> auto0.km <100)
        return autos0km
    },

    listaDeVentas:function (){
        autosVendidos= this.autos.filter(autos=> autos.vendido== true);
        lista= [];
        precios= autosVendidos.filter(autos=> lista.push(autos.precio))
        return lista
    },

    totalDeVentas: function (){
        lista= this.listaDeVentas();
        if (lista.length >0){
            total= lista.reduce(function(acum,precio){return acum + precio})
        return total}
        else {return 0}
    },
    
    puedeComprar: function (auto,persona){
        
        valorCuota= auto.precio / auto.cuotas;
        if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas > valorCuota) {
            return true;
        }
        else {return false};
    }

}









