import {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} from '../services/contacts.js';

// Получить все контакты
export async function getAllContactsController(req, res) {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    console.error('❌ Error fetching contacts:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
}

// Получить контакт по id
export async function getContactByIdController(req, res) {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    console.error('❌ Error fetching contact by ID:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
}

// Создать контакт
export async function createContactController(req, res) {
  try {
    const newContactData = req.body;
    const newContact = await addContact(newContactData);

    res.status(201).json({
      status: 201,
      message: 'Contact created successfully!',
      data: newContact,
    });
  } catch (error) {
    console.error('❌ Error creating contact:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
}

// Удалить контакт
export async function deleteContactController(req, res) {
  try {
    const { contactId } = req.params;
    const deletedContact = await removeContact(contactId);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({
      status: 200,
      message: `Contact with id ${contactId} deleted successfully!`,
      data: deletedContact,
    });
  } catch (error) {
    console.error('❌ Error deleting contact:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
}

// Обновить контакт
export async function updateContactController(req, res) {
  try {
    const { contactId } = req.params;
    const updateData = req.body;
    const updatedContact = await updateContact(contactId, updateData);

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({
      status: 200,
      message: `Contact with id ${contactId} updated successfully!`,
      data: updatedContact,
    });
  } catch (error) {
    console.error('❌ Error updating contact:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
}

