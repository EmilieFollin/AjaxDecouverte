

    $('button').click(function () {
        var ville = $('input')[0].value;
        var url = 'https://geo.api.gouv.fr/communes/?nom=' + ville;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (data) {
                $('#info').html('');
                $('#info').append('<h2>Informations  </h2>')
                $('#info').append('<h3>Resultats : </h3>' + data.length + '   ');
                for(var i=0; i<data.length; i++) {


                    $('#ville').append('<h3>Ville : </h3>' + data[i].nom + '   ');
                    $('#code').append('<p>Code Postal : </p>' + data[i].code + '  ' );
                    $('#popu').append('<p> Population : </p>' + data[i].population + '  ');
                    $('#dep').append('<p>Departement : </p>' + data[i].codeDepartement + ' <br>' );


                }



            }
        });
    });

