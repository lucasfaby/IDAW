<head>
    <title>connexion SQL</title>
</head>
<?php
require_once("connexion.php");
?>
<body>
    <h1>Page de connexion </h1>
    <h2> Se connecter </h2>
    <form id="login_form" action="connectedSQL.php" method="POST">
    <input name="login" type="text" placeholder="login"> 
    <br>
    <input name="password" type="text" placeholder="password"> 
    <br>
    <input  type="submit" value="connexion"> 
    </form>
    <br>
    <h2>Créer un compte </h2>
    <form id="create_id_form" action="loginSQL.php" method="POST">
    <input name="created_login" type="text" placeholder="login"> 
    <br>
    <input name="created_password" type="text" placeholder="password"> 
    <br>
    <input  type="submit" value="créer un compte"> 
    </form>
</body>