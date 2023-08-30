export default async function getAllVehicles(
  currentPage: number
): Promise<VehicleRes> {
  const url = "http://127.0.0.1:3000/api/v1/vehicles";
  const params = new URLSearchParams({
    page: currentPage.toString(),
  });

  const urlWithParams = `${url}?${params}`;

  const response = await fetch(urlWithParams);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${Object.entries(
        errorResponse
      )}`
    );
  }

  const data = await response.json();
  return data;
}
