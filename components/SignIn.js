import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
        }
      }
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signInHandler, { loading, error, data }] = useMutation(
    SIGN_IN_MUTATION,
    {
      variables: inputs,
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ inputs });
    const res = await signInHandler();
    console.log(res);
  };

  return (
    <Form type="POST" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            name="email"
            placeholder="e.g. someone@example.com"
            onChange={handleChange}
            value={inputs.email}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={inputs.password}
          />
        </label>
      </fieldset>

      <button type="submit">Sign In</button>
    </Form>
  );
}
