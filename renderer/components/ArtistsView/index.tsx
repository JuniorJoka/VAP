import Section from '../Section';
import useMuse, { Muse } from '../../hooks/useMuse';

export default function ArtistsView() {
  const data = useMuse(Muse.artists);
  if (data) {
    return (
      <div>
        {Array.from(data.keys())
          .sort()
          .map((key) => (
            <Section head={key} key={key} data={data.get(key)} />
          ))}
      </div>
    );
  }
}
