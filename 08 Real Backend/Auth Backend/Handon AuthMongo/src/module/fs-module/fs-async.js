import fs from "node:fs"

fs.writeFile("async.txt","Hello Async!",(err)=>{
    if(err) console.log(err);
    console.log("File has been written succesfully!!!")
})
// Remember we have to pass callback here it is necessity to pass callback unless it will not work...

fs.readFile("async.txt","utf-8",(err,data)=>{
    if(err) console.log("There was some error in reading the content of file",err);
    console.log("Data",data)
})

fs.readFile("a.txt", "utf-8", (error, data) => {
  fs.writeFile("b.txt", data, (err) => {
    fs.appendFile("b.txt", "\nDone", (err) => {
      fs.unlink("a.txt", (err) => {
        console.log("a.txt deleted");
      });
    });
  });
}); 
// This was the main drawback [callback hell] of fs:async to solve this then we have promise