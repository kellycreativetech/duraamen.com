/*!
 * Material Design for Bootstrap 4
 * Version: MDB Landing Page 4.2.0
 *
 *
 * Copyright: Material Design for Bootstrap
 * https://mdbootstrap.com/
 *
 * Read the license: https://mdbootstrap.com/license/
 *
 *
 * Documentation: https://mdbootstrap.com/
 *
 * Getting started: https://mdbootstrap.com/getting-started/
 *
 * Tutorials: https://mdbootstrap.com/bootstrap-tutorial/
 *
 * Templates: https://mdbootstrap.com/templates/
 *
 * Support: https://mdbootstrap.com/forums/forum/support/
 *
 * Contact: office@mdbootstrap.com
 *
 * Atribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js , Hammer.js
 *
 */


/*

jquery-easing.js
global.js
velocity.min.js
wow.js
scrolling-nav.js 
waves.js
preloading.js
smooth-scroll.js
dropdown.js
buttons.js
hammer.js
jquery.hammer.js
forms.js
lightbox.js
animations.js 
enhanced-modals
*/

/*
    Enhanced Bootstrap Modals
    https://mdbootstrap.com
    office@mdbootstrap.com
*/

$('body').on('shown.bs.modal', '.modal', function() {
    if($('.modal-backdrop').length) {
    } else {

        $modal_dialog = $(this).children('.modal-dialog')

        if($modal_dialog.hasClass('modal-side')) {
            $(this).addClass('modal-scrolling');
            $('body').addClass('scrollable');
        }

        if($modal_dialog.hasClass('modal-frame')) {
            $(this).addClass('modal-content-clickable');
            $('body').addClass('scrollable');
        }
    }
});
$('body').on('hidden.bs.modal', '.modal', function() {
    $('body').removeClass('scrollable');
});
