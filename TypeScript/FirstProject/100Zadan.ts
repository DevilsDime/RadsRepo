//Zad1-------------------------------------------------------------------------------------------
console.log("Zad1---------------------------------------------------------------------------------------------");
let age:number = 25;
console.log(`My age is ${age}`);
//Zad2-------------------------------------------------------------------------------------------
console.log("Zad2---------------------------------------------------------------------------------------------");
let firstName:string = "Ada";
console.log(`My name is ${firstName}`);
//Zad3-------------------------------------------------------------------------------------------
console.log("Zad3---------------------------------------------------------------------------------------------");
let isActive:boolean = true;
console.log(`Is active: ${isActive}`);
//Zad4-------------------------------------------------------------------------------------------
console.log("Zad4---------------------------------------------------------------------------------------------");
const Price:number = 99.99;
console.log(`The price is ${Price}`);
//Zad5-------------------------------------------------------------------------------------------
console.log("Zad5---------------------------------------------------------------------------------------------");
const fName:string = "Ava";
const lName:string = "Devine";
const fullName:string = fName + " " + lName;
console.log(`My full name is ${fullName}`);
//Zad6-------------------------------------------------------------------------------------------
console.log("Zad6---------------------------------------------------------------------------------------------");
let width:number = 10;
let height:number = 5;
let area:number = width * height;
console.log(`The area of the rectangle is ${area}`);
//Zad7-------------------------------------------------------------------------------------------
console.log("Zad7---------------------------------------------------------------------------------------------");
const a:number = 17;
const b:number = 5;
let sum:number = a%b;
console.log(`The rest of the proces of dividing ${a} by ${b} is ${sum}`);
//Zad8-------------------------------------------------------------------------------------------
console.log("Zad8---------------------------------------------------------------------------------------------");
const temperatureCelcius:number = 20;
const temperatureFahrenheit:number = (temperatureCelcius * 9/5) + 32;
console.log(`The temperature in Fahrenheit is ${temperatureFahrenheit}`);
//Zad9-------------------------------------------------------------------------------------------
console.log("Zad9---------------------------------------------------------------------------------------------");
const tab:number[] = [1,2,3];
console.log('The declared tab looks like this: ',tab);
//Zad10-------------------------------------------------------------------------------------------
console.log("Zad10--------------------------------------------------------------------------------------------");
const krotka:[number,string] = [27,"How's it going?"];
console.log(`The declared tuple looks like this: ${krotka}`);
//Zad11-------------------------------------------------------------------------------------------
console.log("Zad11--------------------------------------------------------------------------------------------");
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
console.log("Zad12--------------------------------------------------------------------------------------------");
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
console.log("Zad13--------------------------------------------------------------------------------------------");
function maxOfTwo(num1:number, num2:number):number
{
    return num1 > num2 ? num1 : num2;
}
const val1:number = 10;
const val2:number = 20;
const maxValue:number = maxOfTwo(val1, val2);
console.log(maxValue);
//Zad14--------------------------------------------------------------------------------------------
console.log("Zad14--------------------------------------------------------------------------------------------");
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
console.log("Zad15--------------------------------------------------------------------------------------------");
const targetValue:number = 5;
let sumOfNumbers:number = 0;
for(let i:number = 1; i <= targetValue; i++)
{
    sumOfNumbers += i;
}
console.log(`The sum of numbers from 1 to ${targetValue} is ${sumOfNumbers}`);
//Zad16--------------------------------------------------------------------------------------------
console.log("Zad16--------------------------------------------------------------------------------------------");
const silniaTarget:number = 5;
let silniaResult:number = 1;
for(let i:number = 1; i <= silniaTarget; i++)
{
    silniaResult *= i;
}
console.log(`The factorial of ${silniaTarget} is ${silniaResult}`);
//Zad17--------------------------------------------------------------------------------------------
console.log("Zad17--------------------------------------------------------------------------------------------");
const exampleText:string = "Hello, World!";
function countVovels(text:string):number
{
    const vovels:string = "aeiouAEIOU";
    let result:number = 0;
    for(let i:number = 0;i<text.length;i++)
        {
            if(vovels.includes(text[i]))
                {
                    result++;
                }
        }
    console.log(`The number of vowels in the text "${text}" is ${result}`);
    return result;
}
countVovels(exampleText);
//Zad18--------------------------------------------------------------------------------------------
console.log("Zad18--------------------------------------------------------------------------------------------");
const liczby: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
for (let i = 1; i <= 100; i++)
    {
        if (i % 3 == 0) 
            {
                if (i % 5 == 0) 
                    {
                        console.log(i + " FizzBuzz");
                    } 
                else
                    {
                        console.log(i + " Fizz");
                    } 
	        }
        else if (i % 5 == 0)
            {
                console.log(i + " Buzz");
            }
        else
            {
                console.log(i);
            }
    }
//Zad19--------------------------------------------------------------------------------------------
console.log("Zad19--------------------------------------------------------------------------------------------");
const basicText:string = "Arka Gdynia kurwa świnia";
let newString:string = "";
for(let i:number = basicText.length -1; i >= 0; i--)
    {
        newString += basicText[i];
    }
console.log(`The reversed text of "${basicText}" is "${newString}"`);
//Zad20--------------------------------------------------------------------------------------------
console.log("Zad20--------------------------------------------------------------------------------------------");
const baseMultiplyNumber:number = 2;
function multiplyFromOneToTen(num:number): number
{
    for(let i:number = 1; i <= 10; i++)
    {
        let result:number = num*i;
        console.log(`The result of multiplying ${num} by ${i} is ${result}`);
    }
    return num;
}
multiplyFromOneToTen(baseMultiplyNumber);
//Zad21--------------------------------------------------------------------------------------------
console.log("Zad21--------------------------------------------------------------------------------------------");
function addTwoNumber(a:number, b:number):number
{
    return a + b;
}
console.log(`The sum of 5 and 10 is ${addTwoNumber(5, 10)}`);
//Zad22--------------------------------------------------------------------------------------------
console.log("Zad22--------------------------------------------------------------------------------------------");
function greetName(name:string):void
{
    console.log(`Hello ${name}!`);
}
greetName("Ada");
//Zad23--------------------------------------------------------------------------------------------
console.log("Zad23--------------------------------------------------------------------------------------------");
function greetOptionalName(name?:string):void
{
    console.log(`Hello ${name || 'Guest'}!`);
}
greetOptionalName("Ava");
greetOptionalName();
//Zad24--------------------------------------------------------------------------------------------
console.log("Zad24--------------------------------------------------------------------------------------------");
function powerForNumber(base:number):number
{
    if(base<0)
        {
            throw new Error("Base number must be non-negative.");
        }
    else
        {
            let powerResult:number = 1;
            for(let i = 1; i <=base; i++)
                {
                    powerResult *= i;
                }
            console.log(`The result of raising ${base} to the power is ${powerResult}`);
            return powerResult;
        }
}
powerForNumber(5);
//Zad25-------------------------------------------------------------------------------------------
console.log("Zad25--------------------------------------------------------------------------------------------");
function sumAllArguments(...args:number[]):number
{
    let sum:number = 0;
    for(let i:number = 0; i<args.length;i++)
        {
            sum += args[i];
        }
    return sum;
}
console.log(`The sum of all arguments is ${sumAllArguments(1, 2, 3, 4, 5)}`);
