import deiDeiMarketPhoto from "../dei dei.jpeg";
import deiDeiToiletPhoto from "../dei dei toilet.jpeg";
import palmeraTerracePhoto from "../4 bedroom terrace.jpeg";
import palmeraDuplexPhoto from "../duplex.jpeg";
import palmeraTwoBedroomApartmentPhoto from "../2 bedroom apartment.jpeg";
import palmeraThreeBedroomApartmentPhoto from "../3 bedroom apartment.jpeg";
import palmeraAmenitiesPhoto from "../palmera amenities.jpeg";

const propertyImages: Record<string, string> = {
  "dei-dei-meat-shop": deiDeiMarketPhoto,
  "dei-dei-open-stall": deiDeiMarketPhoto,
  "dei-dei-lockup-3sqm": deiDeiMarketPhoto,
  "dei-dei-lockup-6sqm": deiDeiMarketPhoto,
  "dei-dei-lockup-9sqm": deiDeiMarketPhoto,
  "dei-dei-lockup-12sqm": deiDeiMarketPhoto,
  "dei-dei-lockup-16sqm": deiDeiMarketPhoto,
  "dei-dei-lockup-25sqm": deiDeiMarketPhoto,
  "dei-dei-warehouse": deiDeiMarketPhoto,
  "dei-dei-cold-room": deiDeiMarketPhoto,
  "dei-dei-toilet": deiDeiToiletPhoto,
  "palmera-180sqm": palmeraTerracePhoto,
  "palmera-250sqm": palmeraDuplexPhoto,
  "palmera-350sqm": palmeraDuplexPhoto,
  "palmera-450sqm": palmeraDuplexPhoto,
  "palmera-750sqm": palmeraTwoBedroomApartmentPhoto,
  "palmera-900sqm": palmeraThreeBedroomApartmentPhoto,
  "palmera-amenities": palmeraAmenitiesPhoto,
};

export function getPropertyImage(id: string) {
  const image = propertyImages[id];

  if (!image) {
    throw new Error(`No listing image is configured for property "${id}".`);
  }

  return image;
}
