import axios from "axios";

export async function fetchExampleData() {
  const accessToken = process.env.API_ACCESS_TOKEN;

  const response = await axios.get(`${accessToken}/api`, {
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
  });

  return response.data;
}
