<?php
if (isset($_POST["edit"])) {
    $filenameEdit = $_POST["filename"];
    $departmentEdit = $_POST["department"];
    $levelEdit = $_POST["level"];
    $idEdit = $_POST["id"];
    $descriptionEdit = $_POST["description"];
    $uploaderEdit = $_POST["uploader"];
    $dateEdit = $_POST["date"];

    $JSONfilename = $departmentEdit . $levelEdit . ".JSON";
    $JSON_file_pointer = $JSONfilename;

    $file = fopen($JSONfilename, "r");
    $filetext = fread($file, filesize($JSON_file_pointer));
    $JSON = json_decode($filetext, true);


    $JSON[$idEdit]["filename"] = $filenameEdit;
    $JSON[$idEdit]["description"] = $descriptionEdit;
    $JSON[$idEdit]["uploader"] = $uploaderEdit;
    $JSON[$idEdit]["date"] = $dateEdit;

    $fileEdited = fopen($JSONfilename, "w");
    $JSONencoded = json_encode($JSON);
    fwrite($fileEdited, $JSONencoded);
    fclose($fileEdited);

    header("Location: ../filemanager.php?message=filesuccessfullyedited");
}
