const { describe, it } = require('mocha')
const { expect } = require('chai')
const { InvalidRegexError, evaluateRegex} = require('../src/util')

describe('Util', () => {
  it('#evaluateRegex should throw an error using an unsafe regex', () => {
    const mockUnsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/
    expect(() => evaluateRegex(mockUnsafeRegex)).to.throw(InvalidRegexError, `This ${mockUnsafeRegex} is unsafe dude!`)
  })

  it('#evaluateRegex should not throw an error using a safe regex', () => {
    const safeRegex = /^([a-z])$/
    expect(() => evaluateRegex(safeRegex)).to.not.throw
    expect(evaluateRegex(safeRegex)).to.be.ok
  })
})