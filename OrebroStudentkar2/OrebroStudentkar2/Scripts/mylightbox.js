$(document).ready(function () {

    $('#imgmapStudentrepr').hover(function () {
        show_box("studentrepresentanter");
    }, function () {
        //On mouse out - do nothing. 
        //If the function is not defined, the box shows twice. 
        //Check this for more info: http://api.jquery.com/hover/
    });

    $('#imgmapFum').hover(function () {
        show_box("fum");
    }, function () {

    });

    $('#imgmapKS').hover(function () {
        show_box("KS");
    }, function () {

    });

    $('.close').click(function () {
        close_box();
    });

    $('.backdrop').click(function () {
        close_box();
    });
});

function show_box(msg) {
    $('#boxtext').text(msg); 
    //$('.backdrop, .box').animate({ 'opacity': '.0' }, 200, 'linear');
    $('.box').animate({ 'opacity': '1.00' }, 200, 'linear');
    $('.backdrop, .box').css('display', 'block');
}

function close_box() {
    $('.backdrop, .box').animate({ 'opacity': '0' }, 200, 'linear', function () {
        $('.backdrop, .box').css('display', 'none');
    });
}