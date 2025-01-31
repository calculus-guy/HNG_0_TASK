# Public API for HNG Stage 0 Task

## Project Overview

This is a simple **Node.js** API that returns basic information in **JSON format**, including:

- **Registered Email** (Stored securely using environment variables)
- **Current Datetime** (Dynamically generated in ISO 8601 format)
- **GitHub Repository URL** (Stored securely using environment variables)

The API is built using **Express.js**, with **CORS enabled**, and timestamps handled by **Moment.js** for accurate formatting.

## 🔧 **Setup Instructions**

### **1️⃣ Clone the Repository**

1.  git clone https://github.com/calculus-guy/HNG_0_TASK.git
2.  Change to the project directory using: cd HNG_0_TASK
3.  Install the required dependencies using: npm install
4.  Run the API using: node index.js

**To Test the API with Postman:**

1. Install Postman if you haven't already.
2. Send a GET request with the URL as http://localhost:5000/api:
   - Method: GET
   - URL: http://localhost:5000/api

## API Documentation

**Endpoint**: GET http://localhost:5000/api

**Response format**:
\*json
{
"email": "your-email@example.com",
"current_datetime": "2025-01-30T09:30:00Z",
"github_url": "https://github.com/yourusername/your-repo"
}

#### Example Usage:

**Endpoint URL**: https://hng-0-task.vercel.app/

**Response**:

```json
{
  "email": "sakariyauabdullateef993@gmail.com",
  "current_datetime": "2025-01-31T15:30:51Z",
  "github_url": "https://github.com/calculus-guy/HNG_0_TASK.git"
}
```

**Tech Stack**:

1.  Node.js (Runtime)
2.  Express.js (Web Framework)
3.  dotenv (Environment Variable Management)
4.  CORS (Cross-Origin Resource Sharing)
5.  Moment.js (Date & Time Formatting)

### Additional Backlink

To Hire a Nodejs Developer, use this: https://hng.tech/hire/nodejs-developers

### Deployment

This API is publicly deployed at: https://hng-0-task.vercel.app/
