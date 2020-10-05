<?php
require_once "./includes/header.php"
?>

<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSF Resource Center - Upload file</title>
</head>

<body> -->
<div class="container">
    <div id="message"></div>
    <form action="./includes/upload-inc.php" method="post" onsubmit="return validateform()" enctype="multipart/form-data">
        <input type="file" name="userUpload" id="" required>
        <select name="department" id="department">
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
            <!-- <optgroup label="Non-Academic">
                <option value="spiritual">Spiritual</option>
                <option value="motivational">Motivational</option>
                <option value="relationship">Relationship</option>
                <option value="business">Business</option>
                <option value="others">Others</option>
            </optgroup> -->
        </select>
        <select name="level" id="level">
            <option>---SELECT LEVEL---</option>
            <!-- <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option> -->
        </select>
        <input type="text" name="courseCode" id="courseCode" placeholder="Course Code">
        <select name="description" id="">
            <option value="note">Note</option>
            <option value="note">Past Question</option>
            <option value="Assignment">Assignments</option>
            <option value="note">Others</option>
        </select>
        <input type="text" name="uploadedby" id="" placeholder="anonymous">
        <button name="submit" type="submit"><img src="./includes/images/upload-img.png" alt=""> UPLOAD</button>
    </form>
</div>
<!-- </body>

</html> -->







<script src="./includes/upload_script.js"></script>
<?php
require_once "./includes/footer.php";
?>