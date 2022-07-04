const http =require('http')
const server=http.createServer((req,res)=>{
 if(req.url==='/')
{
    res.end('fuck fuck');
}
else if(req.url==='/about')
{
    res.end('fuck fuck fuckt ');
}
else{
res.end(`
<h1>opps bitch</h1>
<p>get out of the way bitch</p>
<a href="/about">back whore</a>
`)}
})
server.listen(5050);