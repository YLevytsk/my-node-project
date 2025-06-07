import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      default: null,
      trim: true,
      lowercase: true,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'contacts', // обычно коллекция = contacts, а не mydb2!
  }
);

// Экспортируем как default (если хочешь, можно именованный экспорт)
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;

// Или, если хочешь именно именованный (сохранить твой стиль):
// export const Contact = mongoose.model('Contact', contactSchema);


