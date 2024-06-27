'use strict'

const { ethers } = require('ethers')

require('dotenv').config()

const BaseContract = require('./BaseContract.js')

class ExamFactoryContract extends BaseContract {
  async createFactoryContract() {
    const examFactoryAddress = process.env.EXAM_FACTORY_ADDRESS_CONTRACT
    
    return this.createContract({
      contractAddress: examFactoryAddress,
      contractABI: this.generateContractABI({ fileName: 'ExamFactory.json'}),
      wallet: this.wallet,
    })
  }

  async createExam() {
    const examFactoryContract = await this.createFactoryContract()

    const params = {
      title: 'test_title',
      description: 'test_description',
      submitStartTime: new Date().getTime(),
      submitEndTime: new Date().getTime() + 1*60*60,
      passScore: 10,
    }
    const exam = await examFactoryContract.createExam(
      params.title,
      params.description,
      params.submitStartTime,
      params.submitEndTime,
      params.passScore
    )
    
    console.log(exam)
    console.log('exam')
  }
}

// module.exports = ExamFactoryContract

const test = ExamFactoryContract.create()
test.createExam()
