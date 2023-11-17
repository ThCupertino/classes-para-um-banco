const App = require("./App")

App.createUser("rcupertino77@gmail.com", 'Thiago Cupertino')
App.createUser("rcupertino45@gmail.com", 'Rosa Cupertino')
App.createUser("izabellaOli09@gmail.com", 'Izabella Oliveira')

App.deposit('rcupertino77@gmail.com', 100)

App.transfer('rcupertino77@gmail.com', 'izabellaOli09@gmail.com', 20)

App.changeLoanFee(10)

App.loan('rcupertino45@gmail.com', 2000, 24)

console.log(App.findUser('rcupertino77@gmail.com'))

console.log(App.findUser('rcupertino77@gmail.com').account)

console.log(App.findUser('rcupertino45@gmail.com'))


console.log(App.findUser('rcupertino45@gmail.com').account)

console.log(App.findUser('rcupertino45@gmail.com').account.loans[0].installments)

console.log(App.findUser('izabellaOli09@gmail.com'))

console.log(App.findUser('izabellaOli09@gmail.com').account)

