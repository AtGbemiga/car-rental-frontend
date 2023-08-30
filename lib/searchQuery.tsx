import axios from "axios";

export default async function searchQuery(
  currentPage: number,
  nameQuery?: string,
  typeQuery?: string,
  colourQuery?: string,
  transmissionQuery?: string,
  minPriceQuery?: number | null,
  maxPriceQuery?: number | null
): Promise<SearchParamsResult[]> {
  const url = "http://127.0.0.1:3000/api/v1/search";

  const params = new URLSearchParams({
    page: currentPage.toString(),
    name: nameQuery ? nameQuery : "",
    type: typeQuery ? typeQuery : "",
    colour: colourQuery ? colourQuery : "",
    transmission: transmissionQuery ? transmissionQuery : "",
  });

  let numberFilters = "";
  if (minPriceQuery !== null && maxPriceQuery !== null) {
    numberFilters = `price>=${minPriceQuery},price<=${maxPriceQuery}`;
  } else if (minPriceQuery !== null && maxPriceQuery === null) {
    numberFilters = `price>=${minPriceQuery}`;
  } else if (minPriceQuery === null && maxPriceQuery !== null) {
    numberFilters = `price<=${maxPriceQuery}`;
  } else {
    numberFilters = "";
  }
  params.set("numberFilters", numberFilters);

  // Log the parameters before making the API call
  console.log("Search Parameters:", params.toString());

  const result = await axios.get(url, { params });

  if (!result.data) {
    throw new Error(`Request failed with status ${result.status}`);
  }

  console.log(result.data);

  return result.data;
}
