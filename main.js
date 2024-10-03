const contactData = {
  contactList: [
    {
      contactName: 'Bob',
      phoneNumber: '+234234234234',
      email: 'bob@online.ua'
    },
    {
      contactName: 'Alex',
      phoneNumber: '+231231231231',
      email: 'alex@online.ua'
    },
    {
      contactName: 'Alice',
      phoneNumber: '+77777777777',
      email: 'alice@online.ua'
    }
  ],

    getContactData: function (name) {
    let getContact = null;
    this.contactList.forEach(contact => {
      if (contact.contactName === name) {
        getContact = contact;
      }
    });
    return getContact;
  },

    addNewContact: function (contactName, phoneNumber, email) {
    this.contactList.push({
      contactName: contactName,
      phoneNumber: phoneNumber,
      email: email
    });
  }
};

console.log(contactData.getContactData('Bob')); 
contactData.addNewContact('Charlie', '+1234567890', 'charlie@online.ua'); 
console.log(contactData.contactList); 

