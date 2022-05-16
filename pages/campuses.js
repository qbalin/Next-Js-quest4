// TODO
//A "Campuses" page that displays the list of Wild Code School campuses' name.
//The data must be coming form a database.
//You can use this file to get a working SQLite database already setup and ready give you the list of campuses
//with the getCampusesFromDb() function

import Layout from '../components/Layout';
import { getCampusesFromDb } from '../db';

export default function Campuses(props) {
  const { data } = props;

  console.log(data);
  return (
    <Layout pageTitle='Campuses'>
      <div>
        <h1>Campuses List :</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = getCampusesFromDb();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return data;
}
