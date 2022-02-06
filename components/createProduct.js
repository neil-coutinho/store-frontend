import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  // const [name, setName] = useState('Neil');

  const [formGroup, handleChange, resetForm, clearForm] = useForm({
    name: '',
    price: '',
  }); // custom hook in place of useState

  return (
    <div>
      <Form>
        <fieldset>
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
              type="text"
              name="price"
              id="price"
              value={formGroup.price}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Add Product</button>
        </fieldset>
      </Form>
    </div>
  );
}
