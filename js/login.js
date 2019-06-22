$('.btn').click(function(){
    if($('.username').val()==''&& $('.password').val()==''){
        $('.error-username').css('display','inline');
        $('.error-password').css('display','inline');
        return false;
    }else if($('.password').val()==''){
        $('.error-password').css('display','inline');
        return false;
    }else if($('.username').val()==''){
        $('.error-username').css('display','inline');
        return false;
    }
});

$('.error-username .error-img').mouseover(function(){
    $('.error-txt-username').css('display','inline');
});

$('.error-username .error-img').mouseout(function(){
    $('.error-txt-username').css('display','none');
});

$('.error-password .error-img').mouseover(function(){
    $('.error-txt-password').css('display','inline');
});

$('.error-password .error-img').mouseout(function(){
    $('.error-txt-password').css('display','none');
});