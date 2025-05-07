import http from 'http'
import app from './app.js'
let port = process.env.PORT || 5000;

let Server=http.createServer(app)

Server.listen(port,()=>{
    console.log(`The server is running ON  ${port}`)
})