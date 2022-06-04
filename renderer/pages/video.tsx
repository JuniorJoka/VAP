import { BsChevronDown, BsFolderPlus } from 'react-icons/bs';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10 h-10">
            <p className="text-3xl font-bold">Video</p>
          </div>
          <div>
            <button className="flex items-center space-x-2  p-2 text-xs rounded shadow-sm border-[1px]">
              <BsFolderPlus />
              <p>Add folder</p>
            </button>
          </div>
        </div>
        <div className="h-20 flex justify-end items-center">
          <button className="flex items-center space-x-3 p-2 rounded hover:shadow-border ">
            <p>
              Sort by: <span className="text-rose-500">A-Z</span>
            </p>
            <BsChevronDown />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
