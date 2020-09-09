function confirmEdit() {
    alert("Are you sure you want to edit file information?")
}

if (document.location.search) {
    let query = document.location.search

    let filenameInput = document.getElementById("filename")
    let departmentInput = document.getElementById("department")
    let levelInput = document.getElementById("level")
    let idInput = document.getElementById("id")
    let descriptionInput = document.getElementById("description")
    let uploaderInput = document.getElementById("uploader")
    let dateInput = document.getElementById("date")

    query = query.substring(1, query.length)
    filename = query.split("&")[0].split("=")[1]
    department = query.split("&")[1].split("=")[1]
    level = query.split("&")[2].split("=")[1]
    id = query.split("&")[3].split("=")[1]
    description = query.split("&")[4].split("=")[1]
    uploader = query.split("&")[5].split("=")[1]
    date = query.split("&")[6].split("=")[1]

    if (filename.includes("%20")) {
        filenameArray = filename.split("%20");
        filename = filenameArray[0];
        for (i = 1; i < filenameArray.length; i++) {
            filename += " " + filenameArray[i]
        }
    }

    if (uploader.includes("%20")) {
        uploaderArray = uploader.split("%20");
        uploader = uploaderArray[0];
        for (i = 1; i < uploaderArray.length; i++) {
            uploader += " " + uploaderArray[i]
        }
    }

    filenameInput.value = filename
    departmentInput.value = department
    levelInput.value = level
    idInput.value = id
    descriptionInput.value = description
    uploaderInput.value = uploader
    dateInput.value = date
}
console.log(uploader)