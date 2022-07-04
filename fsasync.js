const fs=require('fs');
console.log('start the tsk')
fs.readFile('./content/file.txt','utf8',(err,result)=>{
if(err)
{
console.log(err)
return;
}
const f=result;
fs.readFile('./content/secondfile.txt','utf8',(err,result)=>{
    if(err)
    {
    console.log(err)
    return;
    }
    const g=result;
    fs.writeFile('./content/resultgh.txt',`hello world : ${f},${g}`,{flag:'a'},(err,result)=>{
        if(err)
        {
        console.log(err)
        return;
        }
       // console.log(result);
        console.log('done')
    });
})
})
console.log('starting') 