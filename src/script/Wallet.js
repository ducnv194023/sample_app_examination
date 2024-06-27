'use strict'

require('dotenv').config()

const { ethers } = require('ethers')

const Provider = require('./Provider.js')

class Wallet {
  static create ({
    provider = Provider.create(),
  } = {}) {
    return this.createDefaultWallet({
      provider
    }) 
  }

  static createDefaultWallet ({
    provider,
  }) {
    return new ethers.Wallet(
      process.env.METAMASK_PRIVATE_KEY,
      provider
    )
  }
}

module.exports = Wallet

