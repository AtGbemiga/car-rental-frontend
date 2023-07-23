"use client";

import React, { useState } from "react";
import addVehicleFunction from "@/lib/addVehicle";

type Visibility = "block" | "none";

interface FileList {
  readonly length: number;
  item(index: number): File | null;
  [index: number]: File;
}

export const Form = () => {
  const [formDataInputs, setFormDataInputs] = useState<AddVehicle>({
    name: "",
    seat: 0,
    price: 0,
    description: "",
    type: "",
    pictures: [], // Update to FileList type
    colour: "",
    transmission: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = event.target;

    if (type === "file") {
      const fileList = event.target.files;
      if (fileList) {
        setFormDataInputs((prevFormData) => ({
          ...prevFormData,
          [name]: fileList,
        }));
      }
    } else {
      setFormDataInputs((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  const [pictureVisibility, setPictureVisibility] =
    useState<Visibility>("none");
  function handlePicturesVisibility() {
    setPictureVisibility((prevVisibility) =>
      prevVisibility === "none" ? "block" : "none"
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataBody = new FormData();
    for (const key in formDataInputs) {
      if (key === "pictures") {
        const fileList = formDataInputs[key] as FileList;
        for (let i = 0; i < fileList.length; i++) {
          formDataBody.append(key, fileList[i]);
        }
      } else {
        formDataBody.append(key, String(formDataInputs[key]));
      }
    }

    try {
      const data = await addVehicleFunction(formDataBody);
      console.log(data); // Do something with the response data
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="nameHelp"
          name="name"
        />
        <div id="nameHelp" className="form-text">
          We'll never share your name with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          name="description"
        />
        <div id="descriptionHelp" className="form-text">
          We'll never share your description with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="colour" className="form-label">
          Colour
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="colour"
          aria-describedby="colourHelp"
          name="colour"
        />
        <div id="colourHelp" className="form-text">
          We'll never share your colour with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="transmission" className="form-label">
          Transmission
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="transmission"
          aria-describedby="transmissionHelp"
          name="transmission"
        />
        <div id="transmissionHelp" className="form-text">
          We'll never share your transmission with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="type"
          aria-describedby="typeHelp"
          name="type"
        />
        <div id="typeHelp" className="form-text">
          We'll never share your type with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="seat" className="form-label">
          Seat
        </label>
        <input
          onChange={handleChange}
          type="number"
          className="form-control"
          id="seat"
          aria-describedby="seatHelp"
          name="seat"
        />
        <div id="seatHelp" className="form-text">
          We'll never share your seat with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          onChange={handleChange}
          type="number"
          className="form-control"
          id="price"
          aria-describedby="priceHelp"
          name="price"
        />
        <div id="priceHelp" className="form-text">
          We'll never share your price with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="pictures" className="form-label">
          Picture
        </label>
        <input
          onChange={handleChange}
          type="file"
          className="form-control"
          id="pictures"
          aria-describedby="picturesHelp"
          name="pictures"
        />
        <div id="picturesHelp" className="form-text">
          We'll never share your pictures with anyone else.
        </div>
      </div>
      <input
        onClick={handlePicturesVisibility}
        className="btn btn-link"
        value="Add more pictures"
      />
      <section style={{ display: pictureVisibility }}>
        <div className="mb-3">
          <label htmlFor="pictures" className="form-label">
            Picture
          </label>
          <input
            onChange={handleChange}
            type="file"
            className="form-control"
            id="pictures"
            aria-describedby="picturesHelp"
            name="pictures"
          />
          <div id="picturesHelp" className="form-text">
            We'll never share your pictures with anyone else.
          </div>
        </div>
      </section>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
