import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts,getContactId }) {
    const deleteContactHandler = (id)=>{
      getContactId(id);
    }
  const RenderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>;
  });
  return (
    <div className="container col-md-6 bg-primary-subtle rounded mt-3 border">
      <h2>Contact List</h2>
      <hr />
      <div>{RenderContactList}</div>
    </div>
  );
}
