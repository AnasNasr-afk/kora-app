## Getting the Server Running

Follow these steps to start the backend server:

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/kora-app.git
   cd kora-app/backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` directory and add the required environment variables as shown in the `.env.example` file. Example:

   ```
   PORT=3000
   DATABASE_URL=mysql://root:Password@localhost:3306/kora_app
   ```

   Replace the {Password} with your MySQL password (If you have it installed)

4. **Configure the database and run migrations**

   1. **Install MySQL**

      Make sure MySQL is installed and running on your system.

      - [Download MySQL](https://dev.mysql.com/downloads/mysql/)
      - [Install MySQL for Windows (video)](https://youtu.be/a3HJnbYhXUc?si=eJyshfGZOAMRQ2vp)
      - [Install MySQL for Linux (video)](https://youtu.be/455KKhZyvow?si=u9R2FYoSyJ_Ewnpx)

   Remember the password and update the DATABASE_URL in the `.en` file. (IMPORTANT)

   2. **Run migrations**

   In the `backend` directory, run:

   ```bash
   npm run migrate
   ```

   This command will create the database and the migration

   If you encounter permission issues:

   - On Linux/macOS, try running with `sudo`.
   - On Windows, run CMD as administrator.

   If you still get privilege errors, do the step 3 and redo the step 2 to run the migration.

   3. **Create the database**

      Create the database manually using the MySQL CLI or a GUI tool:

      ```bash
      mysql -u root -p
      CREATE DATABASE kora_app;
      EXIT;
      ```

      In the `backend` directory, run:

      ```bash
      npm run migrate
      ```

5. **Start the server**

   for development with hot-reloading (for now only run for development):

   ```bash
   npm run dev
   ```

6. **Verify the server is running**

   Open your browser or use a tool like `curl` to check:

   ```
   http://localhost:3000
   ```

The server should now be up and running!
