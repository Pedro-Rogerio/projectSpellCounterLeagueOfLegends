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
        alterarDisplay("cronometro1Top", "00", "00");
    }
    if((select1.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Top");
        alterarDisplay("cronometro1Top", "05", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(300, 'cronometro1Top', 'parar1Top');");

    }
    if((select1.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Top");
        alterarDisplay("cronometro1Top", "03", "30");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(210, 'cronometro1Top', 'parar1Top');");
    }
    if((select1.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Top");
        alterarDisplay("cronometro1Top", "03", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(180, 'cronometro1Top', 'parar1Top');");
    }
    if((select1.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Top");
        alterarDisplay("cronometro1Top", "03", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(180, 'cronometro1Top', 'parar1Top');");
    }
    if((select1.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Top");
        alterarDisplay("cronometro1Top", "03", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(180, 'cronometro1Top', 'parar1Top');");
    }
    if((select1.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Top");
        alterarDisplay("cronometro1Top", "04", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(240, 'cronometro1Top', 'parar1Top');");
    }
    if((select1.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Top");
        alterarDisplay("cronometro1Top", "03", "30");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(210, 'cronometro1Top', 'parar1Top');");
    }
    if((select1.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Top");
        alterarDisplay("cronometro1Top", "06", "00");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(360, 'cronometro1Top', 'parar1Top');");
    }
    if((select1.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Top");
        alterarDisplay("cronometro1Top", "00", "15");
        document.getElementById("ini1Top").setAttribute("onclick","startTimer(15, 'cronometro1Top', 'parar1Top');");
    }
});

select2.addEventListener('change', function(){
    if((select2.value)==""){
        atualizarFoto("assets/vazio.png","foto2Top");
        alterarDisplay("cronometro2Top", "00", "00");
    }
    if((select2.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Top");
        alterarDisplay("cronometro2Top", "05", "00");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(300, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Top");
        alterarDisplay("cronometro2Top", "03", "30");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(210, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Top");
        alterarDisplay("cronometro2Top", "03", "00");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(180, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Top");
        alterarDisplay("cronometro2Top", "03", "00");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(180, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Top");
        alterarDisplay("cronometro2Top", "03", "00");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(180, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Top");
        alterarDisplay("cronometro2Top", "04", "00");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(240, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Top");
        alterarDisplay("cronometro2Top", "03", "30");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(210, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Top");
        alterarDisplay("cronometro2Top", "06", "00");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(360, 'cronometro2Top', 'parar2Top');");
    }
    if((select2.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Top");
        alterarDisplay("cronometro2Top", "00", "15");
        document.getElementById("ini2Top").setAttribute("onclick","startTimer(150, 'cronometro2Top', 'parar2Top');");
    }
});

select3.addEventListener('change', function(){
    if((select3.value)==""){
        atualizarFoto("assets/vazio.png","foto1Jg");
        alterarDisplay("cronometro1Jg", "00", "00");
    }
    if((select3.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Jg");
        alterarDisplay("cronometro1Jg", "05", "00");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(300, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Jg");
        alterarDisplay("cronometro1Jg", "03", "30");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(210, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Jg");
        alterarDisplay("cronometro1Jg", "03", "00");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(180, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Jg");
        alterarDisplay("cronometro1Jg", "03", "00");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(180, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Jg");
        alterarDisplay("cronometro1Jg", "03", "00");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(180, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Jg");
        alterarDisplay("cronometro1Jg", "04", "00");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(240, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Jg");
        alterarDisplay("cronometro1Jg", "03", "30");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(210, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Jg");
        alterarDisplay("cronometro1Jg", "06", "00");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(360, 'cronometro1Jg', 'parar1Jg');");
    }
    if((select3.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Jg");
        alterarDisplay("cronometro1Jg", "00", "15");
        document.getElementById("ini1Jg").setAttribute("onclick","startTimer(15, 'cronometro1Jg', 'parar1Jg');");
    }
});

select4.addEventListener('change', function(){
    if((select4.value)==""){
        atualizarFoto("assets/vazio.png","foto2Jg");
        alterarDisplay("cronometro2Jg", "00", "00");
    }
    if((select4.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Jg");
        alterarDisplay("cronometro2Jg", "05", "00");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(300, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Jg");
        alterarDisplay("cronometro2Jg", "03", "30");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(210, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Jg");
        alterarDisplay("cronometro2Jg", "03", "00");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(180, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Jg");
        alterarDisplay("cronometro2Jg", "03", "00");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(180, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Jg");
        alterarDisplay("cronometro2Jg", "03", "00");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(180, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Jg");
        alterarDisplay("cronometro2Jg", "04", "00");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(240, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Jg");
        alterarDisplay("cronometro2Jg", "03", "30");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(210, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Jg");
        alterarDisplay("cronometro2Jg", "06", "00");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(360, 'cronometro2Jg', 'parar2Jg');")
    }
    if((select4.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Jg");
        alterarDisplay("cronometro2Jg", "00", "15");
        document.getElementById("ini2Jg").setAttribute("onclick","startTimer(15, 'cronometro2Jg', 'parar2Jg');")
    }
});

select5.addEventListener('change', function(){
    if((select5.value)==""){
        atualizarFoto("assets/vazio.png","foto1Mid");
        alterarDisplay("cronometro1Mid", "00", "00");
    }
    if((select5.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Mid");
        alterarDisplay("cronometro1Mid", "05", "00");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(300, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Mid");
        alterarDisplay("cronometro1Mid", "03", "30");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(210, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Mid");
        alterarDisplay("cronometro1Mid", "03", "00");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(180, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Mid");
        alterarDisplay("cronometro1Mid", "03", "00");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(180, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Mid");
        alterarDisplay("cronometro1Mid", "03", "00");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(180, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Mid");
        alterarDisplay("cronometro1Mid", "04", "00");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(240, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Mid");
        alterarDisplay("cronometro1Mid", "03", "30");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(210, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Mid");
        alterarDisplay("cronometro1Mid", "06", "00");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(360, 'cronometro1Mid', 'parar1Mid');");
    }
    if((select5.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Mid");
        alterarDisplay("cronometro1Mid", "00", "15");
        document.getElementById("ini1Mid").setAttribute("onclick","startTimer(15, 'cronometro1Mid', 'parar1Mid');");
    }
});

select6.addEventListener('change', function(){
    if((select6.value)==""){
        atualizarFoto("assets/vazio.png","foto2Mid");
        alterarDisplay("cronometro2Mid", "00", "00");
    }
    if((select6.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Mid");
        alterarDisplay("cronometro2Mid", "05", "00");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(300, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Mid");
        alterarDisplay("cronometro2Mid", "03", "30");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(210, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Mid");
        alterarDisplay("cronometro2Mid", "03", "00");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(180, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Mid");
        alterarDisplay("cronometro2Mid", "03", "00");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(180, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Mid");
        alterarDisplay("cronometro2Mid", "03", "00");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(180, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Mid");
        alterarDisplay("cronometro2Mid", "04", "00");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(240, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Mid");
        alterarDisplay("cronometro2Mid", "03", "30");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(210, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Mid");
        alterarDisplay("cronometro2Mid", "06", "00");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(360, 'cronometro2Mid', 'parar2Mid');");
    }
    if((select6.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Mid");
        alterarDisplay("cronometro2Mid", "00", "15");
        document.getElementById("ini2Mid").setAttribute("onclick","startTimer(15, 'cronometro2Mid', 'parar2Mid');");
    }
});

select7.addEventListener('change', function(){
    if((select7.value)==""){
        atualizarFoto("assets/vazio.png","foto1Adc");
        alterarDisplay("cronometro1Adc", "00", "00");
    }
    if((select7.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Adc");
        alterarDisplay("cronometro1Adc", "05", "00");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(300, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Adc");
        alterarDisplay("cronometro1Adc", "03", "30");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(210, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Adc");
        alterarDisplay("cronometro1Adc", "03", "00");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(180, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Adc");
        alterarDisplay("cronometro1Adc", "03", "00");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(180, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Adc");
        alterarDisplay("cronometro1Adc", "03", "00");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(180, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Adc");
        alterarDisplay("cronometro1Adc", "04", "00");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(240, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Adc");
        alterarDisplay("cronometro1Adc", "03", "30");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(210, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Adc");
        alterarDisplay("cronometro1Adc", "06", "00");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(360, 'cronometro1Adc', 'parar1Adc');");
    }
    if((select7.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Adc");
        alterarDisplay("cronometro1Adc", "00", "00");
        document.getElementById("ini1Adc").setAttribute("onclick","startTimer(15, 'cronometro1Adc', 'parar1Adc');");
    }
});

select8.addEventListener('change', function(){
    if((select8.value)==""){
        atualizarFoto("assets/vazio.png","foto2Adc");
        alterarDisplay("cronometro2Adc", "00", "00");
    }
    if((select8.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Adc");
        alterarDisplay("cronometro2Adc", "05", "00");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(300, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Adc");
        alterarDisplay("cronometro2Adc", "03", "30");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(210, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Adc");
        alterarDisplay("cronometro2Adc", "03", "00");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(180, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Adc");
        alterarDisplay("cronometro2Adc", "03", "00");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(180, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Adc");
        alterarDisplay("cronometro2Adc", "03", "00");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(180, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Adc");
        alterarDisplay("cronometro2Adc", "04", "00");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(240, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Adc");
        alterarDisplay("cronometro2Adc", "03", "30");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(210, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Adc");
        alterarDisplay("cronometro2Adc", "06", "00");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(360, 'cronometro2Adc', 'parar2Adc');");
    }
    if((select8.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Adc");
        alterarDisplay("cronometro2Adc", "00", "15");
        document.getElementById("ini2Adc").setAttribute("onclick","startTimer(15, 'cronometro2Adc', 'parar2Adc');");
    }
});

select9.addEventListener('change', function(){
    if((select9.value)==""){
        atualizarFoto("assets/vazio.png","foto1Sup");
        alterarDisplay("cronometro1Sup", "00", "00");
    }
    if((select9.value)=="1"){
        atualizarFoto("assets/flash.png","foto1Sup");
        alterarDisplay("cronometro1Sup", "05", "00");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(300, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto1Sup");
        alterarDisplay("cronometro1Sup", "03", "30");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(210, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto1Sup");
        alterarDisplay("cronometro1Sup", "03", "00");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(180, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="4"){
        atualizarFoto("assets/barreira.png","foto1Sup");
        alterarDisplay("cronometro1Sup", "03", "00");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(180, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto1Sup");
        alterarDisplay("cronometro1Sup", "03", "00");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(180, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="6"){
        atualizarFoto("assets/curar.png", "foto1Sup");
        alterarDisplay("cronometro1Sup", "04", "00");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(240, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto1Sup");
        alterarDisplay("cronometro1Sup", "03", "30");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(210, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto1Sup");
        alterarDisplay("cronometro1Sup", "06", "00");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(360, 'cronometro1Sup', 'parar1Sup');");
    }
    if((select9.value)=="9"){
        atualizarFoto("assets/smite.png", "foto1Sup");
        alterarDisplay("cronometro1Sup", "00", "15");
        document.getElementById("ini1Sup").setAttribute("onclick","startTimer(15, 'cronometro1Sup', 'parar1Sup');");
    }
});

select10.addEventListener('change', function(){
    if((select10.value)==""){
        atualizarFoto("assets/vazio.png","foto2Sup");
        alterarDisplay("cronometro2Sup", "03", "00");
    }
    if((select10.value)=="1"){
        atualizarFoto("assets/flash.png","foto2Sup");
        alterarDisplay("cronometro2Sup", "05", "00");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(300, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="2"){
        atualizarFoto("assets/purificar.png", "foto2Sup");
        alterarDisplay("cronometro2Sup", "03", "30");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(210, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="3"){
        atualizarFoto("assets/exaustao.png","foto2Sup");
        alterarDisplay("cronometro2Sup", "03", "00");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(180, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="4"){
        atualizarFoto("assets/barreira.png","foto2Sup");
        alterarDisplay("cronometro2Sup", "03", "00");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(180, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="5"){
        atualizarFoto("assets/fantasma.png", "foto2Sup");
        alterarDisplay("cronometro2Sup", "03", "00");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(180, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="6"){
        atualizarFoto("assets/curar.png", "foto2Sup");
        alterarDisplay("cronometro2Sup", "04", "00");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(240, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="7"){
        atualizarFoto("assets/ignite.png", "foto2Sup");
        alterarDisplay("cronometro2Sup", "03", "30");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(210, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="8"){
        atualizarFoto("assets/teleporte.png", "foto2Sup");
        alterarDisplay("cronometro2Sup", "06", "00");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(360, 'cronometro2Sup', 'parar2Sup');");
    }
    if((select10.value)=="9"){
        atualizarFoto("assets/smite.png", "foto2Sup");
        alterarDisplay("cronometro2Sup", "00", "15");
        document.getElementById("ini2Sup").setAttribute("onclick","startTimer(15, 'cronometro2Sup', 'parar2Sup');");
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
function startTimer(duration, display,botaoParar) {
    var timer = duration, minutes, seconds;
       
            myInterval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes; //SE O VALOR DE MINUTOS FOR MENOR QUE 10 COLOCA O 0 A ESQUERDA
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            alterarDisplay(display,minutes,seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
            
        }, 1000);//A CADA 1000 MILISSEGUNDOS VAI ATUALIZAR ALGO NA TELA
        
        
        document.getElementById(botaoParar).setAttribute("onclick","clearInterval(myInterval)");
      



}//QUANDO CHAMAR VOU TER QUE FALAR QUANTOS SEGUNDO SÃO CADA FEITIÇO E QUAL O NOME DO VISOR NO DISPLAY QUE SERÁ ALTERADO
