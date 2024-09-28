import { useEffect } from 'react'
import './App.css'
// import ContactForm from '../ContactForm/ContactForm'
// import SearchBox from '../SearchBox/SearchBox'
// import ContactList from '../ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations'
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../UserMenu/RestrictedRoute';
import PrivateRoute from '../UserMenu/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing =  useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Please wait, updating user info...</b>
  ) : (
    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   <ContactList />
    // </div>
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/" />} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
