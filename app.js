const express=require('express');
const app=express();
const port=80;
const path=require('path');
const fs=require('fs');

//Express Specific Stuff
// For serving static file
app.use('/static' , express.static('static'));
app.use(express.urlencoded())

//Pug Specific Stuff
// set the template engine  as pug 
app.set('view engine', 'pug')

// set the view directory
app.set('views',path.join(__dirname,'views'))


// End Points 
app.get('/',(req,res)=>{    
    const params={"title":'Hey  salman' }
    res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more

    let outputToWrite=`The name of the client is ${name} , ${age} year old , ${gender} , residing at
    ${address}, More About Him/Her ${more}`
    fs.writeFileSync('output.txt',outputToWrite)

    const params={'message':'your form has been submitted succefully'}
    app.render('index.pug',params)
})

app.listen(port, ()=>{
    console.log(`Server running at : ${port}`);
})