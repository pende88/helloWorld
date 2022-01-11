var helloWorldABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x19ff1d21"
    }
  ];
  var helloWorldAddress = '0x98f847c3ec1ef2aC65A6FE38D2ab53054be0ECD9';
  var web3 = new Web3('http://localhost:7545');
  var helloWorld = new web3.eth.Contract(helloWorldABI, helloWorldAddress);
  
  document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
    .then(result => {
      document.getElementById('hello').innerHTML = result;
    });
  });