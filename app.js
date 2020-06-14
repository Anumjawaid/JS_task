// Assignment 1
// Q:Write a script to greet your website visitor using JS alert box.
alert("Greetings");
// 2. Write a script to display following message on your web page:
alert("Error!Please Enter a Valid Pasword");


// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land...\nHappy Coding");

// 4. Write a script to display following messages in sequence:
alert("WElcome to Js land");
alert()

// 5. Generate the following message through browser’s developer console:
console.log("Hello! I can run JS through my web browser's console")
// ****************************************
// Assignment2
// 1. Declare a variable called username.
var userName;
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var Fullname="ANUM JAWAID"
// 3. Write script to
// a) Declare a JS variable, titled message.
var titlemsg;
// b) Assign “Hello World” to variable message
titlemsg="HELLO WORLD";
// c) Display the message in alert box.
alert(titlemsg);
// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var name="John";
var age=21
var des="WEB AND MOBILE HYBRID DEVELOPMENT";
alert(name)
alert(age)
alert(des)
// Write a script to display the following alert using one JS variable:
alert("PIZZA\nPIZZ\nPI\nP")
// Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email="anumjawaid99@gmail.com"
alert(email)
// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book="A smarter way to learn JavaScript"
alert(book)
// Write a script to display this in browser through JS
document.write("YAY I can write content through js")
// Store following string in a variable and show in alert and browser through JS
var t="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(t)
// *************************************************************
// Assignment 3
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age=21
alert(age)
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
alert("You have visited this site "+age+" times")
// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthyear=1998;
document.write("My birth year is " ,birth_year);
document.write("<br>Data type of my declared variable is number");
// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var site = "XYZ Clothing Store" 
var name = 'John Doe';
var pro_title = "T-Shirt" ;
var quantity = 5 ;

document.write("<strong>" ,name, "</strong> ordered <strong>" , quantity , " ", pro_title , "</strong>(s) on ",site)
// *************************************
// Assignment 4
// Declare 3 variables in one statement.
var a,b,c;
// 2. Declare 5 legal & 5 illegal variable names.
//   legal
var a; var bole; var b_p;var _g; var t1;
// illegal
var alert;var @sp; var 1; var 1t; var =;

// 3. Display this in your browser
document.write("<h1>“Rules for naming JS variables”</h1>");
document.write("Variable names can only contain $,For example and my_1stVariable");
document.write("Variable names can only contain $name,name or _name");
document.write("Variable names are case Sensitive");
document.write("Variable names should not be JS Keywords");

// *************************************
// Assignment 5
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var a=4
var b=3
var c=a+b
document.write("SUM of &nbsp ",a,"and &nbsp",b ,"is",c);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction
var c=a-b
document.write("SUM of &nbsp ",a,"and &nbsp",b ,"is",c);
// multiplication
var c=a*b
document.write("SUM of &nbsp ",a,"and &nbsp",b ,"is",c);
// division
var c=a/b
document.write("SUM of &nbsp ",a,"and &nbsp",b ,"is",c);
// modulus
var c=a%b
document.write("SUM of &nbsp ",a,"and &nbsp",b ,"is",c);

// Do the following using JS Mathematic Expressions
var a;
document.write("Value after variable declaration is &nbsp",a);
a=5;
document.write("Value after Initialization &nbsp",a);
a=++a;
document.write("Value after Increment is &nbsp",a);
a=a+7;
document.write("Value after addition is $nbsp",a);
a=--a;
document.write("Value after decrement is &nbsp",a);
var c =a%3;
document.write("the remainder  is &nbsp",a);
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var cost=600
var tc=600*5;
document.write("The cost of 5 movie tickets are &nbsp",tc)

