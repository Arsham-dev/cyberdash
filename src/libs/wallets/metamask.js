import Web3 from 'web3'
import { ethers } from 'ethers'
import { AbiCoder } from 'web3-eth-abi'

class MetaMask {
  constructor(ethereum) {
    this.ethereum = ethereum
    this.flashbotUrl = 'https://relay.flashbots.net'
    this.web3Endpoint =
      'https://eth.getblock.io/mainnet/?api_key=91953f06-fc0a-4a48-87fc-145e8cf6d385'
  }

  #isMetaMaskInstalled = () => {
    return Boolean(this.ethereum && this.ethereum.isMetaMask)
  }

  onClickConnect = async () => {
    if (this.#isMetaMaskInstalled()) {
      await this.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await this.ethereum.request({ method: 'eth_accounts' })
      const ethereumAddress = accounts[0]
      return { status: 200, content: { address: ethereumAddress } }
    }

    return { status: 400, content: { message: 'please install metaMask' } }
  }

  signTx = async (
    address,
    value,
    gasLimit,
    maxFeePerGas,
    maxPriorityFeePerGas,
    contractAddress,
    mintAbi,
    flagAbi,
    args
  ) => {
    try {
      console.log(address)
      console.log(contractAddress)
      console.log(args)

      if (maxFeePerGas <= maxPriorityFeePerGas)
        return {
          status: 400,
          content: {
            message: 'maxFeePerGas may more then MaxPriorityFeePerGas'
          }
        }

      if (mintAbi == null || flagAbi == null)
        return { status: 400, content: { message: 'CHERA FLAG SET NIS' } }

      const resCheckFlag = await this.checkFlag(flagAbi, contractAddress)

      if (resCheckFlag.status === 400)
        return {
          status: 400,
          content: { message: resCheckFlag.content.message }
        }

      const web3 = new Web3(this.web3Endpoint)

      const nonce = await web3.eth.getTransactionCount(address)

      const utils = ethers.utils

      const GWEI = 10n ** 9n

      // eslint-disable-next-line no-eval
      const maxFee = GWEI * eval(`${maxFeePerGas}n`)
      // eslint-disable-next-line no-eval
      const maxPriorityFee = GWEI * eval(`${maxPriorityFeePerGas}n`)

      value = web3.utils.toWei(String(value), 'ether')
      // eslint-disable-next-line no-eval
      value = eval(`${value}n`)

      console.log(mintAbi)

      const data = AbiCoder.prototype.encodeFunctionCall([mintAbi], args)

      const tx = {
        nonce: nonce,
        chainId: 1,
        type: 2,
        value: value,
        data: data,
        gasLimit: parseInt(gasLimit),
        maxFeePerGas: maxFee,
        maxPriorityFeePerGas: maxPriorityFee,
        to: contractAddress
      }

      const signingDataHashed = utils.keccak256(utils.serializeTransaction(tx))

      const signature = await this.ethereum.request({
        method: 'eth_sign',
        params: [address, signingDataHashed]
      })

      const signedTransaction = utils.serializeTransaction(tx, signature)

      return { status: 200, content: { rawTx: signedTransaction } }
    } catch (e) {
      console.log(e)
      return { status: 400, content: { message: e.message } }
    }
  }

  checkFlag = async (flagAbi, contractAddress) => {
    try {
      const web3 = new Web3(this.web3Endpoint)

      const contract = new web3.eth.Contract([flagAbi], contractAddress)

      let result = await contract.methods
      // eslint-disable-next-line no-eval
      result = await eval(`result.${flagAbi.name}().call()`)

      return { status: 200, content: { result: result } }
    } catch (e) {
      return { status: 400, content: { message: e.message } }
    }
  }

  flashbotSendSignedTx = async (signedTx) => {
    try {
      const flashbotWeb3 = new Web3('https://rpc.flashbots.net')
      const tx = await flashbotWeb3.eth.sendSignedTransaction(signedTx)
      return {
        status: 200,
        content: { data: tx?.transactionHash || tx?.blockHash }
      }
    } catch (e) {
      return {
        status: 400,
        content: { message: e.message }
      }
    }
  }
}

export default MetaMask
