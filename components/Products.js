import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
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

export default function Products() {
  const { data, errors, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, errors, loading);
  return <div>Products Component</div>;
}
