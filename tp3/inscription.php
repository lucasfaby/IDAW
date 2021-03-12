<head><title>inscription</title></head>
<body>
<h1>salut</h1>
<?php

$login = $_POST["login"];
$password = $_POST["password"];
$pseudo = $_POST["pseudo"];
//echo "<h1>".$login."-".$password."-".$pseudo."</h1>";
try{
    $bdd = new PDO("mysql:host=localhost;dbname=lucas_faby", "lucas.faby", "vVyC7ZAI;");

    if ($login){
        $sql = "insert into connexion (login, password, pseudo) values ('".$login."' , '".$password."' , '".$pseudo."')";
    $bdd->exec($sql);
    echo "<h3>Vous avez ajouté l'utilistateur : ".$login."</h1>";

    }
    
}catch(Exception $e){
    die($e);
}
?>

<form id="inscription_form" action="inscription.php" method="POST">
    <input type = "text" name="login" placeholder="login">
    <br>
    <input type = "password" name = "password" placeholder="password">
    <br>
    <input type = "text" name ="pseudo" placeholder="pseudo">
    <br>
    <input type = "submit" value="ajouter un utilistateur"> 

</form>
</body>