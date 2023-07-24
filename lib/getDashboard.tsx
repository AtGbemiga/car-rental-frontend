import Cookies from "js-cookie";

export default async function getProfile(): Promise<GetDashboardResponse> {
  const url = "http://127.0.0.1:3000/api/v1/profile";

  const token = Cookies.get("token");
  if (!token) {
    console.log("No token in profile dashboard");
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
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }

  const data: GetDashboardResponse = await response.json();
  return data;
}
