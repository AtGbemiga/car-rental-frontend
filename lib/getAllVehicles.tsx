export default async function getAllVehicles() {
  const url = "http://127.0.0.1:3000/api/v1/vehicles";
  const response = await fetch(url);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }

  const data = await response.json();
  return data.vehicles;
}
