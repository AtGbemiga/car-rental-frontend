import Cookies from "js-cookie";

export default async function addProfile(formData: FormData) {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/profile";

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
