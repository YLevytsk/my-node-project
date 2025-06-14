import Joi from "joi";

const name = Joi.string().min(3).max(20).required();
const email = Joi.string().email().min(3).max(20).required();
const phone = Joi.string().min(3).max(20).required();

export const addContactSchema = Joi.object({
  name,
  email,
  phone,
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3).max(20),
  phone: Joi.string().min(3).max(20),
}).min(1);

