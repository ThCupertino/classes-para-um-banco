const Installment = require("./Installment")

module.exports = class Loan {

  static #fee = 1.05
  
  static get fee () {
    return this.#fee
  }

  static set fee (percentage) {
    Loan.#fee = 1 + (percentage / 100)
  }

  constructor(value, installments) {
    this.value = value
    this.installments = []
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installment( (value * Loan.#fee) / installments, i) )
    }
    this.createdAt = new Date()
  }

}