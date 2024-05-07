# Electronic Health Records (EHR) System using Blockchain

This README will guide you through the process of setting up and running the EHR system on your local machine.

## Prerequisites

Before starting, ensure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- Truffle framework
- Ganache (for local blockchain development)
- Metamask browser extension

## Installation and Setup

1. **Clone the Repository**: 
    ```bash
    git clone <repository_url>
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd ehr
    ```

3. **Install Dependencies**:
    ```bash
    cd contracts
    npm install
    cd ../client
    npm install
    ```

4. **Compile and Migrate Smart Contracts**:
    ```bash
    cd ../contracts
    truffle migrate
    ```

5. **Run the Client Application**:
    ```bash
    cd ../client
    npm start
    ```

6. **Connect Metamask**:
    - Ensure Metamask extension is installed in your browser.
    - Connect Metamask to the local blockchain network (Ganache).
    - Import one of the Ganache accounts into Metamask.

## Usage

Once the setup is complete and the client application is running:

- Open your browser and navigate to `http://localhost:3000`.
- Use the application to interact with the EHR system.
- You can create patient records, view existing records, update patient information, etc.
