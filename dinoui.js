function reload() {
    console.log("loaded");
    console.log(getAll());
    var items = getAll();
    $("#todoitems").empty();
    for (i = 0; i < items.length; i++) {
        var item = items[i]
        var id = item.id;
        console.log(item.title, item.completed)
        var checkbox = $("<input>").attr("type", "checkbox");
        var tdCheckbox = $("<td>").append(checkbox).addClass('tododone');
        var tdTitle = $("<td>").addClass('todotitle').text(item.title);
        var spanRemove = $("<span>").addClass('glyphicon glyphicon-remove');
        var buttonRemove = $("<button>").attr("type", "button").addClass('btn btn-danger delete').append(spanRemove).attr("todoitemid", id)

        buttonRemove.on("click", function(e) {
            var todoid = $(this).attr("todoitemid");
            console.log(remove(todoid));
            reload();
        });

        var tdRemove = $("<td>").addClass('todoremove').append(buttonRemove);
        var tr = $("<tr>").append(tdCheckbox).append(tdTitle).append(tdRemove);
        $("#todoitems").append(tr);

    }
}


$(function() {
    $("#inputtext").val("").focus();
    reload();
    $('#inputtext').on("keyup", function(e) {
        if (e.keyCode === 13) {
            console.log("Enter was released");
            $('#addbutton').click();
        }
    })
    $('#addbutton').on("click", function() {

        var text = $('#inputtext').val();
        if (text.length === 0) {
            $('#inputtext').parent().addClass("has-error");
            return;
        }
        $('#inputtext').parent().removeClass("has-error");
        create(text);
        reload();
        $("#inputtext").val("").focus();

    });
})