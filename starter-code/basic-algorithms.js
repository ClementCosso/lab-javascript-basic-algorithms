// question 1
var hacker1 = “Clement” ;
// question 2
console.log(“the driver’s name is “+ hacker1);
// question 3
var nav = prompt(“what is your navigator?“);
// question 4
console.log(“the navigator is ” + nav)

// question 5
if (nav.length > hacker1.length) {
 console.log(“Yo, navigator got the longest name, it has ” + nav.length + ” characters”) }
else if (hacker1.length > nav.length) {
 console.log(“The Driver has the longest name, it has ” + hacker1.length + ” characters”) }
else { console.log(“wow, you both got equally long names, ” + hacker1.length + ” characters!!“)}

// question 6
var hacker2 = hacker1[0]
for ( i = 1 ; i < hacker1.length  ; i++) {
 var hacker2 = hacker2 +” “+ hacker1[i];
}
console.log(hacker2.toUpperCase())


// question 7
var hacker3 = hacker1[0]

for ( i = 1 ; i < hacker1.length ; i++) {
 var hacker3 = hacker1[i] + “” + hacker3;
}
console.log(hacker3);


// question 8
var hackerLower = hacker1.toLowerCase()
var navLower = nav.toLowerCase()

var max = hacker1.length

if ( hacker1.length < nav.length) {
 var max = nav.length;
}

if ( hackerLower === navLower ) {
 console.log(“What?! You both got the same name?“)
} else {
for (i = 0 ; i < max ; i++ )
 if (hackerLower[i] < navLower[i]) {
     console.log(“The driver’s name goes first”) ;
     break ;
     } else if (hackerLower[i] > navLower[i]) {
     console.log(“Yo, the navigator goes first definitely”) ;
     break ;
  }
}
