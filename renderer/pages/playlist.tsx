import Layout from '../components/Layout';

const Page = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10 h-10">
            <p className="text-3xl font-bold">Playlist</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
