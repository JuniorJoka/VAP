import Controls from '../Controls/Controls';
import SideBar from '../SideBar';
import LayoutProps from './Layout.types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="h-screen overflow-hidden  flex">
        <SideBar />
        <div className="flex-grow p-4 overflow-y-scroll scrollbar-hide flex flex-col">
          {children}
        </div>
        <Controls />
      </main>
    </>
  );
};

export default Layout;
