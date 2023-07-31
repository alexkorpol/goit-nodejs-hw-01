const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const contactsOperations = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contact = await contactsOperations.getContactById(id);
      console.table(contact);
      break;

    case 'add':
      const newContact = await contactsOperations.addContact( name, email, phone );
      console.table(newContact);
      break;

    case 'remove':
      const removeContact = await contactsOperations.removeContact(id);
      console.table(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

const arr = hideBin(process.argv);

const { argv } = yargs(arr);

invokeAction(argv);

