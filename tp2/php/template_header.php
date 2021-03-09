<!doctype html>
<html>
<head>
<title>Lucas FABY</title>

<link rel="stylesheet" href="style/main.css" />
<link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<?php
$currentPageId = $_GET['page'];
$lang = $_GET['lang'];
if($lang=="en"){
    echo "<a href=\"index.php?page=".$currentPageId."&lang=fr\" class=\"sla\">Switch to French</a>" ;
}
else{
    echo "<a href= \"index.php?page=".$currentPageId."&lang=en\" class = \"sla\" >Passer en anglais</a>" ;
}
?>