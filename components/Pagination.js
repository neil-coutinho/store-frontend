import Head from 'next/head';
import PropTypes from 'prop-types';
import PaginationStyles from './styles/PaginationStyles';

export default function Pagination({ page }) {
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits page {page} of ___</title>
      </Head>
    </PaginationStyles>
  );
}

Pagination.propTypes = {
  page: PropTypes.string,
};
