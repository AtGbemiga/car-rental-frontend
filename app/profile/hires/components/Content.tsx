// CF
"use client";
import getAllHireFunction from "@/lib/getAllHire";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Content = () => {
  const [hire, setHire] = useState<GetHireResponse | null>(null);

  useEffect(() => {
    const fetchHire = async () => {
      const hireData = await getAllHireFunction();
      setHire(hireData);
    };
    fetchHire();
  }, []);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  if (!hire) {
    return <p>Loading...</p>;
  }

  if (!hire.hires[0]?.name) {
    return (
      <section className="pt-5 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h5>No hires yet</h5>

          <Link href="/">Go home</Link>
        </div>
      </section>
    );
  }
  return (
    <div>
      {hire.hires.map((item) => (
        <div className="card mb-3" key={item._id}>
          <div className="row g-0">
            <div className="col-md-4 position-relative">
              <Image
                src={item.pictures[0]}
                className="img-fluid rounded-start"
                alt={item.name}
                fill
                loading="lazy"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {truncateDescription(item.description, 50)}
                </p>
                <p className="card-text">Deliver to: {item.deliveryAddress}</p>
                <p className="card-text">Return to: {item.returnAddress}</p>
                <p className="card-text">
                  From: {item.dateRange.startDate.slice(0, 10)} To:{" "}
                  {item.dateRange.endDate.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
