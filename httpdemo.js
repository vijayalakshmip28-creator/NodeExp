var http=require("http")
console.log("module ok")
http.createServer((req,res)=>{
    res.end("Welcome to http server")
}).listen(9876)
console.log("port listening..9876")