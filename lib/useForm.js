import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [currentState, setState] = useState(initialState);

  function handleChange(e) {
    let { name, type, value } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    setState({
      ...currentState,
      [name]: value,
    });
  }

  return [currentState, handleChange];
}
