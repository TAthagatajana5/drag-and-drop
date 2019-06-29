<?php
	session_start();
	require_once "GoogleAPI/vendor/autoload.php";
	$gClient = new Google_Client();
	$gClient->setClientId("702508599117-9odeb8id3ed72klrniii2deqe0f7nojb.apps.googleusercontent.com");
	$gClient->setClientSecret("nQpnlxPPImqryGledlAtvI45");
	$gClient->setApplicationName("Login Tutorial");
	$gClient->setRedirectUri("http://localhost/dad/g-callback.php");
	$gClient->addScope("https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email");
?>
