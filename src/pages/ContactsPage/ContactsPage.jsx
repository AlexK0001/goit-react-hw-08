import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { getIsLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your phonebook</DocumentTitle>
      <div>
        <ContactForm />
        <div>
          {!isLoading && <p>Loading...</p>}
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </>
  );
}