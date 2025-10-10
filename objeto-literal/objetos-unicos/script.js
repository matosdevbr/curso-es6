let assinatura = {
    idCliente: 1,
    descricao: 'Assinatura a internet',
    status() {
        console.log('Assinatura ativa')
    }
}

console.log(assinatura.descricao)

let y = assinatura

console.log(y.descricao)

// ------------------------------

y.descricao = 'Internet + tv + telefone'

console.log(assinatura.descricao)
console.log(y.descricao)