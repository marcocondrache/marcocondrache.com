import { crafts } from "@/content";
import { indexBy, prop } from "remeda";

export function getCraftsIndex() {
  return indexBy(crafts, prop("slug"));
}

export function getCrafts() {
  return crafts;
}
