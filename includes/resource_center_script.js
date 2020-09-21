let i = 100;
let dept = "";

function getLevel(self) {
  console.log(self);
  let choice = self;
  choice = choice.id;
  let ul = document.createElement("ul");
  ul.id = choice + "levelUl";
  let clickedDepartment = document.getElementById(choice + "d");
  clickedDepartment.append(ul);
  let levelUl = document.getElementById(choice + "levelUl");

  let twoYearCourse = false;
  let fourYearCourse = false;
  let fiveYearCourse = false;
  let sixYearCourse = false;
  if (
    choice == "aerd" ||
    choice == "aefm" ||
    choice == "agad" ||
    choice == "abg" ||
    choice == "ann" ||
    choice == "aph" ||
    choice == "prm" ||
    choice == "anp" ||
    choice == "aqfm" ||
    choice == "emt" ||
    choice == "fwm" ||
    choice == "wma" ||
    choice == "cve" ||
    choice == "abe" ||
    choice == "mce" ||
    choice == "mte" ||
    choice == "ele" ||
    choice == "cpt" ||
    choice == "hrt" ||
    choice == "pbst" ||
    choice == "ppcp" ||
    choice == "sslm" ||
    choice == "fst"
  ) {
    fiveYearCourse = true;
  } else if (
    choice == "bch" ||
    choice == "mcb" ||
    choice == "pab" ||
    choice == "paz" ||
    choice == "csc" ||
    choice == "chm" ||
    choice == "mts" ||
    choice == "phs" ||
    choice == "sts" ||
    choice == "hsm" ||
    choice == "nud" ||
    choice == "htm" ||
    choice == "bfn" ||
    choice == "bam" ||
    choice == "eco" ||
    choice == "ets"
  ) {
    fourYearCourse = true;
  } else if (
    choice == "vab" ||
    choice == "vpr" ||
    choice == "vms" ||
    choice == "vmp" ||
    choice == "vpt" ||
    choice == "vpp"
  ) {
    sixYearCourse = true;
  } else if (choice == "gns") {
    twoYearCourse = true;
  }

  if (fiveYearCourse) {
    console.log("hey");
    if (i == 100 || dept !== choice) {
      i = 100;
      while (i < 600) {
        let li = document.createElement("li");
        li.innerHTML =
          '<a href="./downloads.php?dept=' +
          choice +
          "&level=" +
          i +
          '">' +
          i +
          " level </a>";
        levelUl.append(li);
        i += 100;
        console.log(li);
      }
    }
  }
  if (fourYearCourse) {
    if (i == 100 || dept !== choice) {
      i = 100;
      while (i < 500) {
        let li = document.createElement("li");
        li.innerHTML =
          '<a href="./downloads.php?dept=' +
          choice +
          "&level=" +
          i +
          '">' +
          i +
          " level </a>";
        levelUl.append(li);
        i += 100;
      }
    }
  }
  if (sixYearCourse) {
    if (i == 100 || dept !== choice) {
      i = 100;
      while (i < 700) {
        let li = document.createElement("li");
        li.innerHTML =
          '<a href="./downloads.php?dept=' +
          choice +
          "&level=" +
          i +
          '">' +
          i +
          " level </a>";
        levelUl.append(li);
        i += 100;
      }
    }
  }
  if (twoYearCourse) {
    if (i == 100 || dept !== choice) {
      i = 100;
      while (i < 300) {
        let li = document.createElement("li");
        li.innerHTML =
          '<a href="./downloads.php?dept=' +
          choice +
          "&level=" +
          i +
          '">' +
          i +
          " level </a>";
        levelUl.append(li);
        i += 100;
      }
    }
  }
  dept = choice;
  return i;
  return dept;
}



// console.log(document.location.search)
// if (document.location.search) {
//   console.log("true")
//   console.log(document.location.search)
// } else console.log("false")