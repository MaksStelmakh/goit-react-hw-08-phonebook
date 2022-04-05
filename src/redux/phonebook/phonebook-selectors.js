import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.phonebook.loading;

const getFilter = (state) => state.phonebook.filter;

const getAllContacts = (state) => state.phonebook.items;

function getTotalContactCount(state) {
  const contacts = getAllContacts(state);
  return contacts.length;
}

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    console.log(contacts);
    console.log(filter);
    return contacts;
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
};

export default contactsSelectors;
