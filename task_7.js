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
let pro1 = mod.find_Project("Project_1", "Test  1");
console.log(`Пошук проєкту Project_1: ${pro1 !== -1 ? "знайдено" : "не знайдено"}`);
let pro2 = mod.find_Project("Projectl_7", "Test  7");
console.log(`Пошук проєкту Project_7: ${pro2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання замовників
mod.add_Customer("Петро Миколайович", 87, pro1);
mod.add_Customer("Миколай Богданович", 53, pro1);
mod.add_Customer("Оксана Петрівна", 29, pro1);

// Список замовників  Project_1
mod.get_Customers_List(pro1);

// Видалення замовників
console.log("Видалення замовників: Миколай Богданович");
mod.remove_Customer("Миколай Богданович", 53, pro1);

// Список замовників  Project_1
mod.get_Customers_List(pro1);

// Редагування замовників
console.log("Редагування замовника: Петро Миколайович");
mod.edit_Customer("Петро Миколайович", 87, pro1, "Ігор Олегович", 37);

// Список замовників  Project_1
mod.get_Customers_List(pro1);

// Пошук замовників
let doc1 = mod.find_Customer("Оксана Петрівна", 29, pro1);
console.log(`Пошук замовника - Оксана Петрівна: ${pro1 !== -1 ? "знайдено" : "не знайдено"}`);
let doc2 = mod.find_Customer("Ольга Михайлівна", 24, pro1);
console.log(`Пошук замовника - Ольга Михайлівна: ${pro2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання виконавців
mod.add_Performer("А. Фролов", 13, pro1);
mod.add_Performer("Ю. Остап", 29, pro1);
mod.add_Performer("Г. Скорик", 63, pro1);

// Список виконавців Project_1
mod.get_Performers_List(pro1);

// Виписування виконавців
console.log("Виконав проєкт: А. Фролов");
mod.remove_Performer("А. Фролов", 13, pro1);

// Список виконавців Project_1
mod.get_Performers_List(pro1);

// Редагування виконавців
console.log("Редагування виконавця: Г. Скорик");
mod.edit_Performer("Г. Скорик", 63, pro1, "О. Хітинська", 54);

// Список виконавців Project_1
mod.get_Performers_List(pro1);

// Пошук виконавців
let pat1 = mod.find_Performer("Ю. Остап", 29, pro1);
console.log(`Пошук виконавця - Ю. Остап: ${pro1 !== -1 ? "знайдено" : "не знайдено"}`);
let pat2 = mod.find_Performer("О. Біда", 32, pro1);
console.log(`Пошук виконавця - О. Біда: ${pro2 !== -1 ? "знайдено" : "не знайдено"}`);
