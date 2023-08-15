"use client";
import searchQuery from "@/lib/searchQuery";
import { useState } from "react";
export default function Search() {
  const [formData, setFormData] = useState({
    nameQuery: "",
    typeQuery: "",
    colourQuery: "",
    transmissionQuery: "",
    minPriceQuery: null,
    maxPriceQuery: null,
  });
  const [searchResult, setsearchResult] = useState<SearchParams[]>([]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = event.target;

    const updatedValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    // console.log(`Updating ${name} to:`, updatedValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await searchQuery(
      formData.nameQuery,
      formData.typeQuery,
      formData.colourQuery,
      formData.transmissionQuery,
      formData.minPriceQuery ?? null,
      formData.maxPriceQuery ?? null
    );

    if (!response) {
      return;
    }
    console.log("FS", response);

    setsearchResult(response);
  }

  const disabled =
    !formData.nameQuery &&
    !formData.typeQuery &&
    !formData.colourQuery &&
    !formData.transmissionQuery &&
    !formData.minPriceQuery &&
    !formData.maxPriceQuery;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameQuery" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameQuery"
            aria-describedby="nameQueryHelp"
            onChange={handleChange}
            value={formData.nameQuery}
            name="nameQuery"
          />
          <div id="nameQueryHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="typeQuery" className="form-label">
            Type
          </label>
          <select
            name="typeQuery"
            id="typeQuery"
            onChange={handleChange}
            value={formData.typeQuery}
          >
            <option value="" aria-describedby="" disabled>
              --
            </option>
            <option value="Sedan" aria-describedby="Sedan">
              Sedan
            </option>
            <option value="Suv" aria-describedby="Suv">
              SUV
            </option>
            <option value="Truck" aria-describedby="Truck">
              Truck
            </option>
          </select>
          <div id="typeQueryHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="colourQuery" className="form-label">
            Colour
          </label>
          <input
            type="text"
            className="form-control"
            id="colourQuery"
            aria-describedby="colourQueryHelp"
            onChange={handleChange}
            value={formData.colourQuery}
            name="colourQuery"
          />
          <div id="colourQueryHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="transmissionQuery" className="form-label">
            Transmission
          </label>
          <select
            name="transmissionQuery"
            id="transmissionQuery"
            onChange={handleChange}
            value={formData.transmissionQuery}
          >
            <option value="" aria-describedby="" disabled>
              --
            </option>
            <option value="Manual" aria-describedby="Manual">
              Manual
            </option>
            <option value="Automatic" aria-describedby="Automatic">
              Automatic
            </option>
          </select>
          <div id="nameQueryHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <section>
          <label htmlFor="minPriceQuery" className="form-label">
            Min price
          </label>
          <input
            type="number"
            className="form-control"
            id="minPriceQuery"
            aria-describedby="priceQueryHelp"
            value={
              formData.minPriceQuery !== null ? formData.minPriceQuery : ""
            }
            onChange={handleChange}
            name="minPriceQuery"
          />
          <div>
            <label htmlFor="maxPriceQuery" className="form-label">
              Max price
            </label>
            <input
              type="number"
              className="form-control"
              id="maxPriceQuery"
              aria-describedby="priceQueryHelp"
              value={
                formData.maxPriceQuery !== null ? formData.maxPriceQuery : ""
              }
              onChange={handleChange}
              name="maxPriceQuery"
            />
          </div>
        </section>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={disabled}
        >
          Search
        </button>
      </form>
    </div>
  );
}
