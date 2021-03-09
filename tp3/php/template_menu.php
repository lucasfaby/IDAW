
    <?php
function renderMenuToHTML($currentPageId) {
// un tableau qui d\'efinit la structure du site
$mymenu = array(
// idPage titre
'accueil' => array( 'Accueil','Home' ),
'cv' => array( 'CV','CV' ),
'projets' => array('Mes Projets','My Projects')
);









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

if($lang == "fr"){
    $lang_index = 0;
}
else {
    $lang_index = 1;
}

echo("<ul class=\"element-flexible\">");

foreach($mymenu as $pageId => $pageParameters) {
    if($pageId== $currentPageId){
        echo("<li><a href=\"index.php?page=".$pageId."&lang=".$lang."\"class = \"currentpage\">".$pageParameters[$lang_index]."</a></li>");
    }    
    else{
        echo("<li><a href=\"index.php?page=".$pageId."&lang=".$lang."\">".$pageParameters[$lang_index]."</a></li>");
    }
}

echo("</ul>");

}
?>
