import "./style.css";

import { setupWriteDiv } from "./ts/pages/writePage.ts";
import { removeRead } from "./ts/pages/writePage.ts";

import { setupSearch } from "./ts/pages/readPage.ts";
import { removeWrite } from "./ts/pages/readPage.ts";

import { setupPostIcon } from "./ts/pages/postIcon.ts";
import { setupHomeIcon } from "./ts/pages/homeIcon.ts"


document.querySelector<HTMLDivElement>(
  "#main"
)!.innerHTML = `<div class="container"></div>`;


//create write page and remove read page 
export function write() {
  removeRead(document.querySelector<HTMLElement>(".container")!);
  setupWriteDiv(document.querySelector<HTMLElement>(".container")!);
  setupHomeIcon(document.querySelector<HTMLElement>(".container")!);
}

//create read page and remove write page 
export function read() {
  removeWrite(document.querySelector<HTMLElement>(".container")!)
  setupSearch(document.querySelector<HTMLElement>(".container")!);
  setupPostIcon(document.querySelector<HTMLElement>(".container")!);
}

read();