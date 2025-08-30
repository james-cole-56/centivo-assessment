# Assignment
## 📌 Take-Home Technical Challenge – Node.js API + MongoDB

### Objective:
Build a simple Node.js Express API that connects to a MongoDB database and retrieves user data.

### Requirements:

- Create a GET endpoint at /users/:id that:

  - Accepts a user ID as a route parameter

  - Queries a MongoDB collection named "users" for a document with a matching _id

  - Returns the user’s details in JSON format

  - Returns a 404 Not Found response if the user is not found

- Bonus: Gracefully handle invalid ObjectId errors

- Unique twist: Only return users where the age is greater than 21

### Sample MongoDB Schema:
``` json
{ 
    "_id": ObjectId, 
    "name": "John Doe", 
    "email": "johndoe@email.com", 
    "age": 30 
}
```

### Submission Instructions:

- Upload your solution to a public GitHub repository

- Include a brief 2–3 sentence explanation of your approach in a README.md

- Paste your GitHub link into the submission field below

Please complete your submission within 48 hours of receiving this assignment.

We look forward to reviewing your work!