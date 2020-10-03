<?php
require_once "./includes/header.php"
?>
<div class="container">
    <div id="message"></div>
    <form action="./includes/contact-inc.php" method="post" onsubmit="return validateform()" enctype="multipart/form-data">
        <div id="select">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
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
        <textarea name="reason" id="" cols="30" rows="5" style="display:block; margin:20px auto;" placeholder="Reason"></textarea>
        <div id="modify">
            <button type="submit" name="report"><img src="./includes/images/edit-img.png" alt="">Submit Report</button>
        </div>
    </form>


    <div>

    </div>
</div>

<script src="./includes/filemanager_script.js"></script>

<?php
require_once "./includes/footer.php"
?>