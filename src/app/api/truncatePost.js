import { Client } from '@vercel/postgres';

export default async function handler(req, res) {
  // Check if the request method is POST to ensure this route is only used for deletion
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests are allowed' });
    return;
  }

  const client = new Client();

  try {
    // Connect to the database
    await client.connect();

    // Execute the TRUNCATE command
    await client.query('TRUNCATE TABLE Post');

    // Close the connection
    await client.end();

    // Send a success response
    res.status(200).json({ message: 'All rows deleted successfully.' });
  } catch (err) {
    // Handle any errors
    console.error('An error occurred:', err);
    res.status(500).json({ message: 'An error occurred', error: err.message });
  } finally {
    // Ensure the client is closed if not already closed
    if (client) {
      await client.end();
    }
  }
}
