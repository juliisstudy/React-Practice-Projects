"use client";
import React, { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default function App() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        onSelect={(contact: Contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
