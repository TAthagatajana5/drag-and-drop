const fields = $('.field');

$('.btn').click(function(){
    for (field of fields){
        str = field.className.substring(6);
        if($(`.${str}`).val()==''){
            $(`.error-${str}`).css('display','inline');
        }
    }
    removeWarning();
    if(!checkEmail()) return false;
    if($('.username').val()!=''&& $('.password').val()!='')
        return true;
    else
        return false;
});

function checkEmail(){
    if($('.email').val()!=''){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!$('.email').val().match(mailformat)){
            $('#error').css('display','inline-block');
            $('#error').html('<p>You have entered invalid email address!!</p>');
            removeError();
            return false;
        }else{
            return true;
        }
    }
}

function removeWarning(){
    setTimeout(function(){
        $('.error').css('display','none');
    },3000);
}

function removeError(){
    setTimeout(function(){
        $('#error').css('display','none');
    },10000);
}

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
