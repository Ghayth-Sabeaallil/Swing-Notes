import axios from "axios";
import { ApiResponse } from "../interface/interfaces";
import { eventTarget } from "../interface/interfaces";
import { ApiError } from "../interface/interfaces";
import Swal from 'sweetalert2'
import { read } from "../../main";

//delete data using id and refresh the page
export async function delNote(event: eventTarget): Promise<ApiResponse | ApiError> {
    try {
        let { data } = await axios.delete<ApiResponse>(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${event.target.id}`, {
        },
        )
        Swal.fire({
            title: "Delete",
            text: "The note has been deleted",
            icon: "error"
        });
        read();
        return data;
    } catch (error: ApiError | any) {
        return {
            message: error.message,
            status: error.response.status,
        };
    }
}
