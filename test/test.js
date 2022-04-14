const { ethers } = require("hardhat");

describe("ERC721QueryProtocol", function () {
  let owner, addr1, addr2, addr3, addr4;

  beforeEach(async () => {
    [owner, addr1, addr2, addr3, addr4] = await ethers.getSigners();
  });

  it("Should deploy Queryable", async function () {
    const Contract = await ethers.getContractFactory("ERC721QueryProtocol");

    const contract = await Contract.deploy();
    await contract.deployed();
  });
  it("Should deploy Queryable and Template", async function () {
    const Contract = await ethers.getContractFactory("ERC721QueryProtocol");
    const contract = await Contract.deploy();
    await contract.deployed();
    console.log(contract.address);

    const Template = await ethers.getContractFactory("Template");
    const template = await Template.deploy();
    await template.deployed();
    await template.connect(addr1).mint(2);
    await template.connect(addr2).mint(4);
    await template.connect(addr1).mint(1);
    await template.connect(addr1).burn(1);
    await template.connect(addr3).mint(2);
    await template.connect(addr1).mint(1);
    await template.connect(addr3).mint(1000);
    await template.connect(addr1).mint(1);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);
    await template.connect(addr3).mint(1000);

    console.log(
      await contract.tokensOfOwnerIn(template.address, addr1.address, 999, 1300)
    );
  });
});
