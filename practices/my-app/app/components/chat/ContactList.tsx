import React from "react";

export default function ContactList({
  contacts,
  onSelect,
}: {
  contacts: Contact[];
  onSelect: Function;
}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact: any) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
