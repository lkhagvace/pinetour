const nameInput = document.getElementById("nameInput");
const passInput = document.getElementById("passInput");
const message = document.getElementById("message");

function login() {
  // Хэрэглэгчийн санамсаргүй зай, том үсгийг уучилна
  const username = nameInput.value.trim().toLowerCase();
  const password = passInput.value;

  if (username === "" || password === "") {
    message.textContent = "✏️ Хоёуланг нь бөглө";
  } else if (password.length < 8) {
    message.textContent = "🔒 Нууц үг 8-аас дээш тэмдэгттэй";
  } else if (username === "bat" && password === "pinecone2026") {
    message.textContent = `👋 Тавтай морил, ${username.toUpperCase()}!`;
  } else {
    message.textContent = "❌ Нэр эсвэл нууц үг буруу";
  }
}
