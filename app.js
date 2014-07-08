// this is a single line comment
//

/* this 
 * is a 
 * multiline 
 * comment
 */

var a = 3;
var b = 2;
var c = a + b;


console.log('this is a string');
console.log(a);
console.log(b);
console.log(c);

var first = 'Sally';
var last = 'Smith';
var fullName = first + ' ' + last;

console.log(first);
console.log(last);
console.log(fullName);

var d = Math.pow(2,8)
  console.log('2^8 ===', d)


a=3;
b=4;
c=5;
var d= 6;

var x=((a+b)/(b-c))*((b-a)/(c-d))
var y = a+b
var e = Math.pow(x,y)
console.log(e)



//branching with if/else statements

var age = 3;

if (age >=21){
console.log('You are legal to drink');
}else{
console.log('You are NOT legal to drink');
}

//this is the maximum allowed rating you can see
if (age >= 0 && age <= 5){
console.log('G rated');
}else if (age <=12){
console.log('PG rated');
}else if (age <=13){
console.log('PG-16 rated');
}else if (age ===17){
console.log('NC-17 rated');
}else {
console.log('R rated');
}




//this is a switch statement
//


var color ='orange'

switch (color){
  case 'green':
    console.log('I see green');
    break;
  case 'blue':
    console.log('I see blue');
    break;
  case 'orange':
    console.log('I see orange');
    break;
  case 'pink':
    console.log('I see pink');
    break;
  case 'black':
    console.log('I see black');
}




//while loop
//


a=1;

while(a<10){
  console.log('a is looping...', a);
  a++;
  //a=a+1
  //a+=1
}


//for loop
//

for (var i = 0; i<10; i++){
  console.log('i===',i);
}


