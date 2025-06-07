import { Contact } from '../models/contactModel.js';

// Получить все контакты
export const getAllContacts = async () => {
  return await Contact.find();
};

// Получить контакт по id
export const getContactById = async (id) => {
  return await Contact.findById(id);
};

// Создать контакт
export const addContact = async (contactData) => {
  const contact = new Contact(contactData);
  return await contact.save();
};

// Удалить контакт по id
export const removeContact = async (id) => {
  // По умолчанию findByIdAndDelete возвращает удалённый документ
  return await Contact.findByIdAndDelete(id);
};

// Обновить контакт по id
export const updateContact = async (id, updateData) => {
  // new: true — чтобы вернуть уже обновлённый документ
  return await Contact.findByIdAndUpdate(id, updateData, { new: true });
};

