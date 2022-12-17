import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.item;


export const selectIsLoadingContact = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
  );

 
  export const selectIsAdded = createSelector([selectContacts], contacts => {
    const isAdded = name => contacts.map(contact => contact.name).includes(name);
    return isAdded;
  });
  