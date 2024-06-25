var inputNome = "Digite seu nome: ";
const nome = inputNome;
var inputXP = "Informe o seu XP: ";
const xp = parseInt(inputXP);

var level = "";

switch(true){
    case (xp < 1000):
        level = "Ferro";
        break;
    case (xp > 1000 && xp <= 2000):
        level = "Bronze";
        break;
    case (xp > 2000 && xp <= 7000):
        level = "Prata";
        break;
    case (xp > 5000 && xp <= 7000):
        level = "Ouro"
        break;
    case (xp > 7000 && xp <= 8000):
        level = "Platina";
        break;
    case (xp > 8000 && xp <= 9000):
        level = "Ascendente";
        break;
    case (xp > 9000 && xp <= 10000):
        level = "Imortal";
        break;
    case (xp > 10000):
        level = "Radiante";
        break;
}

console.log("O herói de nome " + nome + " está no nível " + level);
