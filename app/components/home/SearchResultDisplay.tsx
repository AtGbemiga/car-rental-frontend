import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PriceSvg, SeatSvg, TransmissionSvg } from "./SvgVehicleCard";
import { useRouter } from "next/navigation";
import Styles from "./style.module.css";
type SearchProps = {
  searchResult: SearchParamsResult[];
};
export default function SearchResultDisplay({ searchResult }: SearchProps) {
  const router = useRouter();
  const handleButtonClick = (vehicleId: number) => {
    router.push(`/vehicles/${vehicleId}`);
  };
  const content = (
    <>
      {searchResult.map((result) => (
        <div key={result._id} className="col d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={result.pictures[0]} />

            <Card.Body className="bg-white">
              <Card.Title className="bg-white">{result.name}</Card.Title>
              <Card.Text className="bg-white">
                <TransmissionSvg /> {result.transmission} {"\n"}
                <SeatSvg /> {result.seat} {result.seat === 1 ? "seat" : "seats"}{" "}
                {"\n"}
                <PriceSvg /> {result.price} {"/day"}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleButtonClick(result._id)}
              >
                Hire
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
  return content;
}
