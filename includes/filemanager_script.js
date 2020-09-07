let counter = 0
let selectDepartment = document.getElementById("department");
let selectLevel = document.getElementById("level");
selectDepartment.addEventListener("change", updateForm);
selectLevel.addEventListener("change", getFileListAgain);

function updateForm() {
    let choicedept = selectDepartment.value;

    let twoYearCourse = false;
    let fourYearCourse = false;
    let fiveYearCourse = false;
    let sixYearCourse = false;
    let nonAcademic = false;

    if (
        choicedept == "aerd" ||
        choicedept == "aefm" ||
        choicedept == "agad" ||
        choicedept == "abg" ||
        choicedept == "ann" ||
        choicedept == "aph" ||
        choicedept == "prm" ||
        choicedept == "anp" ||
        choicedept == "aqfm" ||
        choicedept == "emt" ||
        choicedept == "fwm" ||
        choicedept == "wma" ||
        choicedept == "cve" ||
        choicedept == "abe" ||
        choicedept == "mce" ||
        choicedept == "mte" ||
        choicedept == "ele" ||
        choicedept == "cpt" ||
        choicedept == "hrt" ||
        choicedept == "pbst" ||
        choicedept == "ppcp" ||
        choicedept == "sslm" ||
        choicedept == "fst"
    ) {
        fiveYearCourse = true;
    } else if (
        choicedept == "bch" ||
        choicedept == "mcb" ||
        choicedept == "pab" ||
        choicedept == "paz" ||
        choicedept == "csc" ||
        choicedept == "chm" ||
        choicedept == "mts" ||
        choicedept == "phs" ||
        choicedept == "sts" ||
        choicedept == "hsm" ||
        choicedept == "nud" ||
        choicedept == "htm" ||
        choicedept == "bfn" ||
        choicedept == "bam" ||
        choicedept == "eco" ||
        choicedept == "ets"
    ) {
        fourYearCourse = true;
    } else if (
        choicedept == "vab" ||
        choicedept == "vpr" ||
        choicedept == "vms" ||
        choicedept == "vmp" ||
        choicedept == "vpt" ||
        choicedept == "vpp"
    ) {
        sixYearCourse = true;
    } else if (choicedept == "gns") {
        twoYearCourse = true;
    } else if (
        choicedept == "nonAcademic"
    ) {
        nonAcademic = true;
    }

    if (twoYearCourse) {
        let options = selectLevel.getElementsByTagName("option");
        length = options.length;
        for (i = 0; i < length; i += 1) {
            options[0].remove();
        }
        for (i = 100; i < 300; i += 100) {
            let opt = document.createElement("option");
            opt.value = i;
            opt.textContent = i;
            selectLevel.appendChild(opt);
        }
    }
    if (fourYearCourse) {
        let options = selectLevel.getElementsByTagName("option");
        length = options.length;
        for (i = 0; i < length; i += 1) {
            options[0].remove();
        }
        for (i = 100; i < 500; i += 100) {
            let opt = document.createElement("option");
            opt.value = i;
            opt.textContent = i;
            selectLevel.appendChild(opt);
        }
    }
    if (fiveYearCourse) {
        let options = selectLevel.getElementsByTagName("option");
        length = options.length;
        for (i = 0; i < length; i += 1) {
            options[0].remove();
        }
        for (i = 100; i < 600; i += 100) {
            let opt = document.createElement("option");
            opt.value = i;
            opt.textContent = i;
            selectLevel.appendChild(opt);
        }
    }
    if (sixYearCourse) {
        let options = selectLevel.getElementsByTagName("option");
        length = options.length;
        for (i = 0; i < length; i += 1) {
            options[0].remove();
        }
        for (i = 100; i < 700; i += 100) {
            let opt = document.createElement("option");
            opt.value = i;
            opt.textContent = i;
            selectLevel.appendChild(opt);
        }
    }
    if (nonAcademic) {
        let options = selectLevel.getElementsByTagName("option");
        length = options.length;
        for (i = 0; i < length; i += 1) {
            options[0].remove();
        }
        nonAcademics = [
            "spiritual",
            "motivational",
            "relationship",
            "business",
            "others",
        ];
        for (let i = 0; i < nonAcademics.length; i++) {
            let opt = document.createElement("option");
            opt.value = nonAcademics[i];
            opt.textContent = nonAcademics[i];
            selectLevel.appendChild(opt);
        }
    }
    getFileList(selectDepartment.value, selectLevel.value)
}

function validateform() {
    if (selectDepartment.value == "---SELECT DEPARTMENT---") {
        alert("Select Department")
        return false
    } else if (selectLevel.value == "---SELECT LEVEL---") {
        alert("Select Level")
        return false
    }
}


function getFileList(selectDepartment, selectLevel) {
    let selectedDepartment = selectDepartment
    let selectedlevel = selectLevel
    let JSONfilename = selectedDepartment + selectedlevel + ".JSON";

    let currentLocation = document.location.href;
    let pseudolink = currentLocation.split("/")[2];

    let JSONfileLocation =
        "http://" + pseudolink + "/gsffunaab" + "/includes/" + JSONfilename + "?" + Math.floor(Math.random() * 1000);
    let request = new XMLHttpRequest();
    request.open("GET", JSONfileLocation);

    request.onload = function () {
        var object = JSON.parse(request.responseText);

        function displayItems() {
            if (counter > 0) {
                let fileselect = document.getElementById("fileselect");
                fileselect.remove()
            }

            let select = document.getElementById("select");

            let fileselect = document.createElement("select");
            fileselect.name = "fileselect"
            fileselect.id = "fileselect";
            select.appendChild(fileselect);

            for (let i = object.length - 1; i >= 0; i--) {
                let item = object[i];

                let filename = document.createElement("option");
                filename.textContent = item.filename + "--" + i
                fileselect.appendChild(filename);
            }
            counter++
            return counter
        }

        displayItems();
    };
    request.send();
}

function getFileListAgain() {
    getFileList(selectDepartment.value, selectLevel.value)
}

function confirmDelete() {
    let fileselect = document.getElementById("fileselect").value
    alert("Are you sure you want to delete " + fileselect)
}


if (document.location.search == "?success=sucessfullydeleted") {
    let messageDiv = document.getElementById("message")
    let message = document.createElement("p")
    message.textContent = "File Successfully Deleted"
    message.style.color = "green"
    messageDiv.appendChild(message)
}

if (document.location.search == "?success=file%20not%20found") {
    let messageDiv = document.getElementById("message")
    let message = document.createElement("p")
    message.textContent = "File Record Successfully Deleted"
    message.style.color = "yellow"
    messageDiv.appendChild(message)
}

if (document.location.search == "?message=error%20finding%20file") {
    let messageDiv = document.getElementById("message")
    let message = document.createElement("p")
    message.textContent = "Error finding file"
    message.style.color = "red"
    messageDiv.appendChild(message)
}

if (document.location.search == "?message=filesuccessfullyedited") {
    let messageDiv = document.getElementById("message")
    let message = document.createElement("p")
    message.textContent = "File Successfully Edited"
    message.style.color = "green"
    messageDiv.appendChild(message)
}

if (document.location.search == "?message=File%20successfully%20reported") {
    let messageDiv = document.getElementById("message")
    let message = document.createElement("p")
    message.textContent = "File Successfully Reported"
    message.style.color = "green"
    messageDiv.appendChild(message)
}