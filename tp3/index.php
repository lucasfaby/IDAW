<?php
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
if(isset($_POST["css"])){
    setcookie("css", $_POST["css"]);
    $css = $_POST["css"];    
}

 
require_once("php/template_header.php");
require_once("php/template_menu.php");
$currentPageId = 'accueil';

if(isset($_GET['page'])) {
$currentPageId = $_GET['page'];
}

?>
<header class="bandeau_haut">
<h1 class="titre">Lucas FABY</h1>


</header>
<?php
renderMenuToHTML($currentPageId);
?>
<section class="corps">
<?php
$pageToInclude =$lang."/". $currentPageId . ".php";
if(is_readable($pageToInclude))
require_once($pageToInclude);
else
require_once("php/error.php");
?>
</section>

<form id="style_form" action="index.php" method="POST">
<select name="css">
<option value="style1">style1</option>
<option value="style2">style2</option>
</select>
<input type="submit" value="Appliquer" />
</form>
<?php

require_once("php/template_footer.php");
?>
