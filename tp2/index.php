<?php
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
$pageToInclude = $currentPageId . ".php";
if(is_readable($pageToInclude))
require_once($pageToInclude);
else
require_once("php/error.php");
?>
</section>
<?php
require_once("php/template_footer.php");
?>
