let animal = {attrA: 1}

let vertebrado = {__proto__: animal, attrB: 2}

let ave = {__proto__: vertebrado, attrC: 3}

console.log(ave.attrB)