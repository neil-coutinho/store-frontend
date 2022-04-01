import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  return (
    <Form type="POST">
      <fieldset>
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            name="email"
            placeholder="e.g. someone@example.com"
          />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
      </fieldset>

      <button type="submit">Sign In</button>
    </Form>
  );
}
