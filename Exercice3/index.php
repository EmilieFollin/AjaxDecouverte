<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>API</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>


<h1>Recherchez des informations sur les villes</h1>
    <input name="rechercher" type="text" id="rechercher" />
    <button>Envoyez</button>
   <div id="info"> </div>
<div class="resultat">
<table>
    <tr>
        <td><div id="ville"> </div></td>
        <td><div id="code"> </div></td>
        <td><div id="popu"> </div></td>
        <td><div id="dep"> </div></td>
    </tr>

</table>
</div>





<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="script.js"></script>
</body>
</html>