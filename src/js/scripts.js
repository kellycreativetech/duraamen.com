/* WOW.js init */
new WOW().init();

/* Side navigation toggle */
$('.button-collapse').sideNav({
  edge: 'right' // Choose the horizontal origin
});

$('.toggle-title').on('click', function(){
  $(this).next('.toggle-this').toggleClass('open');
  $(this).toggleClass('open');
});
