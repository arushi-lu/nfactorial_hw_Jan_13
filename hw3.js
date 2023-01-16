// Task 1
const user = {};
alert("Hello, I want to know some info about you)");
let mes1 = "What's your name?";
const user_name = prompt(mes1, "Your name");
user.name = user_name;
let mes2 = "What's your age?";
const age = prompt(mes2, "Your age");
user['age'] = age;
let mes3 = "What's your gender?";
const user_gender = prompt(mes3, "male/female");
user.gender = user_gender;
const res = confirm("Are you feeling ok");
if(res){
    alert("That's cool");
}else{
    alert("Everything is gonna be fine!")
}

console.log(user);

//Task 2
const num = prompt("Enter some number", 0);

if(Number(num)){
    alert(num);
}else{
    alert("You entered not a number!")
}

//Task 3

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a){
    case 0:
        alert(0);
    case 1:
        alert(1);
    case 2:
        alert(2,3);
    case 3:
        alert(2,3);
}

//  Task 4.1
let sum = 0;
for(let i = 0; i < 101; i ++){
    if(i%2==0){
        sum+=i;
    }
}
console.log("Sum = " + sum);

//  Task 4.2
let i = 0;
while(i != 3){
    alert( `number ${i}!` );
    i++;
}