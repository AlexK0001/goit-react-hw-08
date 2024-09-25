import { useEffect } from 'react'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps'


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   return savedContacts ? JSON.parse(savedContacts) : [];
  // });
  // const [search, setSearch] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleSearchChange = (e) => {
  //   setSearch(e.target.value);
  // };

  // const addContact = (newContact) => {
  //   setContacts([...contacts, newContact]);
  // };

  // const deleteContact = (id) => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(search.toLowerCase())
  // );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>

  )
}
