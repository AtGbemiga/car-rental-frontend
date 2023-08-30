// CF
"use client";

import { useState, useEffect } from "react";
import getAllVehicles from "@/lib/pagination";
import { VehicleCard } from "./VehicleCard";
import SkeletonPage from "./ImgSkeleton";
import Pagination from "./Pagination";
import SearchModal from "./SearchModal";
import { SearchIconSvg } from "./SearchIconSvg";
import { useAppSelector, useAppDispatch } from "@/app/GlobalRedux/hook";
import {
  totalPagesInDBHome,
  paginationSearch,
} from "@/app/GlobalRedux/features/pagination/paginationSlice";
import { showSearchContainer } from "@/app/GlobalRedux/features/searchRedux/searchSlice";

export default function HomeMainBody() {
  const dispatch = useAppDispatch();
  const isSearchContainer = useAppSelector(showSearchContainer);
  const currentPage = useAppSelector(paginationSearch);
  const [vehicles, setVehicles] = useState<VehicleRes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    if (currentPage && !isSearchContainer) {
      const fetchData = async () => {
        setIsLoading(true);

        const data = getAllVehicles(currentPage);
        const dataAwait = await data

        const t = [1, 2]
        console.log(Array.isArray(t));
        

        console.log(Object.values(data));

        console.log(data);

        setVehicles(data);

        dispatch(totalPagesInDBHome(Math.ceil(data.count / 3)));
        setIsLoading(false);
      };
      fetchData();
    }
  }, [dispatch]);

  const skeleton = Array.from({ length: 6 }, (_, i) => (
    <SkeletonPage key={i} />
  ));

  return (
    <div
      className="container-fluid mb-5 "
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="container-fluid mb-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <section className="mb-5 ps-lg-5 ps-md-5 ps-sm-3 ps-xs-2 d-flex justify-content-between">
          <h2 style={{ color: "#8F4242" }} className="bg-transparent">
            Hit the road
          </h2>
          <>
            <SearchIconSvg onClick={() => setModalShow(true)} />

            <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
          </>
        </section>
        <section>
          {isLoading ? (
            <div className="skeleton-page-global">{skeleton}</div>
          ) : (
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
              {vehicles.map((vehicle) => (
                <div className="col" key={vehicle._id}>
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>
          )}
        </section>

        {vehicles.length > 0 && <Pagination />}
      </div>
    </div>
  );
}
