"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PriceSvg, SeatSvg, TransmissionSvg } from "./SvgVehicleCard";
import { useRouter } from "next/navigation";

export const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const { pictures, name, transmission, seat, price } = vehicle;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/vehicles/${vehicle._id}`);
  };

  return (
    <div className="col d-flex justify-content-center">
      <Card style={{ width: "18rem", whiteSpace: "pre-line" }}>
        <Card.Img variant="top" src={pictures[0]} />

        <Card.Body className="bg-white">
          <Card.Title className="bg-white">{name}</Card.Title>
          <Card.Text className="bg-white">
            <TransmissionSvg /> {transmission} {"\n"}
            <SeatSvg /> {seat} {seat === 1 ? "seat" : "seats"} {"\n"}
            <PriceSvg /> {price} {"/day"}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Hire
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
