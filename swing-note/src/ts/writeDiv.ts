import { postNote } from "./post";
import { read } from "../main";

export function removeRead(element: HTMLElement) {
  let child: any = element.lastElementChild;
  while (element.lastElementChild) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}


export function setupWriteDiv(element: HTMLElement) {
  let div: HTMLElement = document.createElement("div");
  div.setAttribute("class", "writeDiv");
  let input: HTMLInputElement = document.createElement("input");
  input.setAttribute("class", "title-input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "title");
  input.setAttribute("id", "title");
  input.setAttribute("placeholder", "Title");
  let textarea: HTMLTextAreaElement = document.createElement("textarea");
  textarea.setAttribute("class", "note-input");
  textarea.setAttribute("name", "note");
  textarea.setAttribute("id", "note");
  textarea.setAttribute("placeholder", "Note");
  let inputUser: HTMLInputElement = document.createElement("input");
  inputUser.setAttribute("class", "username-input");
  inputUser.setAttribute("type", "text");
  inputUser.setAttribute("name", "username");
  inputUser.setAttribute("id", "username");
  inputUser.setAttribute("placeholder", "Username");
  let btn: HTMLButtonElement = document.createElement("button");
  btn.setAttribute("class", "post");
  btn.innerHTML = "Publicera";
  btn.addEventListener("click", check)
  div.append(input, textarea, inputUser, btn);
  element.append(div);
}

function check(): void {
  let userName: any = document.querySelector(".username-input");
  let title: any = document.querySelector(".title-input");
  let note: any = document.querySelector(".note-input");
  if (title.value.length != 0 && note.value.length != 0 && userName.value.length != 0) {
    postNote().then(
      (value) => {
        if (value.message == "Note created!") {
          console.log("created")
          read();
        }
      },
      (reason) => {
        console.error(reason); // Error!
      }
    );
  }
}