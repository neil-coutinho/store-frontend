import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
    }
  }
`;
export default function SingleProduct({ id }) {
  console.log(id);
  const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  console.log({ loading, error, data });
  return <>Single Product {id}</>;
}

SingleProduct.propTypes = {
  id: PropTypes.string,
};
