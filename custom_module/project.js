class Project {

    constructor (name, address) {
    
        this.name = name;
        this.address = address;
        this.customers_list = [];
        this.performers_list = [];
    
        if (typeof name === 'undefined')    { this.name = "Невідомий проєкт"; }
        if (typeof address === 'undefined') { this.address = "Немає опису"; }
    
    }
    
}


let global_projects_list = new Array();


function find_Project (name, address) {

    for (let project of global_projects_list) {

        if (name === project.name &&
            address === project.address) { return project; }

    }

    return -1;

}


function add_Project (name, address) {

    let project = new Project(name, address);
    global_projects_list.push(project);

    return project;

}


function remove_Project (name, address) {

    for (let id = 0; id < global_projects_list.length; id++) {

        let project = global_projects_list[id];

        if (project.name === name &&
            project.address === address) { global_projects_list.splice(id, 1);
                                            return 1; }

    }

    return -1;

}


function edit_Project (name, address, new_name, new_address) {

    for (let id = 0; id < global_projects_list.length; id++) {

        let project = global_projects_list[id];

        if (project.name === name &&
            project.address === address) { global_projects_list[id].name = new_name;
                                            global_projects_list[id].address = new_address;
                                            return 1; }

    }

    return -1;

}


function get_Projects_List() {

    console.log("\n" + "Список усіх проєктів:");

    for (let id = 0; id < global_projects_list.length; id++) {

        let pro = global_projects_list[id];
        console.log(`Назва проєкту: ${pro.name}, опис проєкту: ${pro.address}`);

    }

    console.log();
    
    return global_projects_list;

}

// Експортуємо функції
exports.find_Project      = find_Project;
exports.add_Project       = add_Project;
exports.remove_Project   = remove_Project;
exports.edit_Project      = edit_Project;
exports.get_Projects_List = get_Projects_List;
