export default async function getVehicleDetails(
  vehicleId: string
): Promise<Vehicle> {
  const url = `https://brainy-clothes-fish.cyclic.app/api/v1/vehicles/${vehicleId}`;
  const response = await fetch(url, { next: { revalidate: 60 } });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }
  const data = await response.json();
  return data.vehicle;
}
