import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';

const ALL_PRODUCTS_META = gql`
  {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, data, loading } = useQuery(ALL_PRODUCTS_META);
  console.log(data);
  if (loading) return null;
  if (error) return null; // TODO: Show error component
  const { count } = data._allProductsMeta;
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits page {page} of ___</title>
      </Head>
      <Link href="/">Prev Page</Link>

      <Link href="/">
        <a>Total items: {count}</a>
      </Link>
      <Link href="/">Next Page</Link>
    </PaginationStyles>
  );
}

Pagination.propTypes = {
  page: PropTypes.string,
};
