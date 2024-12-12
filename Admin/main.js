var selectedRow = null

// Show Alerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);
    setTimeout(() => document.querySelector(".alert").remove(), 3000)
}

// Clear all fields
function clearAllFields() {
    document.querySelector("#bookTitle").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#yearOfPublication").value = "";
}

// Add Data

document.querySelector("#product-input").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const bookTitle = document.querySelector("#bookTitle").value;
    const price = document.querySelector("#price").value;
    const category = document.querySelector("#category").value;
    const yearOfPublication = document.querySelector("#yearOfPublication").value;

    // Validate input fields
    if (bookTitle == "" || price == "" || category == "" || yearOfPublication == "") {
        showAlert("Please fill all fields", "danger");
    } else if (price < 0) {
        showAlert("Invalid price", "danger");
    } else {
        if (selectedRow == null) {
            const list = document.querySelector("#products-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                    <td>${bookTitle}</td>
                    <td>$${price}</td>
                    <td>${category}</td>
                    <td>${yearOfPublication}</td>
                    <td>
                        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                    </td>`;
            list.appendChild(row);
            clearAllFields();
            selectedRow = null;
            showAlert("Product Added successfully", "success");
        } else {
            selectedRow.cells[0].textContent = bookTitle;
            selectedRow.cells[1].textContent = `$${price}`;
            selectedRow.cells[2].textContent = category;
            selectedRow.cells[3].textContent = yearOfPublication;
            selectedRow = null;
            showAlert("Product info updated successfully", "success");
        }
        clearAllFields();
    }
});

// Update Data

document.querySelector("#products-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#bookTitle").value = selectedRow.cells[0].textContent;
        document.querySelector("#price").value = selectedRow.cells[1].textContent.replace("$", "");
        document.querySelector("#category").value = selectedRow.cells[2].textContent;
        document.querySelector("#yearOfPublication").value = selectedRow.cells[3].textContent;
        document.querySelector(".add-btn").value = "Update Product"; // Change button text
    }
});

// Delete

document.querySelector("#products-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        if (confirm("Are you sure you want to delete this product?")) {
            target.parentElement.parentElement.remove();
            selectedRow = null;
            resetFormButton();
            showAlert("Product deleted!", "danger");
        }
    }
});

// Reset button text after update or add
function resetFormButton() {
    document.querySelector(".add-btn").value = "Submit";
}
