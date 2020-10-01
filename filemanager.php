<?php
session_start();
if (isset($_SESSION["username"])) {
    echo '<form action="filemanager.php" method="post">
    <button type="submit" name="logout">logout</button>
    </form>';
    if (isset($_POST["logout"])) {
        session_destroy();
        header("Location: login-rec.php?success=loggedout");
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
    <div id="message"></div>
    <form action="./includes/modify-inc.php" method="post" onsubmit="return validateform()" enctype="multipart/form-data">
        <div id="select">
            <select name="department" id="department" required>
                <option>---SELECT DEPARTMENT---</option>
                <optgroup label="COLAMRUD">
                    <option value="aefm">aefm</option>
                    <option value="aerd">aerd</option>
                    <option value="agad">agad</option>
                    <option value="gns">gns</option>
                </optgroup>
                <optgroup label="COLANIM">
                    <option value="abg">abg</option>
                    <option value="ann">ann</option>
                    <option value="anp">anp</option>
                    <option value="aph">aph</option>
                    <option value="prm">prm</option>
                </optgroup>
                <optgroup label="COLBIOS">
                    <option value="bch">bch</option>
                    <option value="mcb">mcb</option>
                    <option value="pab">pab</option>
                    <option value="paz">paz</option>
                </optgroup>
                <optgroup label="COLENG">
                    <option value="abe">abe</option>
                    <option value="cve">cve</option>
                    <option value="ele">ele</option>
                    <option value="mce">mce</option>
                    <option value="mte">mte</option>
                    </optgroup:label>
                <optgroup label="COLERM">
                    <option value="aqfm">aqfm</option>
                    <option value="emt">emt</option>
                    <option value="fwm">fwm</option>
                    <option value="wma">wma</option>
                </optgroup>
                <optgroup label="COLMAS">
                    <option value="bam">bam</option>
                    <option value="bfn">bfn</option>
                    <option value="eco">eco</option>
                    <option value="ets">ets</option>
                </optgroup>
                <optgroup label="COLPHEC">
                    <option value="fst">fst</option>
                    <option value="hsm">hsm</option>
                    <option value="htm">htm</option>
                    <option value="nud">nud</option>
                </optgroup>
                <optgroup label="COLPHYS">
                    <option value="chm">chm</option>
                    <option value="csc">csc</option>
                    <option value="mts">mts</option>
                    <option value="phs">phs</option>
                    <option value="sts">sts</option>
                </optgroup>
                <optgroup label="COLPLANT">
                    <option value="cpt">cpt</option>
                    <option value="hrt">hrt</option>
                    <option value="pbst">pbst</option>
                    <option value="ppcp">ppcp</option>
                    <option value="sslm">sslm</option>
                </optgroup>
                <optgroup label="COLVET">
                    <option value="vab">vab</option>
                    <option value="vpr">vpr</option>
                    <option value="vms">vms</option>
                    <option value="vmp">vmp</option>
                    <option value="vpt">vpt</option>
                    <option value="vpp">vpp</option>
                </optgroup>
                <option value="nonAcademic" style="font-weight: bold;">NON-ACADEMIC</option>
            </select>
            <select name="level" id="level" required>
                <option>---SELECT LEVEL---</option>
            </select>
        </div>
        <div id="modify">
            <button type="submit" name="edit"><img src="./includes/images/edit-img.png" alt="">Edit File</button>
            <button type="submit" name="delete" onclick="confirmDelete()"><img src="./includes/images/delete-img.png" alt="">Delete File</button>
        </div>
    </form>


    <div>

    </div>
</div>





<script src="./includes/filemanager_script.js">

</script>
<!-- <script src="./scrit.js"></script> -->
<?php
require_once "./includes/footer.php"
?>