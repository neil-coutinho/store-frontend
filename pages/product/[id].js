import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  const { id } = query;
  return (
    <>
      <SingleProduct id={id} />
    </>
  );
}
