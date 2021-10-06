// import { useState } from 'react';
import useForm from '../lib/useForm';

export default function CreateProduct() {
  // const [name, setName] = useState('Neil');

  const [inputs, handleChange] = useForm({
    name: 'Neil Coutinho',
  });

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Product Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
