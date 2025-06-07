/* eslint-env node */

import mongoose from 'mongoose';


// Функция для инициализации подключения к MongoDB
export const initMongoConnection = async () => {
  // Деструктурируем переменные окружения
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_URL,
    MONGODB_DB,
  } = process.env;

  // Собираем URI подключения
  const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

  console.log('⏺️ Собранный MONGODB_URI:', uri);

  try {
    await mongoose.connect(uri, {
      // useNewUrlParser и useUnifiedTopology с Mongoose 6+ уже не нужны, но можно явно указать:
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Mongo connection error:', error.message);
    process.exit(1); // Завершаем процесс с ошибкой
  }
};


