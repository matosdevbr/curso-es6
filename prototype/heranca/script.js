Object.prototype.attr50 = 'Z' // ter cuidado

let animal = {attrA: 1}

let vertebrado = {__proto__: animal, attrB: 2}

let ave = {__proto__: vertebrado, attrC: 3}

console.log(ave.attrC, ave.attrB, ave.attrA, attr50)