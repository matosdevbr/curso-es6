let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'Apple',
        modelo: 'Macbook Pro'
    }
}

// composição
// let {descricao: d, preço: p} = produto
// let {descricao: d, preço: p, desconto = 5} = produto

let {detalhes: {fabricante: from, modelo: style}} = produto
console.log(from, style)