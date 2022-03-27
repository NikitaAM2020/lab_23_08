class Customer {

    constructor (name, age) {
    
        this.name = name;
        this.age = age;
    
        if (typeof name === 'undefined') { this.name = "Невідомий замовник"; }
    
    }
    
}


function find_Customer (name, age, project) {

    for (let id = 0; id < project.customers_list.length; id++) {

        let customer = project.customers_list[id];

        if (name === customer.name &&
            age === customer.age) { return customer; }

    }

    return -1;

}


function add_Customer (name, age, project) {

    let customer = new Customer(name, age);
    project.customers_list.push(customer);

    return customer;

}


function remove_Customer (name, age, project) {

    let customer = find_Customer(name, age, project);

    if (customer === -1) { return -1; }

    let id = project.customers_list.indexOf(customer);
    project.customers_list.splice(id, 1);

    return 1;

}


function edit_Customer (name, age, project, new_name, new_age) {

    let customer = find_Customer(name, age, project);

    if (customer === -1) { return -1; }

    let id = project.customers_list.indexOf(customer);
    
    project.customers_list[id].name = new_name;
    project.customers_list[id].age = new_age;

    return 1;

}


function get_Customers_List (project) {

    console.log("\n" + `Список усіх замовників ${project.name}:`);

    for (let id = 0; id < project.customers_list.length; id++) {

        let customer = project.customers_list[id];
        console.log(`\tІм'я замовника: ${customer.name}, вік: ${customer.age}`);

    }

    console.log();
    
    return project.customers_list;

}

// Експортуємо функції
exports.find_Customer      = find_Customer;
exports.add_Customer       = add_Customer;
exports.remove_Customer    = remove_Customer;
exports.edit_Customer      = edit_Customer;
exports.get_Customers_List = get_Customers_List;
