import { getNotes } from "../http request/get";
import { getUsername } from "../http request/get";
import { delNote } from "../http request/delete";
import { removeRead } from "./writePage";
import { update } from "../http request/update";
import Swal from 'sweetalert2'

//cound the number of search 
let searchClick: number = 0;

//setup the search input the top center of the page
//remove the previous search result using remove childNode 
export function setupSearch(element: HTMLElement): void {
  let searchDiv: HTMLElement = document.createElement("div");
  searchDiv.setAttribute("class", "searchDiv");
  let btn: HTMLButtonElement = document.createElement("button");
  btn.setAttribute("class", "search-btn")
  btn.innerHTML = "Search";
  let searchInput: HTMLInputElement = document.createElement("input");
  searchInput.setAttribute("class", "search-input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for Username ...";
  btn.addEventListener("click", function () {
    if (searchInput.value.length > 0) {
      if (searchClick > 0) {
        if (document.querySelector(".readDiv")?.hasChildNodes() == true) {
          let el: HTMLElement = document.querySelector(".allNote")!;
          removeRead(el);
        }
      }
      getUsername(searchInput.value);
      setupReadDiv(element);
      searchClick++;
    }
    else {
      Swal.fire({
        title: "Warning!",
        text: "Please write something in the search box!",
        icon: "warning"
      });
    }
  });
  searchDiv.append(searchInput, btn);
  element.append(searchDiv);
}

//setup the notes div 
export function setupReadDiv(element: HTMLElement): void {
  getNotes().then(
    (value) => {
      let notes: number = value.notes?.length!;
      if (notes > 0) {
        let allNote: HTMLElement = document.createElement("div");
        allNote.setAttribute("class", "allNote");
        for (let i = 0; i < notes; i++) {
          let div: HTMLElement = document.createElement("div");
          div.setAttribute("class", "readDiv");
          let pDate: HTMLElement = document.createElement("p");
          pDate.setAttribute("class", "date");
          pDate.innerHTML += value.notes![i]?.createdAt + ",";
          let pNote: HTMLElement = document.createElement("p");
          pNote.setAttribute("class", "note");
          pNote.setAttribute("id", value.notes![i]?.id);
          pNote.innerHTML += value.notes![i]?.note;
          let pUsername: HTMLElement = document.createElement("p");
          pUsername.setAttribute("class", "username");
          pUsername.innerHTML += "___" + value.notes![i]?.username;
          let btn: HTMLButtonElement = document.createElement("button");
          btn.setAttribute("class", "uppdate");
          btn.innerHTML += "Uppdatera";
          btn.setAttribute("id", value.notes![i]?.id);
          btn.addEventListener("click", update)
          let pDel: HTMLElement = document.createElement("p");
          pDel.setAttribute("class", "delete");
          pDel.setAttribute("id", value.notes![i]?.id);
          pDel.innerHTML += "Ta bort";
          pDel.addEventListener("click", delNote);
          div.append(pDate, pNote, pUsername, btn, pDel);
          allNote.append(div)
        }
        element.append(allNote);
      }
      else {
        Swal.fire({
          title: "Information",
          text: "This username has not notes yet.",
          icon: "info"
        });
      }
    },
    (reason) => {
      console.error(reason); // Error!
    }
  );
}

//remove the write page
export function removeWrite(element: HTMLElement): void {
  let child: any = element.lastElementChild;
  while (element.lastElementChild) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}