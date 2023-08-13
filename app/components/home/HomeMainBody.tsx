"use client";

import { useState, useEffect } from "react";
import getAllVehicles from "@/lib/pagination";
import { VehicleCard } from "./VehicleCard";
import SkeletonPage from "./ImgSkeleton";
import Pagination from "./Pagination";

export default function HomeMainBody() {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      const data = await getAllVehicles(currentPage);
      setVehicles(data.vehicles);
      setTotalPage(Math.ceil(data.count / 3));
      setIsLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, [currentPage]);

  const skeleton = Array.from({ length: 6 }, (_, i) => (
    <SkeletonPage key={i} />
  ));
  return (
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
        {isLoading ? (
          <div className="skeleton-page-global">{skeleton}</div>
        ) : (
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
            {vehicles.map((vehicle) => (
              <div className="col">
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>
        )}
      </section>

      {vehicles.length > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      )}
    </div>
  );
}
