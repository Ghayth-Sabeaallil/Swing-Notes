import { getNotes } from "../http request/get";
import { getUsername } from "../http request/get";
import { delNote } from "../http request/delete";
import { removeRead } from "./writePage";


let searchClick: number = 0;


export function setupSearch(element: HTMLElement) {
  let searchDiv: HTMLElement = document.createElement("div");
  searchDiv.setAttribute("class", "searchDiv");
  let searchInput: HTMLInputElement = document.createElement("input");
  searchInput.setAttribute("class", "search-input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for Username ...";
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (searchClick > 0) {
        if (document.querySelector(".readDiv")?.hasChildNodes() == true) {
          let el: any = document.querySelector(".allNote");
          removeRead(el);
        }
      }

      getUsername(searchInput.value);
      setupReadDiv(element);
      searchClick++;
    }
  });
  searchDiv.append(searchInput);
  element.append(searchDiv);
}


export function setupReadDiv(element: HTMLElement) {
  getNotes().then(
    (value) => {
      let notes: any = value.notes?.length;
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
        pNote.innerHTML += value.notes![i]?.note;
        let pUsername: HTMLElement = document.createElement("p");
        pUsername.setAttribute("class", "username");
        pUsername.innerHTML += "___" + value.notes![i]?.username;
        let btn: HTMLButtonElement = document.createElement("button");
        btn.setAttribute("class", "uppdate");
        btn.innerHTML += "Uppdatera";
        btn.setAttribute("id", value.notes![i]?.id);
        let pDel: HTMLElement = document.createElement("p");
        pDel.setAttribute("class", "delete");
        pDel.setAttribute("id", value.notes![i]?.id);
        pDel.innerHTML += "Ta bort";
        pDel.addEventListener("click", delNote);
        div.append(pDate, pNote, pUsername, btn, pDel);
        allNote.append(div)
      }
      element.append(allNote);
    },

    (reason) => {
      console.error(reason); // Error!
    }
  );
}

export function removeWrite(element: HTMLElement) {
  let child: any = element.lastElementChild;
  while (element.lastElementChild) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}