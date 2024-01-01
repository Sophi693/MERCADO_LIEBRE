const express = require('express')
const app = express()
const path =require ('path')
const port= 3030;
app.listen(port,()=>console.log(`http://localhost:${port}`))
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

//app.get('/home',(req,res)=>{
  //  res.sendFile(path.join(__dirname,'./views/home.html'))})

    
                
