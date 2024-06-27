'use strict'

const { ethers } = require('ethers')

require('dotenv').config()

const BaseContract = require('./BaseContract.js')

class ExamContract extends BaseContract {
  async createExamContract() {
    const examFactoryAddress = process.env.EXAM_ADDRESS_CONTRACT
    
    return this.createContract({
      contractAddress: examFactoryAddress,
      contractABI: this.generateContractABI({ fileName: 'Exam.json'}),
      wallet: this.wallet,
    })
  }

  async getExam() {
    const examFactoryContract = await this.createExamContract()


    const title = await examFactoryContract.title()
    const description = await examFactoryContract.description()
    const submitStartTime = await examFactoryContract.submitStartTime()
    const submitEndTime = await examFactoryContract.submitEndTime()
    const passScore = await examFactoryContract.passScore()
    
    console.log(title)
    console.log(description)
    console.log(submitStartTime)
    console.log(submitEndTime)
    console.log(passScore)
    
    return {
        title,
        description,
        submitStartTime,
        submitEndTime,
        passScore,
    }
  }
}

// module.exports = ExamFactoryContract

const test = ExamContract.create()
test.getExam()
