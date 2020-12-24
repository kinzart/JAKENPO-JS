


		
		function set() {

			const cpu = Math.floor(Math.random()*3)



			const human = document.getElementById('humanChoice').value

			if (cpu == 0) {
				console.log("CPU = PAPEL")
			} else if (cpu == 1){
				console.log("CPU = PEDRA")
			} else {
				console.log("CPU = TESOURA")
			}
			
			console.log("HUMAN = " + human)
			


			const hw = "HUMAN WINS"
			const hl = "HUMAN LOSES"
			const em = "DRAW"

var rs = 0

if (human == "PAPEL" && cpu == 0) {
    console.log(em);
    rs = 0
} else if (human == "PAPEL" && cpu == 1) {
    console.log(hw + " = PAPEL EMBRULHA PEDRA");
    rs = 1
}  else if (human == "PAPEL" && cpu == 2) {
    console.log(hl + " = TESOURA CORTA PAPEL");
    rs = 1
} 


// human pedra

if (human == "PEDRA" && cpu == 0) {
    console.log(hl + " = PAPEL EMBRULHA PEDRA");
    rs = -1
} else if (human == "PEDRA" && cpu == 1) {
    console.log(em);
    rs = 0
}  else if (human == "PEDRA" && cpu == 2) {
    console.log(hw + " = PEDRA QUEBRA TESOURA");
    rs = 1
}


// HUMAN TESOURA

if (human == "TESOURA" && cpu == 0) {
    console.log(hw + " = TESOURA CORTA PAPEL");
    rs = 1
} else if (human == "TESOURA" && cpu == 1) {
    console.log(hl + " = PEDRA QUEBRA TESOURA");
    rs = -1
}  else if (human == "TESOURA" && cpu == 2) {
    console.log(em);
    rs = 0
}

var resultadoLimpo = " "

if (rs == -1) {
	resultadoLimpo = "Voce perdeu"
} else if (rs == 0) {
	resultadoLimpo = "Empate"
} else {
	resultadoLimpo = "Voce ganhou"
}

const vf = document.getElementById("resultado").innerHTML = resultadoLimpo
		} //function end

	