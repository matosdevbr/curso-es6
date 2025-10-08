class Login {
    constructor() {
        this.nome = document.getElementById('nome').value
        this.idade = document.getElementById('idade').value
        this.sexo = document.getElementById('sexo').value
        this.profissao = document.getElementById('profissao').value
    }

    mostrarNome(nome, save) {
        nome = this.nome
        save = document.getElementById('save').value
    }


}

let login = new Login()
login.mostrarNome()