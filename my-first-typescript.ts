let myNum : number = 6;
let myString = 'hello';

myNum = 8; // Valid - myNum can accept numbers
// myNum = 'hello'; // Invalid - myNum cannot accept strings

myString = 'goodbye';
// myString = myNum; // Invalid - myNum is a number, and we cannot assign a
                // number to myString

function mySum(a : number, b : number) : number {
    return a + b;
}

// myString = mySum(1, 2);
myNum = mySum(1, 2);

const stringConcatA = (a: string, b: string): string => a+b; // Typing arrow
// Typing variable
const stringConcatB: (a: string, b: string) => string = (a, b) => a+b;

const myArr: number[] = [];
myArr.push(1);
myArr.push(5);
// myArr.push('a'); // myArr is typed as an array of numbers, so 'a' is not valid

const altSyntax: Array<number> = [];
myArr.push(1);
myArr.push(5);
// myArr.push('a'); // myArr is typed as an array of numbers, so 'a' is not valid

let intersectionType: number | string = 'hello';
intersectionType = 5;
// intersectionType = false; // not a number OR string, so invalid

let trafficLight: 'green' | 'yellow' | 'red' = 'green';
trafficLight = 'red';
// trafficLight = 'blue'; // blue not in the set of 'green', 'yellow', 'red'

let strNumArray: Array<string|number> = ['hi', 1, 'bye'];


/**
 * Unlike Java, TypeScript interfaces do not need declare that something
 * implements the interface in order for it to count as an implementation.
 * As long as the object properties include the declared properties of the
 * interface, then it counts as implementation.
 */
interface A {
    name: string;
};

interface B {
    count: number;
};

const implementation: A & B = {
    name: 'mitch',
    count: 1
};

