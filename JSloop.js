// condition
let age = 19;
if (age >= 19) {
  console.log("you are eligible for vote");
} else {
  console.log("uh are not eligible");
}

let signal = "white";
if (signal == "red") {
  console.log("please stop");
} else if (signal == "yellow") {
  console.log("please Go slow");
} else if (signal == "green") {
  console.log("please go fast");
} else {
  console.log("invalid");
}

//     for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//     while loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//  do while loop

let i = 0;
do {
  console.log("hello world");
  i++;
} while (i < 10);

//  TURNRY

userlogin = false;
userlogin ? console.log("Home page") : console.log("Login page");

// NORMAL PRACTICE OF YESTERDAY
let price = 6000;
if (price >= 6000) {
  console.log("yes uh are richest men");
} else {
  console.log("you are not richest uh are poor men");
}

for (let i = 1; i < 11; i++) {
  console.log(i);
}

let signal = "yellow";
if (signal == "red") {
  console.log("please stop");
} else if (signal == "yellow") {
  console.log("please u go slow");
} else if (signal == "green") {
  console.log("please uh go fast");
} else console.log("uh are bitch");

function minusnum(num1, num2) {
  return num1 - num2;
}
console.log(minusnum(7 - 6));
