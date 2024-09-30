import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
