// this is just like Ranveer singh's Role in movie means Dhurandar's Ranveer singh is not same as Baji Rao mastani Ranveer singh...Means it depend on the environment of this...which it refering to

console.log(this)  // We are taking first example ....
/* Here this is refering to Global Context of node environment so it will give you : {} but when you perform same operation on Browser what will be the result first check out that : 

On Browser : console.log(this)

Output will be :  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/

const thisOnGlobalStage = () => {
    console.log(typeof this);
};

thisOnGlobalStage();   // It shows that our this here is object that's why we say everything in javascript is object...

function thisWithNoScript(){
    return this;
}

console.log(thisWithNoScript()); // Here it will return global context but when we run it in browser it will return window because there global execution context is window...


const college1 = {
    name : "CSJMU",
    student : "Divyansh Sharma",

    introduce() {
        console.log(this);
    }
}

college1.introduce();


const college = {
    name : "CSJMU",
    student : "Divyansh Sharma",
    introduce() {  // here introduce is method
        return `${this.student} is student of ${this.name}`;
    }
}

const college2 = {
  name: "CSJMU",
  student: "Divyanshu",
  introduce() {
    
    return `${this.student} is student of ${this.name}`;
  },
};

const collegewithArrow = {
  name: "CSJMU",
  student: "Divyansh Sharma",
  introduce : () => (`${this.student} is student of ${this.name}`)

  // I have learnt two things here one is that we can use function and => both at same time and one is that arrow function *directly in object here this will not have reference to current object
    
};
console.log(college.introduce());
console.log(college2.introduce());
console.log(collegewithArrow.introduce());


// Here we will se querks of javascript behaviour change of this with arrow
const collegeData = {
    name : "UIET",
    students : ["Divyansh","Kishan","Divyanshu"],
    
    announceStudents(){
        this.students.forEach((student)=>{
            console.log(`${student} study in ${this.name}`); 
        });
    },
};

collegeData.announceStudents();// Dekha aapney yahan this ko access mil gya object...so what is the reason so we can say arrow function inside the method() will have access of regular functions...


const departmentData = {
    name : "UIET",
    departments:["cse","cseai","electronics"],

    annDepartments(){
        this.departments.forEach((department)=>{
            console.log(`${department} is department of ${this.name}`);
        });
    },

    annDepartments2(){
        function printDepartment(){
            this.annDepartments.forEach((department) => {
                console.log(`${this.name} has ${department}`);
            });
        }  // It will give us error as nested functions as method ke andr hmney ek nested function bnaya then usme this use kiya...so nested function inside regular method 'this' will lost it's access now you can check ki nested function agr arrow ho to vahan hoga ki nhi...Vahan hoga you have already view that in forEach case...
        printDepartment();
    },

    annDepartments3(){

          const dp = () =>{

            console.log("College name :" , `${this.name}`);

        //   function printDepartment() {
        //     console.log(this.name);
        //   };

        //   printDepartment();  // It will not have access to the this

          const printDepartment2 = () =>{
            console.log(`${this.name}`);
          }  // nested arrow function will have acess to this...

          printDepartment2();
          


          }

          dp();
    },
};

departmentData.annDepartments();
// departmentData.annDepartments2();

departmentData.annDepartments3();

console.log("***********Detached methods*********");
// Now let study about detached method will it's this have acess to object or not


const uietData = {
    name : "UIET",
    departments : ["CSE","ECE","AI"],

    depAnnouncement(){
          console.log(`${this.name} this is Main department`);
    },
};

// Let's first try to run it normally
uietData.depAnnouncement();

const detached = uietData.depAnnouncement; // Here the detached will have refernce to function depAnnouncement;

console.log(detached);
detached();  // Now as object's method is detached it's this have lost to main object.

const myfunctionOne = function () {
  console.log(this);  // Here global execution context is calling it so this will have referce to global...but in strict mode this will point to undefined
};

const myfunctionTwo = () => {
  console.log(this);
};

myfunctionOne();
myfunctionTwo();






