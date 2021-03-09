<?php
require_once("php/template_header.php");
require_once("php/template_menu.php");
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
<?php
require_once("php/template_footer.php");
?>
