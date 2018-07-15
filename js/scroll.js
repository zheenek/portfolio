$(document).ready(function() {
    var targetOffset = $("#web").offset().top();
    
    var $w = $(window).scroll(function() {
        if ($w.scrollTop() > targetOffset) {
            $('#web-link').css({"border":"1px solid red"});
        }    
    });
});