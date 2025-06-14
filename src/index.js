import dotenv from 'dotenv';
dotenv.config();

import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

// Catch synchronous errors
process.on('uncaughtException', (err) => {
  console.error('❌ [uncaughtException] Uncaught exception:', err.message);
  console.error(err.stack);
  process.exit(1);
});

// Catch unhandled promise rejections
process.on('unhandledRejection', (reason) => {
  console.error('❌ [unhandledRejection] Unhandled promise rejection:', reason);
});

// Application bootstrap
const bootstrap = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (err) {
    console.error('❌ Failed to launch application:', err.message);
    console.error(err.stack);
    process.exit(1);
  }
};

bootstrap();
