// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

const { describe, it } = require('mocha')
const { expect } = require('chai')
const TextProcessorFluentAPI = require('../src/textProcessorFluentAPI')
const mock = require('./mock/valid')
const mockExpected = require('./mock/validExpected')

describe('TextProcessorAPI', () => {


  it('#build', () => {
    const result = new TextProcessorFluentAPI(mock).build()

    expect(result).to.be.deep.equal(mock)
  })
  
  it('#extractCSVData', () => {
    const result = new TextProcessorFluentAPI(mock)
      .extractCSVData()
      .build()

    expect(result).to.be.deep.equal(mockExpected)
  })
})