import axios from "axios";
import { ApiResponse } from "../interface/interfaces";
import { ApiError } from "../interface/interfaces";


let edit: boolean = false;


export async function updateNote(event: any): Promise<ApiResponse | ApiError> {
    let note: HTMLElement = document.querySelector(".note")!;
    try {
        let { data } = await axios.put(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${event.target.id}`, {
            note: note.textContent
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
        return data;
    } catch (error: any) {
        return {
            message: error.message,
            status: error.response.status,
        };
    }
}

export function update(event: any) {
    let textArea: HTMLElement = document.querySelector(".note")!;
    if (edit == false) {
        textArea.style.backgroundColor = "#DFDFDF"
        textArea.contentEditable = "true";
        edit = true;
    }
    else {
        updateNote(event);
        textArea.style.backgroundColor = "white"
        textArea.contentEditable = "false";
        edit = false
    }

}