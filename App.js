const Deposit = require("./entitites/Deposit")
const Loan = require("./entitites/Loan")
const Transfer = require("./entitites/Transfer")
const User = require("./entitites/User")

module.exports = class App {
  static #users = []

  static findUser(email) {
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }

  static createUser (email, fullname) {
    const userExist = App.findUser(email)
    if (!userExist) {
      this.#users.push(new User(email, fullname))
    }
  }

  static deposit (email, value) {
    const user = App.findUser(email)
    if (user) {
      const newDeposit = new Deposit(value)
      user.account.newDeposit(newDeposit)
    }    
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail)
    const toUser = App.findUser(toUserEmail)
    if(fromUser && toUser) {
        const newTransfer = new Transfer(fromUser, toUser, value)
        fromUser.account.newTransfer(newTransfer)
        toUser.account.newTransfer(newTransfer)
    }
  }

  static loan(email, value, numberOfInstallment) {
    const user = App.findUser(email)
    if (user) {
      const newLoan = new Loan(value, numberOfInstallment)
      user.account.newLoan(newLoan)
    }
  }

  static changeLoanFee (newFeePercentage) {
    Loan.fee = newFeePercentage
  }

}