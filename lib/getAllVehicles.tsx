export default async function getAllVehicles() {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/vehicles";
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
