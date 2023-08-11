import getAllVehicles from "@/lib/getAllVehicles";
import { VehicleCard } from "./VehicleCard";
import { Suspense } from "react";
import SkeletonPage from "./ImgSkeleton";

export default async function HomeMainBody() {
  const vehicles = await getAllVehicles();

  const content = (
    <div
      className="container-fluid mb-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <section className="mb-5 ps-lg-5 ps-md-5 ps-sm-3 ps-xs-2">
        <h2 style={{ color: "#8F4242" }} className="bg-transparent">
          Hit the road
        </h2>
      </section>

      <section>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
          {vehicles.map((vehicle) => (
            <>
              <Suspense fallback={<SkeletonPage />}>
                <VehicleCard vehicle={vehicle} />
              </Suspense>
            </>
          ))}
        </div>
      </section>
    </div>
  );

  return content;
}
