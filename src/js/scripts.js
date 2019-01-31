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

});

// sremove trcking from AddThis buttons
var addthis_config = addthis_config||{};
    addthis_config.data_track_addressbar = false;
    addthis_config.data_track_clickback = false;
