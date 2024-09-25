import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      />
      <input 
        type="tel" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Phone" 
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactsForm;
