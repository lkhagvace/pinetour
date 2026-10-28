// push / pop — массивыг өөрийг нь өөрчилнө
const cart = ["🍎", "🥛"];
cart.push("🍞");
cart.push("🧀");
console.log(cart); // ["🍎", "🥛", "🍞", "🧀"]
cart.pop();
console.log(cart, cart.length); // ["🍎", "🥛", "🍞"] 3

// includes — байгаа юу?
const playlist = ["Өглөө", "Бороо", "Од"];
console.log(playlist.includes("Бороо")); // true

// indexOf — хэд дэх вэ? Олдохгүй бол -1
const queue = ["Бат", "Сараа", "Ану", "Болд"];
console.log(queue.indexOf("Ану")); // 2
console.log(queue.indexOf("Тэмүүлэн")); // -1

// join — массив → нэг мөр текст
const menu = ["Цуйван", "Хуушуур", "Бууз"];
console.log(menu.join(" · ")); // "Цуйван · Хуушуур · Бууз"

// splice — дундаас устгах: (хаанаас, хэдийг)
const todos = ["📚 Даалгавар", "⚽ Бөмбөг", "📖 Ном"];
todos.splice(1, 1);
console.log(todos); // ["📚 Даалгавар", "📖 Ном"]
