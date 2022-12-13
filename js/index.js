const item = document.getElementById("item");
const toDoList = document.getElementById("to-do-list");


item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addTodo(this.value);
            this.value = ""
        };
    }
)

const addTodo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    
    ${item}
    <i class="fa-solid fa-xmark"></i>

    `;
    listItem.addEventListener("click", function () {
        this.classList.toggle("done")
    })

    listItem.querySelector('i').addEventListener('click', function(){
        listItem.remove()
    })
    toDoList.appendChild(listItem);
}