import Cookies from "js-cookie";

export default async function logOutFunction() {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/auth/logout";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }

  const data = await response.json();
  Cookies.remove("token");

  return data;
}
