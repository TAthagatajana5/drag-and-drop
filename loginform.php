<?php
    require_once "configlogin.php";

	if (isset($_SESSION['access_token'])) {
		header('Location: indexlogin.php');
		exit();
	}

	$loginURL = $gClient->createAuthUrl();  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/login.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <title>LOGIN</title>
</head>
<body>
    <div class="main">
        <div class="container">
            <div class="wrapper">
                <form id="submit-form" action="home.php">
                    <span class="heading">Account Login</span>
                    <div class="other-login">
                            <div class="google-login">
                                <button type="button" onclick="window.location = '<?php echo $loginURL ?>';">
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
                    <div id="error">
                    </div>
                    <span class="text">Email</span>
                    <div class="input">
                        <input type="text" class="field email">
                        <span class="focus-input"></span>
                        <span class="error error-email">
                            <span class="error-txt-username">Please Fill this Field</span>
                            <span class="error-img"><i class="fas fa-exclamation"></i></span>
                        </span>
                    </div>
                    <span class="text">Password</span>
                    <div class="input">
                        <input type="password" class="field password">
                        <span class="focus-input"></span>
                        <span class="error error-password">
                            <span class="error-txt-password">Please Fill this Field</span>
                            <span class="error-img"><i class="fas fa-exclamation"></i></span>
                        </span>
                    </div>
                    <div class="login-btn">
                        <button class="btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
<script src="js/login.js"></script>
</html>
