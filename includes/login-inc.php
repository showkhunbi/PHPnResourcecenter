<?php
if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $username = strtoupper($username);
    $password = strtoupper($password);

    if (empty($username) || empty($password)) {
        header("Location: ../login-rec.php?error=emptyfields");
        exit();
    } else {
        $file = fopen("./filemanager", "r");
        $admin = fread($file, filesize("./filemanager"));
        $admin = explode("
", $admin);
        $FMusername = $admin[0];
        $FMpass = $admin[1];
        $FMusername = strtoupper($FMusername);
        $FMpass = strtoupper($FMpass);
        fclose($file);
        if (!($FMusername == $username)) {
            header("Location: ../login-rec.php?error=invalidusername");
            exit();
        } else {
            if (!($FMpass == $password)) {
                header("Location: ../login-rec.php?error=invalidpassword");
                exit();
            } else if ($FMusername == $username && $FMpass == $password) {
                session_start();
                $_SESSION["username"] = $FMusername;
                echo ($_SESSION["username"]);
                header("Location: ../filemanager.php?success=loggedin");
                exit();
            } else {
                header("Location: ../login-rec.php?error=errorloggingin");
                exit();
            }
        }
    }
} else {
    header("Location: ../filemanager.php?error=accessdenied");
    exit();
}
