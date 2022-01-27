import { useState } from "react";
import { Content } from "../../components/Muse/Content";
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
