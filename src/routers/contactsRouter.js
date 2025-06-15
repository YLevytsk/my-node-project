import express from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  updateContactController,
  patchContactController,
} from '../controllers/contactsController.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  addContactSchema,
  updateContactSchema,
} from '../validation/contactsSchemas.js';

const router = express.Router();

// GET all contacts
router.get('/', ctrlWrapper(getAllContactsController));

// GET contact by ID
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

// POST new contact — Joi validation for full body
router.post(
  '/',
  validateBody(addContactSchema),
  ctrlWrapper(createContactController)
);

// DELETE contact by ID
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

// PUT contact by ID — optional (повне оновлення)
router.put('/:contactId', isValidId, ctrlWrapper(updateContactController));

// PATCH contact — Joi validation for partial update
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController)
);

export default router;





