var $web = $('#web');
var $webLink = $('#web-link'),
    $designLink = $('#design-link');

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
}, {offset: '50%'});