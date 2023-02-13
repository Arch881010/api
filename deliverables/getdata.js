const fs = require('fs')
var datarecieved = "";
async function data() {
const apikey = fs.readFileSync("deliverables/userapikey.txt","UTF-8");
url = `http://127.0.0.1:5000/data|${apikey}`
const dataftch = await fetch(url)
dataval = await dataftch.text()
datarecieved = dataval;
console.log(datarecieved)
}
data()
//Call with "npm run main"