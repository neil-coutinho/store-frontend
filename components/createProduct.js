import useForm from '../lib/useForm';

export default function CreateProduct() {
  // const [name, setName] = useState('Neil');

  const [formGroup, handleChange] = useForm({
    name: '',
  }); // custom hook in place of useState

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={formGroup.name}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}
