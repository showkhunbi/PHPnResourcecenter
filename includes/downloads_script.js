if (document.location.search) {
  let currentLocation = document.location.href;
  let selectedDepartment = currentLocation
    .split("?")[1]
    .split("&")[0]
    .split("=")[1];
  let selectedlevel = currentLocation.split("?")[1].split("&")[1].split("=")[1];
  let JSONfilename = selectedDepartment + selectedlevel + ".JSON";

  pseudolink = currentLocation.split("/")[2];

  let JSONfileLocation =
    "http://" + pseudolink + "/gsffunaab" + "/includes/" + JSONfilename + "?" + Math.floor(Math.random() * 1000); //first string is localhost
  let request = new XMLHttpRequest();
  request.open("GET", JSONfileLocation);
  request.onload = function () {
    var object = JSON.parse(request.responseText);
    
    // let page_number = pagination()[0]
    // let paginate_by = pagination()[1]
    let pagination_ = pagination(object.length, selectedDepartment, selectedlevel)
    let page_number = pagination_[0]
    let paginate_by = pagination_[1]

    function displayItems() {
      let pagination_counter = 0
      for (let i = object.length - 1 - ((page_number - 1)*paginate_by); i >= 0; i--) {
        let imageSrc = getImageSrc(object[i]);
        let item = object[i];
        let container = document.getElementById("container");
        let downloads_container = document.createElement("div");
        downloads_container.id = "downloads_container";
        container.appendChild(downloads_container);

        let files = document.createElement("div");
        files.id = "files";
        downloads_container.appendChild(files);

        let fileimg = document.createElement("div");
        fileimg.id = "fileimg";
        files.appendChild(fileimg);

        let img = document.createElement("img");
        img.alt = "image here";
        img.src = imageSrc;

        fileimg.appendChild(img);

        let filedad = document.createElement("div");
        filedad.id = "filedad";
        files.appendChild(filedad);

        let fileDetails = document.createElement("div");
        fileDetails.id = "fileDetails";
        filedad.appendChild(fileDetails);

        let filename = document.createElement("div");
        filename.id = "filename";
        fileDetails.appendChild(filename);

        let span = document.createElement("span");
        span.id = "spanimg";
        filename.appendChild(span);

        let spanimg = document.createElement("img");
        spanimg.src = imageSrc;
        spanimg.alt = "image here";
        span.appendChild(spanimg);

        let h5 = document.createElement("h5");
        h5.textContent = item.filename;
        filename.appendChild(h5);

        let file_clickables = document.createElement("div");
        file_clickables.id = "file_clickables";
        fileDetails.appendChild(file_clickables);

        let psize = document.createElement("p");
        let size = item.filesize / 1048576;
        size = size.toFixed(2)
        psize.textContent = "Size: " + size + "Mb";
        file_clickables.appendChild(psize);

        let pdept = document.createElement("p");
        pdept.textContent = item.department;
        file_clickables.appendChild(pdept);

        let plevel = document.createElement("p");
        plevel.textContent = item.level;
        file_clickables.appendChild(plevel);

        let pdescription = document.createElement("p");
        pdescription.textContent = item.description;
        file_clickables.appendChild(pdescription);

        let file_unclickables = document.createElement("div");
        file_unclickables.id = "file_unclickables";
        fileDetails.appendChild(file_unclickables);

        let puploader = document.createElement("p");
        puploader.textContent = "Uploaded by: " + item.uploader;
        file_unclickables.appendChild(puploader);

        let pdate = document.createElement("p");
        pdate.textContent = item.date;
        file_unclickables.appendChild(pdate);

        let ddiv = document.createElement("div");
        ddiv.id = "ddiv";
        filedad.appendChild(ddiv);


        let a = document.createElement("a");
        a.id = "download-btn";
        a.href = item.filelocation;

        // let aImg = document.createElement("img");
        // aImg.src = "./includes/images/download-img.png"
        // a.appendChild(aImg);
        a.innerHTML = '<img src = "./includes/images/download-img.png" alt = "" > Download'
        // a.textContent = "Download";
        ddiv.appendChild(a);
        
        pagination_counter++
        if (pagination_counter >= paginate_by){
          break
        }
      
      }
    }
    displayItems();
  };

  function getImageSrc(object) {
    if (object.filetype == "vnd.ms-excel.sheet.macroEnabled.12") {
      imageSrc = "./includes/images/excel.png";
    } else if (
      object.filetype == "msword" ||
      object.filetype ==
      "vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      imageSrc = "./includes/images/doc.png";
    } else if (object.filetype == "pdf") {
      imageSrc = "./includes/images/pdf.png";
    } else if (object.filetype == "png" || object.filetype == "jpeg") {
      imageSrc = "./includes/images/pic.png";
    } else if (object.filetype == "x-zip-compressed") {
      imageSrc = "./includes/images/zip.png";
    } else if (object.filetype == "plain") {
      imageSrc = "./includes/images/txt.png";
    } else if (object.filetype == "x-matroska") {
      imageSrc = "./includes/images/video.png";
    } else if (object.filetype == "mp3") {
      imageSrc = "./includes/images/music.png";
    } else {
      imageSrc = "./includes/images/txt.png";
    }
    return imageSrc;
  }

  request.send();

  function insertPageNav() {
    let li = document.getElementById("li");
    let p_dept = document.createElement("p");
    p_dept.textContent = "> " + selectedDepartment + " >";
    p_dept.id = "p_dept"
    li.appendChild(p_dept);
    let p_level = document.createElement("p");
    p_level.id = "p_level"

    if (selectedlevel == 100 || selectedlevel == 200 || selectedlevel == 300 || selectedlevel == 400 || selectedlevel == 500 || selectedlevel == 600) {
      p_level.textContent = selectedlevel + " level";
    } else {
      p_level.textContent = selectedlevel
    }
    li.appendChild(p_level);
  }
  insertPageNav();
} else {
  // document.location.href = "./resourcecenter.php"
}



