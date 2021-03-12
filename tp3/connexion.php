<head><title>testconnexion</title></head>
<body>
<h1>salut</h1>
<?php
try{
    $bdd = new PDO("mysql:host=localhost;dbname=lucas_faby", "lucas.faby", "vVyC7ZAI;");
    
    $res = $bdd -> query("select * from connexion");

    while($line = $res->fetch()){
        echo "<p>id:"+$line["id"]."     pseudo:".$line["pseudo"]."     password:".$line["password"]."</p><br>";
    }
    

}catch(PDOException $e){
    die($e);
}



?>
</body>