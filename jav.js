function addItem(){
        var ul = document.getElementById("list-grp");
        var candidate = document.getElementById("candidate");
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.setAttribute('id',candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        ul.appendChild(li);
}