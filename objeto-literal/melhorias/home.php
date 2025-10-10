<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <?php include '../../../conf/css.php' ?>
</head>
<body>

<div class="container">
    <div class="mt-3">
        <div class="row mt-2">
            <div class="row">
                <label for="nome">Nome</label>
                <input id="nome" type="text" />
            </div>
            <div class="row mt-4">
                <div class="col">
                    <label for="idade">Idade</label>
                    <input id="idade" type="text">
                </div>
                <div class="col">
                    <label for="sexo">Sexo</label>
                    <div class="dropdown col">
                        <input class="dropdown-toggle" id="sexo" type="text" data-bs-toggle="dropdown"
                               aria-expanded="false">

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Masculino</a></li>
                            <li><a class="dropdown-item" href="#">Feminino</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <label for="profissao">Profissão</label>
                <input id="profissao" type="text">
            </div>
        </div>
    </div>
    <div class="mt-3">
        <a class="btn btn-danger" onclick="mostrarTudo()" href="" id="save" >Próxima página e salvar</a>
    </div>


    <script src="script.js?<?php echo time(); ?>"></script>
    <?php include '../../../conf/js.php' ?>
</body>
</html>