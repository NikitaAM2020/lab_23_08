const mod = require('./custom_module');

// Додавання проєктів
let h1 = mod.add_Project("Project_1", "Test  1");
let h2 = mod.add_Project("Project_2", "Test  2");
let h3 = mod.add_Project("Project_3", "Test  3");

// Список проєктів
mod.get_Projects_List();

// Видалення проєктів
console.log("Видалення проєкту: Project_2");
mod.remove_Project("Project_2", "Test 2");

// Список проєктів
mod.get_Projects_List();

// Зміна проєктів
console.log("Зміна назви проєкту: Project_3");
mod.edit_Project("Project_3", "Test  3", "New Project name", "New Project");

// Список проєктів
mod.get_Projects_List();

// Пошук проєктів 
let hosp1 = mod.find_Project("Project_1", "Test  1");
console.log(`Пошук проєкту Project_1: ${hosp1 !== -1 ? "знайдено" : "не знайдено"}`);
let hosp2 = mod.find_Project("Projectl_7", "Test  7");
console.log(`Пошук проєкту Project_7: ${hosp2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання замовників
mod.add_Customer("Петро Іванович", 87, hosp1);
mod.add_Customer("Андрій Богданович", 43, hosp1);
mod.add_Customer("Оксана Петрівна", 29, hosp1);

// Список замовників  Project_1
mod.get_Customers_List(hosp1);

// Видалення замовників
console.log("Видалення замовників: Андрій Богданович");
mod.remove_Customer("Андрій Богданович", 43, hosp1);

// Список замовників  Project_1
mod.get_Customers_List(hosp1);

// Редагування замовників
console.log("Редагування замовника: Петро Іванович");
mod.edit_Customer("Петро Іванович", 27, hosp1, "Ігор Олегович", 37);

// Список замовників  Project_1
mod.get_Customers_List(hosp1);

// Пошук замовників
let doc1 = mod.find_Customer("Оксана Петрівна", 29, hosp1);
console.log(`Пошук замовника - Оксана Петрівна: ${hosp1 !== -1 ? "знайдено" : "не знайдено"}`);
let doc2 = mod.find_Customer("Ольга Михайлівна", 24, hosp1);
console.log(`Пошук замовника - Ольга Михайлівна: ${hosp2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання виконавців
mod.add_Performer("А. Фролов", 13, hosp1);
mod.add_Performer("Ю. Остапчук", 29, hosp1);
mod.add_Performer("Г. Сковорода", 63, hosp1);

// Список виконавців Project_1
mod.get_Performers_List(hosp1);

// Виписування виконавців
console.log("Виконав проєкт: А. Фролов");
mod.remove_Performer("А. Фролов", 13, hosp1);

// Список виконавців Project_1
mod.get_Performers_List(hosp1);

// Редагування виконавців
console.log("Редагування виконавця: Г. Сковорода");
mod.edit_Performer("Г. Сковорода", 63, hosp1, "О. Хітинська", 54);

// Список виконавців Project_1
mod.get_Performers_List(hosp1);

// Пошук виконавців
let pat1 = mod.find_Performer("Ю. Остапчук", 29, hosp1);
console.log(`Пошук виконавця - Ю. Остапчук: ${hosp1 !== -1 ? "знайдено" : "не знайдено"}`);
let pat2 = mod.find_Performer("О. Біда", 32, hosp1);
console.log(`Пошук виконавця - О. Біда: ${hosp2 !== -1 ? "знайдено" : "не знайдено"}`);
