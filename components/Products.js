import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { id } from 'date-fns/locale';
import Product from './Product';
import { perPage } from '../config';

// $skip: offset, $first: limit

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
      price
      status
    }
  }
`;

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const router = useRouter();
  const { page = 1 } = router?.query;
  const { data, errors, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      first: perPage, // LIMIT
      skip: page * perPage - perPage, // OFFSET
    },
  });

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (errors) {
    return <p>Something went wrong.</p>;
  }

  return (
    <ProductStyles>
      {data?.allProducts.map((product) => (
        // console.log({ product });
        <Product key={product.id} product={product} />
      ))}
    </ProductStyles>
  );
}
