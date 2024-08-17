# Vite + React + Express Boilerplate

A boilerplate for a Vite (React) frontend and Express backend.

## Setup

1. **Clone the Repo and Reset repo history for you:**
   ```bash
   git clone <repo-url> your-project-name
   cd your-project-name
   ```
2. **Reset repo history for you:**
   ```bash
   rm -rf .git
   ```
3. **Install Dependencies:**
   - **Client:**
     cd client
     npm install
   - **Root and Server:**
     cd ..
     npm install
4. **Initialize your new repo:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

5. **Create a newly made copy in your repo:**
   ```bash
   git remote add origin <your origin>
   git push -u origin main
   ```



## Running the Project

Start both server (port 5000) and client (port 3000) concurrently:
npm run dev - In the root directory

- Access the app: `http://localhost:3000`
- API Proxy: `http://localhost:3000/api`

## Additional Commands

- **Server Only:** `npm run server`
- **Client Only:** `npm run client`
