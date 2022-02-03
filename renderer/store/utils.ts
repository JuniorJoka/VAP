import { MuseMeta } from "../../shared/types/moth";
import { MuseMapper } from "../lib/types";

export const groupBy = (items: MuseMeta[], key: string): MuseMapper => {
  const MuseBy: MuseMapper = new Map();

  items.map((muse) => {
    let initial = muse[key][0].toUpperCase();
    const isNonLetter = initial.toLowerCase() === initial.toUpperCase();
    // replace non-character initials with a pound sign
    if (isNonLetter) {
      initial = "#";
    }
    // initialize non-existing keys to an empty array
    if (!MuseBy.has(initial)) {
      MuseBy.set(initial, new Map());
    }

    const existingData = MuseBy.get(initial);
    const content = (existingData.get(muse[key]) || []).concat(muse);
    existingData.set(muse[key], content);

    MuseBy.set(initial, existingData);
  });

  return MuseBy;
};
