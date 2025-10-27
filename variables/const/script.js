
'CONSTANTES SÃO UTILIZADAS PARA DEFINIR VALORES QUE NÃO SERÃO ALTERADOS DEPOIS'

'O ESCOPO GLOBAL NÃO INTERFERE NO ESCOPO DA FUNÇÃO'

const serie = 'friends'

function x() {
    const serie = 'breaking bad'
    console.log('DENTRO DA FUNÇÃO = ' + serie)
}

x()

console.log('ESCOPO GLOBAL = ' + serie)


