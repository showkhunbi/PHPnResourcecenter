<?php
require_once "./includes/header.php";

?>
<div class="container">
    <h4 class="rec-h">Explore, Share and Store Academic Resources Easily</h4>
    <p class="rec-p">Upload, discover and Share files without a hitch</p>
    <form action="./upload.php"><button class="rec-upload_botton">Upload file</button></form>
    <div class="rec-content">
        <div class="rec-categories">
            <div class="rec-colleges">
                <h6>College of Agricultural Management and Rural Development Menu</h6>
                <ul>
                    <li>
                        <div id="aerdd"><a id="aerd" onclick="getLevel(this)" href="#aerd">Agricultural Extention & Rural Development</a></div>
                        <div id="aefmd"><a id="aefm" onclick="getLevel(this)" href="#aefm">Agricultural Economics & Farm Management</a></div>
                        <div id="gnsd"><a id="gns" onclick="getLevel(this)" href="#gns">Communication & General Studies</a></div>
                        <div id="agadd"><a id="agad" onclick="getLevel(this)" href="#agad">Agricultural Administration</a></div>
                    </li>

                </ul>
            </div>

            <div class="rec-colleges">
                <h6>College of Animal Sciences and Livestock Production Menu</h6>
                <ul>
                    <li>
                        <div id="abgd"><a id="abg" onclick="getLevel(this)" href="#abg">Animal Breeding and Genetics</a></div>
                        <div id="annd"><a id="ann" onclick="getLevel(this)" href="#ann">Animal Nutrition</a></div>
                        <div id="aphd"><a id="aph" onclick="getLevel(this)" href="#aph">Animal Production and Health</a></div>
                        <div id="prmd"><a id="prm" onclick="getLevel(this)" href="#prm">Pasture and Range Management</a></div>
                        <div id="anpd"><a id="anp" onclick="getLevel(this)" href="#anp">Animal Physiology</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Biological Sciences Menu</h6>
                <ul>
                    <li>
                        <div id="bchd"><a id="bch" onclick="getLevel(this)" href="#bch">Biochemistry</a></div>
                        <div id="mcbd"><a id="mcb" onclick="getLevel(this)" href="#mcb">Microbiology</a></div>
                        <div id="pabd"><a id="pab" onclick="getLevel(this)" href="#pab">Pure and Applied Botany</a></div>
                        <div id="pazd"> <a id="paz" onclick="getLevel(this)" href="#paz">Pure and Applied Zoology</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Engineering Menu</h6>
                <ul>
                    <li>
                        <div id="abed"><a id="abe" onclick="getLevel(this)" href="#abe">Agricultural Engineering</a></div>
                        <div id="cved"><a id="cve" onclick="getLevel(this)" href="#cve">Civil Engineering</a></div>
                        <div id="eled"><a id="ele" onclick="getLevel(this)" href="#ele">Electrical/Electronics Engineering</a></div>
                        <div id="mced"><a id="mce" onclick="getLevel(this)" href="#mce">Mechanical Engineering</a></div>
                        <div id="mted"><a id="mte" onclick="getLevel(this)" href="#mte">Mechatronics Engineering</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Environmental Resources Management Menu</h6>
                <ul>
                    <li>
                        <div id="aqfmd"><a id="aqfm" onclick="getLevel(this)" href="#aqfm">Aquaculture and Fisheries Management</a></div>
                        <div id="emtd"><a id="emt" onclick="getLevel(this)" href="#emt">Environmental Management and Toxicology</a></div>
                        <div id="fwmd"><a id="fwm" onclick="getLevel(this)" href="#fwm">Forestry and Wildlife Management</a></div>
                        <div id="wmad"><a id="wma" onclick="getLevel(this)" href="#wma">Water Resources Management and Agrometrology</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Food Science and Human Ecology Menu</h6>
                <ul>
                    <li>
                        <div id="fstd"><a id="fst" onclick="getLevel(this)" href="#fst">Food Science and Technology</a></div>
                        <div id="hsmd"><a id="hsm" onclick="getLevel(this)" href="#hsm">Home Sciene and Management</a></div>
                        <div id="nudd"><a id="nud" onclick="getLevel(this)" href="#nud">Nutrition and Dietetics</a></div>
                        <div id="htmd"><a id="htm" onclick="getLevel(this)" href="#htm">Hospitality and Tourism</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Management Science Menu</h6>
                <ul>
                    <li>
                        <div id="bamd"><a id="bam" onclick="getLevel(this)" href="#bam">Banking and Finance</a></div>
                        <div id="bfnd"><a id="bfn" onclick="getLevel(this)" href="#bfn">Business Administration Management</a></div>
                        <div id="ecod"><a id="eco" onclick="getLevel(this)" href="#eco">Economics</a></div>
                        <div id="etsd"><a id="ets" onclick="getLevel(this)" href="#ets">Entrepreneurial Studies</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Physical Sciences Menu</h6>
                <ul>
                    <li>
                        <div id="chmd"><a id="chm" onclick="getLevel(this)" href="#chm">Chemistry</a></div>
                        <div id="cscd"><a id="csc" onclick="getLevel(this)" href="#csc">Computer Science</a></div>
                        <div id="mtsd"><a id="mts" onclick="getLevel(this)" href="#mts">Mathematics</a></div>
                        <div id="phsd"><a id="phs" onclick="getLevel(this)" href="#phs">Physics</a></div>
                        <div id="stsd"><a id="sts" onclick="getLevel(this)" href="#sts">Statistics</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Plant Science and Crop Production Menu</h6>
                <ul>
                    <li>
                        <div id="cptd"><a id="cpt" onclick="getLevel(this)" href="#cpt">Crop Protection</a></div>
                        <div id="hrtd"><a id="hrt" onclick="getLevel(this)" href="#hrt">Horticulture</a></div>
                        <div id="pbstd"><a id="pbst" onclick="getLevel(this)" href="#pbst">Plant Breeding & Seed Technology</a></div>
                        <div id="ppcpd"><a id="ppcp" onclick="getLevel(this)" href="#ppcp">Plant Physiology & Crop Production</a></div>
                        <div id="sslmd"><a id="sslm" onclick="getLevel(this)" href="#sslm">Soil Science & Land Management</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>College of Veterinary Medicine Menu</h6>
                <ul>
                    <li>
                        <div id="vabd"><a id="vab" onclick="getLevel(this)" href="#vab">Veterinary Anatomy</a></div>
                        <div id="vprd"><a id="vpr" onclick="getLevel(this)" href="#vpr">Vet. Public Health & Repr.</a></div>
                        <div id="vmsd"><a id="vms" onclick="getLevel(this)" href="#vms">Vet. Medicine & Surgery</a></div>
                        <div id="vmpd"><a id="vmp" onclick="getLevel(this)" href="#vmp">Vet. Microbic. & Para.</a></div>
                        <div id="vptd"><a id="vpt" onclick="getLevel(this)" href="#vpt">Veterinary Pathology</a></div>
                        <div id="vppd"><a id="vpp" onclick="getLevel(this)" href="#vpp">Vet. Physiology & Pharm.</a></div>
                    </li>
                </ul>
            </div>
            <div class="rec-colleges">
                <h6>None-Academic Resources Menu</h6>
                <ul>
                    <li>
                        <div id="spirituald"><a id="spiritual" href="./downloads.php?dept=nonAcademic&level=spiritual">Spiritual</a></div>
                        <div id="motivationald"><a id="motivational" href="./downloads.php?dept=nonAcademic&level=motivational">Motivational</a></div>
                        <div id="relationshipd"><a id="relationship" href="./downloads.php?dept=nonAcademic&level=relationship">Relationship</a></div>
                        <div id="businessd"><a id="business" href="./downloads.php?dept=nonAcademic&level=business">Business</a></div>
                        <div id="othersd"><a id="others" href="./downloads.php?dept=nonAcademic&level=others">Others</a></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>



<script src="./includes/resource_center_script.js"></script>
<?php
require_once "./includes/footer.php"
?>