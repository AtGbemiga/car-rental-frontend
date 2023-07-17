export default async function getAllVehicles(): Promise<Vehicle[]> {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/vehicles";
  const response = await fetch(url, { next: { revalidate: 0 } });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }

  const data = await response.json();
  return data.vehicles as Vehicle[];
}
