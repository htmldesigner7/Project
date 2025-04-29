const urlInput = document.getElementById("url");
const nameInput = document.getElementById("name");
const contentInput = document.getElementById("contentpara");
const cardContainer = document.getElementById("cardContainer");

let data = JSON.parse(localStorage.getItem("data")) || [];
let editIndex = -1;

document.addEventListener("DOMContentLoaded", DisplayData);

function HandleAdd() {
    if (urlInput.value.trim() === "" || nameInput.value.trim() === "" || contentInput.value.trim() === "") return;

    const obj = {
        url: urlInput.value,
        name: nameInput.value,
        content: contentInput.value
    };

    if (editIndex === -1) {
        data.push(obj);
    } else {
        data[editIndex] = obj;
        editIndex = -1;
    }

    localStorage.setItem("data", JSON.stringify(data));
    ClearInputs();
    DisplayData();
}

function DisplayData() {
    cardContainer.innerHTML = "";
    data.forEach((item, index) => {
        let card = `
            <div class="col-lg-3">
                <div class="card mb-3">
                    <img src="${item.url}" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.content}</p>
                        <button class="btn btn-danger" onclick="DeleteItem(${index})">Delete</button>
                        <button class="btn btn-primary" onclick="EditItem(${index})">Edit</button>
                    </div>
                </div>
            </div>
        `;
        cardContainer.innerHTML += card;
    });
}

function DeleteItem(index) {
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    DisplayData();
}

function EditItem(index) {
    urlInput.value = data[index].url;
    nameInput.value = data[index].name;
    contentInput.value = data[index].content;
    editIndex = index;
}

function ClearInputs() {
    urlInput.value = "";
    nameInput.value = "";
    contentInput.value = "";
}

