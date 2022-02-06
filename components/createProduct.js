import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  // const [name, setName] = useState('Neil');

  const [formGroup, handleChange, resetForm, clearForm] = useForm({
    name: '',
    price: '',
    description: '',
    image: '',
  }); // custom hook in place of useState

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e, formGroup);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
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
