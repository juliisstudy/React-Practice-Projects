console.log("hello world")
let age:number =20
age = 21

let course:string='typescript'
let is_published:boolean = true
let numbers:number[] = [1,2,3]

let user:[number,string] =[1,'Juli']
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

