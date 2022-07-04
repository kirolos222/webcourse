const fs=require('fs');
console.log('start the tsk')
const g=fs.readFileSync('./content/file.txt','utf-8');
const h=fs.readFileSync('./content/secondfile.txt','utf8');
fs.writeFileSync('./content/result.txt',`hello world : ${g},${h}`,{flag:'a'});
console.log('done')
console.log('starting')