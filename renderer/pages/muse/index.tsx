import { Content } from "../../components/Content";
import { SideBar } from "../../components/SideBar";

const Index = () => {
  return (
    <main className="h-screen overflow-hidden  flex">
      <SideBar />
      <Content />
      <div className="absolute bottom-0 w-screen h-20 bg-white"></div>
    </main>
  );
};

export default Index;
