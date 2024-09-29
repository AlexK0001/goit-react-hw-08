import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>Name: {name}</p>
      <p>Phone: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
