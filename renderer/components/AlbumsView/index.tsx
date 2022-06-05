import Section from '../Section';
import useMuse, { Muse } from '../../hooks/useMuse';

export default function AlbumsView() {
  const data = useMuse(Muse.album);

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
