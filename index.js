let rs = require('readline-sync');
let score=0;
//DB
const union_terr = "7";
const capital_AP = 'itanagar';
const coffee_pr_state = 'karnataka';
const main_lang = 'meghalaya';
const ele_fall =  'meghalaya';

console.log('Welcome to GK Quiz on India and States!')

let name = rs.question("Before proceeding please enter your name?");
console.log(`Welcome ${name} let's proceed..`);

let q_union_terr = rs.question('India is a federal union comprising twenty-nine states and how many union territories?') 
if(q_union_terr == union_terr){
  score++;
}else{
  score--;
}

let q_capital_AP = rs.question('What is the capital of Arunachal Pradesh?')
if(q_capital_AP == capital_AP){
  score++;
}else{
  score--;
}

let q_coffee_pr_state = rs.question('Which is the largest coffee producing state of India?')
if(q_coffee_pr_state == coffee_pr_state){
  score++;
}else{
  score--;
}

let q_main_lang = rs.question('Which state in India has the main language Khasi?')
if(q_main_lang == main_lang){
  score++;
}else{
  score--;
}

let q_ele_fall = rs.question('In what state is the Elephant Falls located?')
if(q_ele_fall == ele_fall){
  score++;
}else{
  score--;
}

function checkScore(sc){
  if(sc<0){
    sc=0;
  }
  return sc;
}

console.log(`--quiz ended--`);

console.log(`Congrats !! Your final score is ${score}`);