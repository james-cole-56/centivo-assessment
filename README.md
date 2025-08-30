# Node.js Express API with MongoDB

## Approach

This API was built using Node.js with Express framework and MongoDB for data storage. The implementation focuses on clean separation of concerns with models, controllers, and routes. The API includes validation for MongoDB ObjectId format and filters users by age (>21) as required, ensuring both data integrity and business rule compliance.

## Setup and Running

### With MongoDB
1. Clone this repository
2. Install dependencies: `npm install`
3. Configure MongoDB connection in `.env` file
4. Start the server: `npm start` or `npm run dev` for development

### Without MongoDB (Mock Server)
For testing without MongoDB:
1. Install dependencies: `npm install`
2. Run the mock server: `npm run mock`
3. The mock server will display available user IDs for testing

## API Endpoints

- `GET /users/:id` - Get user by ID (only returns users with age > 21)

## Testing the API

Test the API with curl:

```bash
# Get all users (mock server only)
curl http://localhost:3000/

# Get user by ID (replace with a valid ID)
curl http://localhost:3000/users/[valid-user-id]

# Test invalid ID format
curl http://localhost:3000/users/invalid-id
```