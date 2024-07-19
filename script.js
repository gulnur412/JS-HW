


let number = 10;
if (number === 10) {
  console.log("туура");
} else {
  console.log("туура эмес");
}




let baatir = 100;
if (baatir >= 1 && baatir <= 20) {
  console.log("сиз биринчи этаждасыз");
} else if (baatir >= 20 && baatir <= 40) {
  console.log("сиз экинчи этаждасыз");
} else if (baatir >= 40 && baatir <= 90) {
  console.log("cиз учунчу этаждасыз ");
} else if (baatir >= 90 && baatir <=100) {
  console.log("мындай 4 этаж");
} else {
  console.log("мындай  ир жок");
}



let name = 5;
if (age > 0 && age < 5) {
  console.log("true");
}else {
    console.log("false");
}



let hour =18;
if (hour >=9 && hour<=12 ){
    console.log( "кутман тан" );
}else if (hour>=13 && hour <=17){
    console.log("кутман кун ");
}else {
    console.log("кутман кеч");
}


let n = "Kutman Kechb Nooruz"
console.log(n);



let age  =6;
if ( age >= 6 && age <=65){
    console.log("АРЗАНДАТУУ");
}else{
    console.log("Арзандату жок");
}




let playerSelection = prompt("Select");
let computerSelection = prompt("Select");
if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
  console.log("it's a draw!");
} else if (
  playerSelection.toLowerCase() === "rock" &&
  computerSelection === "scissors"
) {
  console.log("You win! Rock beats scissors.");
} else if (
  playerSelection.toLowerCase() === "rock" &&
  computerSelection === "paper"
) {
  console.log("You lose! Paper beats rock.");
} else if (
  playerSelection.toLowerCase() === "paper" &&
  computerSelection === "rock"
) {
  console.log("You win! Paper beats rock.");
} else if (
  playerSelection.toLowerCase() === "paper" &&
  computerSelection === "scissors"
) {
  console.log("You lose! Scissors beats paper.");
} else if (
  playerSelection.toLowerCase() === "scissors" &&
  computerSelection === "paper"
) {
  console.log("You win! Scissors beats paper.");
} else if (
  playerSelection.toLowerCase() === "scissors" &&
  computerSelection === "rock"
) {
  console.log("You lose! Rock beats scissors.");
}



const cns = 8;
if (cns % 2 === 0) {
             console.log('Число чётное');
 } else {
            console.log('Число нечётное');
            

 }


 console.log('селый болсо ,четное чыгат ,болбосо нечетое чыгат');
 

let num = 5;
const res = num == 5 ? true : false;
console.log(res);
