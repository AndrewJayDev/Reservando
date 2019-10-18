let Reserva = function(horario,cantidadDePersonas,precioPorPersona,codigoDeDescuento){
    this.horario=horario;
    this.cantidadDePersonas=cantidadDePersonas;
    this.precioPorPersona=precioPorPersona;
    this.codigoDeDescuento=codigoDeDescuento;
}
    //función para determinar el precio base de un restaurante
Reserva.prototype.precioBase=function(){
    //precio final = precio base + adicionales - descuentos
    return this.cantidadDePersonas*this.precioPorPersona;
}
    //función para determinar los descuentos applicables
Reserva.prototype.descuentoCodigo=function(){
    let descuentoCodigo;
        //código que descuenta 15% del precio base
        if(this.codigoDeDescuento==='DES15'){
            descuentoCodigo=precioBase*.15;;
         //código que descuenta 15% del precio base
        }else if(this.codigoDeDescuento==='DES200'){
            descuentoCodigo=200;
        }else if('DES1'){
            descuentoCodigo=this.precioPorPersona;
        }else{
            descuentoCodigo=0;
        }
    return descuentoCodigo
};
Reserva.prototype.descuentoGrupo=function(){
    let descuentoGrupo;
    if(this.cantidadDePersonas>=4 && this.cantidadDePersonas<=6){
        descuentoGrupo=precioBase*.05;
    }else if(this.cantidadDePersonas>=7 && this.cantidadDePersonas<=8){
        descuentoGrupo=precioBase*.10;
    }else if(this.cantidadDePersonas>8){
        descuentoGrupo=precioBase*.15;
    }else{
        descuentoGrupo=0;
    }
    return descuentoGrupo
};
Reserva.prototype.adicionalesWeekend=function(){
    let adicionalesWeekend;
        if(this.horario.getDay()>=4){
            adicionalesWeekend = precioBase*0.10
        }else{
            adicionalesWeekend=0
        }
    return adicionalesWeekend;
};
Reserva.prototype.adicionalesHora=function(){
    let adicionalesHora;
    if ((this.horario.getHours() >=13) && (this.horario.getHours()<=14)) {
        adicionalesHora = precioBase*0.05;
    } else if ((this.horario.getHours() >=20) && (this.horario.getHours()<=21)) {
        adicionalesHora= precioBase*0.05;
    }else{
        adicionalesHora=0;
    }
    return adicionalesHora
};

Reserva.prototype.calcularAdicionales=function(){
    let adicionalesWeekend=this.adicionalesWeekend();
    let adicionalesHora=this.adicionalesHora();
return adicionalesHora+adicionalesWeekend;
}
Reserva.prototype.calcularDescuento=function(){
        let descuentoCodigo=this.descuentoCodigo();
        let descuentoGrupo=this.descuentoGrupo();
    return descuentoCodigo+descuentoGrupo;
}

Reserva.prototype.precioFinal=function(){
//precio final = precio base + adicionales - descuentos
    let precioBase=this.precioBase();
    let adicionales=this.calcularAdicionales();
    let descuento= this.calcularDescuento();
return precioBase-descuento+adicionales;
}
