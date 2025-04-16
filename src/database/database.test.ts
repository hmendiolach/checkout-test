import { AppDataSource } from '../../data-source';

async function testConnection() {
  try {
    await AppDataSource.initialize();
    console.log('Database connection has been established successfully.');
    
    // Test each entity
    const userRepo = AppDataSource.getRepository('User');
    const productRepo = AppDataSource.getRepository('Product');
    
    console.log('Repositories are accessible');
    
    await AppDataSource.destroy();
    console.log('Connection closed successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();