document.getElementById("addBtn").addEventListener("click", function() {
  const newName = document.getElementById("newName").value;
  const newLastName = document.getElementById("newLastName").value;
  const newAge = document.getElementById("newAge").value;
  
  const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(-1); 
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  
  cell1.innerHTML = table.rows.length;
  cell2.innerHTML = newName;
  cell3.innerHTML = newLastName;
  cell4.innerHTML = newAge;
  cell5.innerHTML = '<button class="editBtn">Edit</button><button class="deleteBtn">Delete</button>';
  
  document.getElementById("newName").value = "";
  document.getElementById("newLastName").value = "";
  document.getElementById("newAge").value = "";
});


