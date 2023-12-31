import axios from "axios";
type ConfigParams = {
  name: string | undefined;
  type: string | undefined;
  colour: string | undefined;
  transmission: string | undefined;
  numberFilters?: string | null;
};
export default async function searchQuery(
  nameQuery?: string,
  typeQuery?: string,
  colourQuery?: string,
  transmissionQuery?: string,
  minPriceQuery?: number | null,
  maxPriceQuery?: number | null
): Promise<SearchParamsResult[]> {
  const url = "https://brainy-clothes-fish.cyclic.app/api/v1/search";
  const config: { params: ConfigParams } = {
    params: {
      name: nameQuery,
      type: typeQuery,
      colour: colourQuery,
      transmission: transmissionQuery,
    },
  };
  if (minPriceQuery !== null && maxPriceQuery !== null) {
    let numberFilters = `price>=${minPriceQuery},price<=${maxPriceQuery}`;
    config.params.numberFilters = numberFilters;
  } else if (minPriceQuery !== null && maxPriceQuery === null) {
    let numberFilters = `price>=${minPriceQuery}`;
    config.params.numberFilters = numberFilters;
  } else if (minPriceQuery === null && maxPriceQuery !== null) {
    let numberFilters = `price<=${maxPriceQuery}`;
    config.params.numberFilters = numberFilters;
  } else {
    config.params.numberFilters = "";
  }
  const response = await axios.get<SearchParamsResult[]>(url, config);
  if (response.status !== 200) {
    const errorResponse = response.data;
    throw new Error(
      `Request failed with status ${response.status}, ${errorResponse}`
    );
  }

  return response.data;
}
