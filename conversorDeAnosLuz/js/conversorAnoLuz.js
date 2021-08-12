var input = document.querySelector("input"),
    km,
    velocidadeEmAnosLuz = 9500000000000;

    input.focus();
    
    function resultado(){
        var resposta = document.getElementById("resposta");
        resposta.textContent = "";
        resposta.append('Um mochileiro viajaria ' + km + ' KM  em ' + parseFloat(input.value) + ' anos-luz.');
        input.value = "";
        input.focus();
    } 

    function converter() { 
        km = parseFloat(input.value * velocidadeEmAnosLuz);
        resultado();
    }