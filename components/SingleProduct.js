import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';

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
  if (loading) return <p>Loading...</p>;

  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  return (
    <>
      <h2>{Product.name}</h2>
      <div className="details">
        <div className="description">{Product.description}</div>
      </div>
    </>
  );
}

SingleProduct.propTypes = {
  id: PropTypes.string,
};
