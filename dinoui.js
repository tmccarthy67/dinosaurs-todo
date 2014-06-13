$(function (){
	console.log("loaded");
	console.log (getAll());
	var items = getAll();
	for (i=0; i< items.length; i++) {
		var item = items[i]
		console.log (item.title, item.completed)
			var checkbox = $("<input>").attr("type","checkbox");
			var tdCheckbox = $("<td>").append(checkbox).addClass('tododone');
			var tdTitle = $("<td>").addClass('todotitle').text(item.title);
			var spanRemove = $("<span>").addClass('glyphicon glyphicon-remove');
			var buttonRemove = $("<button>").attr("type","button").addClass('btn btn-danger').append(spanRemove);
			var tdRemove = $("<td>").addClass('todoremove').append (buttonRemove);
			var tr =$("<tr>").append(tdCheckbox).append(tdTitle).append(tdRemove);
			$("#todoitems").append(tr);

			}


})