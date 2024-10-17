import React from "react";

export default function ContactCard({contact,clickHandler}) {
    // let contact = props.contact;
    console.log(contact)
  return (
    <>
      <div className="item d-flex">
        <div className="content ">
          <div className="header" >
            <b >{contact.name}</b>
          </div>
          <div className="main" >{contact.email}</div>
        </div>
        <button className="btn btn-danger mt-2 mb-2 ms-auto me-auto" onClick={()=>clickHandler(contact.id)}>
          Delete
        </button>
      </div>
      <hr className="me-4" />
    </>
  );
}
