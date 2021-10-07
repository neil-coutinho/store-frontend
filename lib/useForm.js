import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [currentState, setState] = useState(initialState);

  function handleChange(e) {
    let { name, type, value } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    // TODO: Handle type = file

    setState({
      ...currentState,
      [name]: value,
    });
  }

  function resetForm() {
    setState(currentState);
  }

  return [currentState, handleChange, resetForm];
}
