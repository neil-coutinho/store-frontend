import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [currentState, setState] = useState(initialState);

  function handleChange(e) {
    setState({
      ...currentState,
      [e.target.name]: e.target.value,
    });
  }

  return [currentState, handleChange];
}
