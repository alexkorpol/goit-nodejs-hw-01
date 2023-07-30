const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const contactsPath = require("./db/contactsPath");

// function listContacts() {
  // ...твой код. Возвращает массив контактов.

const listContacts = async()=> {
    const data = await fs.readFile(contactsPath);
    // console.log("data", data);
    const contacts = JSON.parse(data);
    // console.log("contacts", contacts);
    return contacts;
}




// function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
    const getContactById = async(contactId)=> {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    if(!result){
        return null;
    }
    return result;
}


// function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
const removeContact = async(contactId)=> {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if(idx === -1){
        return null;
    }
    // const [removeProduct] = products.splice(idx, 1);
    // await updateProducts(products);
    // return removeProduct
    const newContacts = contacts.filter((_, index) => index !== idx);
    await updateContacts(newContacts);
    return contacts[idx];
}


// function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта. 
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
    