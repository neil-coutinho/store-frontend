import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
    }
  }
`;

export default function UpdateProduct({ id }) {
  // FETCH PRODUCT
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });

  const { name = '', price = '', description = '' } = data?.Product || {};

  // SET FORM STATE
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name,
    price,
    description,
  });

  // UPDATE MUTATION
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id,
      ...inputs,
    },
  });
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          const response = await updateProduct();
          clearForm();
          // const {
          //   data: {
          //     createProduct: { id },
          //   },
          // } = response;

          // if (id) {
          //   router.push(`product/${id}`);
          // }
        }}
      >
        <DisplayError error={updateError} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          {/* <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label> */}
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>

          <button type="submit">+ Update Product</button>
        </fieldset>
      </Form>
    </>
  );
}

UpdateProduct.propTypes = {
  id: PropTypes.string,
};
