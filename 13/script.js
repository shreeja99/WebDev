let count = 0;

function addTask() {
  let input = document.getElementById("taskInput");
  let list = document.getElementById("list");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerHTML = input.value + " <button onclick='removeTask(this)'>X</button>";

  list.appendChild(li);

  count++;
  document.getElementById("count").innerText = count;

  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
  count--;
  document.getElementById("count").innerText = count;
}