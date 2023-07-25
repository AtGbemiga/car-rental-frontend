"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import addProfile from "@/lib/addProfile";

export const Form = () => {
  const router = useRouter();
  const [formDataInputs, setFormDataInputs] = useState<PostProfile>({
    name: "",
    description: "",
    picture: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      if (key === "picture") {
        const value = formDataInputs[key];
        if (value instanceof FileList) {
          const fileList = value as FileList;
          for (let i = 0; i < fileList.length; i++) {
            formDataBody.append(key, fileList[i]);
          }
        } else if (typeof value === "string") {
          // If the value is already a string, it means a picture URL was provided.
          // In that case, directly set the field without appending to the FormData.
          formDataBody.append(key, value);
        }
      } else {
        formDataBody.append(key, String(formDataInputs[key]));
      }
    }

    try {
      const data = await addProfile(formDataBody);
      router.push("/profile");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name*
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="nameHelp"
          name="name"
          value={formDataInputs.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description*
        </label>
        <textarea
          onChange={handleChange}
          className="form-control"
          id="description"
          aria-describedby="descriptionHelp"
          name="description"
          value={formDataInputs.description}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="picture" className="form-label">
          Picture*
        </label>
        <input
          onChange={handleChange}
          type="file"
          className="form-control"
          id="picture"
          aria-describedby="pictureHelp"
          name="picture"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
