function SoftwareEngineer(name,exp){
    this.name = name
    this.exp = exp
}


const swe1 = new SoftwareEngineer("Piyush",8);
const swe2 = new SoftwareEngineer("Aakash",5);

console.log(swe1.name);
console.log(swe2.name);

SoftwareEngineer.prototype.welcome_message = function (){
    return `${this.name} , Welcome to Your Dream Company...`;
}  // Do you know that we added this welcome_message in prototype because if we added this to each object then it will consume memory suppose we have about 1000 message defined then each object there will be function for this...you can imagine what problem it solve for further you can also read mdn docs on these topics it will suprise...
// Before ES6 there was no concpet of classes and constructor at that time function was used both as constructor and normal function then further in ES6 method of class was introduced and this is just syntactical sugar and if you typeof class==='fucntion' it will return true 🙃🙃...if you don't use new it will confuse you so that's why concept of class was introduced in ES6

console.log(swe1.welcome_message());
console.log(swe2.welcome_message());


// This is also another method and we call it factory methods and for it new each instance will have it's own memory
function joinEmpoyee(name,role){
    return {
        name,
        role,
        welcome_message(){
            return `${this.name} , Welcome to Your Dream Company...`;
        },
    };
}

const joinEmp1 = joinEmpoyee("Ritesh","full_stack");
const joinEmp2 = joinEmpoyee("Ankit","Principal_engineer");

console.log(joinEmp1.welcome_message());
console.log(joinEmp2.welcome_message());