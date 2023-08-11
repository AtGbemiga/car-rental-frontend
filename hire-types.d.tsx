type FormDetails = {
  name: string;
  pictures: string[];
  description: string;
  colour: string;
  transmission: string;
  type: string;
  seat: number;
  price: number;
};

type GetHireResponse = {
  hires: {
    _id: string;
    name: string;
    pictures: string[];
    description: string;
    colour: string;
    transmission: string;
    type: string;
    seat: number;
    price: number;
    note: string;
  }[];
};
