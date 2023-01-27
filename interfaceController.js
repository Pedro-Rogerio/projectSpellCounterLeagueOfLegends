var select1 = document.getElementById('f1Top');
var select2 = document.getElementById('f2Top');
var select3 = document.getElementById('f1Jg');
var select4 = document.getElementById('f2Jg');
var select5 = document.getElementById('f1Mid');
var select6 = document.getElementById('f2Mid');
var select7 = document.getElementById('f1Adc');
var select8 = document.getElementById('f2Adc');
var select9 = document.getElementById('f1Sup');
var select10 = document.getElementById('f2Sup');

select1.addEventListener('change', function(){
    if((select1.value)==""){
        atualizarFoto("assets/vazio.png","foto1Top");
        alterarDisplay("cronometro1Top", 00, 00);
    }
    if((select1.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Top");
        alterarDisplay("cronometro1Top", "05", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(300, 'cronometro1Top');");

    }
    if((select1.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Top");
        alterarDisplay("cronometro1Top", "03", "30");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(210, 'cronometro1Top');");
    }
    if((select1.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Top");
        alterarDisplay("cronometro1Top", "03", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(180, 'cronometro1Top');");
    }
    if((select1.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Top");
        alterarDisplay("cronometro1Top", "03", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(180, 'cronometro1Top');");
    }
    if((select1.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Top");
        alterarDisplay("cronometro1Top", "03", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(180, 'cronometro1Top');");
    }
    if((select1.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Top");
        alterarDisplay("cronometro1Top", "04", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(240, 'cronometro1Top');");
    }
    if((select1.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Top");
        alterarDisplay("cronometro1Top", "03", "30");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(210, 'cronometro1Top');");
    }
    if((select1.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Top");
        alterarDisplay("cronometro1Top", "06", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(360, 'cronometro1Top');");
    }
    if((select1.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Top");
        alterarDisplay("cronometro1Top", "00", "15");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(315, 'cronometro1Top');");
    }
});

select2.addEventListener('change', function(){
    if((select2.value)==""){
        atualizarFoto("assets/vazio.png","foto2Top");
    }
    if((select2.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Top");
    }
    if((select2.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Top");
    }
    if((select2.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Top");
    }
    if((select2.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Top");
    }
    if((select2.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Top");
    }
    if((select2.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Top");
    }
    if((select2.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Top");
    }
    if((select2.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Top");
    }
    if((select2.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Top");
    }
});

select3.addEventListener('change', function(){
    if((select3.value)==""){
        atualizarFoto("assets/vazio.png","foto1Jg");
    }
    if((select3.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Jg");
    }
    if((select3.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Jg");
    }
    if((select3.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Jg");
    }
    if((select3.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Jg");
    }
    if((select3.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Jg");
    }
    if((select3.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Jg");
    }
    if((select3.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Jg");
    }
    if((select3.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Jg");
    }
    if((select3.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Jg");
    }
});

select4.addEventListener('change', function(){
    if((select4.value)==""){
        atualizarFoto("assets/vazio.png","foto2Jg");
    }
    if((select4.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Jg");
    }
    if((select4.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Jg");
    }
    if((select4.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Jg");
    }
    if((select4.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Jg");
    }
    if((select4.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Jg");
    }
    if((select4.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Jg");
    }
    if((select4.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Jg");
    }
    if((select4.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Jg");
    }
    if((select4.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Jg");
    }
});

select5.addEventListener('change', function(){
    if((select5.value)==""){
        atualizarFoto("assets/vazio.png","foto1Mid");
    }
    if((select5.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Mid");
    }
    if((select5.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Mid");
    }
    if((select5.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Mid");
    }
    if((select5.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Mid");
    }
    if((select5.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Mid");
    }
    if((select5.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Mid");
    }
    if((select5.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Mid");
    }
    if((select5.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Mid");
    }
    if((select5.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Mid");
    }
});

select6.addEventListener('change', function(){
    if((select6.value)==""){
        atualizarFoto("assets/vazio.png","foto2Mid");
    }
    if((select6.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Mid");
    }
    if((select6.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Mid");
    }
    if((select6.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Mid");
    }
    if((select6.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Mid");
    }
    if((select6.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Mid");
    }
    if((select6.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Mid");
    }
    if((select6.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Mid");
    }
    if((select6.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Mid");
    }
    if((select6.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Mid");
    }
});

select7.addEventListener('change', function(){
    if((select7.value)==""){
        atualizarFoto("assets/vazio.png","foto1Adc");
    }
    if((select7.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Adc");
    }
    if((select7.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Adc");
    }
    if((select7.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Adc");
    }
    if((select7.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Adc");
    }
    if((select7.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Adc");
    }
    if((select7.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Adc");
    }
    if((select7.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Adc");
    }
    if((select7.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Adc");
    }
    if((select7.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Adc");
    }
});

select8.addEventListener('change', function(){
    if((select8.value)==""){
        atualizarFoto("assets/vazio.png","foto2Adc");
    }
    if((select8.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Adc");
    }
    if((select8.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Adc");
    }
    if((select8.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Adc");
    }
    if((select8.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Adc");
    }
    if((select8.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Adc");
    }
    if((select8.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Adc");
    }
    if((select8.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Adc");
    }
    if((select8.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Adc");
    }
    if((select8.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Adc");
    }
});

select9.addEventListener('change', function(){
    if((select9.value)==""){
        atualizarFoto("assets/vazio.png","foto1Sup");
    }
    if((select9.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Sup");
    }
    if((select9.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Sup");
    }
    if((select9.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Sup");
    }
    if((select9.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Sup");
    }
    if((select9.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Sup");
    }
    if((select9.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Sup");
    }
    if((select9.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Sup");
    }
    if((select9.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Sup");
    }
    if((select9.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Sup");
    }
});

select10.addEventListener('change', function(){
    if((select10.value)==""){
        atualizarFoto("assets/vazio.png","foto2Sup");
    }
    if((select10.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Sup");
    }
    if((select10.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Sup");
    }
    if((select10.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Sup");
    }
    if((select10.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Sup");
    }
    if((select10.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Sup");
    }
    if((select10.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Sup");
    }
    if((select10.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Sup");
    }
    if((select10.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Sup");
    }
    if((select10.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Sup");
    }
});

//Atualizar foto

function atualizarFoto(caminho, objeto) {
    document.getElementById(objeto).src = caminho;
}

//alterar diplay
function alterarDisplay(display, minutes, seconds){
    document.getElementById(display).innerHTML = minutes + ":" + seconds;
}

//timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes; //SE O VALOR DE MINUTOS FOR MENOR QUE 10 COLOCA O 0 A ESQUERDA
        seconds = seconds < 10 ? "0" + seconds : seconds;

        alterarDisplay(display,minutes,seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);//A CADA 1000 MILISSEGUNDOS VAI ATUALIZAR ALGO NA TELA
}//QUANDO CHAMAR VOU TER QUE FALAR QUANTOS SEGUNDO SÃO CADA FEITIÇO E QUAL O NOME DO VISOR NO DISPLAY QUE SERÁ ALTERADO

