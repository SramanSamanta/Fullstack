import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send('Home page..')
})

app.listen(4000,()=>{
    console.log('app is running...')
})

