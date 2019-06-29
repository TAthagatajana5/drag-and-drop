<?php
	require_once "configlogin.php";
	unset($_SESSION['access_token']);
	$gClient->revokeToken();
	session_destroy();
	header('Location: loginform.php');
	exit();
?>
