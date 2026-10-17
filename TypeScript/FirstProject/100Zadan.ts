//Zad1-------------------------------------------------------------------------------------------
let age:number = 25;
console.log(`My age is ${age}`);
//Zad2-------------------------------------------------------------------------------------------
let firstName:string = "Ada";
console.log(`My name is ${firstName}`);
//Zad3-------------------------------------------------------------------------------------------
let isActive:boolean = true;
console.log(`Is active: ${isActive}`);
//Zad4-------------------------------------------------------------------------------------------
const Price:number = 99.99;
console.log(`The price is ${Price}`);
//Zad5-------------------------------------------------------------------------------------------
const fName:string = "Ava";
const lName:string = "Devine";
const fullName:string = fName + " " + lName;
console.log(`My full name is ${fullName}`);
//Zad6-------------------------------------------------------------------------------------------
let width:number = 10;
let height:number = 5;
let area:number = width * height;
console.log(`The area of the rectangle is ${area}`);
//Zad7-------------------------------------------------------------------------------------------
const a:number = 17;
const b:number = 5;
let sum:number = a%b;
console.log(`The rest of the proces of dividing ${a} by ${b} is ${sum}`);
//Zad8-------------------------------------------------------------------------------------------
const temperatureCelcius:number = 20;
const temperatureFahrenheit:number = (temperatureCelcius * 9/5) + 32;
console.log(`The temperature in Fahrenheit is ${temperatureFahrenheit}`);
//Zad9-------------------------------------------------------------------------------------------
const tab:number[] = [1,2,3];
console.log('The declared tab looks like this: ',tab);
//Zad10-------------------------------------------------------------------------------------------
const krotka:[number,string] = [27,"How's it going?"];
console.log(`The declared tuple looks like this: ${krotka}`);
//Zad11-------------------------------------------------------------------------------------------
const personAge:number = 19;
function isAdult(age:number):boolean
{
    if(personAge >= 18)
    {
        
        console.log("You are an adult.");
        return true;
    }
    else
    {
        console.log("You are a minor.");
        return false;
    }
}
isAdult(personAge);
//Zad12-------------------------------------------------------------------------------------------
const valForEvencheck:number = 8;
function isEven(num:number):boolean
{
    if(num%2 === 0)
        {
            console.log(`${num} is an even number.`);
            return true;
        }
    else
        {
            console.log(`${num} is not an even number.`);
            return false;
        }
}
isEven(valForEvencheck);
//Zad13--------------------------------------------------------------------------------------------
function maxOfTwo(num1:number, num2:number):number
{
    return num1 > num2 ? num1 : num2;
}
const val1:number = 10;
const val2:number = 20;
const maxValue:number = maxOfTwo(val1, val2);
console.log(maxValue);
//Zad14--------------------------------------------------------------------------------------------
const n:number = 0
function signType(x:number): void
{
    if(x > 0)
    {
        console.log(`${x} is a positive number.`);
    }
    else if(x < 0)
    {
        console.log(`${x} is a negative number.`);
    }
    else
    {
        console.log(`${x} is zero.`);
    }
}
signType(n);
//Zad15--------------------------------------------------------------------------------------------
const targetValue:number = 5;
let sumOfNumbers:number = 0;
for(let i:number = 1; i <= targetValue; i++)
{
    sumOfNumbers += i;
}
console.log(`The sum of numbers from 1 to ${targetValue} is ${sumOfNumbers}`);
