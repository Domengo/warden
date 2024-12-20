const MyContract = artifacts.require("MyContract");

contract("MyContract", (accounts) => {
    let myContractInstance;

    before(async () => {
        myContractInstance = await MyContract.deployed();
    });

    describe("Keychain functionality", () => {
        it("should add a key to the keychain", async () => {
            await myContractInstance.addKey("key1", { from: accounts[0] });
            const keyExists = await myContractInstance.keyExists("key1");
            assert.isTrue(keyExists, "Key was not added to the keychain");
        });
    });

    describe("GMP functionality", () => {
        it("should execute GMP function correctly", async () => {
            const result = await myContractInstance.executeGMPFunction({ from: accounts[1] });
            assert.equal(result.logs[0].event, "GMPExecuted", "GMP function did not execute as expected");
        });
    });

    describe("Intent functionality", () => {
        it("should create an intent successfully", async () => {
            await myContractInstance.createIntent("intent1", { from: accounts[0] });
            const intentExists = await myContractInstance.intentExists("intent1");
            assert.isTrue(intentExists, "Intent was not created successfully");
        });
    });
});