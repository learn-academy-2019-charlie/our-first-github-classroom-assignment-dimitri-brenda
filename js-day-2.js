var price = 101
if(price <= 100){
    console.log("In budget")
}else{
    console.log("Out of budget")
}

var Hunger= false
if (Hunger === true){
    console.log("Go Eat")
} else if(Hunger === false)
{console.log ("Keep Coding")}


var trafficLight = "off"

if(trafficLight==="green"){
    console.log("go")
}else if(trafficLight==="yellow"){
    console.log("slow down");
}else if(trafficLight==="red"){
    console.log("stop");
}else{ console.log("light is broken");}

var a=9
var b=2
 if (a===b)
{ console.log("equal");

}else if (a<b) {
    console.log ("a is less")
} else if (a>b) {
    console.log("a is greater");

}

var num= 0

if(num%2 !== 0){
    console.log("odd");
}else if(num=== 0){
    console.log("the number is 0");
}else if(num%2 === 0){
    console.log("even");
}

var grade =0

if(grade === 100){
    console.log("perfect score");
}else if (grade>=90 && grade<100){
    console.log("A")

}else if (grade>=80 && grade<90) {
    console.log("B")

}else if (grade>=70 && grade<80) {
    console.log("C")

}else if (grade>=60 && grade<70) {
    console.log("D")
}else if (grade>0 && grade<60) {
    console.log("F")
}else if (grade === 0) {
    console.log("no grade avalible")
}
var non
var data = non;

if(typeof(data)==="number"){
    console.log(typeof(data));
}else if(typeof(data)==="string"){
    console.log(typeof(data));
}else if(typeof(data)==="boolean"){
    console.log(typeof(data));
}else if(typeof(data)==="undefined"){
    console.log(typeof(data));
}else{
    console.log("error");
}
//^conditions

var groceryList2=["chips","dip","cookies"]
console.log(groceryList2);
groceryList2.push("soda")
console.log(groceryList2);

var numbers2=[2,4,6,9,10]
    console.log(numbers2)
    numbers2.unshift(0)
    console.log(numbers2);

var groceryList1 = ["apples","carrots","oatmeal"]
console.log(groceryList1);
console.log(groceryList1.concat("granola"))
console.log(groceryList1);

var numbers1= [1,2,3,4,5]
console.log(numbers1)
console.log([0].concat(numbers1))
console.log(numbers1)

var numbers3 = [2,13,6,8,4,2]
console.log(numbers3.indexOf(2));
console.log(numbers3.lastIndexOf(2));

var chars=["y", "a", "r", "r","a"]
console.log("chars"+chars.join(""))

var charsReversed = chars.reverse()
console.log(charsReversed)

console.log(charsReversed.join("-"))

console.log(charsReversed.join(""))

var siblings=["Ian","Chloe","Etta"]
siblings.shift()
siblings.push("Ian")

var parents=["Jim","Jamie"]

var combinedNames= siblings.concat(parents)
console.log(combinedNames);
combinedNames[2]="Jamie"
combinedNames[3]="Jim"
combinedNames[4]="Ian"
combinedNames.reverse()
console.log(combinedNames);
//^arrays

function marco(){
    return"Polo"
} console.log(marco())

function greeting(name){
    return "Welcome "+name
}
console.log(greeting("Dimitri"));

function oddOrEven (number){
    if (number%2===0){return number + " is even"}
    else if (number%2 !==0){return number + " is odd"} else { return "undfined"}
}
    console.log (oddOrEven (3))

function triple(num) {
    return num*3
}
console.log(triple(3));

function multiply(a,b)
{return a*b}
console.log (multiply(4,7))

function divisibleBy(a,b) {
    if(a%b === 0){
        return a+" is evenly divisible by "+b
    }else if (a%b!==0) {
        return a+" is not evenly divisible by "+b
    }
}

console.log(divisibleBy(33,5))

function greaterNum (a,b)
{if (a>b){return a +" is Greater"}
else if (a<b) {return b +" is Greater"}
else if (a=b) {return a + " equal"}

} console.log(greaterNum(4,9))
console.log(greaterNum(14,23))

function helloWorld(lang) {
    if(lang ==="en"){
        return "Hello, World"
    }else if(lang==="es"){
        return "Hola Mundo"
    }else if (lang==="de") {
        return "Hallo Welt"
    }

}
console.log(helloWorld("en"));
console.log(helloWorld("es"));
console.log(helloWorld("de"));

function assignGrade(grade){
if(grade === 100){
    console.log("perfect score");
}else if (grade>=90 && grade<100){
    console.log("A")

}else if (grade>=80 && grade<90) {
    console.log("B")

}else if (grade>=70 && grade<80) {
    console.log("C")

}else if (grade>=60 && grade<70) {
    console.log("D")
}else if (grade>0 && grade<60) {
    console.log("F")
}else if (grade === 0) {
    console.log("no grade avalible")
}}
assignGrade(96);
assignGrade(72);
assignGrade(100);
//^functions
