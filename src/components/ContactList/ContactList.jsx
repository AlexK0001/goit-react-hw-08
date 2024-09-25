// import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts  } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
// import contactsData from '../../contacts.json';
// import { selectNameFilter } from '../../redux/filtersSlice'



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
          // {...contactsData}
        />
      ))}
    </ul>
  );
};

export default ContactList;
