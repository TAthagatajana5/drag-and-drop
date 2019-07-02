var grids=[];
var initialX,finalX,initialY,finalY;
$('document').ready(function(){
    grids=["one","two","three","four","five","six","seven","eight","nine"];
    $('.vert').draggable({axis: "x",start: getSizeHorz,drag: updateHorz,stop: setSizeHorz});
    $('.horz').draggable({axis: "y",start: getSizeVert,drag: updateVert,stop: setSizeVert});
});

function getSizeHorz(e){
    initialX=e.clientX;
}

function updateHorz(e){
    finalX=e.clientX;
    var boxWidth = $('.box').width();
    $('.horz').css('width',`${boxWidth+(finalX-initialX)}px`);
}

function setSizeHorz(e){
    final=e.clientX;
    var boxWidth = $('.box').width();
    $('.box').css('width',`${boxWidth+(finalX-initialX)}px`);
    $('.horz').css('width',`${boxWidth+(finalX-initialX)}px`);
}

function getSizeVert(e){
    initialY=e.clientY;
    console.log(initialY);
}

function updateVert(e){
    finalY=e.clientY;
    var boxHeight = $('.box').height();
    $('.vert').css('height',`${boxHeight+(finalY-initialY)}px`);
}

function setSizeVert(e){
    final=e.clientX;
    console.log(finalY);
    var boxHeight = $('.box').height();
    $('.box').css('height',`${boxHeight+(finalY-initialY)}px`);
    $('.vert').css('height',`${boxHeight+(finalY-initialY)}px`);
}