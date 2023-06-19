export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectFilteredContacts = ({
  contacts: { contacts },
  filter: { filter },
}) =>
  contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filter.toLowerCase().trim());
  });
