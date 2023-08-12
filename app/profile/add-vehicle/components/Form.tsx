"use client";
import { useState } from "react";
import addVehicleFunction from "@/lib/addVehicle";
import { useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter();
  const [disableBtn, setDisableBtn] = useState(false); // for when the handleSubmit is clicked.
  const [formDataInputs, setFormDataInputs] = useState<AddVehicle>({
    name: "",
    seat: null,
    price: null,
    description: "",
    type: "",
    pictures: [],
    colour: "",
    transmission: "",
  });
  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = event.target;
    if (type === "file") {
      const fileList = (event.target as HTMLInputElement).files;
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
      setDisableBtn(true);
      await addVehicleFunction(formDataBody);
      router.push("/profile");
    } catch (error) {
      console.error(error);
      setDisableBtn(false);
    }
  }
  // for before the handleSubmit is clicked.
  const disabled =
    !formDataInputs.colour ||
    !formDataInputs.description ||
    !formDataInputs.name ||
    formDataInputs.pictures.length === 0 ||
    !formDataInputs.price ||
    !formDataInputs.seat ||
    !formDataInputs.transmission ||
    !formDataInputs.type ||
    disableBtn;

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
          value={formDataInputs.name}
          placeholder="Min of 3 characters"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          onChange={handleChange}
          className="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          name="description"
          value={formDataInputs.description}
          placeholder="Min of 50 characters"
        />
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
          value={formDataInputs.colour}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="transmission" className="form-label">
          Transmission
        </label>{" "}
        <select
          onChange={handleChange}
          name="transmission"
          id="transmission"
          value={formDataInputs.transmission}
          aria-describedby="transmissionHelp"
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
      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type
        </label>{" "}
        <select
          onChange={handleChange}
          name="type"
          id="type"
          value={formDataInputs.type}
          aria-describedby="typeHelp"
        >
          <option value="" aria-describedby="" disabled>
            --
          </option>
          <option value="Sedan" aria-describedby="Sedan">
            Sedan
          </option>
          <option value="Suv" aria-describedby="Suv">
            Suv
          </option>
          <option value="Truck" aria-describedby="Truck">
            Truck
          </option>
        </select>
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
          value={formDataInputs.seat !== null ? formDataInputs.seat : ""}
        />
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
          value={formDataInputs.price !== null ? formDataInputs.price : ""}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pictures" className="form-label">
          Picture
        </label>
        <i>(select 1 to 5. {"<"} 1mb each)</i>
        <input
          onChange={handleChange}
          type="file"
          className="form-control"
          id="pictures"
          aria-describedby="picturesHelp"
          name="pictures"
          multiple
        />
      </div>
      <br />
      <br />
      <button type="submit" className="btn btn-primary" disabled={disabled}>
        Submit
      </button>
    </form>
  );
};
