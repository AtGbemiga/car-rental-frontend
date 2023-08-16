"use client";
import searchQuery from "@/lib/searchQuery";
import { useState } from "react";
import { useAppDispatch } from "@/app/GlobalRedux/hook";
import { start } from "@/app/GlobalRedux/features/searchRedux/searchSlice";

type SearchProps = {
  searchResult: SearchParamsResult[];
  setSearchResult: React.Dispatch<React.SetStateAction<SearchParamsResult[]>>;
};

export default function Search(props: SearchProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    nameQuery: "",
    typeQuery: "",
    colourQuery: "",
    transmissionQuery: "",
    minPriceQuery: null,
    maxPriceQuery: null,
  });

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
    console.log(response);

    props.setSearchResult(response);
    dispatch(start());
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
            className="form-select"
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
            className="form-select"
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
        </div>

        <section>
          <div className="mb-3">
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
          </div>

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
