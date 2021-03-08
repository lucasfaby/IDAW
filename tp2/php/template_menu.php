
    <?php
function renderMenuToHTML($currentPageId) {
// un tableau qui d\'efinit la structure du site
$mymenu = array(
// idPage titre
'accueil' => array( 'Accueil' ),
'cv' => array( 'CV' ),
'projets' => array('Mes Projets')
);

echo("<ul class=\"element-flexible\">");
foreach($mymenu as $pageId => $pageParameters) {
    if($pageId== $currentPageId){
        echo("<li><a href=\"index.php?page=".$pageId."\"class = \"currentpage\">".$pageParameters[0]."</a></li>");
    }    
    else{
        echo("<li><a href=\"index.php?page=".$pageId."\">".$pageParameters[0]."</a></li>");
    }
}
echo("</ul>");
}
?>
