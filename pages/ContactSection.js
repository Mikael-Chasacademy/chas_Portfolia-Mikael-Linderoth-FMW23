import React from "react";

const ContactList = ({ mejl, telefon, lokal }) => (
  <section>
    <div>
      <h3 className="text-xl font-semibold mb-2">My Contact List</h3>
      <ul>
        <li>{mejl}</li>
        <li>{telefon}</li>
        <li>{lokal}</li>
      </ul>
    </div>
  </section>
);

const ContactSection = () => {
  const contacts = [
    {
      mejl: "My Email",
      telefon: "My Phone Number",
      lokal: "My business adress",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      <div className="container mx-auto px-4">
        {contacts.map((contact, index) => (
          <ContactList key={index} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
