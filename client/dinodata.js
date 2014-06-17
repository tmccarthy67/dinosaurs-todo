//Dinosaur Data for To-do list Dev/Iowa project

var allToDos = new Array();

function dinosave () {
// save data to local storage
localStorage.setItem("todoitems",JSON.stringify(allToDos));
}

function dinoload () {
// load data from local storage
allToDos = JSON.parse(localStorage.getItem("todoitems"));
	if (allToDos === null)
	 allToDos = []
}



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
	dinosave ();
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
	for (var i = 0; i < allToDos.length; i++) {
		if (allToDos[i].id === id) {
				var a = allToDos.splice(i, 1);
						dinosave ();
						return a;
					}
	};
}

function setStatus (id, status) {
	for (var i = 0; i < allToDos.length; i++) {
		if (allToDos[i].id === id){
			allToDos[i].completed = status;
			dinosave ();
			return;


		}

	};
}


function setTitle (id, title) {
	for (var i = 0; i < allToDos.length; i++) {
		if (allToDos[i].id === id){
			allToDos[i].title = title;
			dinosave ();
			return;


		}

	};
}


	dinoload ()