<!DOCTYPE html>
<html>
	<head>
	<title>Editable Content</title>
	<!-- Latest compiled and minified CSS -->
	<!-- <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"> -->
</head>
<body>
	<input id="submit" type="button" value="Save"/>
	<input type="button" value="Clear" id="clear">

	<!-- <div id="edit" contenteditable="true"> -->
	<div id="code">
		<?php include('assets/templates/mailchimpTest.html');?>
	</div>

	<!-- Latest compiled and minified JS -->
	<script src="//code.jquery.com/jquery.js"></script>
	<!--<script src="//netdna.bootstrapcdn.com/bootstrap/js/bootstrap.min.js"></script>-->
	<script src="assets/js/email.edit.js"></script>
</body>
</html>
