export default async function getVehicleDetails(vehicleId: string) {
  const url = `https://brainy-clothes-fish.cyclic.app/api/v1/vehicles/${vehicleId}`;
  const response = await fetch(url, { next: { revalidate: 60 } });

  if (!response.ok) {
    return undefined;
  }
  const data = await response.json();
  return data.vehicle;
}
