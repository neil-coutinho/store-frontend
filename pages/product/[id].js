import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  const { id: productId } = query;
  return (
    <>
      <SingleProduct id={productId} />
    </>
  );
}
