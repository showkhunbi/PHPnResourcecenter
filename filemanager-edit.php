<?php
session_start();
if (isset($_SESSION["username"])) {
    echo '<form action="filemanager.php" method="post">
    <button type="submit" name="logout">logout</button>
    </form>';
    if (isset($_POST["logout"])) {
        session_destroy();
        header("Location: filemanager.php?success=loggedout");
    }
} else {
    header("Location: login-rec.php?notloggedin");
    if (isset($_GET["success"])) {
        echo $_GET["success"];
    }
}
?>


<?php
require_once "./includes/header.php"
?>
<div class="container">
    <form action="./includes/edit-inc.php" method="post" enctype="multipart/form-data">
        <div id="select">
            <input id="filename" name="filename" type="text" required>
            <input id="department" class="hide" name="department" type="text">
            <input id="level" class="hide" name="level" type="text">
            <input id="id" class="hide" name="id" type="text">
            <input id="description" name="description" type="text" required>
            <input id="uploader" name="uploader" type="text" required>
            <input id="date" name="date" type="text" required>
        </div>
        <div id="modify">
            <button type="submit" name="edit" onclick="confirmEdit()"><img src="./includes/images/edit-img.png" alt="">Edit File</button>
        </div>
    </form>


    <div>

    </div>
</div>





<script src="./includes/filemanager-edit_script.js">

</script>
<!-- <script src="./scrit.js"></script> -->
<?php
require_once "./includes/footer.php"
?>