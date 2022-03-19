import axios from 'axios'

class Node {
  constructor(web3Endpoint) {
    this.web3Endpoint = web3Endpoint
  }

  //    balance = async (address) => {}

  checkContract = async (contractAddress) => {
    try {
      const rawAbiUrl = `http://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&format=raw`
      const responseRawAbi = await axios.get(rawAbiUrl)
      if (
        responseRawAbi.status === 200 &&
        responseRawAbi.data?.status !== '0'
      ) {
        const responseABI = responseRawAbi.data
        const mintedAbi = this.#getMintABI(responseABI)
        const flagsAbi = this.#getFlagABI(responseABI)
        // alert(`mint ABI => \n  ${mintedAbi} \n Flags Abi => \n ${flagsAbi}  `)
        return {
          mintAbi: mintedAbi,
          flagAbi: flagsAbi
        }
      }
      // alert('can not find your Contract')
      return { error: 'can not find your Contract' }
    } catch (e) {
      console.log(e)
      return { error: 'can not find your Contract' }
    }
  }

  #getFlagABI = (abi) => {
    try {
      const CONTINUE_FILTER = [
        'private',
        'access',
        'give',
        'reve',
        'white',
        'renounce',
        'list',
        'presale',
        'pause'
      ]

      let DEFAULT_FLAG_FUNCTION = ''
      // const PERHAPS_FLAG_FUNCTION = []

      for (let i = 0; i < abi.length; i++) {
        try {
          if (
            abi[i].inputs.length < 1 &&
            abi[i].outputs[0].internalType === 'bool' &&
            abi[i].outputs[0].name === '' &&
            abi[i].outputs[0].type === 'bool' &&
            abi[i].stateMutability === 'view'
          ) {
            if (String(abi[i].name).toLowerCase().includes(CONTINUE_FILTER)) {
              continue
            } else DEFAULT_FLAG_FUNCTION = abi[i]
          }
        } catch (e) {
          continue
        }
      }
      return {
        defaultFlagFunction: DEFAULT_FLAG_FUNCTION,
        allFlagFunctions: abi
      }
    } catch (e) {
      console.log(e)
    }
  }

  #getMintABI = (abi) => {
    try {
      const CONTINUE_FILTER = [
        'presale',
        'renounce',
        'early',
        'allowlist',
        'white'
      ]

      const RETURN_FILTER = ['mint', 'purc']

      const PERHAPS_MINT_FUNCTION = []
      let DEFAULT_MINT_FUNCTION = ''

      for (let i = 0; i < abi.length; i++) {
        try {
          if (
            abi[i].inputs[0].internalType === 'uint256' &&
            abi[i].inputs[0].type === 'uint256' &&
            abi[i].outputs.length <= 2 &&
            abi[i].stateMutability === 'payable' &&
            abi[i].type === 'function'
          ) {
            if (String(abi[i].name).toLowerCase().includes(CONTINUE_FILTER)) {
              continue
            } else if (
              String(abi[i].name).toLowerCase().includes(RETURN_FILTER) &&
              abi[i].inputs.length === 1
            )
              DEFAULT_MINT_FUNCTION = abi[i]
            else {
              PERHAPS_MINT_FUNCTION.push(abi[i])
            }
          }
        } catch (e) {
          continue
        }
      }
      return {
        defaultMintFunction: DEFAULT_MINT_FUNCTION,
        allMintFunctions: abi
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default Node
