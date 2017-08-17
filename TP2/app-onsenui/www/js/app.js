function calcula() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;

  if (num1 === '' || num2 === '') {
    ons.notification.alert({
      message: 'Preencha os Campos!!!',
      title: 'Erro!'
    });
  }
  else {
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    var soma=num1+num2;
    var mult=num1*num2;
    var sub=num1-num2;
    var div;
    if(num2===0){div=0;}
    else{div=num1/num2;}
    var msg ="<p style='text-align:left'>Soma = "+soma+"</p>"+
    "<p style='text-align:left'>Multiplicação = "+mult+"</p>"+
    "<p style='text-align:left'>Subtração = "+sub+"</p>"+
    "<p style='text-align:left'>Divisão = "+div+"</p>";
    ons.notification.alert({
      message:msg,
      title: 'Resultado'
    });
    document.getElementById("soma").innerHTML = "Soma = " + soma;
    document.getElementById("subtracao").innerHTML = "Subtracao = " + sub;
    document.getElementById("multiplicacao").innerHTML = "Multiplicacao = " + mult;
    document.getElementById("divisao").innerHTML = "Divisao = " + div;
  }
};

function converter() {
  var num = document.getElementById('dias-input').value;

  if (num === '') {
    ons.notification.alert({
      message: 'Preencha a quantidade de dias!!!',
      title: 'Erro!'
    });
  }
  else {
    var temp = num;
    var anos=0;
    var meses=0;
    var semanas=0;
    while(temp>=365)
    {
      temp -= 365;
      anos++;
    }
    while(temp>=30)
    {
      temp -= 30;
      meses++;
    }
    while(temp>=7)
    {
      temp -= 7;
      semanas++;
    }
    dias=temp;
    document.getElementById("anos").innerHTML = "Anos = " + anos;
    document.getElementById("meses").innerHTML = "Meses = " + meses;
    document.getElementById("semanas").innerHTML = "Semanas = " + semanas;
    document.getElementById("dias").innerHTML = "Dias = " + dias;
  }
};

function verifica(){
  var num = document.getElementById('num').value;
  if (num === '') {
    ons.notification.alert({
      message: 'Preencha os Campos!!!',
      title: 'Erro!'
    });
  }else{
    var msg;
    var x;
    var contador=0;
    for (x=1;x<=num;x++) {
       if (num%x==0) {
          contador++;
       }
   }
    if(contador==2)
    {
      msg = "O número <b>é Primo</b>";
    }
    else
    {
      msg = "O número <b>Não é primo</b>";
    }
    var par_impar;
    if(num%2==0) {par_impar="O número é <b>Par</b>";}
    else {par_impar="O número é <b>Impar</b>";}

    document.getElementById("par-impar").innerHTML = par_impar;
    document.getElementById("primo").innerHTML = msg;
  }

};

function consorcio(){
  var valor = document.getElementById('valor-prestacao').value;
  var parcela = document.getElementById('parcelas').value;
  var pago = document.getElementById('parcelas-pagas').value;
  if (valor === '' || parcela === '' || pago === '') {
    ons.notification.alert({
      message: 'Preencha Todos os Campos!!!',
      title: 'Erro!'
    });
  }else{
    var valor_pago = valor * pago;
    var devedor = valor * (parcela - pago);

    document.getElementById("pago").innerHTML = ": " + valor_pago;
    document.getElementById("devedor").innerHTML = ": " + devedor;
  }

};

function combustivel(){

  var distancia = document.getElementById('distancia').value;
  var gasolina = document.getElementById('valor-gasolina').value;
  var etanol = document.getElementById('valor-etanol').value;

  if (distancia === '' || gasolina === '' || etanol === '') {
    ons.notification.alert({
      message: 'Preencha Todos os Campos!!!',
      title: 'Erro!'
    });
  }else{
    var total_gasolina = (distancia/12)*gasolina;
    var total_etanol = (distancia/9)*etanol;
    var vantagem;
    if(total_gasolina <= total_etanol) vantagem = "Melhor opção é Gasolina";
    else vantagem = "Melhor opção é Etanol";

    document.getElementById("gasolina").innerHTML = ": R$ " + total_gasolina.toFixed(2);
    document.getElementById("etanol").innerHTML = ": R$ " + total_etanol.toFixed(2);
    document.getElementById("vantagem").innerHTML = vantagem;
  }

};
