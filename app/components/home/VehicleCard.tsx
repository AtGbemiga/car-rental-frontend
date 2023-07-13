"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Suspense } from "react";
import { PriceSvg, SeatSvg, TransmissionSvg } from "./SvgVehicleCard";

export const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="col d-flex justify-content-center">
      <Card style={{ width: "18rem", whiteSpace: "pre-line" }}>
        <Suspense
          fallback={<h2 className="bg-danger text-danger">Loading...</h2>}
        >
          <Card.Img variant="top" src={vehicle.pictures[0]} />
        </Suspense>
        <Card.Body>
          <Card.Title>{vehicle.name}</Card.Title>
          <Card.Text>
            <TransmissionSvg /> {vehicle.transmission} {"\n"}
            <SeatSvg /> {vehicle.seat}{" "}
            {/*{vehicle.seat.length === 1 ? "seat" : "seats"}*/} {"\n"}
            <PriceSvg />
            {vehicle.price} {"/day"}
          </Card.Text>
          <Button variant="primary">Hire</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
