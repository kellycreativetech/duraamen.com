//@codekit-prepend "bootstrap.js";
//@codekit-prepend "hoverintent.js";
//@codekit-prepend "superfish.js";
//@codekit-prepend "jquery.validate.js";
//@codekit-prepend "jquery.mousewheel.js";
//@codekit-prepend "jquery.fancybox-1.3.1.js";
//@codekit-prepend "responsiveslides.js";
//@codekit-prepend "jquery.fitvids.js";
//@codekit-prepend "placeholders.js";
//@codekit-prepend "jquery.sticky-kit.min.js";


$(function(){
    $f = $(".initialForm");
    $(".nojs").remove();
    $f.attr({"action": $f.attr("actn")});
});

$(".affix-this").stick_in_parent();

$('#accordion2').on('shown', function () {
  $(document.body).trigger("sticky_kit:recalc");
})


$(document).ready(function () {
    $(".rs-slider").responsiveSlides({
      maxwidth: 1168,
      speed: 1600,
      random: true,
      nav: true,
      pager: true
    });
    $('.nav li:last a, .events > div:last, .foot-nav li:last a').addClass('last');
    $('input[required], textarea[required], select[required]').after("<span class='required'> *</span>");
    $('input.field-bump-right[required], textarea.field-bump-right[required], select.field-bump-right[required]').next('span.required').css('margin-left', '-16px');
    $('[href="#contact"]').click(function () {
        var formContents = $('#form-at-bottom form').clone();
        $('#form-at-top').html( formContents );
        $('.contact-head').slideToggle();
        $('#id_name').focus();
        // if the element has attr data-checked, check that box.
        if($(this).attr('data-checked')) {
          var data = $(this).attr('data-checked');
          console.log(data)
         $('#' + data).prop('checked', true);
        };
      });
    $("a[rel=fancied]").fancybox({
        'overlayOpacity'    : '0.85',
        'overlayColor'      : '#000',
        'titlePosition'	: 'inside'
      });
    $("a[rel=video]").click(function() {
      $.fancybox({
          'autoScale'   : false,
          'transitionIn'  : 'none',
          'transitionOut' : 'none',
          'overlayOpacity'    : '0.85',
          'overlayColor'      : '#000',
          'titlePosition' : 'inside',
          'title'     : this.title,
          'width'   : 720,
          'height'    : 434,
          'href'      : this.href,
          'type'      : 'iframe'
        });

      return false;
    });

    $('a[href$=".pdf"], a[href$=".PDF"]').attr({'target': '_blank'}).addClass('pdf');
    $('a[href$=".doc"], a[href$=".DOC"], a[href$=".DOCX"], a[href$=".docx"]').addClass('doc');
    $(".container").fitVids();
//    $("#navigation li#id_2 > ul").makeacolumnlists({cols: 2, colWidth: 200, equalHeights: 'ul'});

    $("form").each(function(key, value){
          if (typeof($(this).attr('actn')) !== 'undefined') {
              $(this).attr({"action": $(this).attr("actn")});
          }
    });
    $(".product-nav").html($("nav").html());
    $(".product-nav .nav-collapse > ul").removeClass("nav sf-menu sf-js-enabled sf-arrows").superfish('destroy');
    $(".product-nav .nav-collapse ul").show();
    $(".product-nav .nav-collapse > ul > li > a").find('br').replaceWith(' ');
    $(".product-nav #id_109, .product-nav #id_124, .product-nav #id_131").show();

    // initialise Superfish plugin
    $('#navigation').superfish({
      speed:       'fast'
    });

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

  // adding hidden field
  $('#id_which_landing_page_did_this_come_from').val( location.pathname );


  $('#id_from_duraamen_url').val( window.location.href );

});

// add page URL to the hidden field for analytics
$('[name=sent_from_url]').val( window.location.href  );


$('ul#mobile-nav > li > a').find('br').replaceWith(' ');
function movenav(){
    $("ul#mobile-nav a").unbind("click");
    size = $(window).width();
    if(size < 767){
        $("ul#mobile-nav li:has(ul) > a[href*='#']").on('click', function(e) {
            e.preventDefault();
            $(this).next('ul').slideToggle();
            $(this).parent('li').toggleClass('down');
        });
        $("ul#mobile-nav li:has(ul) > a:not([href*='#'])").on('click', function(e) {
            if ($(this).hasClass('clicked-once')){
            }
            else {
                e.preventDefault();
                $(this).addClass('clicked-once');
                $(this).next('ul').slideToggle();
                $(this).parent('li').toggleClass('down');
            }
        });
    }
}

$(function(){
    movenav();
    $(window).resize(function(e){
        movenav();
    });
});
