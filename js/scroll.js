var $web = $('#web');
var $webLink = $('#web-link'),
    $designLink = $('#design-link');
var $backbtn = $('.backToTop');

$web.waypoint(function(direction) {
    if(direction == 'down') {
        $('.rect').addClass('slideToWeb');
        $('.rect').removeClass('slideToDesign');
        
        $webLink.addClass('linkWhite');
        $webLink.removeClass('linkBlack');
        
        $designLink.addClass('linkBlack');
        $designLink.removeClass('linkWhite');
    } else {
        $('.rect').addClass('slideToDesign');
        $('.rect').removeClass('slideToWeb');
        
        $webLink.addClass('linkBlack');
        $designLink.addClass('linkWhite');
        
        $webLink.removeClass('linkWhite');
        $designLink.removeClass('linkBlack');
    }
}, {offset: '50rem'});

$(window).on('scroll', function() {
    var wn = $(window).scrollTop();
    if (wn > 500) {
        $backbtn.css('visibility', 'visible');
        $backbtn.css('opacity', '1');
    } else {
        $backbtn.css('visibility', 'collapse');
        $backbtn.css('opacity', '0');
    }
});