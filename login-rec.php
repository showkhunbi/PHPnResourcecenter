<?php
require_once "./includes/header.php"
?>
<div class="container">
    <div id="message"></div>
    <h3 class="rec-h">FILE MANAGER Log in</h3>
    <p class="rec-p">Welcome FILE MANAGER, Confirm your Identity</p>
    <form action="./includes/login-inc.php" method="post">
        <input type="text" name="username" placeholder="Username" id="" required>
        <input type="password" name="password" placeholder="Password" id="" required>
        <button type="submit" name="submit">LOGIN</button>
    </form>
</div>

<script src="./includes/login-rec_script.js"></script>
<?php
require_once "./includes/footer.php"
?>