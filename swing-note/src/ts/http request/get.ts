import axios from "axios";
import { ApiResponse } from "../interface/interfaces";
import { ApiError } from "../interface/interfaces";

let user: string = "";

//fetch data by search on username
export async function getNotes(): Promise<ApiResponse | ApiError> {
  try {
    const { data } = await axios.get<ApiResponse>(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${user}`
    );
    return data;
  } catch (error: any) {
    return {
      message: error.message,
      status: error.response.status,
    };
  }
}

//set the username I got from the search input
export function getUsername(username: string): void {
  user = username;
}