// CF
"use client";

import { useState, useEffect } from "react";
import getAllVehicles from "@/lib/pagination";
import { VehicleCard } from "./VehicleCard";
import SkeletonPage from "./ImgSkeleton";
import Pagination from "./Pagination";
import SearchModal from "./SearchModal";
import { SearchIconSvg } from "./SearchIconSvg";
import { Provider } from "react-redux";
import { store } from "@/app/GlobalRedux/store";
import { useAppSelector } from "@/app/GlobalRedux/hook";
import { RootState } from "@/app/GlobalRedux/store";
import {
  start,
  stop,
  selectSearch,
} from "@/app/GlobalRedux/features/searchRedux/searchSlice";
import SearchResultDisplay from "./SearchResultDisplay";
import { Providers } from "@/app/GlobalRedux/provider";
import Styles from "./style.module.css";

export default function HomeMainBody() {
  const search = useAppSelector((state: RootState) => state.searches.value);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [searchResult, setsearchResult] = useState<SearchParamsResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getAllVehicles(currentPage);
      setVehicles(data.vehicles);
      setTotalPage(Math.ceil(data.count / 3));
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if (search) {
      console.log("searchResult:", searchResult);
    }
  }, [searchResult]);

  const skeleton = Array.from({ length: 6 }, (_, i) => (
    <SkeletonPage key={i} />
  ));
  return (
    <div
      className="container-fluid mb-5 "
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {search ? (
        <div
          className={Styles.search_result_container}
          style={{ border: "1px solid red" }}
        >
          <SearchResultDisplay searchResult={searchResult} />
        </div>
      ) : (
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

              <SearchModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                searchResult={searchResult}
                setSearchResult={setsearchResult}
              />
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

          {vehicles.length > 0 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPage={totalPage}
            />
          )}
        </div>
      )}
    </div>
  );
}
