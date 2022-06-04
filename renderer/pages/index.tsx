import { BsChevronDown, BsFolder2Open, BsFolderPlus } from 'react-icons/bs';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10 h-10">
            <p className="text-3xl font-bold">Home</p>
          </div>
          <div className="flex items-center border-[1px] rounded">
            <button className="flex items-center space-x-2  p-2 text-xs rounded-l bg-white hover:bg-gray-100">
              <BsFolder2Open />
              <p>Open file(s)</p>
            </button>
            <button className="bg-white p-2 rounded-r border-l-[1px] hover:bg-gray-100">
              <BsChevronDown />
            </button>
          </div>
        </div>
        <div className="h-20 flex items-center">
          <p className="text-xl font-semibold">Recent media</p>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
