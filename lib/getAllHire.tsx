import Cookies from "js-cookie";

export default async function getAllHireFunction(): Promise<GetHireResponse> {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/hire";

  const token = Cookies.get("token");

  if (!token) {
    throw new Error("No token found.");
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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

  return data as GetHireResponse;
}
