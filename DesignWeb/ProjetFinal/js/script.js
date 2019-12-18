$('.btn-primary').click(function () {
   alert("Votre inscription a bien été envoyée")
});
$('.example4')
    .awesomeCursor('pencil', {
       font: {
          family: 'FontAwesome',
          cssClass: 'fa fa-pencil-alt'
       },
       color: 'hotpink',
       size: 24,
       flip: 'horizontal'
    });

$('.accordion').collapse('toggle');

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});