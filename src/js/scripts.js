/* WOW.js init */
new WOW().init();

/* Side navigation toggle */
$('.button-collapse').sideNav({
  edge: 'right' // Choose the horizontal origin
});

// var el = document.querySelector('.custom-scrollbar');
// Ps.initialize(el);

// Tooltips Initialization
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

$('.toggle-title').on('click', function(){
  $(this).next('.toggle-this').toggleClass('open');
  $(this).toggleClass('open');
});