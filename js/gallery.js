$(document).ready(function() {
    var back = $('.closeLink'),
        openModalWindow = $('#openM');
    var modalWindow = $('#open');
    
    back.on('click', function() {
        $(modalWindow).addClass('backTo'); 
        $(modalWindow).removeClass('openModal');
    });
    
    openModalWindow.on('click', function() {
        $(modalWindow).addClass('openModal');
        $(modalWindow).removeClass('backTo');
    });
});