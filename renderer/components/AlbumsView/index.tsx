import { useEffect } from "react";
import { MuseMapper, MuseState } from "../../lib/types";
import useMuseStore from "../../store/useMuseStore";
import { Section } from "../Section";

const selector = (state: MuseState): [MuseMapper, VoidFunction] => [state.MuseByAlbum, state.groupByAlbum];

export const AlbumsView = () => {
  const [data, func] = useMuseStore(selector);
  useEffect(() => {
    func();
  }, []);

  return (
    <div>
      {Array.from(data.keys())
        .sort()
        .map((key) => (
          <Section head={key} key={key} data={data.get(key)} />
        ))}
    </div>
  );
};
