import { BsChevronDown, BsFolder, BsFolderPlus } from 'react-icons/bs';
import Layout from '../components/Layout';

const Page = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10 h-10">
            <p className="text-3xl font-bold">Settings</p>
          </div>
        </div>
        <div>
          <p>Libraries</p>
          <div>
            <div className="flex items-center justify-between border-2 border-gray-300 p-3 rounded">
              <div className="flex items-center space-x-6 ">
                <BsFolder />
                <div>Music library location</div>
              </div>
              <div className="flex items-center space-x-6">
                <button className="flex space-x-2 items-center">
                  <BsFolderPlus />
                  <p className="text-sm">Add Folder</p>
                </button>
                <button className="flex items-center rounded hover:bg-gray-400 p-2">
                  <BsChevronDown />
                </button>
              </div>
            </div>
          </div>
          <div></div>

          <div></div>
        </div>
        <div>
          <p>Personalization</p>
        </div>
        <div>
          <p>About Moth</p>
          <p>Version:0.0.0.1</p>
          <p>&copy; 2022 Joka Corporation. All rights reserved.</p>
          <p>
            <a href="">Joka Software License Terms</a>
          </p>
          <p>
            <a href="">Joka Services Agreement</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