// 5. Write a script to display multiplication table of any number in your browser. E.g
var a=4;
for (i=1;i<=10;i++){
    document.write("4*",i,"=",a*i,"<br>")
}
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
var tc=25;
var tf=70;
var c=(tf-32)*(5/9)
var f=(tc*(9/5))+32
document.write(tc,"C is &nbsp",f)
document.write(tf,"F is &nbsp",c)

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
var p1=650;
var p2=100
var q1=3
var q2=7
var sc=100
var tc=(p1*q1)+(p2*q2)+sc
document.write("<h1>Shopping Cart</h1>")
document.write("Price of item 1 is:",p1)
document.write("Price of item 2 is:",p2)
document.write("Quantity of item 1 is:",q1)
document.write("Quantity of item 2 is:",q2)
document.write("Shipping charges is:",sc)
document.write("</br>")
document.write("</br>")
document.write("Total Cost  is:",tc)
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var tn=980;
var mo=804
var p=(mo/tm)*100
document.write("<h1>MARK SHEET</h1>\nTOtal Marks :",tn,"\nMArks Obtained:",mo,"\nPercentage:",p)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
var d=10;
var s=25;
var tc=(d*104.80)+(s*28)
document.write("Total Curency in PKR:",tc)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
var a=2;
var s=(a+(5*10))/2
// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
var cy=2020
var by=1998
var a=cy-by
document.write("Current Year:",cy,"\nBirth Year:",by,"\nYour Age:",a)

// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
var r=20
var c=2*3.142*r
var a=3.142*r*r
document.write("Radius of Circle :",r,"\nThe Circumference is :",c,"\nThe Area is :",a)

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.

var s="Choclate Chip"
var a=20
var ma=55
var d=3
document.write("“You will need 150 to last you until the ripe old age of 55")

// ************************************************
// Assignment 6
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a=10
document.writeln("The value of a is:",a)
a=++a
document.writeln("The value of ++a is:",a)
document.writeln("NOW The value of a is:",a)
document.writeln("The value of a++ is:",a)
a=a++
document.writeln("NOW The value of a is:",a)
document.writeln("The value of a-- is:",a)
a=a--
document.writeln("NOW The value of a is:",a)

// 2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1; var result = --a - --b + ++b + b--
// --a ==>0
// --a - --b;0-(-1)=1
// --a - --b+ ++b;0-(-1) +3=4
// --a - --b+ ++b+ b--;0-(-1) +3

// 3. Write a program that takes input a name from user & greet the user.
var a=prompt("Write Your Name:")
document.write("Greetings :",a)

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var a=prompt("enter number:")
if (a==0){
    for (i=1;i<=10;i++){
        document.write("5*",i,"=",a*i,"<br>")
    }
}
else{
    for (i=1;i<=10;i++){
        document.write(a,"*",i,"=",a*i,"<br>")
    }
}

// // 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var a1=prompt("Enter Subject Name")
var a2=prompt("Enter Subject Name")
var a3=prompt("Enter Subject Name")
var tm=100
var m1=Number(prompt("Enter Marks of ",a1))
var m2=Number(prompt("Enter Marks of ",a2))
var m3=Number(prompt("Enter Marks of ",a3))
var mm=m1+m2+m3
var s=" "

var p=(mm)/300
document.write("<table><tr> <th>Subjects</th> <th>total Marks</th> <th>obtained marks</th><th>Percentage</th></tr>")
document.write("<tr><td>",a1,"</td><td>",tm,"</td><td>",m1,"</td><td>",m1,"</td></tr>")
document.write("<tr><td>",a2,"</td><td>",tm,"</td><td>",m2,"</td><td>",m2,"</td></tr>")
document.write("<tr><td>",a3,"</td><td>",tm,"</td><td>",m3,"</td><td>",m3,"</td></tr>")
document.write("<tr><td>",s,"</td><td>",tm,"</td><td>",mm,"</td><td>",pp,"</td></tr></table>")

