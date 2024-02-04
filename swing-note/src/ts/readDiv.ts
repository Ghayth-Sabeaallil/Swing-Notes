import { getAllNotes } from "./get";

export function setupReadDiv(element: HTMLElement) {
  getAllNotes().then(
    (value) => {
      let notes: any = value.notes?.length;
      for (let i = 0; i <= notes; i++) {
        element.innerHTML += ` <div class="readDiv" id=${value.notes![i]?.id}>
      <p class="date">${value.notes![i]?.createdAt},</p>
      <p class="note">${value.notes![i]?.note}</p>
      <p class="username">___ ${value.notes![i]?.username}</p>
      <button class="uppdate">Uppdatera</button>
      <p class="delete">Ta bort</p>
    </div>`;
      }
    },
    (reason) => {
      console.error(reason); // Error!
    }
  );
}
