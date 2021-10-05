import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('Neil');

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}
