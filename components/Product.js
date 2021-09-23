import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import TitleStyles from './styles/Title';
import PriceTagStyles from './styles/PriceTag';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <TitleStyles>
        <Link href={`product/${product.id}`}>{product.name}</Link>
      </TitleStyles>
      <PriceTagStyles>{product.price}</PriceTagStyles>
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};
