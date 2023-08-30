type Vehicle = {
  _id: number;
  name: string;
  pictures: string[];
  description: string;
  colour: string;
  transmission: string;
  type: string;
  seat: number;
  price: number;
  date: string;
  createdBy: string;
};

type VehicleRes = {
  vehicles: Vehicle[];
  count: number;
};
