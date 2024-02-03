import { getAllNotes } from "./get";

export function setupReadDiv(element: HTMLElement) {
  getAllNotes().then(
    (value) => {
      element.innerHTML += ` <div class="readDiv">
        <p class="date">${value.notes![0].createdAt},</p>
        <p class="note">${value.notes![0].note}</p>
        <p class="username">___ ${value.notes![0].username}</p>
        <button class="uppdate">Uppdatera</button>
        <p class="delete">Ta bort</p>
      </div>`;
    },
    (reason) => {
      console.error(reason); // Error!
    }
  );
}
