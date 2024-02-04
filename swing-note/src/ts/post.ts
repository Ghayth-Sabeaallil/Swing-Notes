import axios from "axios";
import { ApiResponse } from "./interfaces";
import { ApiError } from "./interfaces";


export async function postNote(): Promise<ApiResponse | ApiError> {
    let userName: any = document.querySelector(".username-input");
    let title: any = document.querySelector(".title-input");
    let note: any = document.querySelector(".note-input");
    try {
        let { data } = await axios.post('https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes', {
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
