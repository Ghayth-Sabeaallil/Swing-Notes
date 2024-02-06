import { write } from "../../main";

//setup the post icon to the left button side
export function setupPostIcon(element: HTMLElement) {
  let img: HTMLImageElement = document.createElement("img");
  img.setAttribute("class", "post-icon");
  img.setAttribute("src", "./src/img/post.svg");
  img.addEventListener("click", write);
  element.append(img);
}
