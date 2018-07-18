$(document).ready(function() {
    var $body = $(document.body);
    var $back = $('.closeLink'),
        $openModalWindow = $('.photo-container--button');
    var $modalWindow = $('#open');
    var $button = $('.photo-container--button');
    var $image = $('.open__content');
    
    $back.on('click', function() {
        $modalWindow.addClass('backTo'); 
        $modalWindow.removeClass('openModal');
        $body.removeClass('noScroll');
    });
    
    $openModalWindow.on('click', function() {
        $modalWindow.addClass('openModal');
        $modalWindow.removeClass('backTo');
        $body.addClass('noScroll');
    });
    
    $button.on('click', function(e) {
        var target = $(e.target);
        
        if(target.is('.0')) {
            $image.css('background-image', 'url(./img/design/design.jpg)');
        } else if (target.is('.1')) {
            $image.css('background-image', 'url(./img/design/cblf.png)');
        } else if (target.is('.2')) {
            $image.css('background-image', 'url(./img/design/Camaro.png)');
        } else if (target.is('.3')) {
            $image.css('background-image', 'url(./img/design/skull1.jpg)');
        } else if (target.is('.4')) {
            $image.css('background-image', 'url(./img/design/player.png)');
        } else if (target.is('.5')) {
            $image.css('background-image', 'url(./img/design/hd.jpg)');
        } else {
            $modalWindow.removeClass('openModal');
            $body.removeClass('noScroll');
        }
    });
});