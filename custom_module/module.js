// Підключаємо необхідні файли
const project = require("./project");
const customer   = require("./customer");
const performer  = require("./performer");


exports.find_Project      = project.find_Project;
exports.add_Project       = project.add_Project;
exports.remove_Project    = project.remove_Project;
exports.edit_Project      = project.edit_Project;
exports.get_Projects_List = project.get_Projects_List;


exports.find_Customer        = customer.find_Customer;
exports.add_Customer         = customer.add_Customer;
exports.remove_Customer      = customer.remove_Customer;
exports.edit_Customer        = customer.edit_Customer;
exports.get_Customers_List   = customer.get_Customers_List;


exports.find_Performer       = performer.find_Performer;
exports.add_Performer        = performer.add_Performer;
exports.remove_Performer     = performer.remove_Performer;
exports.edit_Performer       = performer.edit_Performer;
exports.get_Performers_List  = performer.get_Performers_List;
