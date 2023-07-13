export default async function getAllVehicles(): Promise<Vehicle[]> {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/vehicles";
  const res = await fetch(url, { next: { revalidate: 600 } });

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(
      `Request failed with status ${res.status}, ${errorResponse}`
    );
  }

  const data = await res.json();
  return data.vehicles as Vehicle[];
}
