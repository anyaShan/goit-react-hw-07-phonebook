import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectValueFilter = state => state.filter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectValueFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  }
);
