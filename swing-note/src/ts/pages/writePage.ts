import { postNote } from "../http request/post";
import { read } from "../../main";
import Swal from 'sweetalert2'


//remvoe the read page
export function removeRead(element: HTMLElement): void {
  let child: any = element.lastElementChild;
  while (element.lastElementChild) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
  if (element.classList[0] == "allNote") {
    element.remove();
  }
}

//setup the write inputs div
export function setupWriteDiv(element: HTMLElement): void {
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

//check if all inputs (title, note, username) are not empty
function check(): void {
  let userName: HTMLInputElement = document.querySelector(".username-input")!;
  let title: HTMLInputElement = document.querySelector(".title-input")!;
  let note: HTMLInputElement = document.querySelector(".note-input")!;
  if (title.value.length != 0 && note.value.length != 0 && userName.value.length != 0) {
    postNote().then(
      (value) => {
        if (value.message == "Note created!") {
          read();
          Swal.fire({
            title: "Create",
            text: "Note created!",
            icon: "success"
          });
        }
      },
      (reason) => {
        console.error(reason); // Error!
      }
    );
  }
}