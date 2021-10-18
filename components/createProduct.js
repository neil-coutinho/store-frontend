// import { useState } from 'react';
import useForm from '../lib/useForm';
import FormStyles from './styles/Form';

export default function CreateProduct() {
  // const [name, setName] = useState('Neil');

  const [inputs, handleChange, resetForm, clearForm] = useForm({
    name: 'Neil Coutinho',
    price: 10,
  });

  return (
    <div>
      <FormStyles>
        <fieldset aria-busy="true">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Product Name"
            value={inputs.name}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Product Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </fieldset>

        <button type="submit">Add Product</button>

        {/* <button type="button" onClick={clearForm}>
          Clear
        </button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button> */}
      </FormStyles>
    </div>
  );
}
