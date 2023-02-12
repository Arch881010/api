const fs = require('fs')
async function data() {
//const keyftch = await fetch("http://127.0.0.1:5000/apikeypm");
const apikey = fs.readFileSync("deliverables/apikey.txt","UTF-8");
url = `http://127.0.0.1:5000/data${apikey}`
const dataftch = await fetch(url)
dataval = await dataftch.json()
console.log(dataval)
}
data()
//Call with "npm main"