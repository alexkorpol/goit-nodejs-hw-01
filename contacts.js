const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const contactsPath = require("./db/contactsPath");


  const listContacts = async()=> {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}


  const getContactById = async(contactId)=> {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    if(!result){
        return null;
    }
    return result;
}

  const removeContact = async(contactId)=> {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if(idx === -1){
        return null;
    }
    const newContacts = contacts.filter((_, index) => index !== idx);
    await updateContacts(newContacts);
    return contacts[idx];
}

  const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = { name, email, phone, id: nanoid() };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  };


const updateContacts = async(contacts)=> {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
}



module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
    