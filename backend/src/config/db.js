import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // Specifies that we're using PostgreSQL
  logging: false, // Disables logging of SQL queries, useful for cleaner console output
  define: {
    freezeTableName: true, // Prevents Sequelize from pluralizing table names
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' timestamps
  },
  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // Maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000 // Maximum time, in milliseconds, that a connection can be idle before being released
  }
});

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

export default sequelize;
