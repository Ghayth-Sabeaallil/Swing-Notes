import "./style.css";

import { setupWriteDiv } from "./ts/writeDiv.ts";
//import { setupReadDiv } from "./ts/readDiv.ts";
//import { setupPostIcon } from "./ts/postIcon.ts";

document.querySelector<HTMLDivElement>(
  "#main"
)!.innerHTML = `<div class="container"></div>`;

//setupReadDiv(document.querySelector<HTMLElement>(".container")!);
//setupPostIcon(document.querySelector<HTMLElement>(".container")!);
setupWriteDiv(document.querySelector<HTMLElement>(".container")!);
