var cartaRowlet = {
    nome: "Rowlet",
    imagem: "https://gartic.com.br/imgs/mural/ma/mateus_kun/rowlet-p-mizaqui.png",
    atributos:{
       Ataque: 229,
       Defesa: 229,
       Velocidade: 201
     }
  }
  
  var cartaLitten = {
    nome: "Litten",
    imagem: "https://www.pokemongroup.com/wp-content/uploads/2017/04/Ash-Catches-a-New-Pokemon-in-Anime-Series.png",
    atributos:{
      Ataque: 251,
      Defesa: 196,
      Velocidade: 262
     }
  }
  
  var cartaPopplio = {
    nome: "Popplio",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/728.png",
    atributos:{
       Ataque: 227,
       Defesa: 227,
       Velocidade: 196
     }
  }
  
  var cartaPikachu = {
    nome: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    atributos:{
       Ataque: 229,
       Defesa: 196,
       Velocidade: 306
     }
  }
  
  var cartaDartrix = {
      nome: "Dartrix",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AieTSmUREl12XMVbI-nW2J1jsSzwjKi5sQ&usqp=CAU",
      atributos: {
       Ataque: 273,
       Defesa: 273,
       Velocidade: 223
      }
  }
  
  var cartaTorracat = {
      nome: "Torracat",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qCtuE5AMLA-va3PZlp1kPdnUe6BoDoUROw&usqp=CAU",
      atributos: {
         Ataque: 295,
         Defesa: 218,
         Velocidade: 306
      }
  }
  
  var cartaBrionne = {
      nome: "Brionne",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/729.png",
      atributos: {
        Ataque: 260,
        Defesa: 260,
        Velocidade: 218
      }
  }
  
  var cartaRaichu = {
      nome: "Raichu",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026_f2.png",
      atributos: {
        Ataque: 295,
        Defesa: 218,
        Velocidade: 350
      }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaRowlet, cartaLitten, cartaPopplio, cartaPikachu, cartaDartrix, cartaTorracat, cartaBrionne, cartaRaichu]
  //            0           1           2          3         4            5            6           7     
  
  var pontosJogador = 0
  var pontosMaquina = 0
  
  atualizaPlacar()
  atualizaQuantidadeDeCartas()
  
  function atualizaQuantidadeDeCartas(){
    var divQuantidadeDeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
    
    divQuantidadeDeCartas.innerHTML = html
  }
  
  function atualizaPlacar(){
    var divPlacar = document.getElementById("placar")
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
    
    divPlacar.innerHTML = html
  }
  
  function sortearCarta() {
      var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
      cartaMaquina = cartas[numeroCartaMaquina]
      cartas.splice(numeroCartaMaquina, 1)
  
      var numeroCartaJogador = parseInt(Math.random() * cartas.length)
      cartaJogador = cartas[numeroCartaJogador]
      cartas.splice(numeroCartaJogador, 1)
    
      document.getElementById('btnSortear').disabled = true
      document.getElementById('btnJogar').disabled = false
  
      exibeCartaJogador()
  }
  
  function exibeCartaJogador() {
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status'>"
  
      divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function obtemAtributoSelecionado() {
      var radioAtributo = document.getElementsByName('atributo')
      for (var i = 0; i < radioAtributo.length; i++) {
          if (radioAtributo[i].checked) {
              return radioAtributo[i].value
          }
      }
  }
  
  function jogar() {
      var divResultado = document.getElementById("resultado")
      var atributoSelecionado = obtemAtributoSelecionado()
  
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Venceu</p>'
          pontosJogador++
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Perdeu</p>'
          pontosMaquina++
      } else {
          htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    
      if (cartas.length == 0){
      alert('Fim de jogo.')
      if (pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Parabéns, você venceu!</p>'
      } else if (pontosMaquina < pontosJogador){
          htmlResultado = '<p class="resultado-final">Você perdeu.</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Você empatou.</p>'
        }
      } else {
        document.getElementById('btnProximaRodada').disabled = false
      }
    
  
      divResultado.innerHTML = htmlResultado
      document.getElementById('btnJogar').disabled = true
    
      atualizaPlacar()
      exibeCartaMaquina()
      atualizaQuantidadeDeCartas()
  }
  
  function exibeCartaMaquina() {
      var divCartaMaquina = document.getElementById("carta-maquina")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
      var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaMaquina.atributos) {
          opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status --spacing'>"
  
      divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
    
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
  }