console.log("hello world");
var age = 20;
age = 21;
var course = 'typescript';
var is_published = true;
var numbers = [1, 2, 3];
var user = [1, 'Juli'];
//special Types
//any is a type that disables type checking and effectively allows all types to be used.
var v = true;
v = "string";
//unknown is a similar, but safer alternative to any.
var w = 1;
w = "string";
//type:never
//never effectively throws an error whenever it is defined.
//Type: undefined & null
//undefined and null are types that refer to the JavaScript primitives undefined and null respectively. 
var y = undefined;
var z = null;
//Array
//Readonly
//The readonly keyword can prevent arrays from being changed.
var names = ["Jul"];
//type inference
//typescript can infer the type o an array if it has vales
//Typed Arrays
//a tuple is typed array with a pre-defined length and types for each index
var ourTuple;
ourTuple = [5, false, 'coding'];
//readonly tuple
// tuples only have strongly defined types for the initial values
var ourReadonlyTuple = [5, true, 'the real coding god'];
//object
var car = {
    type: "toyota",
    model: 'corrolla',
    year: 2009
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var rectangle = {
    height: 20,
    width: 10
};
var coloredRestangle = {
    height: 20,
    width: 10,
    color: "red"
};
//Union types
//are used when a value can be more than a single type
function printStatusCode(code) {
    console.log("" + code);
}
//typescript function return type is number
function getTimes() {
    return new Date().getTime();
}
//void return type
function printHello() {
    console.log('hello');
}
//optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
//default parameters
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var mySize = Size.Medium;
function calculateTax(income, taxYear) {
    return 0;
}
var employee;
function kgTOlbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
var quantity = 100;
