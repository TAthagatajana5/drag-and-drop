<?php
	require_once "config.php";

	if (isset($_SESSION['access_token']))
		$gClient->setAccessToken($_SESSION['access_token']);
	else if (isset($_GET['code'])) {
		$token = $gClient->fetchAccessTokenWithAuthCode($_GET['code']);
		$_SESSION['access_token'] = $token;
	} else {
		header('Location: registerform.php');
		exit();
	}

	$oAuth = new Google_Service_Oauth2($gClient);
	$userData = $oAuth->userinfo_v2_me->get();

	$_SESSION['id'] = $userData['id'];
	$_SESSION['email'] = $userData['email'];
	$_SESSION['gender'] = $userData['gender'];
	$_SESSION['picture'] = $userData['picture'];
	$_SESSION['familyName'] = $userData['familyName'];
	$_SESSION['givenName'] = $userData['givenName'];
	$mysqli = new mysqli("localhost", "root", "123456", "user");


	$sql = "SELECT * FROM users WHERE email='".$userData["email"]."'";
	$result = $mysqli->query($sql);


	if(!empty($result->fetch_assoc())){
		$sql2 = "UPDATE users SET google_id='".$userData["id"]."' WHERE email='".$userData["email"]."'";
	}else{
		$sql2 = "INSERT INTO users (name, email, google_id) VALUES ('".$userData["name"]."', '".$userData["email"]."', '".          $userData["id"]."')";
 	}


	$mysqli->query($sql2);


	echo "Updated Successful";


	header('Location: index.php');
	exit();
?>
