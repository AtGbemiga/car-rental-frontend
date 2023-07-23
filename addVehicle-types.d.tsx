type AddVehicle = {
  name: string;
  seat: number;
  price: number;
  description: string;
  type: string;
  pictures: FileList | string[]; // Change the type here
  colour: string;
  transmission: string;
  [key: string]: string | number | FileList | string[]; // Add an index signature
};
