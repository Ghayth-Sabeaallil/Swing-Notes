export interface Notes {
  title: string;
  note: string;
  createdAt?: string;
  id?: string;
  username: string;
}

export interface ApiResponse {
  notes: Notes[];
  status: number;
  message?: string;

}

export interface ApiError {
  notes?: Notes[];
  message?: string;
  status: number;
}
