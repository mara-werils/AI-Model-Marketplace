# **AI Model Marketplace**

## **Description**
`AI Model Marketplace` is a decentralized application (dApp) that allows users to:
- List AI models for sale.
- Purchase AI models securely.
- Rate purchased AI models.
- Retrieve details of listed models.
- Withdraw funds from model sales.

This project demonstrates smart contract development, frontend integration with Web3.js, and deployment to the Ethereum Holesky Testnet.

---

## **Features**
1. **List Model**: Add AI models to the marketplace.
2. **Purchase Model**: Securely purchase models using ETH.
3. **Rate Model**: Rate models after purchase.
4. **Get Model Details**: Retrieve the name, description, price, creator, and average rating.
5. **Withdraw Funds**: Model creators can withdraw funds from sales.

---

## **Project Structure**

```plaintext
AI-Model-Marketplace/
├── contracts/               # Smart contracts
│   └── AIModelMarketplace.sol   # Core contract logic
├── frontend/                # Frontend code
│   ├── index.html           # HTML structure
│   ├── app.js               # JavaScript logic for interacting with the smart contract
│   └── style.css            # Optional styles
├── artifacts/               # Compiled contract artifacts (from Hardhat)
├── README.md                # Documentation
├── LICENSE                  # Project license
├── package.json             # Node.js configuration
└── hardhat.config.js        # Hardhat configuration
```

---

## **Installation**

### **1. Prerequisites**
- [Node.js](https://nodejs.org/) and npm installed.
- [MetaMask](https://metamask.io/) browser extension installed.
- Holesky Testnet ETH (obtain from [Sepolia/Holesky Faucet](https://faucets.chain.link/sepolia)).

### **2. Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/AI-Model-Marketplace.git
cd AI-Model-Marketplace
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Compile Smart Contracts**
Compile the smart contracts using Hardhat:
```bash
npx hardhat compile
```

### **5. Deploy the Contract**
Deploy your contract to the Holesky Testnet:
```bash
npx hardhat run scripts/deploy.js --network holesky
```

- **Hardhat Deployment Output**:
![alt text](image.png)

## **Usage**

### **1. Start the Frontend**
Run a local server to host the frontend:
```bash
npx live-server frontend/
```

- **Frontend UI Loaded**: 
![alt text](image-1.png)

### **2. Interact with the dApp**

#### **a. List a New AI Model**
1. Fill in the **Model Name**, **Description**, and **Price (ETH)**.
2. Click the **"List Model"** button.
3. Confirm the transaction in MetaMask.

- **MetaMask Confirmation**: 
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-6.png)

#### **b. Purchase an AI Model**
1. Enter the **Model ID** in the purchase section.
2. Click the **"Purchase"** button.
3. Confirm the transaction in MetaMask.

- **Purchase Success**: 
![alt text](image-4.png)

#### **c. Rate a Purchased Model**
1. Enter the **Model ID** and **Rating (1–5)** in the rating section.
2. Click the **"Rate"** button.
3. Confirm the transaction in MetaMask.

- **Rating Success**: 
![alt text](image-5.png)
![alt text](image-7.png)

#### **d. Retrieve Model Details**
1. Enter the **Model ID** in the details section.
2. Click the **"Get Details"** button.

- **Model Details Displayed**:
![alt text](image-8.png)

#### **e. Withdraw Funds**
1. Click the **"Withdraw"** button in the withdrawal section.
2. Confirm the transaction in MetaMask.

- **Withdraw Success**: 
![alt text](image-9.png)

---

## **Demo Screenshots**

### **Deployment**
- ![alt text](image-10.png)

### **Frontend UI**
- ![alt text](image-11.png)

### **Features**
1. **List a Model**:
   - ![alt text](image-12.png)
2. **Purchase a Model**:
   - ![alt text](image-13.png)
3. **Rate a Model**:
   - ![alt text](image-14.png)
4. **Model Details**:
   - ![alt text](image-15.png)
5. **Withdraw Funds**:
   - ![alt text](image-16.png)

---

## **Examples**

Here’s an example of listing a model and viewing its details:

1. **List a Model**:
   - Model Name: `AI Text Generator`
   - Description: `A model for generating realistic text.`
   - Price: `0.1 ETH`

2. **Get Model Details**:
   ```
   Name: AI Text Generator
   Description: A model for generating realistic text.
   Price: 0.1 ETH
   Creator: 0x123...456
   Average Rating: 5
   ```

---

## **License**

This project is licensed under the [MIT License](LICENSE).
