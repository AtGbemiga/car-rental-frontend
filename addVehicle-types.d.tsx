type AddVehicle = {
  name: string;
  seat: number | null;
  price: number | null;
  description: string;
  type: string;
  pictures: FileList | string[];
  colour: string;
  transmission: string;
  [key: string]: string | number | FileList | string[] | null;
};
