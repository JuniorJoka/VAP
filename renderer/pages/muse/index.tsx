import { Content } from "../../components/Content";
import { SideBar } from "../../components/SideBar";

const Index = () => {
  return (
    <main className="h-screen overflow-hidden  flex">
      <SideBar />
      <Content />
    </main>
  );
};

export default Index;
