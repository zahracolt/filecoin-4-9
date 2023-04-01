const CONTRACT_ADDRESS = "0xaC6c5A6Df997D10d55A5ff30E3De3D1cD67A2A86";
const META_DATA_URL = "ipfs://bafyreibyytz75h75hxdehvoe23mrui2wodk5qxa3ocgeano7bvw64cr3ey/metadata.json";

// paste function here 

// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
