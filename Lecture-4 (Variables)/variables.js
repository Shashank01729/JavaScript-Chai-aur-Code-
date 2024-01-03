const account_id=12345
let account_email="shashank@gmail.com"
var account_password="12345"
/* Don't use var, issue in block scope and functional scope */
let account_state;  // undefined

account_city="Lucknow"

// account_id=2
// Will raise error
console.log(account_id);

account_email="muskan@gmail.com"
account_password="67890"
account_city="Delhi"
console.table([account_id,account_email,account_password,account_city,account_state])
// Will return output in the tabular structure