import { Content } from "../components/Content";
import { Controls } from "../components/Controls";
import { SideBar } from "../components/SideBar";
import { MuseState } from "../lib/types";
import useMuseStore from "../store/useMuseStore";

// population func selector
const selector = (state: MuseState) => state.populateMuse;

const IndexPage = () => {
  // add music data to store
  useMuseStore(selector)();

  return (
    <main className="h-screen overflow-hidden  flex">
      <SideBar />
      <Content />
      <Controls />
    </main>
  );
};

export default IndexPage;
