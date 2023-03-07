// alert('Hello world');

let userName = prompt("Ciao! Come ti chiami?");
console.log(userName, typeof userName)

let userSurname = prompt("Ciao! Qual è il tuo cognome?");
console.log(userSurname, typeof userSurname)

let userColor = prompt("Ciao! Qual è il tuo colore preferito?");
console.log(userColor, typeof userColor)

let userPassword = userName + userSurname + userColor + 21;

const message = `La tua password è ${userPassword}`;

document.getElementById('user-pw').innerHTML = message