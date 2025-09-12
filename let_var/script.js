'Variáveis criadas com var dentro de funções não sofrem alteração do escopo glocal, e o contrário também funciona'
// var serie = 'Friends'
// console.log(serie)
//
// function x() {
//
//     const random = Math.floor(Math.random() * 3)
//     serie = 'How to train you dragon'
//     console.log(serie)
//
//     if (random === 0) {
//         var series = Array('The walking Dead')
//         console.log(series[0])
//     }
// }
//
// let zero = 0
//
// if (zero === 0) {
//     serie = 'Game of Thrones'
//     console.log(serie)
// }

'Variaveis criadas com let preservam os escopo de onde foram criadas'

var serie = 'Friends'

{
    let serie = 'The Walking Dead'
    console.log('Dentro do bloco: ' + serie)
}

console.log('Fora do bloco: ' + serie)
