var input = document.querySelector("input"),
    valorEmDolar,
    dolar = 5.31;

    input.focus();

    function resultado(){
        var resposta = document.getElementById("resposta");
        resposta.textContent = "";
        resposta.append(parseFloat(input.value) + " dólares equivalem a " + valorEmDolarFixado + " reais.");
        input.value = "";
        input.focus();
    } 
    
    function converter() {
        valorEmDolar = parseFloat(input.value * dolar);
        valorEmDolarFixado = valorEmDolar.toFixed(2);
        resultado();
    }