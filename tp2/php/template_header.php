<!doctype html>
<html>
<head>
<title>Lucas FABY</title>

<link rel="stylesheet" href="style/main.css" />
<link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<?php
$currentPageId = 'accueil';
if(isset($_GET['page'])) {
$currentPageId = $_GET['page'];
}
if(isset($_GET['lang'])){
    $lang = $_GET['lang'];
    setcookie("lang", $lang);
}else{
    if(isset($_COOKIE["lang"])){
        $lang = $_COOKIE["lang"];
    }else{
        $lang="en";
    }
}
if($lang=="en"){
    echo "<a href=\"index.php?page=".$currentPageId."&lang=fr\" class=\"sla\">Switch to French</a>" ;
}
else{
    echo "<a href= \"index.php?page=".$currentPageId."&lang=en\" class = \"sla\" >Passer en anglais</a>" ;
}
?>