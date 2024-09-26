import { httpAxios } from "../helper/httpHelper";

export async function uploadFiles(data) {
  try {
    const result = await httpAxios
      .post("/api/upload", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
