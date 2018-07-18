$(document).ready(function() {
    var $menuBox = $('.menu__content'),
        $menu = $('#menu');
    var $cross = $('#menuClose'),
        $bars = $('#menuBars');
    $bars.on('click', function() {
        $menu.addClass('showMenu').removeClass('hideMenu');
        $menuBox.addClass('showMenuBox').removeClass('hideBox');  
    });
    
    $cross.on('click', function() {
        $menuBox.removeClass('showMenuBox').addClass('hideBox');
        $menu.removeClass('showMenu').addClass('hideMenu');
    });
});