"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Suspense } from "react";
import { PriceSvg, SeatSvg, TransmissionSvg } from "./SvgVehicleCard";
import SkeletonPage from "./ImgSkeleton";
import Link from "next/link";

export const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const { pictures, name, transmission, seat, price } = vehicle;

  return (
    <div className="col d-flex justify-content-center">
      <Card style={{ width: "18rem", whiteSpace: "pre-line" }}>
        <Suspense fallback={<SkeletonPage />}>
          <Card.Img variant="top" src={pictures[0]} />
        </Suspense>
        <Card.Body className="bg-white">
          <Card.Title className="bg-white">{name}</Card.Title>
          <Card.Text className="bg-white">
            <TransmissionSvg /> {transmission} {"\n"}
            <SeatSvg /> {seat} {seat === 1 ? "seat" : "seats"} {"\n"}
            <PriceSvg /> {price} {"/day"}
          </Card.Text>
          <Link href={`/vehicles/${vehicle._id}`}>
            <Button variant="primary">Hire</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
