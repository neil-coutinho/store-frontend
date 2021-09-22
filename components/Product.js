import PropTypes from 'prop-types';
import ItemStyles from './styles/ItemStyles';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <p>{product.name}</p>
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};