function pagination(object_length, department, level){
  let paginate_by = 10
  //page number
  let page_link = document.location.origin + document.location.pathname + "?dept=" + department + "&level=" + level
  let page_number = 1
  try {
    if (document.location.search.split("&")[2].split("=")[0] === "page"){
      page_number = Number(document.location.search.split("&")[2].split("=")[1])
    };
  } catch{
    page_number = 1
  }

  //create pagination links
  let number_of_pages = Math.ceil(object_length/paginate_by)

  let pagination_nav_links = document.getElementById("pagination_nav_links")
  let pagination = document.createElement("div")
  pagination.id = "pagination"
  pagination.classList = ["pagination"]
  pagination_nav_links.append(pagination)

  let pagination_details = document.createElement("span")
  pagination_details.textContent = "Page " + page_number + " of " + number_of_pages
  pagination.append(pagination_details)
  
  for (i = 3;i >=1; i--){
    if (page_number - i > 0){
      let prev_nav_button = document.createElement("a")
      prev_nav_button.classList = ["inactive"]
      prev_nav_button.textContent = page_number - i
      prev_nav_button.href = page_link + "&page=" + (page_number - i)
      pagination.append(prev_nav_button)
    }
  }

  let current_page = document.createElement("span")
  current_page.classList = ["current"]
  current_page.textContent = page_number
  pagination.append(current_page)

  for (i = 1;i <=5; i++){
    if (page_number + i <= number_of_pages){
      let next_nav_button = document.createElement("a")
      next_nav_button.classList = ["inactive"]
      next_nav_button.textContent = page_number + i
      next_nav_button.href = page_link + "&page=" + (page_number + i)
      pagination.append(next_nav_button)
    }
  }

  if (page_number > 1){
    let prev_page = document.createElement("a")
    prev_page.textContent = "<< First"
    prev_page.href = page_link
    pagination.append(prev_page)
  }

  if (page_number > 1){
    let prev_page = document.createElement("a")
    prev_page.textContent = "< Prev"
    prev_page.href = page_link + "&page=" + (page_number - 1)
    pagination.append(prev_page)
  }

  if (page_number < number_of_pages){
    let prev_page = document.createElement("a")
    prev_page.textContent = "Next >"
    prev_page.href = page_link + "&page=" + (page_number + 1)
    pagination.append(prev_page)
  }
  
  if (page_number < number_of_pages){
    let prev_page = document.createElement("a")
    prev_page.textContent = "Last >>"
    prev_page.href = page_link + "&page=" + number_of_pages
    pagination.append(prev_page)
  }

  return return_values = [page_number, paginate_by]
}
