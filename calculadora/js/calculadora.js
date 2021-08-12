var primeiroValor = parseInt(prompt('Digite o primeiro valor:')),
    segundoValor = parseInt(prompt('digite o segundo valor:')),
    operacao = prompt('digite uma operação: ');

    if (operacao == "/") {
        var resultado = primeiroValor / segundoValor;
        document.write("<h3>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h3>");
    } else if (operacao == "*") {
        var resultado = primeiroValor * segundoValor;
        document.write("<h3>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h3>");
    } else if (operacao == "+") {
        var resultado = primeiroValor + segundoValor
        document.write("<h3>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h3>");
    } else if (operacao == "-") {
        var resultado = primeiroValor - segundoValor;
        document.write("<h3>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h3>")
    } else {
        document.write("<h3> Opção inválida </h3>");
    }