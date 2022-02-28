const http=require('http');
const fs=require('fs');


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    const html=fs.readFileSync('./view/index.html');
    res.end(html);
}).listen(3000,()=>{
    console.log('running on 3000')
})