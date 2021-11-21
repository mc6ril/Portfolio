webpackHotUpdate("main",{

/***/ "./src/API/BocolocoFactApi.js":
/*!************************************!*\
  !*** ./src/API/BocolocoFactApi.js ***!
  \************************************/
/*! exports provided: getOrdernbByClient, getNewClientsByMonth, getNewVsRecClientsByMonth, getOrderByMonth, getOrderByDay, getOrderByMonthB2C, getOrderByMonthB2B, getOrderByMonthByDeliveryMode, getProductSoldByTypeByMonth, getLotOfOrderClient, getTransvasementTime, getPrepTime, getBestPrepareProducts, getBestExternalProducts, login, getCustomerIdByEmail, getCustomerIdByName, getCustomerIdByOrder, getOrdersByCustomerId, getCustomerInfos, getHotClients, getCountContainerFollow, getContainerSoldByCustomerId, updateClientContainers, getCrmStatusByCustomerId, updateStatusCrm, updateStatusCrmWithId, getCustomerReturnHistoryByID, updateReturnStatusCrm, updateMultiStatusCrm, getAllPurchaseFromCustomer, getProductHistoryByID, getProductStockByID, getProductsMatchByName, getSuppliersMatchByName, getDistribMatchByName, getOverviewSav, getCustomerReturnStatus, getCustomerMailingStatus, getCustomerMailingDates, getGlassJarByMonthBySize, getDataByMonthByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdernbByClient", function() { return getOrdernbByClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewClientsByMonth", function() { return getNewClientsByMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewVsRecClientsByMonth", function() { return getNewVsRecClientsByMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderByMonth", function() { return getOrderByMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderByDay", function() { return getOrderByDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderByMonthB2C", function() { return getOrderByMonthB2C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderByMonthB2B", function() { return getOrderByMonthB2B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderByMonthByDeliveryMode", function() { return getOrderByMonthByDeliveryMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSoldByTypeByMonth", function() { return getProductSoldByTypeByMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLotOfOrderClient", function() { return getLotOfOrderClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransvasementTime", function() { return getTransvasementTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrepTime", function() { return getPrepTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBestPrepareProducts", function() { return getBestPrepareProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBestExternalProducts", function() { return getBestExternalProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerIdByEmail", function() { return getCustomerIdByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerIdByName", function() { return getCustomerIdByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerIdByOrder", function() { return getCustomerIdByOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersByCustomerId", function() { return getOrdersByCustomerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerInfos", function() { return getCustomerInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotClients", function() { return getHotClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountContainerFollow", function() { return getCountContainerFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerSoldByCustomerId", function() { return getContainerSoldByCustomerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClientContainers", function() { return updateClientContainers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCrmStatusByCustomerId", function() { return getCrmStatusByCustomerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatusCrm", function() { return updateStatusCrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatusCrmWithId", function() { return updateStatusCrmWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerReturnHistoryByID", function() { return getCustomerReturnHistoryByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReturnStatusCrm", function() { return updateReturnStatusCrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMultiStatusCrm", function() { return updateMultiStatusCrm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPurchaseFromCustomer", function() { return getAllPurchaseFromCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductHistoryByID", function() { return getProductHistoryByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductStockByID", function() { return getProductStockByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsMatchByName", function() { return getProductsMatchByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuppliersMatchByName", function() { return getSuppliersMatchByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistribMatchByName", function() { return getDistribMatchByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverviewSav", function() { return getOverviewSav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerReturnStatus", function() { return getCustomerReturnStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerMailingStatus", function() { return getCustomerMailingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerMailingDates", function() { return getCustomerMailingDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlassJarByMonthBySize", function() { return getGlassJarByMonthBySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataByMonthByType", function() { return getDataByMonthByType; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// const BOCOLOCO_FACT_IP = 'www.bocotech.fr:3001';
// const BOCOLOCO_FACT_IP = '89.ip-51-77-147.eu:3001';
// const BOCOLOCO_BASE_URL = 'http://localhost:3001';
// const BOCOLOCO_BASE_URL = 'http://' + BOCOLOCO_FACT_IP;
const BOCOLOCO_BOCOTECH_BASE_URL = "http://89.ip-51-77-147.eu";
const BOCOLOCO_BASE_URL = "http://localhost:3001";
const BOCOLOCO_AUTH = '/auth';
const BOCOLOCO_CLIENT = '/client';
const BOCOLOCO_CLIENT_ORDERNBBYCLIENT = '/ordernbbyclient';
const BOCOLOCO_CLIENT_NEWCLIENTSBYMONTH = '/newclientsbymonth';
const BOCOLOCO_CLIENT_NEWCLIENTSVSREC = '/newclientsvsrec';
const BOCOLOCO_CLIENT_LOTOFORDER = '/lotoforder';
const BOCOLOCO_ORDER = '/order';
const BOCOLOCO_ORDER_ORDERBYMONTH = '/orderbymonth';
const BOCOLOCO_ORDER_ORDERBYDAY = '/orderbyday';
const BOCOLOCO_ORDER_ORDERBYDELIVERYMODE = '/orderbymonthbydeliverymode';
const BOCOLOCO_ORDER_ORDERBYMONTHB2C = '/orderb2cbymonth';
const BOCOLOCO_ORDER_ORDERBYMONTHB2B = '/orderb2bbymonth';
const BOCOLOCO_LOGISTIC = '/logistic';
const BOCOLOCO_LOGISTIC_PRODUCTSOLDBYTYPE = '/productsoldbytypebymonth';
const BOCOLOCO_LOGISTIC_TRANSVASEMENTTIMEBYPRODUCT = '/transvasementtimebyproduct';
const BOCOLOCO_LOGISTIC_PREPTIMEBYORDER = '/preptimebyorder';
const BOCOLOCO_SOURCING = '/sourcing';
const BOCOLOCO_SOURCING_BESTPREPAREPRODUCTS = '/bestprepareproducts';
const BOCOLOCO_SOURCING_BESTEXTERNALPRODUCTS = '/bestexternalproducts';
const BOCOLOCO_SOURCINGSEARCH = '/sourcingsearch';
const BOCOLOCO_SOURCINGSEARCH_PRODUCTSMATCH = '/productsmatch';
const BOCOLOCO_SOURCINGSEARCH_SUPPLIERSMATCH = '/suppliersmatch';
const BOCOLOCO_SOURCINGSEARCH_DISTRIBMATCH = '/distribmatch';
const BOCOLOCO_SOURCINGSEARCH_PRODUCTHISTORY = '/producthistory';
const BOCOLOCO_SOURCINGSEARCH_PRODUCTSTOCK = '/productstock';
const BOCOLOCO_SAV = '/sav';
const BOCOLOCO_SAV_GETIDBYEMAIL = '/getidByEmail';
const BOCOLOCO_SAV_GETIDBYNAME = '/getidbyname';
const BOCOLOCO_SAV_GETIDBYORDERNB = '/getidbyorder';
const BOCOLOCO_SAV_GETCUSTOMERINFOS = '/getcustomerinfos';
const BOCOLOCO_SAV_GETORDERS = '/getorders';
const BOCOLOCO_SAV_GETHOTCLIENTS = '/gethotclients';
const BOCOLOCO_SAV_GETSTATUSCRM = '/getstatuscrm';
const BOCOLOCO_SAV_UPDATESTATUSCRM = '/updatestatuscrm';
const BOCOLOCO_SAV_UPDATESTATUSCRMBYID = '/updatecrmstatusfromid';
const BOCOLOCO_SAV_UPDATERETURNSTATUSCRM = '/updatereturnstatuscrm';
const BOCOLOCO_SAV_UPDATEMULTISTATUSCRM = '/updatemultistatuscrm';
const BOCOLOCO_SAV_UPDATECONTAINERS = '/client/update/containers';
const BOCOLOCO_SAV_GETALLPURCHASEFROMCUSTOMER = '/client/getpurchase';
const BOCOLOCO_SAV_RETURNHISTORY = '/getreturnhistory';
const BOCOLOCO_SAVANALYTICS = '/savanalytics';
const BOCOLOCO_SAVANALYTICS_GETOVERVIEW = '/getoverview';
const BOCOLOCO_SAVANALYTICS_RETURNSTATUS = '/getreturnstatus';
const BOCOLOCO_SAVANALYTICS_MAILINGSTATUS = '/getmailingstatus';
const BOCOLOCO_SAVANALYTICS_MAILINGSDATES = '/getmailingsdates'; // GlassJar URL

const BOCOLOCO_GLASSJAR = '/glassjar';
const BOCOLOCO_GLASSJAR_GETBYMONTHBYSIZE = '/orderbymonthbysize';
const BOCOLOCO_GLASSJAR_GETDATABYMONTHBYTYPE = '/orderbymonthbytype';
function getOrdernbByClient() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_CLIENT + BOCOLOCO_CLIENT_ORDERNBBYCLIENT;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getNewClientsByMonth() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_CLIENT + BOCOLOCO_CLIENT_NEWCLIENTSBYMONTH;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getNewVsRecClientsByMonth() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_CLIENT + BOCOLOCO_CLIENT_NEWCLIENTSVSREC;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getOrderByMonth() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_ORDER + BOCOLOCO_ORDER_ORDERBYMONTH;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getOrderByDay() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_ORDER + BOCOLOCO_ORDER_ORDERBYDAY;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getOrderByMonthB2C() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_ORDER + BOCOLOCO_ORDER_ORDERBYMONTHB2C;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getOrderByMonthB2B() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_ORDER + BOCOLOCO_ORDER_ORDERBYMONTHB2B;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getOrderByMonthByDeliveryMode(month) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_ORDER + BOCOLOCO_ORDER_ORDERBYDELIVERYMODE;
  const url_args = '?month=' + month;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getProductSoldByTypeByMonth(month) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_LOGISTIC + BOCOLOCO_LOGISTIC_PRODUCTSOLDBYTYPE;
  const url_args = '?month=' + month;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getLotOfOrderClient() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_CLIENT + BOCOLOCO_CLIENT_LOTOFORDER;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getTransvasementTime() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_LOGISTIC + BOCOLOCO_LOGISTIC_TRANSVASEMENTTIMEBYPRODUCT;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getPrepTime() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_LOGISTIC + BOCOLOCO_LOGISTIC_PREPTIMEBYORDER;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getBestPrepareProducts(month) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SOURCING + BOCOLOCO_SOURCING_BESTPREPAREPRODUCTS;
  const url_args = '?month=' + month;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getBestExternalProducts(month) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SOURCING + BOCOLOCO_SOURCING_BESTEXTERNALPRODUCTS;
  const url_args = '?month=' + month;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function login(user, pwd) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_AUTH;
  const url = encodeURI(url_base);
  const formData = {
    username: user,
    password: pwd
  };
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => response.json()).catch(error => {
    console.log(error);
    console.log('ERROR LOGIN');
    throw error;
  });
}
function getCustomerIdByEmail(email) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETIDBYEMAIL;
  const url_args = '?email=' + email;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getCustomerIdByName(customer_first_name, customer_last_name) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETIDBYNAME;
  const url_args = '?customer_first_name=' + customer_first_name + '&customer_last_name=' + customer_last_name;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getCustomerIdByOrder(order_number) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETIDBYORDERNB;
  const url_args = '?order=' + order_number;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getOrdersByCustomerId(customerId) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETORDERS;
  const url_args = '?customerid=' + customerId;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getCustomerInfos(id) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETCUSTOMERINFOS;
  const url_args = '?id=' + id;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getHotClients() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETHOTCLIENTS;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getCountContainerFollow(customerId) {
  var url_base = BOCOLOCO_BOCOTECH_BASE_URL + '/api/site/containerfollow/getsplittedcountbycustomerid?customer_id=';
  var url_args = customerId;
  var url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getContainerSoldByCustomerId(customerId) {
  var url_base = BOCOLOCO_BOCOTECH_BASE_URL + '/api/site/containersold/getcountbycustomerid';
  var url_args = '?customer_id=' + customerId;
  var url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function updateClientContainers(formData) {
  var url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_UPDATECONTAINERS;
  var url = encodeURI(url_base);
  console.log(url);
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => response.json()).catch(error => {
    console.log('ERROR UPDATE CRM');
    console.log(error);
    throw error;
  });
} // SAV

function getCrmStatusByCustomerId(customerId) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETSTATUSCRM;
  var url_args = '?customerid=' + customerId;
  var url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function updateStatusCrm(formData, type, thirdparty_id, weight) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_UPDATESTATUSCRM;
  const url_args = '?type=' + type + '&thirdparty_id=' + thirdparty_id + '&weight=' + weight;
  const url = encodeURI(url_base + url_args);
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => response.json()).catch(error => {
    console.log('ERROR UPDATE CRM');
    console.log(error);
    throw error;
  });
}
function updateStatusCrmWithId(formData, type) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_UPDATESTATUSCRMBYID;
  const url_args = `?type=${type}`;
  const url = encodeURI(url_base + url_args);
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => response.json()).catch(error => {
    console.log('ERROR UPDATE CRM RETURN STATUS');
    console.log(error);
    throw error;
  });
}
function getCustomerReturnHistoryByID(customerid) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_RETURNHISTORY;
  const url_args = '?customerid=' + customerid;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function updateReturnStatusCrm(formData) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_UPDATERETURNSTATUSCRM;
  const url = encodeURI(url_base);
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => response.json()).catch(error => {
    console.log('ERROR UPDATE CRM RETURN STATUS');
    console.log(error);
    throw error;
  });
}
function updateMultiStatusCrm(formData) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_UPDATEMULTISTATUSCRM;
  const url = encodeURI(url_base);
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(response => response.json()).catch(error => {
    console.log('ERROR UPDATE MULTI CRM');
    console.log(error);
    throw error;
  });
}
function getAllPurchaseFromCustomer(customerid) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAV + BOCOLOCO_SAV_GETALLPURCHASEFROMCUSTOMER;
  const url_args = '?customerid=' + customerid;
  const url = encodeURI(url_base + url_args);
  console.log(url);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
} // sourcing search

function getProductHistoryByID(id) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SOURCINGSEARCH + BOCOLOCO_SOURCINGSEARCH_PRODUCTHISTORY;
  const url_args = '?id=' + id;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getProductStockByID(id) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SOURCINGSEARCH + BOCOLOCO_SOURCINGSEARCH_PRODUCTSTOCK;
  const url_args = '?id=' + id;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getProductsMatchByName(name) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SOURCINGSEARCH + BOCOLOCO_SOURCINGSEARCH_PRODUCTSMATCH;
  const url_args = '?name=' + name;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getSuppliersMatchByName(name) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SOURCINGSEARCH + BOCOLOCO_SOURCINGSEARCH_SUPPLIERSMATCH;
  const url_args = '?name=' + name;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getDistribMatchByName(name) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SOURCINGSEARCH + BOCOLOCO_SOURCINGSEARCH_DISTRIBMATCH;
  const url_args = '?name=' + name;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
} // SAV analytics

function getOverviewSav() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAVANALYTICS + BOCOLOCO_SAVANALYTICS_GETOVERVIEW;
  const url = encodeURI(url_base);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getCustomerReturnStatus() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAVANALYTICS + BOCOLOCO_SAVANALYTICS_RETURNSTATUS;
  const url = encodeURI(url_base);
  return fetch(url).then(response => {
    console.log(response);
    return response.json();
  }).catch(error => {
    throw error;
  });
}
function getCustomerMailingStatus() {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAVANALYTICS + BOCOLOCO_SAVANALYTICS_MAILINGSTATUS;
  const url = encodeURI(url_base);
  return fetch(url).then(response => {
    console.log(response);
    return response.json();
  }).catch(error => {
    throw error;
  });
}
function getCustomerMailingDates(num) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_SAVANALYTICS + BOCOLOCO_SAVANALYTICS_MAILINGSDATES;
  const url_args = '?num=' + num;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => {
    console.log(response);
    return response.json();
  }).catch(error => {
    throw error;
  });
} // GLASSJAR API

function getGlassJarByMonthBySize(size) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_GLASSJAR + BOCOLOCO_GLASSJAR_GETBYMONTHBYSIZE;
  const url_args = '?size=' + size;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}
function getDataByMonthByType(type) {
  const url_base = BOCOLOCO_BASE_URL + BOCOLOCO_GLASSJAR + BOCOLOCO_GLASSJAR_GETDATABYMONTHBYTYPE;
  const url_args = '?type=' + type;
  const url = encodeURI(url_base + url_args);
  return fetch(url).then(response => response.json()).catch(error => {
    throw error;
  });
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.ffb9776e6cd418a288f3.hot-update.js.map