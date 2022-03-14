import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

export default function ProductsPage({ query }) {
  const { page = 1 } = query;
  return (
    <>
      <Pagination page={page} />
      <Products />
      <Pagination page={page} />
    </>
  );
}
