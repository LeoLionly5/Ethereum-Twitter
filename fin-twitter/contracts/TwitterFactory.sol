// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract TwitterFactory {
    // address public creator = msg.sender;
    struct Twitter {
        address creator;
        string content;
        uint256 id;
    }

    Twitter[] public twitters;

    function createTwitter(string memory _content) public {
        twitters.push(Twitter(msg.sender,_content,twitters.length));
    }

    function getTwitter(uint256 _id) public view returns (Twitter memory) {
        
        for (uint256 i=0; i < twitters.length; i++){
            if (twitters[i].id == _id){
                return twitters[i];
            }
          
        }
        return Twitter(address(0), '', 1);
       
    }

    function getTwitters() public view returns (Twitter[] memory) {
        return twitters;
    }

    function updateTwitter(uint256 _id, string memory _newContent) public {
        for (uint256 i=0; i < twitters.length; i++){
            if (twitters[i].id == _id){
                twitters[i].content = _newContent;
                break;
            }
        }
    }
    
    function deleteTwitter(uint256 _id) public{
        uint256 index = 0;
        for (uint256 i=0; i < twitters.length; i++){
            if (twitters[i].id == _id){
                index = i;
                break;
            }   
        }

        if(twitters.length > 1){
            for (uint256 i=index; i < twitters.length; i++) {
                twitters[i] = twitters[i+1];
            }
        }
        
        twitters.pop();
    }  
}