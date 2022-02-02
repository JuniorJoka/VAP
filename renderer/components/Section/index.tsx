import { MuseMeta } from "../../../shared/types/moth";

interface Section {
  head: string;
  data?: Map<string, MuseMeta[]>;
}

export const Section = ({ head, data }: Section) => {
  return (
    <div>
      <div>{head}</div>
      <div className="flex">
        {Array.from(data.keys()).map((val) => {
          return (
            <div className="w-26 mx-4">
              <div className="h-40 w-40 bg-green-500"></div>
              <p className="w-24">{val}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
