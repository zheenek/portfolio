$(document).ready(function() {
    $('#web-link').on('click', function() {
        $('.sections-nav__content--rectangle').addClass('slideToWeb');
        $('.sections-nav__content--rectangle').removeClass('slideToDesign');
        $('.web-link').addClass('linkWhite');
        $('.web-link').removeClass('linkBlack');
        
        $('.design-link').addClass('linkBlack');
        $('.design-link').removeClass('linkWhite');
    });
    $('#design-link').on('click', function() {
        $('.sections-nav__content--rectangle').addClass('slideToDesign');
        $('.sections-nav__content--rectangle').removeClass('slideToWeb');
        
        $('.web-link').addClass('linkBlack');
        $('.design-link').addClass('linkWhite');
        
        $('.web-link').removeClass('linkWhite');
        $('.design-link').removeClass('linkBlack');
    });
});