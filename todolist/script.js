let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");
let count = document.getElementById("taskCount");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let task = input.value.trim();
  if (task === "") return;
  let li = document.createElement("li");
  li.textContent = task;
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  let del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "delete-btn";
  del.onclick = function () {
    list.removeChild(li);
    updateCount();
  };
  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
  updateCount();
});

function updateCount() {
  count.textContent = list.children.length;
}
