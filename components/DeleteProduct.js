import gql from 'graphql-tag';

import { useMutation } from '@apollo/client';
import { ALL_PRODUCTS_QUERY } from './Products';

export default function DeleteProduct({ id, children }) {
  const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!) {
      deleteProduct(id: $id) {
        id
        name
      }
    }
  `;
  const update = (cache, payload) => {
    cache.evict(cache.identify(payload.data.deleteProduct)); // Apollo cache eviction
  };
  const [deleteProduct, { error, loading, data }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: {
        id,
      },
      update, // can also be done via refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  return (
    <>
      <button
        type="button"
        disabled={loading}
        aria-busy={loading}
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
