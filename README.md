# Blast - Open-source Sandbox-as-a-service

## Description

Blast is a simple tool designed to allow users to create and run their own sandbox environments locally. It provides a local and easy-to-deploy platform for developers to experiment and test their code without worrying about server costs. Blast is built using JavaScript and offers a range of features to make developing and testing applications faster and more efficient.

## How to Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/blast.git
   cd blast
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Blast:**
   Edit the `config.js` file to set your desired configuration settings. This file typically includes settings for the sandbox environment, such as memory limits and CPU limits.

4. **Start the Service:**
   ```bash
   npm start
   ```

5. **Access the Application:**
   Open a web browser and navigate to `http://localhost:3000` to access the Blast interface.

## Setup Steps

1. **Install Node.js:**
   Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. **Initialize the Project:**
   Run the following command to initialize a new Node.js project:
   ```bash
   npm init -y
   ```

3. **Install Dependencies:**
   Install the necessary packages by running:
   ```bash
   npm install express body-parser
   ```

4. **Create the File Structure:**
   Organize your project files as follows:
   ```
   blast/
   ├── src/
   │   ├── index.js
   │   ├── commands.js
   │   ├── sandbox.js
   │   ├── models.js
   │   ├── views.js
   │   ├── config.js
   │   ├── cli.js
   │   ├── utils.js
   │   └── ...
   ├── public/
   │   └── ...
   ├── views/
   │   └── ...
   ├── .gitignore
   ├── README.md
   ├── package.json
   └── ...
   ```

5. **Configure the Application:**
   Customize the `config.js` file to configure the application's settings, such as port number and sandbox configurations.

6. **Set Up Environment Variables:**
   If necessary, set up environment variables in your `.env` file to manage sensitive information like API keys or database configurations.

## Additional Information

- **Command-Line Interface (CLI):**
  Blast includes a CLI that allows you to interact with the sandbox environment from the command line. Use the `npm run` command to run CLI commands.

- **Features:**
  - **Local Sandbox Environment:** Develop and test applications locally without the need for a database or server.
  - **Easy Configuration:** Customize the sandbox environment using configuration settings.
  - **Command Handling:** Manage sandbox environments through the command line interface.

- **Example Usage:**
  To run a sandbox environment, use the following command:
  ```bash
  npm run sandbox --path=path/to/your/code
  ```

For more detailed documentation or specific configurations, refer to the `README.md` file in the project repository or consult the documentation provided in the [Idea source](https://github.com/stanford-mast/blast).
