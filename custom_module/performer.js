class Performer {

    
    constructor (name, age) {
    
        this.name = name;
        this.age = age;
    
        if (typeof name === 'undefined') { this.name = "Невідомий виконавець"; }
    
    }
    
}


function find_Performer (name, age, project) {

    for (let id = 0; id < project.performers_list.length; id++) {

        let performer = project.performers_list[id];

        if (name === performer.name &&
            age === performer.age) { return performer; }

    }

    return -1;

}


function add_Performer (name, age, project) {

    let performer = new Performer(name, age);
    project.performers_list.push(performer);

    return performer;

}


function remove_Performer (name, age, project) {

    let performer = find_Performer(name, age, project);

    if (performer === -1) { return -1; }

    let id = project.performers_list.indexOf(performer);
    project.performers_list.splice(id, 1);

    return 1;

}


function edit_Performer (name, age, project, new_name, new_age) {

    let performer = find_Performer(name, age, project);

    if (performer === -1) { return -1; }

    let id = project.performers_list.indexOf(performer);
    
    project.performers_list[id].name = new_name;
    project.performers_list[id].age = new_age;

    return 1;

}


function get_Performers_List (project) {

    console.log("\n" + `Список усіх виконавців ${project.name}:`);

    for (let id = 0; id < project.performers_list.length; id++) {

        let performer = project.performers_list[id];
        console.log(`\tІм'я виконавця: ${performer.name}, вік: ${performer.age}`);

    }

    console.log();
    
    return project.performers_list;

}

// Експортуємо функції
exports.find_Performer      = find_Performer;
exports.add_Performer       = add_Performer;
exports.remove_Performer    = remove_Performer;
exports.edit_Performer      = edit_Performer;
exports.get_Performers_List = get_Performers_List;
