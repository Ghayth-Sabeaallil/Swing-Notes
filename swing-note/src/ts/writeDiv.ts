export function setupWriteDiv(element: HTMLElement) {
  element.innerHTML += ` <div class="writeDiv">
    <input
      class="title-input"
      type="text"
      name="title"
      id="title"
      placeholder="Title"
    />
    <textarea
      class="note-input"
      name="note"
      id="note"
      placeholder="Note"
    ></textarea>

    <input
      class="username-input"
      type="text"
      name="username"
      id="username"
      placeholder="Username"
    />
    <button class="post">Publicera</button>
  </div>`;
}
