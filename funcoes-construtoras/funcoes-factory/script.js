let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'Única',
    aro: 12,
    pedalar() {
        console.log('Pedalando')
    }
}

console.log(Bicicleta1)


let BicicletaFactory = (cor, marcha, aro) => {
    // lógica para criar a bicicleta
    return {
        cor,
        marcha,
        aro,
        pedalar() {
            console.log('Pedalando')
        }
    }
}

let bicicleta3 = BicicletaFactory('Preta', 'Única', 26)
console.log(bicicleta3)

let bicicleta4 = BicicletaFactory('Vermelha', 'Dupla', 29)
console.log(bicicleta4)