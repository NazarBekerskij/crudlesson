import { get } from "lodash"
import {getIce} from "./api/get-ice"


const listRef = document.querySelector(".list")



function createItemsMurckups(array) {
    const item = array.map(({id, name, tyype, calories, price, description, image}) => {
        return `
        <li class="item" id="${id}">
        <img src="${image}" alt="${description}" class="img">
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${price}</p>
        <p>${calories}</p>
        <p>${tyype}</p>
        <button type="button" class="edit"></button>
        <button type="button" class="delet"></button>
    </li>`
    }).join("")
    listRef.innerHTML = item
}


getIce().then((res) => {
    createItemsMurckups(res);
});

















































