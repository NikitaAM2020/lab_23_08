let last_performer_id = 0;
let performers_list = new Array();
let cured_performers_list = new Array();

class Performer {

    constructor (name, age, customer, project, id) {
    
        this.id = id;
        this.age = age;
        this.name = name;
        this.customer = customer;
        this.project = project;
        
        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_performer_id;   }
        if (age === "" ||
            typeof age      === 'undefined') { this.age      = "Не встановлено";    }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідомий виконавець"; }
        if (customer === "" ||
            typeof customer   === 'undefined') { this.customer   = "Не призначено";     }
        if (project === "" ||
            typeof project === 'undefined') { this.project = "Не встановлено";    }
    
    }
}


function add_performer (name, age, customer, project, id) {

    let performer = new Performer(name, age, customer, project, id);
    patients_list.push(performer);

    return performer;

}

function add_cured_performer (name, age, customer, project, id) {

    let performer = new Performer(name, age, customer, project, id);
    cured_performers_list.push(performer);

    return performer;

}

function remove_performer (id) {

    for (let z = 0; z < performers_list.length; z++) {

        let performer = performers_list[z];
        if (performer.id === id) { cured_performers_list.push(performer);
                                 performers_list.splice(z, 1);
                                 return 1; }

    }

    return -1;

}

function remove_cured_performer (id) {

    for (let z = 0; z < cured_performers_list.length; z++) {

        let performer = cured_performers_list[z];
        if (performer.id === id) { cured_performers_list.splice(z, 1);
                                 return 1; }

    }

    return -1;

}


function get_performers_list (cured) {

    if (cured) { return cured_performers_list; }
    else       { return performers_list; }

}

function set_performers_list (data, cured) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {

        if (cured) {
            add_cured_patient(element.name,
                              element.age,
                              element.customer,
                              element.project,
                              element.id);
        }

        else {
            add_patient(element.name,
                        element.age,
                        element.customer,
                        element.project,
                        element.id);
        }
    }
}

function get_performer_by_id (id, cured) {

    let list = cured ? cured_performers_list : performers_list;

    for (let z = 0; z < list.length; z++) {

        let performer = list[z];
        if (performer.id === id) { return performer; }

    }

    return -1;

}


function edit_performer (id, new_name, new_age, new_doctor, new_hospital) {

    for (let z = 0; z < performers_list.length; z++) {

        let performer = performers_list[z];

        if (performer.id === id) { performer.age = new_age;
                                 performer.name = new_name;
                                 performer.customer = new_doctor;
                                 performer.project = new_hospital;
                                 return 1; }

    }

    return -1;

}


function find_performers (search, cured) {

    let result = [];
    let list = cured ? cured_performers_list : performers_list;

    search = search.toLowerCase();

    for (let performer of list) {

        let attributes = [ performer.name,
                           performer.customer,
                           performer.project ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(performer);
                                                       break;
            }
        }
    }

    return result;

}


function print_performers_list (cured) {

    let type = cured ? "виписаних " : "";
    let list = cured ? cured_patients_list : patients_list;

    console.log("\n" + "Список усіх " + type + "виконавців:");

    for (let z = 0; z < list.length; z++) {

        let item = list[z];
        console.log("\t" + "П.І.Б. виконавця: " + item.name);
        console.log("\t" + "Вік виконавця: "    + item.age);
        console.log("\t" + "Лікар: "           + item.customer);
        console.log("\t" + "Лікарня: "         + item.project);
        console.log("\t" + "ID: "              + item.id);

    }
}