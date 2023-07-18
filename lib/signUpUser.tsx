export default async function signUpFunction(body: Auth) {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/auth/register";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }

  const data = await response.json();
  return data;
}
