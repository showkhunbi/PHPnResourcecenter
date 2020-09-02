<?php
if (isset($_POST["report"])) {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $department = trim($_POST["department"]);
    $level = trim($_POST["level"]);
    $fileselect = trim($_POST["fileselect"]);
    $reason = trim($_POST["reason"]);

    $myMail = "maximusjshokes@gmail.com";
    $subject = "A file has been reported in Resource center";
    $header = "From: " . $email;
    $message = "A file has been reported by " . $name . "\n\n" . "REPORT INFORMATION\n" . "Department: " . $department . "\nLevel: " . $level . "\nFilename: " . $fileselect . "\nReason: " . $reason . "\n\nThis is an automatically generated mail. File manager of Resource center should carry out the appropriate action as soon as possible.";

    mail($myMail, $subject, $message, $header);

    header("Location: ../reportfile.php?message=File%20successfully%20reported");
} else {
    header("Location: ../resourcecenter.php?message=accessdenied");
}
