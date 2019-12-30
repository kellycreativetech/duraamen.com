/* WOW.js init */
new WOW().init();

/* Side navigation toggle */
$('.button-collapse').sideNav({
  edge: 'right' // Choose the horizontal origin
});

// randominzing a select_pages tag:
$(".remove-fifth-item").html($(".remove-fifth-item > .d-flex").sort(function(){
    return Math.random()-0.5;
}));

// so far, only used on /forms/locate-a-contractor
$('.mdb-select').material_select();

$('.toggle-title').on('click', function(){
  $(this).next('.toggle-this').toggleClass('open');
  $(this).toggleClass('open');
});

$(document).ready(function () {
  $('#id_from_duraamen_url').val( window.location.href );

  $('[data-glass-form-api]').attr({'action': "/siteapi/submit_form"});

  // unsure if this is used:
  $('#id_which_landing_page_did_this_come_from').val( location.pathname );

  // Order Now button
  if ($('.order-now #id_product').length > 0){
    var orderquery = window.location.search.substring(9);
    var orderquerypretty = orderquery.replace(/[-]/g, " ");

    $('.order-now #id_product').val(orderquerypretty);


    var productName = $('.order-now #id_product').val().split(" ");
    var productTitle = new Array();
    for(x in productName){
        productTitle.push(productName[x].charAt(0).toUpperCase() + productName[x].substr(1).toLowerCase());
    }
    var productTitle=productTitle.join(" ").trim();
    $('.order-now #id_product').val(productTitle);
  }

  $('.order-now #id_product').val(productTitle);


$('.categories-carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  slide: '.categories-carousel--item',
  prevArrow: '<svg class="slick-prev" fill="currentColor" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>',
  nextArrow: '<svg class="slick-next" fill="currentColor" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});


// sremove trcking from AddThis buttons
var addthis_config = addthis_config||{};
    addthis_config.data_track_addressbar = false;
    addthis_config.data_track_clickback = false;
