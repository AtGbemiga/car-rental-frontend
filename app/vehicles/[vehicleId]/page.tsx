import getVehicleDetails from "@/lib/getVehicleDetails";
import ImagesContainer from "./components/ImagesContainer";
import { Metadata } from "next";
import Form from "./components/Form";

type Params = {
  params: {
    vehicleId: string;
  };
};

export async function generateMetadata({
  params: { vehicleId },
}: Params): Promise<Metadata> {
  const vehicleData: Promise<Vehicle> = getVehicleDetails(vehicleId);
  const vehicle: Vehicle = await vehicleData;

  if (!vehicle.name) {
    return {
      title: "no user found",
    };
  }

  return {
    title: vehicle.name,
    description: `This is the page of ${vehicle.name}`,
  };
}

export default async function Page({ params: { vehicleId } }: Params) {
  const response = await getVehicleDetails(vehicleId);

  if (!response) {
    return null;
  }

  const vehicle = response;

  return (
    <>
      <section className="container pt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12">
            <ImagesContainer vehicle={vehicle} />
          </div>
          <section className="col-lg-5 col-md-5  col-sm-12 col-xs-12">
            <h2>{vehicle.name}</h2>
            <p>
              <strong>{vehicle.seat === 1 ? "Seat" : "Seats"}:</strong>{" "}
              {vehicle.seat}
            </p>
            <p>
              <strong>Price:</strong> {vehicle.price}
            </p>
            <p>
              <strong>Description:</strong> {vehicle.description}
            </p>
            <p>
              <strong>Type:</strong> {vehicle.type}
            </p>
            <p>
              <strong>Color:</strong> {vehicle.colour}
            </p>
            <p>
              <strong>Transmission:</strong> {vehicle.transmission}
            </p>
          </section>
        </div>
        <section>
          <Form vehicle={vehicle} /> {/* Pass the vehicle object as a prop */}
        </section>
      </section>
    </>
  );
}
