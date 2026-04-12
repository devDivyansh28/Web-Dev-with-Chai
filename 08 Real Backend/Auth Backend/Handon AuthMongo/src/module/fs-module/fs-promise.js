import fs from  "node:fs/promises"

const data = await fs.readFile("Promise.txt","utf-8")

console.log(data)