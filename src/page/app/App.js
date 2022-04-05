import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import Filter from "../../components/filter/Filter";
import Contacts from "../../components/contacts/Contacts";
import { MainSection } from "./App.styled";
import { authOperations, authSelectors } from "../../redux/auth";
import contactsOperations from "../../redux/phonebook/phonebook-operations";
import contactsSelectors from "../../redux/phonebook/phonebook-selectors";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";

export default function App() {
  const dispatch = useDispatch();
  const logedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUsername);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const deleting = (id) => dispatch(contactsOperations.deleteContacts(id));

  useEffect(() => {
    if (!contacts) {
      return;
    }
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const addNewContact = (name, number) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        name,
        number,
      };
      dispatch(contactsOperations.addContacts(contact));
    }
  };

  const searchMethod = (evt) => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((filter) =>
      filter.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {logedIn && <h2>Добро пожаловать, {name}</h2>}
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
      <MainSection>
        <ContactForm onSubmit={addNewContact} />
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} change={searchMethod} />
          {contacts.length > 0 ? (
            <Contacts
              filteredContacts={getVisibleContacts()}
              deleteElem={deleting}
            />
          ) : (
            <h2>Your Phonebook is empty!</h2>
          )}
        </div>
      </MainSection>
    </>
  );
}
