const fs = require("fs/promises");
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
    const getContactById = async(id)=> {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id);
    if(!result){
        return null;
    }
    return result;
}


function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта. 
}

// listContacts();
// console.log("listContacts()", listContacts())

module.exports = listContacts;
    