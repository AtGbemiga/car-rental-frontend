import getAllVehicles from "@/lib/getAllVehicles";
import { VehicleCard } from "./VehicleCard";

export default async function HomeMainBody() {
  const userData: Promise<Vehicle[]> = getAllVehicles();
  const vehicles = await userData;

  console.log("Hello");

  const content = (
    <div>
      <section className="container mb-3 ">
        <h2
          style={{ color: "#8F4242" }}
          className="bg-transparent m-0 p-0 text-center "
        >
          Hit the road
        </h2>
      </section>

      <section className="container-fluid">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
          {vehicles.map((vehicle) => {
            return <VehicleCard vehicle={vehicle} />;
          })}
        </div>
      </section>
    </div>
  );

  return content;
}
