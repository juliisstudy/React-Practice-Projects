console.log("hello world")
let age:number =20
age = 21

let course:string='typescript'

let is_published:boolean = true
let numbers:number[] = [1,2,3]

let user:[number,string] =[1,'Juli']

//special Types
//any is a type that disables type checking and effectively allows all types to be used.
let v:any = true
v="string"

//unknown is a similar, but safer alternative to any.
let w:unknown = 1
w = "string"

//type:never
//never effectively throws an error whenever it is defined.

//Type: undefined & null
//undefined and null are types that refer to the JavaScript primitives undefined and null respectively. 
let y: undefined = undefined;
let z: null = null; 

//Array
//Readonly
//The readonly keyword can prevent arrays from being changed.

const names:readonly string[] = ["Jul"]

//type inference
//typescript can infer the type o an array if it has vales

//Typed Arrays
//a tuple is typed array with a pre-defined length and types for each index
let ourTuple:[number,boolean,string]
ourTuple = [5,false,'coding']

//readonly tuple
// tuples only have strongly defined types for the initial values
const ourReadonlyTuple: readonly [number,boolean,string] =[5,true,'the real coding god']

//object
const car:{type:string,model:string,year:number}={
    type:"toyota",
    model:'corrolla',
    year:2009
}

enum CardinalDirections{
    North,
    East,
    South,
    West
}

//type Aliases
//type aliases allow defining tyoes with a custom name

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year:CarYear,
    type:CarType,
    model:CarModel
}

//interface 
//Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle{
    height:number,
    width:number
}

const rectangle:Rectangle ={
    height:20,
    width:10
}

interface ColoredRectangle extends Rectangle {
    color:string
}
const coloredRestangle:ColoredRectangle = {
    height:20,
    width:10,
    color:"red"
}

//Union types
//are used when a value can be more than a single type
function printStatusCode(code:string|number){
    console.log(`${code}`)
}

//typescript function return type is number
function getTimes():number{
    return new Date().getTime()
}
//void return type
function printHello():void{
    console.log('hello')
}

//optional Parameters
function add(a:number,b:number,c?:number){
    return a + b + (c||0)
}
//default parameters
function pow(value:number, exponent:number =10){
    return value**exponent
}


enum Size {
    Small,Medium,Large
}

let mySize:Size = Size.Medium

function calculateTax(income:number,taxYear?:number):number{
    return 0
}
let employee:{
    id:number,
    name?:string
}
type Employee = {
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}
function kgTOlbs(weight:number|string):number{
    if(typeof weight ==='number')
        return weight *2.2
    else
        return parseInt(weight)*2.2
}

type Draggable ={
    drag:()=>void
}
type Resizeable = {
    resize:()=>void
}

type UIWidget = Draggable&Resizeable

type Quantity = 50 |100
let quantity:Quantity =100

type Metric = 'cm'|'mm'

