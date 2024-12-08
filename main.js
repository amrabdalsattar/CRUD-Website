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
    document.querySelector("#productName").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#supplier").value = "";
}

// Add Data

document.querySelector("#product-input").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const productName = document.querySelector("#productName").value;
    const price = document.querySelector("#price").value;
    const supplier = document.querySelector("#supplier").value;

    // Validate input fields
    if (productName == "" || price == "" || supplier == "") {
        showAlert("Please fill all fields", "danger");
    } else if (price < 0) {
        showAlert("Invalid price", "danger");
    } else {
        if (selectedRow == null) {
            const list = document.querySelector("#products-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                    <td>${productName}</td>
                    <td>$${price}</td>
                    <td>${supplier}</td>
                    <td>
                        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                    </td>`;
            list.appendChild(row);
            clearAllFields();
            selectedRow = null;
            showAlert("Product Added successfully", "success");
        } else {
            selectedRow.cells[0].textContent = productName;
            selectedRow.cells[1].textContent = `$${price}`;
            selectedRow.cells[2].textContent = supplier;
            selectedRow = null;
            showAlert("Product info updated successfully", "success");
        }
        clearAllFields();
    }
});

// Edit Data
document.querySelector("#products-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#productName").value = selectedRow.cells[0].textContent;
        document.querySelector("#price").value = selectedRow.cells[1].textContent.replace("$", "");
        document.querySelector("#supplier").value = selectedRow.cells[2].textContent;

    }
});

// Delete Product
document.querySelector("#products-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Product deleted!", "danger");
    }
});