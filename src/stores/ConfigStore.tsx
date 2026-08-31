import create from "zustand";
import { route } from "../util";

export type ConfigStoreData = {
  mapsApiKey: string | null;
};

export const configStore = create<ConfigStoreData>(() => {
  return {
    mapsApiKey: null,
  };
});

fetch(route("/config"))
  .then((res) => res.json())
  .then((data) => {
    configStore.setState({ mapsApiKey: data.maps_api_key || null });
  })
  .catch((err) => {
    console.error("Failed to load config", err);
  });
