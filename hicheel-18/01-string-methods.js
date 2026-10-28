// Текст = үсгүүдийн массив шиг
const word = "Pinecone";
console.log(word.length); // 8
console.log(word[0]); // "P"
console.log(word[word.length - 1]); // "e"

// trim, toLowerCase, toUpperCase — нэвтрэх
const typed = "  BaT  ";
console.log(typed.trim()); // "BaT"
console.log(typed.trim().toLowerCase()); // "bat"
console.log("бат".toUpperCase()); // "БАТ"

// includes — дотор нь байгаа юу?
console.log("bat@gmail.com".includes("@")); // true
console.log("batgmail.com".includes("@")); // false

// slice — нэг хэсгийг нь авах (4 нь орохгүй)
console.log("99112233".slice(0, 4) + "****"); // "9911****"

// split — текст → массив
const parts = "Бат Эрдэнэ".split(" ");
console.log(parts); // ["Бат", "Эрдэнэ"]
console.log(parts[0][0] + "." + parts[1][0] + "."); // "Б.Э."

// replace — эхний олдсоныг солих
console.log("Сайн уу, {name}! 🎂".replace("{name}", "Сараа"));

// ⚠️ Текстийн method шинэ утга өгнө — хадгал!
let name = "бат";
name.toUpperCase(); // хаягдлаа
console.log(name); // "бат"
name = name.toUpperCase();
console.log(name); // "БАТ"
