import { crafts } from "@/content";
import { cache } from "react";
import { indexBy, prop } from "remeda";

export const getCraftsIndex = cache(() => indexBy(getCrafts(), prop("slug")));

export const getCrafts = cache(() => crafts.filter((c) => c.published));
