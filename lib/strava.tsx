import { IconBaseProps } from "react-icons";
import { TbBarbell } from "react-icons/tb";

import { SportType } from "@/types/strava";

export function sportTypeToIcon(
  sportType: SportType,
  props?: React.ComponentProps<"svg"> & IconBaseProps
) {
  switch (sportType) {
    case SportType.WeightTraining:
      return <TbBarbell {...props} />;
    default:
      return <></>;
  }
}
