var list = document.getElementById("list")
 
function addtodo(){
var a = document.getElementById("todo-item")
var li = document.createElement("li")
var litext = document.createTextNode(a.value)
li.appendChild(litext)
a.value = ""
var del = document.createElement("button")
var deltext = document.createTextNode("DELETE")
del.appendChild(deltext)

del.setAttribute("onclick","deleteitem(this)")

var editbtn = document.createElement("button")
var edittxt = document.createTextNode("EDIT")
editbtn.appendChild(edittxt)
editbtn.setAttribute("onclick","editok(this)")
editbtn.setAttribute("class","stylo")
del.setAttribute("class","stylo")

li.appendChild(del)
li.appendChild(editbtn)
list.appendChild(li)

}
 
function deleteitem(a){
a.parentNode.remove()
}

function deleteall(){
    list.innerHTML = ""
}

function editok(a){
    var val = a.parentNode.firstChild.nodeValue;
    var promptedit = prompt("Enter edit",val)
    a.parentNode.firstChild.nodeValue = promptedit
}
