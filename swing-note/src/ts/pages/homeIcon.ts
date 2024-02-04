import { read } from "../../main";

export function setupHomeIcon(element: HTMLElement) {
    let img: HTMLImageElement = document.createElement("img");
    img.setAttribute("class", "post-icon");
    img.setAttribute("src", "./src/img/home.png");
    img.addEventListener("click", read);
    element.append(img);
}
