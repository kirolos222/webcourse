const os =require('os')
const hf=os.uptime();
console.log(hf);
const currentos={
    name:os.type(),
    release:os.release(),
    memory:os.totalmem(),
    free:os.freemem(),
}
console.log(currentos);