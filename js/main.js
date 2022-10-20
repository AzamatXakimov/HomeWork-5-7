const elForm = document.querySelector(".js-hero-form");
const elInput = elForm.querySelector(".js-hero-input");
const elList = document.querySelector(".js-hero-list");

const arr = []

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    const elInputValue = elInput.value;
    const obj = {
        id: "",
        text: elInputValue,
    }

    arr.push(obj);
    elForm.reset();
    elList.innerHTML = null;

    for (let i = 0; i < arr.length; i++) { 
        arr[i].id = i+1;
        const elItem = document.createElement("li");
        const elNumber = document.createElement("span");
        const elCheckBox = document.createElement("input");
        const elText = document.createElement("p")
        const elBtnBox = document.createElement("div");
        const elDelate = document.createElement("button");
        const elAdd = document.createElement("button");
    
        elItem.classList.add("p-4", "bg-info", "rounded-3", "d-flex", "mb-4", "align-items-center");
        elNumber.classList.add("me-2", "d-inline-block");
        elNumber.textContent = arr[i].id + ".";
        elCheckBox.classList.add("form-check-input", "me-3");
        elCheckBox.setAttribute("type", "checkbox");
        elText.classList.add("me-4", "mb-0");
        elText.textContent = arr[i].text;
        elDelate.classList.add("btn", "btn-danger", "me-3");
        elDelate.textContent = "Delate"
        elAdd.classList.add("btn", "btn-success");
        elAdd.textContent = "Add";

        elBtnBox.appendChild(elDelate);
        elBtnBox.appendChild(elAdd);

        elItem.appendChild(elNumber);
        elItem.appendChild(elCheckBox);
        elItem.appendChild(elText);
        elItem.appendChild(elBtnBox);

        elList.appendChild(elItem);
    }
})
