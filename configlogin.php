<?php
	session_start();
	require_once "GoogleAPI/vendor/autoload.php";
	$gClient = new Google_Client();
	$gClient->setClientId("901981475948-41lorl9ah3goksp2ao5uj2taigljdo4p.apps.googleusercontent.com");
	$gClient->setClientSecret("wEG6-_g8s2Nb3mV3s_ZUW5Xi");
	$gClient->setApplicationName("CPI Login Tutorial");
	$gClient->setRedirectUri("http://localhost/dad/g-callbacklogin.php");
	$gClient->addScope("https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email");
?>
