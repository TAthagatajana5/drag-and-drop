// variable for menus in the left and right
var menu_right = $('.right-side-menu');
var menu_left = $('.left-side-menu');

$('document').ready(function(){
    menu_right.css('right','-350px');
    menu_left.css('left','-350px');
});

//customisation of the menu to show only when mouse enters
//for both the menus
//from her -->>
menu_left.mouseenter(function(){
    $(this).css('left','0');
    $(this).css('transition','left 500ms linear');
}).mouseleave(function(){
    $(this).css('left','-350px');
    $(this).css('transition','left 500ms linear');
});

menu_right.mouseenter(function(){
    $(this).css('right','0');
    $(this).css('transition','right 500ms linear');
}).mouseleave(function(){
    $(this).css('right','-350px');
    $(this).css('transition','right 500ms linear');
});
//<<-- till here

