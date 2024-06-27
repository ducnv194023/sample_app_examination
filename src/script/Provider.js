'use strict'

require('dotenv').config()

const { ethers } = require('ethers')

class Provider {
  static create () {
    return this.createDefaultProvider()
  }

  static createDefaultProvider () {
    return new ethers.JsonRpcProvider(this.infuraUrl)
  }

  static get infuraUrl () {
    return `${this.infuraBaseUrl}${this.infuraApiKey}` 
  }

  static get infuraBaseUrl () {
    return process.env.INFURA_BASE_URL
  }

  static get infuraApiKey () {
    return process.env.INFURA_API_KEY
  }
}

module.exports = Provider

