import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PriceSvg, SeatSvg, TransmissionSvg } from "./SvgVehicleCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import searchQuery from "@/lib/searchQuery";
import { paginationSearch } from "@/app/GlobalRedux/features/pagination/paginationSlice";
import { useAppSelector } from "@/app/GlobalRedux/hook";

export default function SearchResultDisplay({ item }: {item: SearchParamsResult}) {
  const currentPage = useAppSelector(paginationSearch);
  const router = useRouter();
  //   const fetchData = async () => {
  //     const data = await searchQuery(currentPage);
  //   };
  //   fetchData();
  // }, [currentPage]);
  const handleButtonClick = (vehicleId: number) => {
    router.push(`/vehicles/${vehicleId}`);
  };
  const content = (
    <>
      <div key={item.final._id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.pictures[0]} />

          <Card.Body className="bg-white">
            <Card.Title className="bg-white">{item.name}</Card.Title>
            <Card.Text className="bg-white">
              <TransmissionSvg /> {item.transmission} {"\n"}
              <SeatSvg /> {item.seat} {item.seat === 1 ? "seat" : "seats"}{" "}
              {"\n"}
              <PriceSvg /> {item.price} {"/day"}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => handleButtonClick(item._id)}
            >
              Hire
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
  return content;
}
