<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <?php include '../../../conf/css.php' ?>
    <?php include '../essecial/font-awesome.php' ?>
</head>
<body>
<?php include 'cabecalho.php' ?>
<div class="container">
    <div class="row">
        <div class="col mb-5">
            <h1 class="display-4">Registro de nova despesa</h1>
        </div>
    </div>

    <div class="row mb-2">
        <div class="col-md-2">
            <label for="ano"></label>
            <select class="form-control" id="ano">
                <option value="">Ano</option>
                <option value="2018">2018</option>
            </select>
        </div>

        <div class="col-md-2">
            <label for="mes"></label>
            <select class="form-control" id="mes">
                <option value="">Mês</option>
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
        </div>

        <div class="col-md-2">
            <label for="dia"></label>
            <input type="text" class="form-control" placeholder="Dia" id="dia"/>
        </div>

        <div class="col-md-6">
            <label for="tipo"></label>
            <select class="form-control" id="tipo">
                <option>Tipo</option>
                <option value="1">Alimentação</option>
                <option value="2">Educação</option>
                <option value="3">Lazer</option>
                <option value="4">Saúde</option>
                <option value="5">Transporte</option>
            </select>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8">
            <label for="descricao"></label>
            <input type="text" class="form-control" placeholder="Descrição" id="descricao"/>
        </div>

        <div class="col-md-2">
            <label for="valor"></label>
            <input type="text" class="form-control" placeholder="Valor" id="valor"/>
        </div>

        <div class="col-md-2 d-flex justify-content-end">
            <button type="button" class="btn btn-primary" onclick="cadastrarDespesa()">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </div>
</div>
<script src="script.js?<?php echo time(); ?>"></script>
<?php include '../../../conf/js.php' ?>
</body>
</html>