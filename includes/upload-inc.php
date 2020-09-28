<?php
if (isset($_POST["submit"])) {
    $file = $_FILES["userUpload"];
    $fileerror = $file["error"];
    if ($fileerror === 0) {
        $courseCode = $_POST["courseCode"];
        if ($courseCode != "") {
            $courseCode = strtoupper($courseCode) . ":";
        }
        $filename = $courseCode . $file["name"];
        $filename2 = $file["name"];
        $filesize = $file["size"];
        $filetype = $file["type"];
        $filetype = explode("/", $filetype);
        $filetype = ($filetype[1]);

        $filetmp_name = $file["tmp_name"];
        $filenameInArray = explode(".", $filename2);
        $fileExtension = end($filenameInArray);
        $filenameOnly = $filenameInArray[0] . "_gsffunaab_";

        $newFileName = uniqid($filenameOnly, false) . "." . $fileExtension;
        move_uploaded_file($filetmp_name, "../uploads/" . $newFileName);
        $fileLocation = "./uploads/" . $newFileName;

        $department = $_POST["department"];
        $level = $_POST["level"];
        $description = $_POST["description"];
        if ($_POST["uploadedby"] !== "") {
            $uploader = $_POST["uploadedby"];
        } else {
            $uploader = "anonymous";
        }

        $JSONfilename = $department . $level . ".JSON";
        if (!$JSONfilesize = filesize($JSONfilename)) {
            $JSONfilesize = 0;
        } else {
            $JSONfilesize = filesize($JSONfilename);
        }
        $file = fopen($JSONfilename, "r");
        $newfile = false;
        if ($JSONfilesize == 0) {
            fclose($file);
            $file = fopen($JSONfilename, "w");
            fwrite($file, "[]");
            fclose($file);
            $file = fopen($JSONfilename, "r");
            $newfile = true;
            $JSONfilesize = 2;
        }
        $filetext = fread($file, $JSONfilesize - 1);
        fclose($file);
        $file = fopen($JSONfilename, "w");
        fwrite($file, $filetext);

        $date = date("d/M/Y");


        if (!$newfile) {
            fwrite($file, ',' . "\n" . '{"filename": "' . $filename . '",' . "\n" . '"filesize": "' . $filesize . '",' . "\n" . '"filetype": "' . $filetype . '",' . "\n" . '"filelocation": "' . $fileLocation . '",' . "\n" . '"department": "' . $department . '",' . "\n" . '"level": "' . $level . '",' . "\n" . '"description": "' . $description . '",' . "\n" . '"uploader": "' . $uploader . '",' . "\n" . '"date": "' . $date . '",' . "\n" . '"filter": "show all"' . "\n" . '}]');
        } else {
            fwrite($file, '{"filename": "' . $filename . '",' . "\n" . '"filesize": "' . $filesize . '",' . "\n" . '"filetype": "' . $filetype . '",' . "\n" . '"filelocation": "' . $fileLocation . '",' . "\n" . '"department": "' . $department . '",' . "\n" . '"level": "' . $level . '",' . "\n" . '"description": "' . $description . '",' . "\n" . '"uploader": "' . $uploader . '",' . "\n" . '"date": "' . $date . '",' . "\n" . '"filter": "show all"' . "\n" . '}]');
        }
        header("Location: ../upload.php?fileSuccessfullyUploaded");
    } else {
        header("Location: ../upload.php?message=error%20in%20uploading%20file");
    }
}
