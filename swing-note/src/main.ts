import "./style.css";

//import { setupWriteDiv } from "./ts/writeDiv.ts";
//import { removeRead } from "./ts/writeDiv.ts";

import { setupReadDiv } from "./ts/readDiv.ts";
import { setupPostIcon } from "./ts/postIcon.ts";


document.querySelector<HTMLDivElement>(
  "#main"
)!.innerHTML = `<div class="container"></div>`;


/*export function write() {
  removeRead(document.querySelector<HTMLElement>(".container")!);
  setupWriteDiv(document.querySelector<HTMLElement>(".container")!);
}*/
export function read() {
  setupReadDiv(document.querySelector<HTMLElement>(".container")!);
  setupPostIcon(document.querySelector<HTMLElement>(".container")!);
}
read();