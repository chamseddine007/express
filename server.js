const express = require('express')
const app = express()
console.log(app)
app.listen(5000)
const app = express()
app.get("/",(req,res)=>{res.status(200).sendFile('./view/Home.html')})
app.listen(port,(err)=>err?console.log("error:",err)
console.log("server is running on port :",port))
