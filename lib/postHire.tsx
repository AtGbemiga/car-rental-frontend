import Cookies from "js-cookie";

export default async function sendFormWithVehicleDetails(formData: FormData) {
  const url = "http://127.0.0.1:3000/api/v1/hire";

  const token = Cookies.get("token");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${JSON.stringify(
        errorResponse
      )}`
    );
  }

  const data = await response.json();
  return data;
}