// ********************************
// Assignment9-11

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var a=prompt("In which City do you Live:")
a=a.toLowerCase()
if(a=="karachi"){
    document.write("“Welcome to city of lights”")
}
else{
    document.write("Welcome")
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var a=prompt("In which City do you Live:")
a=a.toLowerCase()
if(a=="male"){
    document.write("Good Morning Sir")

}
else{
    document.write("Good Morning Madam")

}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var a=prompt("please give road traffic signal color:")
a=a.toLowerCase()
if(a==="red"){
    document.write("Must Stop")
}
else if(a==="Yellow"){
    document.write("Ready to move")
}
else{
    document.write("Move Now")
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var a=Number(prompt("Enter remainning fuel in car"))
if (a<=0.25)
{
    document.write("Please Refill the fuel in car")
}
else{
    document.write("Go Ahead")
}
// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

var m3=Number(prompt("Enter Marks Obtained "))
var tm=Number(prompt('Enter total Marks'))
var mm=(m3)/tm
var p=mm*100
var g='fail'
var r="SORRy"
if (p>=80){
    g="A-one"
    r="Excellent"

}
else if (p>=70){
    g="A"
    r="Good"

}
else if(p>=60){
    g="B"
    r="You Need To improve"

}
else{
    r="SORRy"
    g='fail'
}
document.write("<h1>Mark Sheet</h1>")
document.writeln("Total marks{tm}")
document.writeln("marks Obtained{m3}")
document.writeln("Percentage{p}")
document.writeln("Grade{g}")
document.writeln("Remarks{g}")

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var a=6
var b=Number(prompt("Guess The number:"))
if (b===a){
    document.write("“Bingo! Correct answer”.")

}
else if (b===a+1){
    document.write("“Close enough to the correct answer”..")
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var a=Number(prompt("Guess The number:"))
if (a%3===0){
    document.write("Diviible")
}
else{
    document.write("Not Divisible")

}
// 9. Write a program that checks whether the given input is an even number or an odd number
var b=Number(prompt("Guess The number:"))
if(b%2===0){
    document.write("Even")
}
else{
    document.write("Even")

}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
var a=Number(prompt("Enter Temprature:"))
if (a>40){
    document.write("“It is too hot outside.”")
}
else if(a>30){
    document.write("“The Weather today is Normal.”")


}
else if(a>20){
    document.write("“Today’s Weather is cool.”")

}
else if(a>10){
    document.write("OMG! Today’s weather is so Cool.”")


}
// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
var a=Number(prompt("Enter Number:"))
var b=Number(prompt("Enter Number:"))
var c=Number(prompt("Enter Operater:"))
if(c==='+'){
    document.write(a+b)
}
else if(c==='-'){
    document.write(a-b)
}
else if(c==='*'){
    document.write(a*b)
}
else if(c==='/'){
    document.write(a/b)
}
else if(c==='%'){
    document.write(a%b)
}

// *****************************************************************
// Assignment12-14
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var a=Number(prompt("Enter Number:"))
var b=Number(prompt("Enter Number:"))
if (a>b){
    document.write("{a} is reater than {b}")
}
else if(a===b){
    document.write("{a} is equal to {b}")


}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var a=Number(prompt("Enter Number:"))
if(a.startswith('+')){
    document.write("Poditive")
}
else if(a.startswith('-')){
    document.write("Negative")
}
else{
    document.write("zero")
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var a=prompt("Enter String:")
var v=['a','e','i','o','u']
if (a in v){
    document.write("true")
}
else{
    document.write("false")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
var a=prompt("Enter Password:")


// b. Asks user to enter his/her password
var b=prompt("Enter Password:")

// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
if(a===null){
    document.write("Please enter your password”")
}
else if(a===b){
    document.write("Correct")
}
else{
    document.write("Incorrect")
}

// 6. This if/else statement does not work. Try to fix it:
 var greeting;
  var hour = 13;
   if (hour < 18) { greeting = "Good day"}
    else 
    {greeting = "Good evening"; }


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var t=Number(("Enter time in 24hours clock format"))
if((t>=0000)&&(t<1200)){
    document.write("Good Morning")
}
else if(t>=1200){
  document.write("Good Afternoon")
}
else if(t>=1700&&t<2100){
    document.write("Good Evening")
}
else  if(t>=2100&&t<=2359){
    document.write("Good night")
}

// *****************************************************
// Assignment 13-15
// 1. Declare an empty array using JS literal notation to store student names in future.
var a=[]
// 2. Declare an empty array using JS object notation to store student names in future.
var a=[]
// 3. Declare and initialize a strings array.
var a=["a","b","c"]
// 4. Declare and initialize a numbers array.https://github.com/Anumjawaid/JS_task/upload
var a=[1,2,34,5]
// 5. Declare and initialize a boolean array.
var t=[true,false]
// 6. Declare and initialize a mixed array.
var b=[1,2,"a","sd sd"]
// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var q=["SSC","HSC","BCS","BS","Bcom","Ms","M.Phil","PhD"]
for(a in q){
    document.writeln(a)
}
// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var st=["Michael","John","Tony"]
var p=["64%","46%","98%"]
for(a,i in Enumerator(st,p)){
    document.write("score of",a,"is",i)
}
























 



