import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [currentState, setState] = useState(initialState);

  function handleChange(e) {
    let { name, type, value } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'files') {
      value[0] = e.target.files; // for files value should be an array
    }

    // TODO: Handle type = file

    setState({
      ...currentState,
      [name]: value,
    });
  }

  function resetForm() {
    setState(initialState);
  }

  function clearForm() {
    // NOTE: Only works form flat forms i.e. 1 level sans listing

    const resetStateArr = Object.entries(currentState).map(([key, value]) => [
      key,
      '',
    ]);
    const resetState = Object.fromEntries(resetStateArr);

    setState(resetState);
  }

  return [currentState, handleChange, resetForm, clearForm];
}
