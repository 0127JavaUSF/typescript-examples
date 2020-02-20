var myNum = 6;
var myString = 'hello';
myNum = 8; // Valid - myNum can accept numbers
// myNum = 'hello'; // Invalid - myNum cannot accept strings
myString = 'goodbye';
// myString = myNum; // Invalid - myNum is a number, and we cannot assign a
// number to myString
function mySum(a, b) {
    return a + b;
}
// myString = mySum(1, 2);
myNum = mySum(1, 2);
var stringConcatA = function (a, b) { return a + b; }; // Typing arrow
// Typing variable
var stringConcatB = function (a, b) { return a + b; };
var myArr = [];
myArr.push(1);
myArr.push(5);
// myArr.push('a'); // myArr is typed as an array of numbers, so 'a' is not valid
var altSyntax = [];
myArr.push(1);
myArr.push(5);
// myArr.push('a'); // myArr is typed as an array of numbers, so 'a' is not valid
var intersectionType = 'hello';
intersectionType = 5;
// intersectionType = false; // not a number OR string, so invalid
var trafficLight = 'green' | 'yellow' | 'red';
'green';
trafficLight = 'red';
// trafficLight = 'blue'; // blue not in the set of 'green', 'yellow', 'red'
var strNumArray = ['hi', 1, 'bye'];
;
;
var implementation =  & B, _a = void 0, _b = _a.name,  = _b === void 0 ? 'mitch' : _b, _c = _a.count,  = _c === void 0 ? 1 : _c;
