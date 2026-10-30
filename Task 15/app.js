function deleteBox (e) {
    console.log(e.parentNode.parentNode)
    var row = e.parentNode.parentNode
    row.remove()
}

function editButton (e) {
    // console.log(e.parentNode.parentNode);
    var row = (e.parentNode.parentNode).value
    console.log(row);
}


function table (event) {
    // event.
    var nameValue = document.getElementById("nameValue").value
    var ageValue = document.getElementById("ageValue").value
    var submit = document.getElementById("submit").value
    console.log(nameValue,ageValue);


}