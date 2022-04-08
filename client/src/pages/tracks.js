import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import Table from '../components/table'
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

export const TRACKS = gql`
  query {
  pairs {
    id
    token0 {
      id
      name
      symbol
    }
    token1 {
      id
      name
      symbol
    }
    reserveUSD
    volumeUSD
  }
}

`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)

  if(loading) return 'Loading ...'
  if(error) return `ERROR ${error.message}`

  return <Layout grid>
      <Table data={data.pairs} />
    </Layout>;
};

export default Tracks;
