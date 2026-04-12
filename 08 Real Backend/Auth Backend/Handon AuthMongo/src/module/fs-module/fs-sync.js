import fs from "node:fs"

// Write Operation

fs.writeFileSync("test1.txt","Hello aawaj aa rhi hai hmm Baatcheet kr rhe hain FsSync se!!!")
// fs.writeFileSync("test1.txt","Hello aawaj aa rhi hai hmm Baatcheet kr rhe hain FsSync se!!!")
// fs.writeFileSync("test1.txt","Hello aawaj aa rhi hai hmm Baatcheet kr rhe hain FsSync se!!!")

// Read Operation...

const readed = fs.readFileSync("test1.txt","utf-8") // <- Remember we have to paas encoding type here unless it will release buffer...
console.log(readed)

// Append to existing data
fs.appendFileSync("test1.txt","\nHaan Ji firr aa gye aap!!!!")

// Create new Folder...
fs.mkdirSync("test-folder/recursive",{recursive:true})

//Deleting a file

// fs.unlinkSync("test1.txt")
// fs.unlinkSync("test-folder")  Remember this can't work to remove folder it only works in removing the files

// Renaming file

fs.renameSync("test1.txt","test2.txt")

// Copying Data from one file to another file

fs.cpSync("test2.txt","test1.txt")


// Now it's turn to remove the folders For Both files and folders

// fs.rmSync("test1.txt")
// fs.rmSync("test-folder",{recursive : true})
fs.rmdirSync("test-folder",{recursive:true})

// The major Draw Back of  using fs: sync was suppose we are writing about 2GB of content in fs.writeFileSync() then what it will do it will block the main thread and all running operations...