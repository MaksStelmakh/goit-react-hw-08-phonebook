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
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      name.toLowerCase().includes(normalizedFilter);
    });
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
};

export default contactsSelectors;
