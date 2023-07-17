import getAllVehicles from "@/lib/getAllVehicles";
import { VehicleCard } from "./VehicleCard";
import Link from "next/link";
import { Suspense } from "react";
import SkeletonPage from "./ImgSkeleton";

export default async function HomeMainBody() {
  const vehicles = await getAllVehicles();

  const content = (
    <div>
      <section className="container mb-3">
        <h2
          style={{ color: "#8F4242" }}
          className="bg-transparent m-0 p-0 text-center"
        >
          Hit the road
        </h2>
      </section>

      <section className="container-fluid">
        <Suspense fallback={<SkeletonPage />}>
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
            {vehicles.map((vehicle) => (
              <>
                <VehicleCard vehicle={vehicle} />
              </>
            ))}
          </div>
        </Suspense>
      </section>
    </div>
  );

  return content;
}
