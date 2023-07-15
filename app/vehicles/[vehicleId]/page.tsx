import getVehicleDetails from "@/lib/getVehicleDetails";

type Params = {
  params: {
    vehicleId: string;
  };
};

export default async function Page({ params: { vehicleId } }: Params) {
  const response = await getVehicleDetails(vehicleId);

  // Check if any vehicle data exists
  if (!response) {
    return <p>No vehicle found.</p>;
  }

  const vehicle = response; // Access the 'vehicle' object from the response

  return (
    <>
      <h2>{vehicle.name}</h2>
      <p>{vehicle.seat}</p>
    </>
  );
}
