import gql from 'graphql-tag';

import { useMutation } from '@apollo/client';

export default function DeleteProduct({ id, children }) {
  const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!) {
      deleteProduct(id: $id) {
        id
        name
      }
    }
  `;

  const [deleteProduct, { error, loading, data }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: {
        id,
      },
    }
  );

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          try {
            if (
              confirm(`Are you sure you want to delete this product? ${id}`)
            ) {
              const result = await deleteProduct();
            }
          } catch (e) {
            console.error(e);
          }
        }}
      >
        <b>{children}</b>
      </button>
    </>
  );
}
