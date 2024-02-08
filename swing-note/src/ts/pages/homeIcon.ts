import { read } from "../../main";

//setup the home icon to the left button side
export function setupHomeIcon(element: HTMLElement): void {
    let img: HTMLImageElement = document.createElement("img");
    img.setAttribute("class", "post-icon");
    img.setAttribute("src", "./src/img/home.png");
    img.addEventListener("click", read);
    element.append(img);
}
