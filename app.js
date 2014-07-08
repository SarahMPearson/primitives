// this is a single line comment
//added awesome comment

/* this 
 * is
 * a
 * multiline
 * comment
 *
 */
var a=3;
var b=2;
var c=a+b;
console.log('this is a string');
console.log(a);
console.log(b);
console.log(c);

var first = "Sally";
var last = "Smith";
var fullName =first + " " +last;
console.log(fullName);
console.log(first);
console.log(last);

var d  = Math.pow(2, 8);

console.log('2^8 ===', d);

var a = 3;
var b = 4;
var c = 5;
var d = 6;
var e = Math.pow( (((a+b)/(b-c))*((b-a)/(c-d))),(b+a));
console.log(e);



//Branching with if/else statements 
//

var age = 20;

if(age >=21) {
console.log("You are legal to drink");
}else {
  console.log("You are not legal to drink");
}


//This is the maxium allowed rating you can see
//

if(age >=0 && age <=5){
console.log('G Rated');
}else if(age <= 12){
  console.log('PG Rated');
}else if(age <= 16) {
  console.log('PG-13 Rated');
} else if(age === 17){
  console.log("R Rated");
}else if(age === 18){
   console.log("NC-17 Rated");
} else {
  console.log("X Rated");
}

// this is a switch statement
//

var color = "blue";
switch(color) {
  case 'green':
    console.log("I See Green");
    break;
  case 'blue':
    console.log("I See Blue");
    break;
  case 'orange':
    console.log("I See Orange");
    break;
  case 'pink':
    console.log("I See Pink");
    break;
  case 'black':
    console.log("I See Black");
    break;
  default:
     console.log("That Is Not A Valid Color");
}


//while loop
//

a = 1;

while(a < 10) {
   console.log("A is looping . . .", a);
 // a++;
 // a = a+1;
 a += 2;
}

//for loop
//

for(var i = 0; i < 10; i++){
  console.log('i ===', i);
}


