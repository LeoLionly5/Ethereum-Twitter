require("chai").should();

const { expectRevert } = require("@openzeppelin/test-helpers");

const TwitterFactory = artifacts.require("TwitterFactory");

contract("TwitterFactory", function(){
    beforeEach(async () => {
        this.TwitterFactory = await TwitterFactory.new();
    });

    describe("Creating Twitters", () => {
        it("should be able to create twitter", async () =>{
            await this.TwitterFactory.createTwitter
            ("test-twitter");
        });

        it("should be able to show twitter", async () =>{
            await this.TwitterFactory.createTwitter
            ("test-twitter");
            const myTwitter = await this.TwitterFactory.twitters.call([0]);
            console.log(myTwitter);
        });

        it("should be able to update twitter", async () =>{
            await this.TwitterFactory.createTwitter
            ("test-twitter");
            const myTwitter = await this.TwitterFactory.twitters.call([0]);
            console.log(myTwitter);
            await this.TwitterFactory.updateTwitter
            (0,"test-twitter-changed");
            const changedTwitter = await this.TwitterFactory.twitters.call([0]);
            console.log(changedTwitter);
        });

        it("should be able to delete twitter", async () =>{
            await this.TwitterFactory.createTwitter
            ("test-twitter");
            const myTwitter = await this.TwitterFactory.twitters.call([0]);
            console.log(myTwitter);
            await this.TwitterFactory.deleteTwitter
            (0);
            // const deletedTwitter = await this.TwitterFactory.twitters;
            // console.log(deletedTwitter);
        });
    }
    )
})
