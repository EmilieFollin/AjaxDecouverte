
                // LOAD

$('selecteur').load('page.php', function(){
    // fonction de retour executé uniquement apres chargement complet AJAX
};

// Le contenu de la page : 'page.php' sera inséré dans l'élément 'selecteur'


                // GET

$.get('page.php', {name : 'jean'} ,function(data){
    // {name : 'jean'} = permet d'envoyé des données
    // data contiendra le code source de 'page.php'
}).fail(function(){
    // executé uniquement si la fonction echoue
}).always(function(){
    // fonction executé dans tous les cas de figure (echec ou réussite de la requette)
});

                // POST

 $.post('page.php', {name : 'jean'} ,function(data){
  // {name : 'jean'} = permet d'envoyé des données
     // data contiendra le code source de 'page.php'
 }).fail(function(){
   // executé uniquement si la fonction echoue
 }).always(function(){
// fonction executé dans tous les cas de figure (echec ou réussite de la requette)
 });


                // GETSCRIPT = charge et execute automatiquement un fichier javascript

 $.getScript('test.js', function () {

 });


                // getJSON = récupère le JSON de 'page.php', le parse et l'integre dans data

$.getJSON('page.json', function (data) {
    // fonction de retour
});


// $.ajax = permet de faire une requete ajax personnalisé

$.ajax({
   type : 'GET',         // GET, POST, PUT
   url: 'exemple.php',   //page à charger
   dataType: 'html',     // html, json, text, xml, script
   data:{ name: 'jean'}, // donnée envoyé au serveur
   timeout: 4000,        // tps en ms avant que la requette soit considérée comme échoué
   success: function(data){
      // fonction lue en cas de succes
      // data contiendra code source récupéré
   } ,
    error: function () {
        //fonction executé en cas d'erreur
    },
    beforeSend: function () {
        // fonction executé dans touts les cas avant l'envoi de la requette
    },
    complete: function () {
        // fonction executé dans tous les cas apres la requette
    },
    statusCode: {
        404: function () {
        // fonction executé en cas d'erreur 404
      },
        403: function () {
        // fonction executé en cas d'erreur 404
        }
    }
});