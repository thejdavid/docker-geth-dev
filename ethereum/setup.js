function splitFund() {
  var accounts = web3.eth.accounts;
  var accountLength = accounts.length;

  var balanceCoinbase = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase).toNumber(), 'ether')
  var indexCoinBase = accounts.indexOf(web3.eth.coinbase);
  if (indexCoinBase > -1) {
    accounts.splice(indexCoinBase, 1);
  }

  accounts.forEach(function(account) {
    web3.eth.sendTransaction({from:web3.eth.coinbase,to:account,value:web3.toWei(balanceCoinbase/accountLength, "ether")})
  });
}

splitFund()
