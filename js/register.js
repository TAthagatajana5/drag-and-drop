$('.btn').click(function(){
    if($('.username').val()==''&& $('.password').val()==''&& $('.email').val()=='' && $('.re-password').val()==''){
        $('.error-username').css('display','inline');
        $('.error-password').css('display','inline');
        $('.error-email').css('display','inline');
        $('.error-re-password').css('display','inline');
        return false;
    }else if($('.password').val()==''){
        $('.error-password').css('display','inline');
        return false;
    }else if($('.username').val()==''){
        $('.error-username').css('display','inline');
        return false;
    }else if($('.email').val()==''){
        $('.error-email').css('display','inline');
        return false;
    }
    else if($('.re-password').val()==''){
        $('.error-re-password').css('display','inline');
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

$('.error-email .error-img').mouseover(function(){
    $('.error-txt-email').css('display','inline');
});

$('.error-email .error-img').mouseout(function(){
    $('.error-txt-email').css('display','none');
});

$('.error-re-password .error-img').mouseover(function(){
    $('.error-txt-re-password').css('display','inline');
});

$('.error-re-password .error-img').mouseout(function(){
    $('.error-txt-re-password').css('display','none');
});