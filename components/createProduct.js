import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String
    $status: String
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        status: "DRAFT"
        description: $description
        price: $price
        photo: { create: { altText: $name, image: $image } }
      }
    ) {
      id
      name
      status
      description
      price
      photo
    }
  }
`;

export default function CreateProduct() {
  // const [name, setName] = useState('Neil');

  const [formGroup, handleChange, resetForm, clearForm] = useForm({
    name: '',
    price: '',
    description: '',
    image: '',
  }); // custom hook in place of useState

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    formGroup
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e, formGroup);
    const result = await createProduct();
    console.log(result);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <fieldset aria-busy={loading} disabled={loading}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={formGroup.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="price">
            Price
            <input
              type="number"
              name="price"
              id="price"
              value={formGroup.price}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="description">
            Description
            <textarea
              name="description"
              id="description"
              value={formGroup.description}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="image">
            Image
            <input
              type="file"
              name="image"
              id="image"
              value={formGroup.image}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Add Product</button>
        </fieldset>
      </Form>
    </div>
  );
}
