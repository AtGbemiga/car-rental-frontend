import Cookies from "js-cookie";
export default async function signUpFunction(body: Auth) {
  const url = "http://localhost:3000/api/v1/auth/register";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${Object.entries(
        errorResponse
      )}`
    );
  }

  const data = await response.json();

  Cookies.set("token", data.token, {
    expires: 7,
    path: "/",
    secure: true,
    sameSite: "strict",
  });

  return data;
}
