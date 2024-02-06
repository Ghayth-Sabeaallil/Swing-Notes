import axios from "axios";
import { ApiResponse } from "../interface/interfaces";
import { ApiError } from "../interface/interfaces";

//post data and get the information from the HTMLInputElement
export async function postNote(): Promise<ApiResponse | ApiError> {
    let userName: HTMLInputElement = document.querySelector(".username-input")!;
    let title: HTMLInputElement = document.querySelector(".title-input")!;
    let note: HTMLInputElement = document.querySelector(".note-input")!;
    try {
        let { data } = await axios.post<ApiResponse>('https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes', {
            username: userName.value,
            title: title.value,
            note: note.value
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
