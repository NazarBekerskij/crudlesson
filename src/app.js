// import { get } from "lodash"
import {getIce} from "./api/get-ice"
import { postIce } from "./api/poost-ice"

const listRef = document.querySelector(".list")
const modalBtn = document.querySelector(".modal-btn")
const backdrop = document.querySelector(".backdrop")
const form = document.querySelector(".form")


function createItemsMurckups(array) {
    const item = array.map(({id, name, type, calories, price, description, image}) => {
        return `
        <li class="item" id="${id}">
        <img src="${image}" alt="${description}" class="img">
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${price}</p>
        <p>${calories}</p>
        <p>${type}</p>
        <button type="button" class="edit">edit</button>
        <button type="button" class="delet">delet</button>
    </li>`
    }).join("")
    listRef.innerHTML = item
}


getIce().then((res) => {
    createItemsMurckups(res);
});



modalBtn.addEventListener("click", openModal)

function openModal(){
    backdrop.style.opacity = "1"
    backdrop.style.pointerEvents = "auto" 
}

function closeModal(){
     backdrop.style.opacity = "0"
     backdrop.style.pointerEvents = "none" 
}


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const elements = event.currentTarget.elements
    
    const iceData = {
        image: elements.image.value,
        name: elements.name.value,
        descrioption: elements.description.value,
        price: elements.price.value,
        calories: elements.calories.value,
        type: elements.type.value,
    }
    postIce(iceData).then(() => getIce().then(res => {
        form.reset()
        closeModal()
        createItemsMurckups(res)
    })
)})












































