import { getAllNotes } from "./get";
import { delNote } from "./delete";


export function setupReadDiv(element: HTMLElement) {
  getAllNotes().then(
    (value) => {
      let notes: any = value.notes?.length;
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
        element.append(div);
      }
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