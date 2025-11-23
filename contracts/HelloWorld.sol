pragma solidity ^0.8.0;

contract HelloWorld {
  string public message;

  constructor(string memory init_message){
    message = init_message;
  }
  function sayMessage() public view returns (string memory) {
        return message;
    }

  function setMessage(string memory new_message) payable external {
    require(msg.value > 0.01 ether);
    message = new_message;
  }


}
