<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/registration.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <title>CREATE ACCOUNT</title>
</head>
<body>
    <div class="main">
        <div class="container">
            <div class="wrapper">
                <form id="submit-form" action="#">
                    <span class="heading">Create Account</span>
                    <div class="other-login">
                            <div class="google-login">
                                <button>
                                    <i class="fab fa-google"></i>
                                    Google
                                </button>
                            </div>
                            <div class="fb-login">
                                    <button>
                                        <i class="fab fa-facebook-f"></i>
                                        Facebook
                                    </button>
                            </div>
                        </div>
                    <div class="or">
                        <hr class="hr-left">
                        OR
                        <hr class="hr-right">
                    </div>
                    <span class="text">Set Username</span>
                    <div class="input">
                        <input type="text" class="username">
                        <span class="focus-input"></span>
                        <span class="error error-username">
                            <span class="error-txt-username">Please Fill this Field</span>
                            <span class="error-img"><i class="fas fa-exclamation"></i></span>
                        </span>
                    </div>
                    <span class="text">Enter Your Email</span>
                    <div class="input">
                        <input type="email" class="email">
                        <span class="focus-input"></span>
                        <span class="error error-email">
                            <span class="error-txt-email">Please Fill this Field</span>
                            <span class="error-img"><i class="fas fa-exclamation"></i></span>
                        </span>
                    </div>
                    <span class="text">Enter Your Password</span>
                    <div class="input">
                        <input type="password" class="password">
                        <span class="focus-input"></span>
                        <span class="error error-password">
                            <span class="error-txt-password">Please Fill this Field</span>
                            <span class="error-img"><i class="fas fa-exclamation"></i></span>
                        </span>
                    </div>
                    <span class="text">Retype Your Password</span>
                    <div class="input">
                        <input type="password" class="re-password">
                        <span class="focus-input"></span>
                        <span class="error error-re-password">
                            <span class="error-txt-re-password">Please Fill this Field</span>
                            <span class="error-img"><i class="fas fa-exclamation"></i></span>
                        </span>
                    </div>
                    <div class="login-btn">
                        <button class="btn">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="js/register.js"></script>
</body>
</html>
