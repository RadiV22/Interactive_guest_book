const guestForm = document.getElementById("guestForm");
const fullNameInput = document.getElementById("fullName");
const messageInput = document.getElementById("message");
const messageList = document.getElementById("messageList");
const emptyMessage = document.getElementById("emptyMessage");
const messageCount = document.getElementById("messageCount");
const submitStatus = document.getElementById("submitStatus");

guestForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const message = messageInput.value.trim();

  // Mencegah nama atau pesan yang hanya berisi spasi.
  if (fullName === "" || message === "") {
    submitStatus.textContent = "Nama dan pesan wajib diisi.";

    if (fullName === "") {
      fullNameInput.focus();
    } else {
      messageInput.focus();
    }

    return;
  }

  const newMessage = document.createElement("li");
  newMessage.classList.add("message-card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("message-card-header");

  const avatar = document.createElement("span");
  avatar.classList.add("message-avatar");
  avatar.setAttribute("aria-hidden", "true");

  const initials = fullName
    .split(/\s+/)
    .slice(0, 2)
    .map(function (word) {
      return Array.from(word)[0];
    })
    .join("")
    .toUpperCase();

  avatar.textContent = initials;

  const author = document.createElement("div");
  author.classList.add("message-author");

  const nameText = document.createElement("h3");
  nameText.textContent = fullName;

  const authorLabel = document.createElement("span");
  authorLabel.textContent = "Pengunjung";

  const messageText = document.createElement("p");
  messageText.classList.add("message-content");
  messageText.textContent = message;

  author.appendChild(nameText);
  author.appendChild(authorLabel);

  cardHeader.appendChild(avatar);
  cardHeader.appendChild(author);

  newMessage.appendChild(cardHeader);
  newMessage.appendChild(messageText);

  // Pesan terbaru muncul paling atas.
  messageList.prepend(newMessage);

  emptyMessage.hidden = true;
  messageCount.textContent = messageList.children.length + " pesan";

  guestForm.reset();

  submitStatus.textContent = "Pesan berhasil ditambahkan. Terima kasih!";
  fullNameInput.focus();
});
