// getJSON = récupère le JSON de 'page.php', le parse et l'integre dans data

// $('button').click(function () {
//     $.getJSON('test.json', function (data) {
//         $('#prenom').html(data.name)
//         $('#age').html(data.age)
//     });
// });
//


$('button').click(function () {
    $.ajax({
        type: 'GET',
        url: 'test.json',
        dataType: 'json',
        timeout: 4000,
        success: function (data) {
            $('#prenom').html(data.name)
            $('#age').html(data.age)
        }
    });
});