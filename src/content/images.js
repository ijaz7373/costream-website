// Free stock photography from Pexels (pexels.com), used under the Pexels
// License (free to use, no attribution required). Hotlinked from Pexels' own
// CDN. These are placeholder/illustrative images for this build phase —
// swap for licensed brand photography during the real design pass.
//
// Source pages (for reference/attribution if desired):
// - home:              https://www.pexels.com/photo/aerial-view-of-a-water-treatment-plant-10274179/
// - scada:             https://www.pexels.com/photo/metal-pipes-in-a-factory-11899171/
// - beyondScada:       https://www.pexels.com/photo/industrial-pipes-with-colorful-valves-against-a-wall-29248902/
// - ecosystem:         https://www.pexels.com/photo/black-hardwares-on-data-server-room-4597280/
// - cybersecurity:     https://www.pexels.com/photo/server-racks-on-data-center-5480781/
// - municipalWater:    https://www.pexels.com/photo/aerial-view-of-water-tank-2758265/
// - municipalWastewater: https://www.pexels.com/photo/aerial-view-of-wastewater-treatment-plant-3808769/
// - wasteManagement:   https://www.pexels.com/photo/bird-s-eye-view-of-landfill-during-dawn-3174349/
// - oilGasEnergy:      https://www.pexels.com/photo/photo-of-oil-rig-platform-1716008/
// - services:          https://www.pexels.com/photo/colleagues-having-a-meeting-7970845/

function pexels(id, w = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const IMAGES = {
  home: pexels(10274179),
  scada: pexels(11899171),
  beyondScada: pexels(29248902),
  ecosystem: pexels(4597280),
  cybersecurity: pexels(5480781),
  municipalWater: pexels(2758265),
  municipalWastewater: pexels(3808769),
  wasteManagement: pexels(3174349),
  oilGasEnergy: pexels(1716008),
  services: pexels(7970845),
};
