type AddVehicle = {
  name: string;
  seat: number;
  price: number;
  description: string;
  type: string;
  pictures: FileList | string[];
  colour: string;
  transmission: string;
  [key: string]: string | number | FileList | string[];
};
