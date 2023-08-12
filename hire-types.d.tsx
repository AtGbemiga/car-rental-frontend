type FormDetails = {
  // name: string;
  // pictures: string[];
  // description: string;
  // colour: string;
  // transmission: string;
  // type: string;
  // seat: number;
  // price: number;
  // dateRange: Date;
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
    dateRange: {
      startDate: string;
      endDate: string;
    };
    deliveryAddress: string;
    returnAddress: string;
  }[];
};
