import React from 'react';
import './ContactList.css';

const ContactList = ({ contact, onDelete }) => (
  <ul className="list">
    {contact.length < 1 ? (
      <p className="noCont">Не знайдено</p>
    ) : (
      contact.map(({ id, name, number }) => (
        <li key={id} className="item">
          <p className="name">{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => onDelete(id)}>
            Видалити
          </button>
        </li>
      ))
    )}
  </ul>
);

export default ContactList;
