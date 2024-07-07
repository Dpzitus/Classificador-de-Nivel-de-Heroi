const nome = "Trystan"
let exp = 0
const monstro = 50
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

//Meryl tem o objetivo se tornar um herói classe Ouro (nível 3), ficando entre o mínimo e o máximo para se graduar. Você pode testar as outras graduações, alterando o número abaixo de 0 a 7
let meta = niveis[3]

//Para cada graduação, é necessário
switch(meta){
    case "Ferro":
    exp += monstro * 10
    break
    
    case "Bronze":
	for(let cont = 0; cont < 32; cont++){
		exp += monstro
	}
    break

    case "Prata":
	for(let cont = 0; cont < 78; cont++){
		exp += monstro
	}
    break

    case "Ouro":
	for(let cont = 0; cont < 123; cont++){
		exp += monstro
	}
    break
    
    case "Platina":
	for(let cont = 0; cont < 154; cont++){
		exp += monstro
	}
    break

    case "Ascendente":
	for(let cont = 0; cont < 171; cont++){
		exp += monstro
	}
    break

    case "Imortal":
	for(let cont = 0; cont < 196; cont++){
		exp += monstro
	}
    break

    case "Radiante":
	for(let cont = 0; cont < 215; cont++){
		exp += monstro
	}
    break
}

let texto = ""
let frase = ""

if(exp < 1001){
texto = " ainda está na graduação "
frase = " mesmo após alguns embates."
}
else{
texto = " conquistou sua graduação "
frase = " após vários confrontos monstruosos"
}

let metaMonstro = exp / monstro

console.log("Nosso aclamado herói " + nome + texto + meta + frase)
console.log("XP adquirido: " + exp)
console.log("Monstros derrotados: " + metaMonstro)