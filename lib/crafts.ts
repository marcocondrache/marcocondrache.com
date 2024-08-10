import { crafts } from "@/content";
import { indexBy, prop } from "remeda";

export function getCraftsIndex() {
  return indexBy(getCrafts(), prop("slug"));
}

export function getCrafts() {
  return crafts.filter((c) => c.published);
}
