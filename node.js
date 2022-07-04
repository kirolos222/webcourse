const t=require('lodash');
const it=[1,[2,[3,[4]]]];
console.log(it);
const newt=t.flattenDeep(it);
console.log(newt);