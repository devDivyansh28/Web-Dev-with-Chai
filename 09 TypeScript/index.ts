const a : number = 5
const b : string = 'hello world'
const c : boolean = true

let d = 555555; // Here type infering will work...

const add = (a:number , b: number ) => {
    console.log(a+b)
}

add(2,5);

const uppercaser = (a : string , b: string)=>{
    let upperCaseA = a.toUpperCase()
    let upperCaseB = b.toUpperCase()
    console.log(upperCaseA+upperCaseB)
}