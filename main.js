let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let mobileNo = document.getElementById("mobile");
let address = document.getElementById("address");
let batch = document.getElementById("batch");
let add = document.getElementById("add");

let row = document.getElementById("row");

let userData = [];

add.addEventListener("click", function () {
  if (
    firstName.value === "" &&
    lastName.value === "" &&
    age.value === "" &&
    mobileNo.value === "" &&
    address.value === "" &&
    batch.value === ""
  ) {
    alert("Please enter somethings");
  } else {
    let uniqueId = 1;

    if (userData.length > 0) {
      let prevId = userData[userData.length - 1].id;
      uniqueId = prevId + 1;
    }

    let userObject = {
      id: uniqueId,
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      mobile: mobileNo.value,
      address: address.value,
      batch: batch.value,
    };

    userData.push(userObject);

    let col = document.createElement("div");
    col.className = "col";
    row.appendChild(col);

    let dataContent = document.createElement("div");
    dataContent.className = "dataContent";
    col.appendChild(dataContent);

    let table = document.createElement("table");
    dataContent.appendChild(table);

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let i = 0; i < 6; i++) {
      if (i == 0) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th = document.createElement("th");
        tr.appendChild(th);

        let h3 = document.createElement("h3");
        h3.innerText = "First Name: ";
        th.appendChild(h3);

        let td = document.createElement("td");
        td.innerText = userObject.firstName;
        tr.appendChild(td);
      } else if (i == 1) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th = document.createElement("th");
        tr.appendChild(th);

        let h3 = document.createElement("h3");
        h3.innerText = "Last Name: ";
        th.appendChild(h3);

        let td = document.createElement("td");
        td.innerText = userObject.lastName;
        tr.appendChild(td);
      } else if (i == 2) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th = document.createElement("th");
        tr.appendChild(th);

        let h3 = document.createElement("h3");
        h3.innerText = "Age: ";
        th.appendChild(h3);

        let td = document.createElement("td");
        td.innerText = userObject.age;
        tr.appendChild(td);
      } else if (i == 3) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th = document.createElement("th");
        tr.appendChild(th);

        let h3 = document.createElement("h3");
        h3.innerText = "Mobile number: ";
        th.appendChild(h3);

        let td = document.createElement("td");
        td.innerText = userObject.mobile;
        tr.appendChild(td);
      } else if (i == 4) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th = document.createElement("th");
        tr.appendChild(th);

        let h3 = document.createElement("h3");
        h3.innerText = "Address: ";
        th.appendChild(h3);

        let td = document.createElement("td");
        td.innerText = userObject.address;
        tr.appendChild(td);
      } else if (i == 5) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th = document.createElement("th");
        tr.appendChild(th);

        let h3 = document.createElement("h3");
        h3.innerText = "Batch: ";
        th.appendChild(h3);

        let td = document.createElement("td");
        td.innerText = userObject.batch;
        tr.appendChild(td);
      }
    }
    let btn = document.createElement("div");
    btn.className = "btn";

    col.appendChild(btn);

    let updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    updateBtn.className = "update-btn";
    btn.appendChild(updateBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";
    btn.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      dataContent.parentElement.remove();
    });

    updateBtn.addEventListener("click", () => {
      let update = updateBtn.parentNode.parentNode;

      let cells = update.getElementsByTagName("td");

      document.getElementById("firstName").value = cells[0].innerHTML;
      document.getElementById("lastName").value = cells[1].innerHTML;
      document.getElementById("age").value = cells[2].innerHTML;
      document.getElementById("mobile").value = cells[3].innerHTML;
      document.getElementById("address").value = cells[4].innerHTML;
      document.getElementById("batch").value = cells[5].innerHTML;

      dataContent.parentElement.remove();
    });

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    mobileNo.value = "";
    address.value = "";
    batch.value = "";
  }
});
