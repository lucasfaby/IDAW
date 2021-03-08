<?php
require_once('php/template_header.php');
?>
<h1> ICI se trouve les projets</h1>

<nav class="conteneur-flexible ligne">
<?php
require_once('php/template_menu.php');
renderMenuToHTML('projets');
?>
    <div class="element-flexible-2">
        <h1>Projet 1 </h1>
        <p>Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus multa huius modi scrutabatur. quae singula narrare non refert, me professione modum, quod evitandum est, excedamus.</p>
        <h1>Projet 2 </h1>
        <p>Quam ob rem id primum videamus, si placet, quatenus amor in amicitia progredi debeat. Numne, si Coriolanus habuit amicos, ferre contra patriam arma illi cum Coriolano debuerunt? num Vecellinum amici regnum adpetentem, num Maelium debuerunt iuvare?</p>
        <h1>Projet 3 </h1>
        <p>Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.</p>
    </div>
</nav>

<?php
require_once('php/template_footer.php');
?>
