import { write } from "../../main";

export function setupPostIcon(element: HTMLElement) {
  let img: HTMLImageElement = document.createElement("img");
  img.setAttribute("class", "post-icon");
  img.setAttribute("src", "./src/img/post.svg");
  img.addEventListener("click", write);
  element.append(img);
}
