const path=require('path');
console.log(path.sep)
const file=path.join('/content','subfile','test.txt')
console.log(file);
const base=path.basename(file);
console.log(base);
const abs=path.resolve(__dirname,'content','subfile','test.txt')
console.log(abs);