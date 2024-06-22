var inputNome = "Digite seu nome: ";
const nome = inputNome;
var inputXP = "Informe o seu XP: ";
const xp = parseInt(inputXP);
var level = "";

if(xp < 1000){
    level = "Ferro";
}
if(xp > 1000 && xp <= 2000){
    level = "Bronze";
}
if(xp > 2000 && xp <= 5000){
    level = "Prata";
}
if(xp > 5000 && xp <= 7000){
    level = "Ouro";
}
if(xp > 7000 && xp <= 8000){
    level = "Platina";
}
if(xp > 8000 && xp <= 9000){
    level = "Ascendente";
}
if(xp > 9000 && xp <= 10000){
    level = "Imortal";
}
if(xp > 10000){
    level = "Radiante";
}
