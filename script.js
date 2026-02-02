const prioritySelect = document.getElementById("priority");
const taskCard = document.getElementById("taskCard");

prioritySelect.addEventListener("change", () => {
  if (prioritySelect.value === "urgent") {
    taskCard.classList.add("urgent");
  } else {
    taskCard.classList.remove("urgent");
  }
});
