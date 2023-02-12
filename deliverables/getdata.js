const fs = require('fs')
const datarecieved = []
async function data() {
const apikey = fs.readFileSync("deliverables/userapikey.txt","UTF-8");
url = `http://127.0.0.1:5000/data${apikey}`
const dataftch = await fetch(url)
try{
dataval = await dataftch.json()
} catch (err) {
    dataval = [
        {
            "id":404,
            "error":true,
            "name":"error-fetch",
            "description":"The URL did not respond with a .json document. This could because the apikey is incorrect OR the url was moved.",
            "task":"Main"
        }
    ]
}
datarecieved.push(dataval[0])
if(dataval[0].error == true) {
console.log(dataval)
} else {
console.log(datarecieved)
}
}
data()
//Call with "npm run main"