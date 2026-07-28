const guestForm = document.getElementById("guestForm");
const fullNameInput = document.getElementById("fullName");
const messageInput = document.getElementById("message");
const messageList = document.getElementById("messageList");

guestForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const message = messageInput.value.trim();

  const newMessage = document.createElement("li");

  newMessage.textContent = fullName + ": " + message;

  newMessage.classList.add("list-group-item");

  messageList.appendChild(newMessage);

  guestForm.reset();
});