const contactsOperations = require("./contacts");
console.log("contactsOperations.listContacts  ", contactsOperations.listContacts);
// console.log("contactsOperations.getContactById  ", contactsOperations.getContactById)



// contactsOperations.listContacts();

const invokeAction = async({action, id, name, email, phone})=> {
    switch(action){
        case "list":
            const contacts = await contactsOperations.listContacts();
            console.log(contacts);
            break;
        case "get":
            const contact = await contactsOperations.getContactById(id);
            if(!contact){
                throw new Error(`Сontact with id=${id} not found`);
            }
            console.log(contact);
            break;
        // case "add":
        //     const newProduct = await productsOperations.add(data);
        //     console.log(newProduct);
        //     break;
        // case "remove":
        //     const removeProduct = await productsOperations.removeById(id);
        //     console.log(removeProduct);
        //     break;
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

// invokeAction({ action: "list"})
invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6"})