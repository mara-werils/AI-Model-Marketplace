// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AIModelMarketplace {
    struct Model {
        string name;
        string description;
        uint256 price;
        address payable creator;
        uint8 totalRatings;
        uint8 totalUsersRated;
    }

    mapping(uint256 => Model) public models;
    uint256 public modelCount;

    mapping(uint256 => mapping(address => bool)) public hasPurchased;

    function listModel(string memory name, string memory description, uint256 price) public {
        require(bytes(name).length > 0, "Name is required");
        require(price > 0, "Price must be greater than zero");

        models[modelCount] = Model({
            name: name,
            description: description,
            price: price,
            creator: payable(msg.sender),
            totalRatings: 0,
            totalUsersRated: 0
        });

        modelCount++;
    }

    function purchaseModel(uint256 modelId) public payable {
        require(modelId < modelCount, "Model does not exist");
        Model storage model = models[modelId];
        require(msg.value == model.price, "Incorrect payment amount");
        require(!hasPurchased[modelId][msg.sender], "You have already purchased this model");

        model.creator.transfer(msg.value);
        hasPurchased[modelId][msg.sender] = true;
    }

    function rateModel(uint256 modelId, uint8 rating) public {
        require(modelId < modelCount, "Model does not exist");
        require(rating > 0 && rating <= 5, "Rating must be between 1 and 5");
        require(hasPurchased[modelId][msg.sender], "You must purchase the model first");

        Model storage model = models[modelId];
        model.totalRatings += rating;
        model.totalUsersRated++;
    }

    function withdrawFunds() public {
        payable(msg.sender).transfer(address(this).balance);
    }

    function getModelDetails(uint256 modelId) public view returns (string memory, string memory, uint256, address, uint8) {
        require(modelId < modelCount, "Model does not exist");
        Model memory model = models[modelId];
        uint8 averageRating = model.totalUsersRated > 0 ? model.totalRatings / model.totalUsersRated : 0;

        return (model.name, model.description, model.price, model.creator, averageRating);
    }
}
