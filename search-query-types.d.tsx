type SearchParams = {
  name: string;
  type: string;
  colour: string;
  transmission: string;
  price: number;
};

type SearchParamsResult = {
  final: {
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
  }[];
  count: number;
};
