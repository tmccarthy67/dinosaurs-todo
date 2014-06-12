//Dinosaur Data for To-do list Dev/Iowa project

var allToDos = new Array();

function createGuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
	return v.toString(16);
	});
}

function create (title) {
	var newItem = {
		"title":title,
		"completed":false,
		"id": createGuid()
	};
	allToDos.push(newItem);
	return newItem.id;
}

function getAll () {
	return allToDos;
}

function get (id) {
	for (var i = 0; i < allToDos.length; i++) {
		if (allToDos[i].id === id)
				return allToDos[i];
	};
	return null;
}

function remove (id) {
	// body...
}

function setStatus (id, status) {
	// body...
}


function setTitle (id, title) {
	// body...
}


var s=create("ice cream");
create("sprinkles");
create("vanilla");
create("frosting");
console.log(getAll());
console.log(get("8cf58c9d-8718-402e-b176-4dd1473b7fe0"));
console.log(get(s));


