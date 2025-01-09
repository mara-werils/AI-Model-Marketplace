const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contractAddress = "0x706eE554869329908440fe61BCAAcbe6F00d5470"; 
const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "modelId",
                "type": "uint256"
            }
        ],
        "name": "getModelDetails",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "hasPurchased",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "listModel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "modelCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "models",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "totalRatings",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "totalUsersRated",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "modelId",
                "type": "uint256"
            }
        ],
        "name": "purchaseModel",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "modelId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "rating",
                "type": "uint8"
            }
        ],
        "name": "rateModel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contract = new ethers.Contract(contractAddress, abi, signer);

async function listModel() {
    const name = document.getElementById("modelName").value;
    const description = document.getElementById("modelDescription").value;
    const price = document.getElementById("modelPrice").value;
    console.log("Raw price input:", price); 
    const priceInWei = ethers.utils.parseEther(price);
    console.log("Parsed price in Wei:", priceInWei.toString()); 

    if (!price || isNaN(price) || parseFloat(price) <= 0) {
        alert("Please enter a valid price in ETH!");
        return;
    }

    try {
        const tx = await contract.listModel(name, description, ethers.utils.parseEther(price));
        await tx.wait();
        alert("Model listed successfully!");
    } catch (error) {
        console.error("Error details:", error);
        alert("Error while listing the model!");
    }
}

async function purchaseModel() {
    const modelId = document.getElementById("modelIdPurchase").value;

    try {
        const model = await contract.getModelDetails(modelId);
        console.log("Model details fetched:", model);

        const price = model[2]; 
        console.log("Price in Wei:", price);

        const tx = await contract.purchaseModel(modelId, { value: price });
        await tx.wait();
        alert("Model purchased successfully!");
    } catch (error) {
        console.error("Error while purchasing the model:", error);
        alert("Error while purchasing the model!");
    }
}


async function rateModel() {
    const modelId = document.getElementById("modelIdRate").value;
    const rating = document.getElementById("modelRating").value;

    try {
        const tx = await contract.rateModel(modelId, rating);
        await tx.wait();
        alert("Model rated successfully!");
    } catch (error) {
        console.error(error);
        alert("Error while rating the model!");
    }
}

async function getModelDetails() {
    const modelId = document.getElementById("modelIdDetails").value;

    try {
        const details = await contract.getModelDetails(modelId);
        const name = details[0];
        const description = details[1];
        const price = ethers.utils.formatEther(details[2]);
        const creator = details[3];
        const averageRating = details[4];

        console.log("Price in Wei:", details[2].toString()); 

        document.getElementById("modelDetails").innerText = `
            Name: ${name}
            Description: ${description}
            Price: ${price} ETH
            Creator: ${creator}
            Average Rating: ${averageRating}
        `;
    } catch (error) {
        console.error(error);
        alert("Error while fetching model details!");
    }
}

async function withdrawFunds() {
    try {
        const tx = await contract.withdrawFunds();
        await tx.wait();
        alert("Funds withdrawn successfully!");
    } catch (error) {
        console.error(error);
        alert("Error while withdrawing funds!");
    }
}

async function connectMetaMask() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("MetaMask connected!");
        } catch (error) {
            console.error("MetaMask connection failed:", error);
        }
    } else {
        alert("MetaMask is not installed!");
    }
}

connectMetaMask();


const testConversion = () => {
    const price = document.getElementById("modelPrice").value;

    try {
        const priceInWei = ethers.utils.parseEther(price);
        console.log("Input (ETH):", price);
        console.log("Converted to Wei:", priceInWei.toString());
    } catch (error) {
        console.error("Error during conversion:", error);
        alert("Invalid input for price!");
    }
};

testConversion();
