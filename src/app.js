import { get } from "lodash"
import {getIce} from "./api/get-ice"


const listRef = document.querySelector(".list")



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
        <button type="button" class="edit"></button>
        <button type="button" class="delet"></button>
    </li>`
    }).join("")
    listRef.innerHTML = item
}


getIce().then((res) => {
    createItemsMurckups(res);
});

















































