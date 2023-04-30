// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import { Accreditation } from "../types/nft/Accreditation.sol";
import { Certificate } from "../types/nft/Certificate.sol";
import { AccreditationStorage } from "../storage/nft/AccreditationStorage.sol";
import { CertificateStorage } from "../storage/nft/CertificateStorage.sol";

/// @title An NFT smart contract for issuing Certificates
/// This smart contract inherits ERC721 token and can issue Certificates in the form of NFTs
contract CertificateNFT is ERC721 {
    using Counters for Counters.Counter;
    // ========================= Variables =========================

    // -------------------- Contract addresses --------------------

    /// @dev Boolean flag to see if contracts have been fully deployed
    bool private _areAddressesFilled = false;

    /// @dev Wallet address of deployer, similar to admin address
    address payable private _deployerAddress;

    // /// @dev Address of deployed ApplicantStorage contract
    // address private _applicantStorageAddress;

    // -------------------- Variables --------------------

    /// @dev Iterator to generate unique token IDs
    Counters.Counter private _tokenIds;

    // -------------------- Contracts --------------------

    // /// @dev Storage contract for Issuers
    // IssuerStorage issuerStorage;
    // /// @dev Storage contract for Applicants
    // ApplicantStorage applicantStorage;

    // TODO(MVP): add Contracts

    // ========================= Functions & Modifiers =========================

    // -------------------- Setting up contracts --------------------

    /// @notice Deploys an NFT contract for Certificates
    /// @param accreditationContractAddress TODO: think add what parameters, aka need to which contracts this contract will call
    constructor(string memory accreditationContractAddress) ERC721("CertificateNFT", "CERT") {
        _deployerAddress = payable(msg.sender);
        accreditationContractAddress;
    }

    modifier onlyDeployer() {
        require(msg.sender == _deployerAddress);
        _;
    }
    modifier addressesHaveNotBeenInitialized() {
        require(!_areAddressesFilled);
        _;
    }

    function setAddresses() external onlyDeployer addressesHaveNotBeenInitialized {
        _areAddressesFilled = true;
        // TODO(MVP): add required addresses
    }

    // -------------------- Functions --------------------

    /// @dev Only Issuers can issue Certificates, validate if msg.sender === Issuer.address
    modifier validateBeforeIssue() {
        // TODO(MVP): add validation
        _;
    }

    // TODO(MVP): add verification
    // TODO(MVP): add arguments
    /// @notice Mints an new NFT as a certificate, stores Certificate data
    /// @dev Mints a new NFT, then calls CertificateStorage to store data
    function issueCertificate(
        address payable applicantAddress
    )
        public
        // TODO(MVP): add arguments
        validateBeforeIssue
        returns (uint256)
    {
        uint256 newCertId = _tokenIds.current();
        // TODO(MVP): create new Cert and assign to mapping

        _safeMint(applicantAddress, newCertId);

        _tokenIds.increment();
    }

    // // TODO(Good to have): add validation before burning
    // modifier validateBurn() {
    //     _;
    // }

    // function _burnCert(uint256 certId) internal returns (bool) {
    //     // TODO(Good to have): delete Cert entry from mapping
    //     _burn(certId);
    // }
}

// import "./types/Certificate.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// contract Accreditation is ReentrancyGuard {
//     using Counters for Counters.Counter;

//     // ------ Variables

//     Counters.Counter private _certIds;
//     mapping(uint256 => Certificate) private certificates;

//     // ------ Methods

//     function createCertificate(address _nftAddress) public payable {
//         _certIds.increment();
//         uint256 certId = _certIds.current();

//         // Make new certificate object and add to storage (mapping)
//         // certificates[certId] = Certificate({
//         //     certId: certId,
//         //     issuer: payable(msg.sender),
//         //     applicant: payable(address(0)), // Create new NFT
//         //     nftAddress: _nftAddress,
//         //     isTransfered: false,
//         //     createdAt: block.timestamp
//         // });
//     }

//     function transferCertificate(uint256 _certId, address _applicantAddr) public payable {
//         // Find the certificate from mapping of 'certificates' using _certId
//         // Transfer the ownership of that certificate from issuer to applicant
//         // Update this certificate's information in local storage (mapping) about the transferred ownership
//     }

//     function verifyCertificate(uint256 _ownerAddress, address _nftAddress) public returns (bool) {
//         // Find the certificate from mapping of 'certificates' using _nftAddress
//         // Check whether this certificate is transferred to/ has an applicant that matches _ownerAddress
//     }

//     function viewCertificate(uint256 _applicantAddress) public view returns (Certificate[] memory) {
//         // Find all certificates with applicant that matches the _applicantAddress
//     }
// }
