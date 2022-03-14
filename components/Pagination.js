import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

const ALL_PRODUCTS_META = gql`
  {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, data, loading } = useQuery(ALL_PRODUCTS_META);

  if (loading) return null;
  if (error) return null; // TODO: Show error component
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  page = parseInt(page);

  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits {page} of {pageCount}
        </title>
      </Head>

      <Link href={`${page - 1}`}>
        <a aria-disabled={page <= 1}>Prev Page</a>
      </Link>
      <Link href="/">
        <a>
          Page {page} of {pageCount}
        </a>
      </Link>
      <Link href="/">
        <a>Total items: {count}</a>
      </Link>
      <Link href={`${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next Page</a>
      </Link>
    </PaginationStyles>
  );
}
Pagination.propTypes = {
  page: PropTypes.string,
};
