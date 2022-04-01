let last_customer_id = 0;
let customers_list = new Array();

class Customer {

    constructor (name, age, project, id) {
    
        this.id = id;
        this.age = age;
        this.name = name;
        this.project = project;
        
        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_customer_id;  }
        if (age === "" ||
            typeof age      === 'undefined') { this.age      = "Не встановлено";  }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідомий замовник"; }
        if (project === "" ||
            typeof project === 'undefined') { this.project = "Не встановлено";  }
    
    }
}


function add_customer (name, age, project, id) {

    let customer = new Customer(name, age, project, id);
    customers_list.push(customer);

    return customer;

}

function remove_customer (id) {

    for (let z = 0; z < customers_list.length; z++) {

        let customer = customers_list[z];
        if (customer.id === id) { customers_list.splice(z, 1);
                                return 1; }

    }

    return -1;

}



function get_customers_list()
    { return customers_list; }

function set_customers_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_customer(element.name,
                   element.age,
                   element.project,
                   element.id);
    }
}

function get_customer_by_id (id) {

    for (let z = 0; z < customers_list.length; z++) {

        let customer = customers_list[z];
        if (customer.id === id) { return customer; }

    }

    return -1;

}


function edit_customer (id, new_name, new_age, new_project) {

    for (let z = 0; z < customers_list.length; z++) {

        let customer = customers_list[z];

        if (customer.id === id) { customer.age = new_age;
                                customer.name = new_name;
                                customer.hospital = new_project;
                                return 1; }

    }

    return -1;

}


function find_customers (search) {

    let result = [];
    search = search.toLowerCase();

    for (let customer of customers_list) {

        let attributes = [ customer.name,
                           customer.project ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(customer);
                                                       break;
            }
        }
    }

    return result;

}


function print_customers_list() {

    console.log("\n" + "Список усіх замовників:");

    for (let z = 0; z < customers_list.length; z++) {

        let customer = customers_list[z];
        console.log("\t" + "П.І.Б. замовника: " + customer.name);
        console.log("\t" + "Вік замовника: "    + customer.age);
        console.log("\t" + "Замовлення: "       + customer.project);
        console.log("\t" + "ID: "            + customer.id);

    }
}