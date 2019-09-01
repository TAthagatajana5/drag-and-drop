$('document').ready(function(){

    $('.fill').draggable({
        revert: "invalid",
        start: dragStart,
        stop: dragStop,
    });

    
    $('.empty').each(function(index, element){
        $(element).droppable({
            accept: ".fill" ,
            over: dropOver,
            out: dropOut,
            drop: dropped
        })
    });
});

function dragStop(event,ui){
    $(this).removeClass("hold");
}

function dragStart(event,ui){
    $(this).addClass("hold");
}

function dropOut(event,ui){
    $(this).removeClass("hovered");
}

function dropOver(event,ui){
    $(this).addClass("hovered");
}

function dropped(event,ui){
    $(this).removeClass("hovered");
    $('.fill').appendTo(this);
    $('.fill').css('top','5px');
    $('.fill').css('left','5px');
}