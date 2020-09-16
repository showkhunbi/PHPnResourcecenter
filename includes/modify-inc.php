<?php
if (isset($_POST["delete"])) {
    $department = $_POST["department"];
    $level = $_POST["level"];
    $fileselect = $_POST["fileselect"];

    $selectedFileNo = explode("--", $fileselect);
    $selectedFileNo = end($selectedFileNo);
    $selectedFileName = explode("--" . $selectedFileNo, $fileselect);
    $selectedFileName = $selectedFileName[0];

    $JSONfilename = $department . $level . ".JSON";
    $JSON_file_pointer = $JSONfilename;

    $file = fopen($JSONfilename, "r");
    $filetext = fread($file, filesize($JSON_file_pointer));
    $JSON = json_decode($filetext, true);

    if ($JSON[$selectedFileNo]["filename"] == $selectedFileName) {
        $fileLocation_pointer = "." . $JSON[$selectedFileNo]["filelocation"];
        array_splice($JSON, $selectedFileNo, 1);

        $fileEdited = fopen($JSONfilename, "w");
        $JSONencoded = json_encode($JSON);
        fwrite($fileEdited, $JSONencoded);
        fclose($fileEdited);

        if (unlink($fileLocation_pointer)) {
            header("Location: ../filemanager.php?success=sucessfullydeleted");
        } elseif (!unlink($fileLocation_pointer)) {
            header("Location: ../filemanager.php?success=file not found");
        }
    } else {
        header("Location: ../filemanager.php?message=error finding file");
    }
} elseif (isset($_POST["edit"])) {
    $department = $_POST["department"];
    $level = $_POST["level"];
    $fileselect = $_POST["fileselect"];

    $selectedFileNo = explode("--", $fileselect);
    $selectedFileNo = end($selectedFileNo);
    $selectedFileName = explode("--" . $selectedFileNo, $fileselect);
    $selectedFileName = $selectedFileName[0];

    $JSONfilename = $department . $level . ".JSON";
    $JSON_file_pointer = $JSONfilename;

    $file = fopen($JSONfilename, "r");
    $filetext = fread($file, filesize($JSON_file_pointer));
    $JSON = json_decode($filetext, true);

    if ($JSON[$selectedFileNo]["filename"] == $selectedFileName) {
        $filename = $JSON[$selectedFileNo]["filename"];
        $department = $JSON[$selectedFileNo]["department"];
        $level = $JSON[$selectedFileNo]["level"];
        $id = $selectedFileNo;
        $description = $JSON[$selectedFileNo]["description"];
        $uploader = $JSON[$selectedFileNo]["uploader"];
        $date = $JSON[$selectedFileNo]["date"];

        header("Location: ../filemanager-edit.php?filename=$filename&department=$department&level=$level&id=$id&description=$description&uploader=$uploader&date=$date");
    } else {
        header("Location: ../filemanager.php?message=error finding file");
    }
} else {
    header("Location: ../filemanager.php?message=accessdenied");
}

// $a = [1, 2, 3, 4, 5, 6, 7];
// print_r($a);
// echo "<br>";
// array_splice($a, 3, 1);
// print_r($a);
