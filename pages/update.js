import UpdateProduct from '../components/UpdateProduct';

export default function Update({ query }) {
  const { id } = query;
  return (
    <>
      <UpdateProduct id={id} />
    </>
  );
}
