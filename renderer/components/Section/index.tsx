import { MuseMeta } from '../../../shared/types/moth';

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
          <div className="w-26 mx-4">
            <div className="h-40 w-40 bg-green-500" />
            <p className="w-24">{val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Section.defaultProps = {
  data: new Map(),
};
