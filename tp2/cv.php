<?php
require_once('php/template_header.php');
?>
<h1> ICI se trouve le CV</h1>

<nav class="conteneur-flexible ligne">
<?php
require_once('php/template_menu.php');
renderMenuToHTML('cv');
?>
    <div class="element-flexible-2">
        <img src="img/cv.jpg">
    </div>
</nav>
<?php
require_once('php/template_footer.php');
?>