import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('Neil');

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              const { value } = e.target;
              setName(value);
            }}
          />
        </label>
      </form>
    </div>
  );
}
