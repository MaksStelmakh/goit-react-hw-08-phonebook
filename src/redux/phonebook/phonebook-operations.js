import axios from "axios";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";
import { toast } from "react-toastify";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContacts = (description) => (dispatch) => {
  const contact = {
    ...description,
    completed: false,
  };
  dispatch(addContactsRequest());

  axios
    .post(`/contacts`, contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error.message)));
};

const deleteContacts = (contactId) => (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .then(() => toast.success(`Contact successfully deleted.`))
    .catch((error) => dispatch(deleteContactsError(error.message)));
};

const contactsOperations = {
  fetchContacts,
  addContacts,
  deleteContacts,
};

export default contactsOperations;
