import { useEffect } from 'react';
import Content from '../components/Content';
import Controls from '../components/Controls/Controls';
import DetailDialog from '../components/DetailDialog';
import SideBar from '../components/SideBar';
import useMuseStore, { MuseState } from '../store/Muse';

// population func selector
const selector = (state: MuseState) => [state.populateMuse, state.initializePlayer];

function IndexPage() {
  const [populate, initialize] = useMuseStore(selector);
  useEffect(() => {
    // add music data to store
    populate();
    // set AudioPlayer
    initialize();
  }, []);

  return (
    <main className="h-screen overflow-hidden  flex">
      <SideBar />
      <Content />
      <Controls />
      <DetailDialog />
    </main>
  );
}

export default IndexPage;
