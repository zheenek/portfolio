$(document).ready(function() {
    var $body = $(document.body);
    var $back = $('.closeLink'),
        $openModalWindow = $('.photo-container--button');
    var $modalWindow = $('#open');
    var $image = $('.open__content');
    
    $back.on('click', function() {
        $modalWindow.addClass('backTo').removeClass('openModal');; 
        $body.removeClass('noScroll');
    });
    
    function openModal() {
        $modalWindow.addClass('openModal').removeClass('backTo');
        $body.addClass('noScroll');
    }
    
    $openModalWindow.on('click', function(e) {
        var target = $(e.target);
        
        if(target.is('.0')) {
            $image.css('background-image', 'url(./img/design/design.jpg)');
            openModal();
        } else if (target.is('.1')) {
            $image.css('background-image', 'url(./img/design/cblf.png)');
            openModal();
        } else if (target.is('.2')) {
            $image.css('background-image', 'url(./img/design/Camaro.png)');
            openModal();
        } else if (target.is('.3')) {
            $image.css('background-image', 'url(./img/design/skull1.jpg)');
            openModal();
        } else if (target.is('.4')) {
            $image.css('background-image', 'url(./img/design/player.png)');
            openModal();
        } else if (target.is('.5')) {
            $image.css('background-image', 'url(./img/design/hd.jpg)');
            openModal();
        } else {}
    });
});