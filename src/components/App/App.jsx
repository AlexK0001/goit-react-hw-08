import { useEffect } from 'react';
import './App.css';
import Layout from "../Layout/Layout";
import { refreshUser } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../UserMenu/RestrictedRoute';
import PrivateRoute from '../UserMenu/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing =  useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Please wait, updating user info...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/" />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts" />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
