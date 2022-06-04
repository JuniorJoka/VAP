import { MuseMeta } from '../../../shared/types/moth';
import Card from '../Card';

interface SectionI {
  head: string;
  data?: Map<string, MuseMeta[]>;
}

export default function Section({ head, data }: SectionI) {
  return (
    <div>
      <div>{head}</div>
      <div className="flex">
        {Array.from(data.keys()).map((val) => (
          <Card primaryText={val} secondaryText={''} />
        ))}
      </div>
    </div>
  );
}

Section.defaultProps = {
  data: new Map(),
};
