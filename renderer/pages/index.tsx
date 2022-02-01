import { Content } from "../components/Content";
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
      <div className="absolute bottom-0 w-screen h-20 bg-white"></div>
    </main>
  );
};

export default IndexPage;
