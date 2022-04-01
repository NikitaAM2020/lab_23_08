let last_project_id = 0;
let projects_list = new Array();

class Project {

    constructor (name, address, id) {
    
        this.id = id;
        this.name = name;
        this.address = address;
        
        if (id === "" ||
            typeof id      === 'undefined') { this.id      = ++last_project_id; }
        if (name === "" ||
            typeof name    === 'undefined') { this.name    = "Невідомий проєкт"; }
        if (address === "" ||
            typeof address === 'undefined') { this.address = "Не встановлено";   }
   
    }
}

// ...............................................................................................

function add_project (name, address, id) {

    let project = new Project(name, address, id);
    projects_list.push(project);

    return project;

}

function remove_hospital (id) {

    for (let z = 0; z < projects_list.length; z++) {

        let project = projects_list[z];
        if (project.id === id) { projects_list.splice(z, 1);
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

function get_projects_list()
    { return projects_list; }

function set_projects_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_project(element.name,
                     element.address,
                     element.id);
    }
}

function get_project_by_id (id) {

    for (let z = 0; z < projects_list.length; z++) {

        let project = projects_list[z];
        if (project.id === id) { return project; }

    }

    return -1;

}

// ...............................................................................................

function edit_project (id, new_name, new_address) {

    for (let z = 0; z < projects_list.length; z++) {

        let project = projects_list[z];

        if (project.id === id) { project.name = new_name;
                                  project.address = new_address;
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

function find_projects (search) {

    let result = [];
    search = search.toLowerCase();

    for (let project of projects_list) {

        let attributes = [ project.name,
                           project.address ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(project);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

function print_projects_list() {

    console.log("\n" + "Список усіх проєктів:");

    for (let z = 0; z < projects_list.length; z++) {

        let project = projects_list[z];
        console.log("\t" + "Назва проєкту: "  + project.name);
        console.log("\t" + "Опис проєкту: " + project.address);
        console.log("\t" + "ID: "             + project.id);

    }
}