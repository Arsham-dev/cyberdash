//import Web3 from 'web3'
import rlp from 'rlp'

class MetaMask {
  constructor(ethereum) {
    this.ethereum = ethereum
    this.flashbotUrl = 'https://relay.flashbots.net'
    // this.web3Endpoint = web3Endpoint
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
      //await this.signTx(ethereumAddress)
      return ethereumAddress
    }
    alert('please install metamask')
    return 'please install metamask'
  }

  signTx = async (address) => {
    //const web3 = new Web3(
    //  'https://eth.getblock.io/goerli/?api_key=91953f06-fc0a-4a48-87fc-145e8cf6d385'
    //)
    /*
    const nonce = await web3.eth.getTransactionCount(address)

    const CHAIN_ID = 5
    const maxPriorityFeePerGas = 2
    const maxFeePerGas = 100
    const gasLimit = 300000
    const contractAddress = '0x5C221E77624690fff6dd741493D735a17716c26B'
    const value = 0

    const eip1599ParamsToSign = [
      CHAIN_ID,
      nonce,
      maxPriorityFeePerGas,
      maxFeePerGas,
      web3.utils.toHex(gasLimit),
      contractAddress,
      web3.utils.toHex(web3.utils.toWei(Number(value).toString(), 'ether')),
      '0x00',
      //transactionParameters.data,
      []
    ]

    const signingData = rlp.encode(eip1599ParamsToSign)
    const signingDataHex = web3.utils.toHex(signingData)
    const signingDataHexType = '0x02' + signingDataHex.slice(2)
    const signingDataHashed = web3.utils.sha3(signingDataHexType)

    alert('EIP1599Params : ' + signingDataHashed)

    const signature = await this.ethereum.request({
      method: 'eth_sign',
      params: [address, signingDataHashed]
    })

    alert(signature)

    const slicedSignature = signature.slice(2)
    const myR = slicedSignature.slice(0, 64)
    const myS = slicedSignature.slice(64, 128)
    const myV =
      Number(web3.utils.hexToNumber('0x' + slicedSignature.slice(128))) % 27
    const signed9Params = [...eip1599ParamsToSign, myV, '0x' + myR, '0x' + myS]
    const txData = rlp.encode(signed9Params)
    const txDataHex = web3.utils.toHex(txData)
    const txDataHexType2 = '0x02' + txDataHex.slice(2)

    alert('finish => ' + txDataHexType2)
    */
  }
  /*
  sendTx = () => {}
  flashbotSendSignedTx = () => {}
  */
}

export default MetaMask
