<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <?php include '../conf/css.php' ?>
    <script src="script.js?<?php echo time(); ?>"></script>
</head>
<body>
    <div class="container bg-warning, text-light">
        <h1>Seu banco favorito</h1>
        <div class="row">
            <div class="col-6 bg-blue"></div>
        </div>
    </div>
<?php include '../conf/js.php' ?>
</body>
</html>