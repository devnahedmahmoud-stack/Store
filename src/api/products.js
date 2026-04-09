import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/api/axiosInstanse";

const API_URL = "https://dummyjson.com";
export async function handleGet(endPont) {
  const req = await fetch(`${API_URL}${endPont}`);
  const response = await req.json();
  return response;
}
export async function handleGetAxios(endPoint) {
  const { data } = await axiosInstance.get(`${endPoint}`);
  return data;
}
