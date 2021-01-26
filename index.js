var customerName = "bob";
const leastFavoriteCustomer = "jill";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  return (bestCustomer = "not bob");
}

function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob";
}
