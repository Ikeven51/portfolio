document.addEventListener("DOMContentLoaded", function () {
    // Listings Toggle
    const showListings = document.getElementById("show-listings");
    const listingsContainer = document.getElementById("listings-container");
    const listingForm = document.getElementById("listing-form");
    const listingsList = document.getElementById("listings-list");

    showListings.addEventListener("click", function () {
        listingsContainer.style.display = listingsContainer.style.display === "none" ? "block" : "none";
    });

    listingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const sku = document.getElementById("sku").value;
        const productName = document.getElementById("product-name").value;
        const price = document.getElementById("price").value;

        if (sku && productName && price) {
            const listItem = document.createElement("li");
            listItem.textContent = `SKU: ${sku}, Product: ${productName}, Price: $${price}`;
            listingsList.appendChild(listItem);
            listingForm.reset();
        }
    });

    // To-Do List Functionality
    const showTodo = document.getElementById("show-todo");
    const todoContainer = document.getElementById("todo-container");
    const todoInput = document.getElementById("todo-input");
    const addTodo = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");

    showTodo.addEventListener("click", function () {
        todoContainer.style.display = todoContainer.style.display === "none" ? "block" : "none";
    });

    addTodo.addEventListener("click", function () {
        const task = todoInput.value.trim();
        if (task) {
            const listItem = document.createElement("li");
            listItem.textContent = task;
            listItem.addEventListener("click", function () {
                todoList.removeChild(listItem);
            });
            todoList.appendChild(listItem);
            todoInput.value = "";
        }
    });
});
