
// GET
//
//
// $('.chat').click(function (){
//
//         $.get("content/chat.php", function(data){
//             $('#view').html(data)
//         });
// });
//
// $('.chien').click(function (){
//
//     $.get("content/chien.php", function(data){
//         $('#view').html(data)
//     });
// });
//
//
// $('.poisson').click(function (){
//
//     $.get("content/poisson.php", function(data){
//         $('#view').html(data)
//     });
// });


// POST

$('.chat').click(function (){
    $.post('content/chat.php',function(data){
        $('#view').html(data)
    });
});

$('.chien').click(function (){
    $.post('content/chien.php',function(data){
        $('#view').html(data)
    });
});

$('.poisson').click(function (){
    $.post('content/poisson.php',function(data){
        $('#view').html(data)
    });
});




// var button = document.querySelector('.chat');
//
// button.addEventListener('click', function(){
//
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'chat.php');
//     xhr.send(null);
//     xhr.addEventListener('readystatechange', function(){
//
//         if(xhr.readyState === XMLHttpRequest.DONE){
//
//             if(xhr.status === 200){
//                 document.querySelector('#cadre').innerHTML = xhr.responseText;
//             } else {
//                 document.querySelector('#cadre').innerHTML = 'Erreur de récupération : '+xhr.status;
//             }
//
//         }
//
//     });
//
// });
//
//
// var button = document.querySelector('.chien');
//
// button.addEventListener('click', function(){
//
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'chien.php');
//     xhr.send(null);
//     xhr.addEventListener('readystatechange', function(){
//
//         if(xhr.readyState === XMLHttpRequest.DONE){
//
//             if(xhr.status === 200){
//                 document.querySelector('#cadre').innerHTML = xhr.responseText;
//             } else {
//                 document.querySelector('#cadre').textContent = 'Erreur de récupération : '+xhr.status;
//             }
//
//         }
//
//     });
//
// });
//
//
// var button = document.querySelector('.poisson');
//
// button.addEventListener('click', function(){
//
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'poisson.php');
//     xhr.send(null);
//     xhr.addEventListener('readystatechange', function(){
//
//         if(xhr.readyState === XMLHttpRequest.DONE){
//
//             if(xhr.status === 200){
//                 document.querySelector('#view').innerHTML = xhr.responseText;
//             } else {
//                 document.querySelector('#view').textContent = 'Erreur de récupération : '+xhr.status;
//             }
//
//         }
//
//     });
//
// });

//
// $('.chat').click(function (){
//     $('#view').load('content/chat.php');
// });
//
// $('.chien').click(function (){
//     $('#view').load('content/chien.php');
// });
//
// $('.poisson').click(function (){
//     $('#view').load('content/poisson.php');
// });