export default async function getAllVehicles(pageVariable: number) {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/vehicles";
  const params = new URLSearchParams({
    page: pageVariable.toString(),
  });

  const urlWithParams = `${url}?${params}`;

  const response = await fetch(urlWithParams);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }

  const data = await response.json();
  console.log(data);
  return data;
}
