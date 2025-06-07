import express from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  updateContactController,
} from '../controllers/contactsController.js';

const router = express.Router();

router.get('/', getAllContactsController);
router.get('/:contactId', getContactByIdController);
router.post('/', createContactController);
router.delete('/:contactId', deleteContactController);
router.put('/:contactId', updateContactController);

export default router;


