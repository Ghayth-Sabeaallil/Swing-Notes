import axios from "axios";
import { ApiResponse } from "../interface/interfaces";
import { ApiError } from "../interface/interfaces";


let edit: boolean = false;

//update the note using put and the info from the note input
export async function updateNote(event: HTMLElement): Promise<ApiResponse | ApiError> {
    try {
        const { data } = await axios.put<ApiResponse>(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${event.id}`, {
            note: event.textContent
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

//change the css design when updating is in progress
export function update(event: any) {
    let textArea: HTMLElement = document.querySelector(".note")!;
    let allTextArea: NodeListOf<HTMLElement> = document.querySelectorAll(".note")!;
    allTextArea.forEach(element => {
        if (event.target.id == element.id) {
            textArea = element;
        }
    });
    if (edit == false) {
        textArea.style.backgroundColor = "#DFDFDF"
        textArea.contentEditable = "true";
        edit = true;
    }
    else {
        updateNote(textArea);
        textArea.style.backgroundColor = "white"
        textArea.contentEditable = "false";
        edit = false
    }

}