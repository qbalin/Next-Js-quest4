import Layout from '../components/Layout';
import { getCampusesFromDb } from '../db';

function Campuses({ data }) {
  return (
    <Layout>
      <div>{data}</div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: 'hello',
    },
  };
}

export default Campuses;
