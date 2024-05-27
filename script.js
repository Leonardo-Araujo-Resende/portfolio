//Relogio
const horas = document.querySelector("#hora .valor")
const minutos = document.querySelector("#minuto .valor")
const segundos = document.querySelector("#segundo .valor")


const relogio = setInterval(function time(){

    let dataHoje = new Date();

    let horaHoje = dataHoje.getHours();
    let minutoHoje = dataHoje.getMinutes();
    let segundoHoje = dataHoje.getSeconds();

    if(horaHoje < 10) horaHoje = '0' + horaHoje;
    if(minutoHoje < 10) minutoHoje = '0' + minutoHoje;
    if(segundoHoje < 10) segundoHoje = '0' + segundoHoje;


    horas.textContent = horaHoje;
    minutos.textContent = minutoHoje;
    segundos.textContent = segundoHoje;
    

});

