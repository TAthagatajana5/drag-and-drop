var grids=[];
/**
 * =================VARIABLE DESCRIPTIONS=============
 *  initalX :: store the coord of mouse on the X axis initially
 *  finalX :: store the coord of mouse on the X axis final
 *  initialY :: store the coord of mouse on the Y axis initially
 *  finalY  :: store the coord of mouse on the y axis finally
 *  horzLeft :: needed for keeping track on the left side where the vert left is 
 *  vertTop :: needed for keeping track on the top where the horz top is
 *  boxWidth :: stores the original box width. used for updating the box size
 *  boxHeight :: stores the original box Height. used for updating the box size
 */
var initialX,finalX,initialY,finalY, horzLeft=0, vertTop=0;
$('document').ready(function(){
    grids=[["one","two"],["three","four"]];
    $('.vert').draggable({axis: "x",start: getSizeHorz,drag: updateHorz,stop: setSizeHorz});
    $('.horz').draggable({axis: "y",start: getSizeVert,drag: updateVert,stop: setSizeVert});
});

function getSizeHorz(e){
    initialX=e.clientX;
    console.log(initialX);
}

function updateHorz(e){
    finalX=e.clientX;
    var right =  $(this).hasClass('right');
    /* Check whether the border selected is left or right */
    if(right==true){
        var boxWidth = $('.box').width();
        $('.horz').css('width',`${boxWidth+(finalX-initialX)}px`);
    }else {
        var boxWidth = $('.box').width();
        $('.horz').css('left',`${horzLeft+(finalX-initialX)}px`);
        $('.horz').css('width',`${boxWidth-(finalX-initialX)}px`);
    }
}

function setSizeHorz(e){
    finalX=e.clientX;
    console.log(finalX);
    var right =  $(this).hasClass('right');
    console.log(right);
    /* Check whether the border selected is left or right */
    if(right==true){
        var boxWidth = $('.box').width();
        $('.box').css('width',`${boxWidth+(finalX-initialX)}px`);
        $('.horz').css('width',`${boxWidth+(finalX-initialX)}px`);
    }else {
        var boxWidth = $('.box').width();
        $('.horz').css('left',`${horzLeft+(finalX-initialX)}px`);
        $('.box').css('width',`${boxWidth-(finalX-initialX)}px`);
        $('.horz').css('width',`${boxWidth-(finalX-initialX)}px`);
        horzLeft = horzLeft+(finalX-initialX);
        console.log(horzLeft);
    }
}

function getSizeVert(e){
    initialY=e.clientY;
    console.log(initialY);
}

function updateVert(e){
    finalY=e.clientY;
    var bottom = $(this).hasClass('bottom');
    console.log(bottom);
    /* Check whether the border selected is bottom or top */
    if(bottom==true){
        var boxHeight = $('.box').height();
        $('.vert').css('height',`${boxHeight+(finalY-initialY)}px`);
    }else {
        var boxHeight = $('.box').height();
        $('.vert').css('top',`${vertTop+(finalY-initialY)}px`);
        $('.vert').css('height',`${boxHeight-(finalY-initialY)}px`);
    }
}

function setSizeVert(e){
    final=e.clientX;
    console.log(finalY);
    var bottom =  $(this).hasClass('bottom');
    /* Check whether the border selected is bottom or top */
    if(bottom==true){    
        var boxHeight = $('.box').height();
        $('.box').css('height',`${boxHeight+(finalY-initialY)}px`);
        $('.vert').css('height',`${boxHeight+(finalY-initialY)}px`);
    }else{
        var boxHeight = $('.box').height(); 
        $('.box').css('height',`${boxHeight-(finalY-initialY)}px`);
        $('.vert').css('top',`${vertTop+(finalY-initialY)}px`);
        $('.vert').css('height',`${boxHeight-(finalY-initialY)}px`); 
        vertTop = vertTop+ (finalY-initialY);  
    }
}
