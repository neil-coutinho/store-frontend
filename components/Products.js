import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
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
  const { data, errors, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (errors) {
    return <p>Something went wrong.</p>;
  }

  return (
    <ProductStyles>
      {data.allProducts.map((product) => (
        // console.log({ product });
        <Product key={product.id} product={product} />
      ))}
    </ProductStyles>
  );
}
