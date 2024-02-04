import axios from "axios";
import { ApiResponse } from "../interface/interfaces";
import { ApiError } from "../interface/interfaces";


export async function delNote(event: any): Promise<ApiResponse | ApiError> {
    try {
        let { data } = await axios.delete(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${event.target.id}`, {
        },
        )
        history.go(0);
        return data;
    } catch (error: any) {
        return {
            message: error.message,
            status: error.response.status,
        };
    }
}
