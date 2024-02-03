import axios from "axios";
import { ApiResponse } from "./interfaces";
import { ApiError } from "./interfaces";

export async function getAllNotes(): Promise<ApiResponse | ApiError> {
  try {
    const { data } = await axios.get<ApiResponse>(
      "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/ada"
    );
    return data;
  } catch (error: any) {
    return {
      message: error.message,
      status: error.response.status,
    };
  }
}
