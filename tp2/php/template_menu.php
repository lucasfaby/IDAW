
    <?php
function renderMenuToHTML($currentPageId) {
// un tableau qui d\'efinit la structure du site
$mymenu = array(
// idPage titre
'index' => array( 'Accueil' ),
'cv' => array( 'CV' ),
'projets' => array('Mes Projets')
);

echo("<ul class=\"element-flexible\">");
foreach($mymenu as $pageId => $pageParameters) {
    if($pageId== $currentPageId){
        echo("<li><a href=\"".$pageId.".php\""."class = \"currentpage\">".$pageParameters[0]."</a></li>");
    }    
    else{
        echo("<li><a href=\"".$pageId.".php"."\">".$pageParameters[0]."</a></li>");
    }
}
echo("</ul>");
}
?>
