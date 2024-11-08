const express = require('express')
const app = express()
const path = require('path')
const url = require('url')

//middleware - static files like css, js, img etc...
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.set('view engine','pug');
app.get('/',(req,res)=>{
  res.render('main');
});
app.get('/login',(req,res)=>{
  res.render('login');
});
app.get('/admin-user',(req,res)=>{
  res.render('admin-user');
});
// app.use((req, res)=>{

//   //read file
//   const pathName = url.parse(req.url, true).pathname
//   let filePath = path.join(__dirname, 'views', pathName)

//   if(pathName === '/')
//     filePath = path.join(__dirname, 'views', 'main.html')

//   res.sendFile(filePath)
  
// })


app.listen(4201, ()=>{
  console.log("Server is running @ http://localhost:4201")
})