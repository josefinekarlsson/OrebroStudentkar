$(document).ready(function () {
    $('.lightbox').click(function () {
        show_box();
    });
    $('.close').click(function () {
        close_box();
    });
    $('.backdrop').click(function () {
        close_box();
    });
    $('.lightbox').hover(function () {

    });

});

function show_box() {
    //var topmargin = $('#orgkarta').scrollTop + 'px';
    //var scrollTop = $(window).scrollTop();
    //console.log(scrollTop);
    //var elementOffset = $('#orgkarta').offset().top;
    //console.log(elementOffset); 
    //var distance = (elementOffset - scrollTop);
    //console.log(distance);
    //$('.box').css('top', distance + 'px');

    $('.backdrop, .box').animate({ 'opacity': '.50' }, 200, 'linear');
    $('.box').animate({ 'opacity': '1.00' }, 200, 'linear');
    $('.backdrop, .box').css('display', 'block');
    $("body").css("overflow", "hidden");

}
function close_box() {
    $('.backdrop, .box').animate({ 'opacity': '0' }, 200, 'linear', function () {
        $('.backdrop, .box').css('display', 'none');
    });
    $("body").css("overflow", "auto");
    return false; 
}