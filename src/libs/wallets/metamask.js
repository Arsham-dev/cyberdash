class MetaMask {
  constructor(ethereum) {
    this.ethereum = ethereum
    this.flashbotUrl = 'https://relay.flashbots.net'
  }

  #isMetaMaskInstalled = () => {
    return Boolean(this.ethereum && this.ethereum.isMetaMask)
  }

  onClickConnect = async () => {
    if (this.#isMetaMaskInstalled()) {
      await this.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await this.ethereum.request({ method: 'eth_accounts' })
      const ethereumAddress = accounts[0]
      alert(ethereumAddress)
      return ethereumAddress
    }
    alert('please install metamask')
    return 'please install metamask'
  }
  /*
  signTx = () => {}
  sendTx = () => {}
  flashbotSendSignedTx = () => {}
  */
}

export default MetaMask
