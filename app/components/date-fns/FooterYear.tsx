import { getYear } from "date-fns";

export default function FooterYear() {
  const result = getYear(new Date());
  return <span style={{ backgroundColor: "#101010" }}>{result}</span>;
}
