// TODO
//A page called "showRequest", that displays the headers, the query string and the body of the incoming request.
//You can use JSON.stringify() to display those pieces of information properly inside <pre> tags on the page.

import getRawBody from 'raw-body';
import Layout from '../components/Layout';

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=5'
  );

  const body = await getRawBody(context.req);
  const query = await context.query;
  // const headers = await getRawBody(context.req);

  const bodyString = JSON.stringify(body.toString('utf-8'));
  const queryString = query.toString('utf-8');
  console.log(query);
  return {
    props: { bodyString, query },
  };
}

export default function ShowRequest({ bodyString, query }) {
  console.log('data', bodyString);

  return (
    <Layout pageTitle='Show Request'>
      <div>
        <ul>
          <li>
            <pre>headers : {'data'}</pre>
          </li>
          <li>
            <pre> query string : {query?.id}</pre>
          </li>
          <li>
            <pre> body : {bodyString}</pre>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
