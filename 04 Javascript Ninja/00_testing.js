// console.log(this);


var myObject = {
    name : "myobject",
    myMethod : () => {
        console.log(this)
    }
}

myObject.myMethod();