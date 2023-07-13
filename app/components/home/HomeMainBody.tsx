import getAllVehicles from "@/lib/getAllVehicles";
import { VehicleCard } from "./VehicleCard";

export default async function HomeMainBody() {
  const userData: Promise<Vehicle[]> = getAllVehicles();
  const vehicles = await userData;

  console.log("Hello");

  const content = (
    <section className="container">
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
        {vehicles.map((vehicle) => {
          return <VehicleCard vehicle={vehicle} />;
        })}
      </div>
    </section>
  );

  return content;
}
