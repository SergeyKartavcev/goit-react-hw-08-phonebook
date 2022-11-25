import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state =>state.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


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
  