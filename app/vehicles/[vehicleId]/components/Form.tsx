// HC
"use client";

import { useState } from "react";
import sendFormWithVehicleDetails from "@/lib/postHire";
import { useRouter } from "next/navigation";
export default function Form({ vehicle }: { vehicle: Vehicle }) {
  const router = useRouter();
  const [note, setNote] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formDataBody = new FormData();
    formDataBody.append("name", vehicle.name);
    formDataBody.append("description", vehicle.description);
    formDataBody.append("colour", vehicle.colour);
    formDataBody.append("transmission", vehicle.transmission);
    formDataBody.append("type", vehicle.type);
    formDataBody.append("seat", String(vehicle.seat));
    formDataBody.append("price", String(vehicle.price));
    formDataBody.append("note", note);

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
      const data = await sendFormWithVehicleDetails(formDataBody);
      router.push("/hires");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="examplenote1" className="form-label">
          Add note
        </label>
        <input
          type="text"
          className="form-control"
          id="examplenote1"
          aria-describedby="textHelp"
          placeholder="Bring umbrellas"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
