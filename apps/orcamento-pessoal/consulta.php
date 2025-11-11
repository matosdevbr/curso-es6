<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <?php include '../../../conf/css.php' ?>
    <?php include '../essecial/font-awesome.php' ?>
</head>
<body onload="carregarListaDespesas()">
<?php include 'cabecalho.php' ?>
<div class="container">
    <div class="row mb-5">
        <div class="col">
            <h1 class="display-4">Consulta de despesas</h1>
        </div>
    </div>

    <div class="row mb-2">
        <div class="col-md-2">
            <label>
                <select class="form-control" id="ano">
                    <option value="">Ano</option>
                    <option value="2018">2018</option>
                </select>
            </label>
        </div>

        <div class="col-md-2">
            <label for=""><select class="form-control" id="mes">
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
            </label>
        </div>

        <div class="col-md-2">
            <label>
                <input type="text" class="form-control" placeholder="Dia" id="dia"/>
            </label>
        </div>

        <div class="col-md-6">
            <label for="">
                <select class="form-control" id="tipo">
                    <option>Tipo</option>
                    <option id="1" value="1">Alimentação</option>
                    <option id="1" value="2">Educação</option>
                    <option id="1" value="3">Lazer</option>
                    <option id="1" value="4">Saúde</option>
                    <option id="1" value="5">Transporte</option>
                </select>
            </label>
        </div>
    </div>

    <div class="row  mb-5">
        <div class="col-md-8">
            <label>
                <input type="text" class="form-control" placeholder="Descrição" id="descricao"/>
            </label>
        </div>

        <div class="col-md-2">
            <label>
                <input type="text" class="form-control" placeholder="Valor" id="valor"/>
            </label>
        </div>

        <div class="col-md-2 d-flex justify-content-end">
            <button type="button" class="btn btn-primary" onclick="carregarListaDespesas()">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <table class="table">
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th></th>
                </tr>
                </thead>

                <tbody id="listaDespesas">
                </tbody>
            </table>
        </div>
    </div>
</div>
<script src="script.js?<?php echo time(); ?>"></script>
<?php include '../../../conf/js.php' ?>
</body>
</html>