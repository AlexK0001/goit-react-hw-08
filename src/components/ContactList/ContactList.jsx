import { useSelector } from 'react-redux';
import { selectFilteredContacts  } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';


const ContactList = () => {
 
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul>
      {filteredContacts.map((item) => (
        <Contact 
          key={item.id} 
          id={item.id} 
          name={item.name} 
          number={item.number} 
        />
      ))}
    </ul>
  );
};

export default ContactList;
