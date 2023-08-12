"use client";

import { useState } from "react";
import sendFormWithVehicleDetails from "@/lib/postHire";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import Cookies from "js-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form({ vehicle }: { vehicle: Vehicle }) {
  const token = Cookies.get("token");
  const router = useRouter();
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [returnAddress, setReturnAddress] = useState("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) {
      router.push("/login");
    }
    const formDataBody = new FormData();
    formDataBody.append("name", vehicle.name);
    formDataBody.append("description", vehicle.description);
    formDataBody.append("colour", vehicle.colour);
    formDataBody.append("transmission", vehicle.transmission);
    formDataBody.append("type", vehicle.type);
    formDataBody.append("seat", String(vehicle.seat));
    formDataBody.append("price", String(vehicle.price));
    formDataBody.append("deliveryAddress", deliveryAddress);
    formDataBody.append("dateRange", JSON.stringify(dateRange));
    formDataBody.append("returnAddress", returnAddress);

    // Create an array of picture URLs
    const pictureURLs = [];
    for (const picture of vehicle.pictures) {
      if (typeof picture === "string") {
        pictureURLs.push(picture);
      }
    }

    // Convert the pictureURLs array to a JSON string
    const pictureURLsJSON = JSON.stringify(pictureURLs);

    // Append the picture URLs JSON string to formDataBody
    formDataBody.append("pictures", pictureURLsJSON);

    try {
      await sendFormWithVehicleDetails(formDataBody);
      router.push("/profile/hires");
      revalidatePath("/profile/hires");
    } catch (error) {
      console.error(error);
    }
  }

  const disabled = !deliveryAddress || !returnAddress || !startDate || !endDate;

  return (
    <form onSubmit={handleSubmit} className="py-5">
      <p>Select delivery & return dates</p>
      <DatePicker
        showIcon
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        minDate={new Date()}
        withPortal
        placeholderText="start date - end date"
      />
      <div className="mb-3 pt-3">
        <label htmlFor="deliveryAddress" className="form-label">
          Delivery address
        </label>
        <input
          type="text"
          className="form-control"
          id="deliveryAddress"
          aria-describedby="deliveryAddress"
          value={deliveryAddress}
          onChange={(e) => {
            setDeliveryAddress(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="returnAddress" className="form-label">
          Return address
        </label>
        <input
          name="returnAddress"
          type="text"
          className="form-control"
          id="returnAddress"
          aria-describedby="returnAddress"
          value={returnAddress}
          onChange={(e) => {
            setReturnAddress(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={disabled}>
        Submit
      </button>
    </form>
  );
}
