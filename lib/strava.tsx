import { IconBarbell, IconProps } from "@tabler/icons-react";

import { SportType } from "@/types/strava";

export function sportTypeToIcon(sportType: SportType, props?: IconProps) {
  switch (sportType) {
    case SportType.WeightTraining:
      return <IconBarbell {...props} />;
    default:
      return <></>;
  }
}
