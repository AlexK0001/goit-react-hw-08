import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./slice.js";
import { getContacts } from "../contacts/selectors.js";

export const selectVisibleContacts = createSelector(
  [getContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);