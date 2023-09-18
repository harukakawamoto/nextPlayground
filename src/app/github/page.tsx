"use client";

import { useProps } from "./useProps";
import { View } from "./view";

export default function Page() {
  return <View {...useProps()} />;
}
