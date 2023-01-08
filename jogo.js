var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?','')
var criaMosquitoTempo=2000

if(dificuldade==='normal'){
	criaMosquitoTempo = 2000
}else if(dificuldade === 'dificil'){
	criaMosquitoTempo = 1500
}else if(dificuldade === 'queroSofrer'){
	criaMosquitoTempo = 1000
}
function ajustaTelaDeFundo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(altura,largura)
}
ajustaTelaDeFundo()

//intervalo
var cronometro = setInterval(function() {
	tempo -= 1

	if(tempo <= 0 ){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href='victory.html'
	}
	document.getElementById('cronometro').innerHTML = tempo
	
}

,1000)

function positionMosquito() {
	var positionY = (Math.random() * altura) -90
	var positionX = (Math.random() * largura) -90

	//Remover mosquito
	if (document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas > 3) {
			window.location.href='gameOver.html'
		} else {
			document.getElementById('vida' + vidas).src= "imagens/coracao_vazio.png"
			vidas++
		}
		
	}

	positionX = positionX < 90 ? 0 : positionX
	positionY = positionY < 90 ? 0 : positionY
	//	console.log(positionY, positionX)
	//Criação elemento HTML IMG
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = alteraTamanho() + ' ' + alteraLado()
	mosquito.style.left = positionX + 'px'
	mosquito.style.top = positionY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	
	mosquito.onclick = function() {
		this.remove()
	}
	
	document.body.appendChild(mosquito)
	//console.log(alteraLado())
}

function alteraTamanho(){
	var classe = Math.floor(Math.random() * 3) 
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 3:
			return 'mosquito3'
	}

}

function alteraLado() {
	var classe = Math.floor(Math.random() * 2) 
	
	switch(classe) {
		case 0:
			return 'ladoDireito'
		case 1:
			return 'ladoEsquerdo'
		
	}

}