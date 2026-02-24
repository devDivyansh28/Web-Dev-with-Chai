console.log("*********This is My Filter***********");

// Implementaion : 

Array.prototype.myFilter = function(fn){
    const filtered = [];
    for(const item of this){
        if(fn(item)) filtered.push(item);
    }
    return filtered;
}

// Use :

const myMarks = [-1,2,4,75,28,105,-30];

let filtered = myMarks.myFilter((item)=>{
    if(item>=0) return item;
});

console.log(filtered);