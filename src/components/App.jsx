import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/thunk';
import Loader from './Loader/Loader';
import {
  StyledHeader,
  StyledPhoneBookContainer,
  StyledSectionContainer,
  StyledTextNoContacts,
} from './StyledApp';

function App() {
  const {
    contacts: { contacts, loading, error },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(error);

  return (
    <StyledPhoneBookContainer>
      <StyledSectionContainer>
        <StyledHeader>PhoneBook</StyledHeader>
        <ContactForm />
        <StyledHeader>Contacts</StyledHeader>
        <Filter />
      </StyledSectionContainer>
      {error && <p>{error}</p>}
      {loading && contacts.length === 0 ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <ContactList />
      ) : (
        <StyledTextNoContacts>
          There are no contacts in your phonebook
        </StyledTextNoContacts>
      )}
    </StyledPhoneBookContainer>
  );
}

export default App;
