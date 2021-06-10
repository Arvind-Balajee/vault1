const express = require("express");
const app = express();


app.use(express.static('public'));

app.get('*',(req,res)=>{
	let path=require('path')
	res.sendFile(path.resolve('public/index.html'));
})

const PORT=3000
app.listen(PORT,()=>console.log(`listening on port ${PORT}`))