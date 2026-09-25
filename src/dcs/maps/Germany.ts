import GermanyAirBases from "../../data/airbases/germany.json";
import { convertRawAirBaseData, DCSMap } from "./DCSMap";

export const Germany: DCSMap = {
  name: "Cold War Germany",
  center: [52.01, 10.71],
  magDec: 3,
  airports: convertRawAirBaseData(GermanyAirBases),
};
