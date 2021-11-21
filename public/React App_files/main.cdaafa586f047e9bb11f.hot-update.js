webpackHotUpdate("main",{

/***/ "./src/containers/SavClient.js":
/*!*************************************!*\
  !*** ./src/containers/SavClient.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../API/BocolocoFactApi */ "./src/API/BocolocoFactApi.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Components_SAV_SavSearchingBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/SAV/SavSearchingBar */ "./src/Components/SAV/SavSearchingBar.js");
/* harmony import */ var _Components_SAV_OrderData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/SAV/OrderData */ "./src/Components/SAV/OrderData.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Components_SAV_SavModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/SAV/SavModal */ "./src/Components/SAV/SavModal.js");
/* harmony import */ var _Components_searchContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/searchContext */ "./src/Components/searchContext.js");
/* harmony import */ var _Components_SAV_InvoiceModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/SAV/InvoiceModal */ "./src/Components/SAV/InvoiceModal.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/cyrillesot/All-my-code/bocoloco/bocoloco_chart/bocoloco_chart/Front/src/containers/SavClient.js",
    _s = __webpack_require__.$Refresh$.signature();
















function SavClient() {
  _s();

  // Important constants
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useParams"])();
  const {
    isModalOpen,
    toggleOpenModal,
    isInvoiceOpen,
    toggleOpenInvoice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Components_searchContext__WEBPACK_IMPORTED_MODULE_9__["Context"]);
  const [errorMessage, setErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // Visible constants

  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isContainerVisible, setIsContainerVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [onLoad, setOnLoad] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Data constants

  const BOX_WEIGHT = 300;
  const [crmStatus, setCrmStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [clientData, setClientData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [orders, setOrders] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [consigneData, setConsigneData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [newConsigneData, setNewConsigneData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [totalConsigne, setTotalConsigne] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [returnData, setReturnData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [purchaseData, setPurchaseData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [weightToSend, setWeightToSend] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [selectWeightArray, setSelectWeightArray] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [emailInvoice, setEmailInvoice] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}); // Search constants

  const [clientSearchEmail, setClientSearchEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [clientSearchName, setClientSearchName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [clientSearchOrder, setClientSearchOrder] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const getCountBySize = (size, countFollow) => {
    return countFollow && countFollow.filter(a => a.size === size).length > 0 ? countFollow.filter(a => a.size === size)[0].count : '0';
  };

  const getCountSoldBySize = (size, countSold) => {
    return countSold && countSold.filter(a => a.size === size).length > 0 ? countSold.filter(a => a.size === size)[0].count : '0';
  };

  const getFinalCountFollow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((size, countFollow, countSold) => {
    const followCount = parseInt(getCountBySize(size, countFollow));
    const soldCount = parseInt(getCountSoldBySize(size, countSold));
    const finalCount = followCount - soldCount;

    if (finalCount >= 0) {
      return finalCount;
    } else {
      return '0';
    }
  }, []);

  const _getCountFollow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(customerId => {
    let countFollow;
    let countSold;
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getCountContainerFollow"])(customerId).then(data => {
      console.log('container follow : ==>', data);
      return countFollow = data.splittedcount;
    }).then(() => Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getContainerSoldByCustomerId"])(customerId).then(data => {
      console.log('container sold ==>', data);
      return countSold = data.containersfollowcount;
    })).then(() => {
      const tmpConsigneData = [{
        size: 'XXS',
        weight: 150,
        count: getFinalCountFollow('XXS', countFollow, countSold)
      }, {
        size: 'XS',
        weight: 150,
        count: getFinalCountFollow('XS', countFollow, countSold)
      }, {
        size: 'S',
        weight: 300,
        count: getFinalCountFollow('S', countFollow, countSold)
      }, {
        size: 'M',
        weight: 350,
        count: getFinalCountFollow('M', countFollow, countSold)
      }, {
        size: 'L',
        weight: 450,
        count: getFinalCountFollow('L', countFollow, countSold)
      }, {
        size: 'XL',
        weight: 600,
        count: getFinalCountFollow('XL', countFollow, countSold)
      }];
      setConsigneData(tmpConsigneData);

      const reducer = (acc, obj) => {
        return acc + obj.weight * obj.count;
      };

      const total = tmpConsigneData.reduce(reducer, 0);
      const newArray = [];

      for (let i = 0; i < total / 100; i++) {
        if (i < total) {
          newArray.push(i * 100 + BOX_WEIGHT);
        }
      }

      setSelectWeightArray(newArray);
      setWeightToSend(total + BOX_WEIGHT);
      setTotalConsigne(total);
    }).then(() => Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getCustomerReturnHistoryByID"])(customerId).then(data => {
      let data_reassorted = [];
      let idx_start = 0;
      let one_date = 1;

      for (let i = 1; i < data.length; i++) {
        if (data[i].dater !== data[i - 1].dater) {
          data_reassorted.push(data.slice(idx_start, i));
          idx_start = i;
          one_date = 0;
        }
      }

      if (one_date === 1 && data.length) {
        data_reassorted.push(data);
      }

      setReturnData(data_reassorted);
    }));
  }, [getFinalCountFollow]);

  const _getPurchaseInfos = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(customerId => {
    let countInvoicePurchase;
    let countOrderPurchase;
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getAllPurchaseFromCustomer"])(customerId).then(data => {
      console.log(data);
    }).catch(err => console.log(err));
  }, []);

  const _getInfosCrmByCustomerId = customerId => {
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getCrmStatusByCustomerId"])(customerId).then(data => {
      if (data.length > 0) {
        setCrmStatus(data[0]);
        console.log(data[0]);
        setIsLoading(false);
      } else {
        setErrorMessage('Pas de CRM pour ce client');
        setIsLoading(false);
      }
    }).catch(err => {
      setErrorMessage('Erreur serveur, impossible de récupérer les données CRM du client');
      setIsLoading(false);
    });
  };

  const _getClientInfosFromId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (id) {
      setIsLoading(true);
      Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getCustomerInfos"])(id).then(data => {
        if (data.customerId) {
          setClientData(data);
          const customerId = data.customerId;
          Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getOrdersByCustomerId"])(customerId).then(data => {
            if (data.length > 0) {
              setOrders(data);

              _getCountFollow(customerId);

              _getPurchaseInfos(customerId);
            } else {
              setOrders();
              setIsLoading(false);
              setErrorMessage('Aucune commande associé à ce client');
            }
          }).then(() => _getInfosCrmByCustomerId(customerId)).catch(err => {
            setOrders();
            setIsLoading(false);
            setErrorMessage('Erreur serveur, impossible de récupérer les données client');
          });
        } else {
          setIsLoading(false);
          setErrorMessage("Aucun client n'a été trouvé");
        }
      }).catch(e => {
        setIsLoading(false);
        setErrorMessage('Erreur serveur, impossible de récupérer les données client');
      });
    } else {
      setIsLoading(false);
    }
  }, [_getCountFollow, _getPurchaseInfos, id]);

  const _convertGramToKg = g => {
    if (g <= 300) {
      return;
    }

    const kg = g / 1000;
    return '(' + kg.toFixed(1) + 'Kg)';
  };

  const _updateMailingStatus = (customerId, invoiceId, return_status) => {
    const type = 'return_status_invoice';
    const newCrmStripeId = { ...crmStatus,
      stripe_customer_id: customerId,
      return_status: return_status,
      stripe_invoice_id: invoiceId
    };
    console.log('updateMailingStatus ==>', newCrmStripeId);
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["updateStatusCrmWithId"])(newCrmStripeId, type).then(data => {
      if (data.status === 'ok') {
        setCrmStatus(newCrmStripeId);
        console.log('newCrmStatus from updateMailingStatus ==> ', newCrmStripeId);
        console.log('crmStatus ==>', crmStatus);
      }
    }).catch(err => {
      console.log('erreur : _updateMailingStatus');
      return alert(err.message);
    });
  };

  const _addStripeIdToCustomer = (customerId, invoiceId) => {
    const type = 'stripe_id';
    const newCrmStripeId = { ...crmStatus,
      stripe_customer_id: customerId,
      return_status: _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_INVOICE_CREATED"],
      stripe_invoice_id: invoiceId
    };
    console.log('_addStripeIdToCustomer ==>', newCrmStripeId);
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["updateStatusCrmWithId"])(newCrmStripeId, type).then(data => {
      if (data.status === 'ok') {
        setCrmStatus(newCrmStripeId);
        console.log('newCrmStatus from _addStripeIdToCustomer ==>', newCrmStripeId);
        console.log('crmStatus ==>', crmStatus);
      }
    }).catch(err => {
      console.log('erreur : _addStripeIdToCustomer');
      return alert(err.message);
    });
  };

  const _addStripeUrlToCustomer = invoiceId => {
    const type = 'invoice_sent';
    const newCrmStripeId = { ...crmStatus,
      return_status: _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_INVOICE_SENT"],
      stripe_invoice_id: invoiceId
    };
    console.log('_addStripeUrlToCustomer ==>', newCrmStripeId);
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["updateStatusCrmWithId"])(newCrmStripeId, type).then(data => {
      if (data.status === 'ok') {
        setCrmStatus(newCrmStripeId);
        console.log('newCrmStatus from _addStripeUrlToCustomer ==>', newCrmStripeId);
        console.log('crmStatus ==>', crmStatus);
      }
    }).catch(err => {
      console.log('erreur : _addStripeUrlToCustomer');
      return alert(err.message);
    });
  };

  const _changeMailingStatus = newStatus => {
    const type = 'mailing_status';
    const newCrmStatus = { ...crmStatus,
      mailing_status: newStatus
    };
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["updateStatusCrm"])(newCrmStatus, type).then(data => {
      if (data.status === 'ok') {
        if (newStatus === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_1"]) {
          setCrmStatus({ ...newCrmStatus,
            mailing_date_1: data.dateu
          });
        } else if (newStatus === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_2"]) {
          setCrmStatus({ ...newCrmStatus,
            mailing_date_2: data.dateu
          });
        } else if (newStatus === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_3"]) {
          setCrmStatus({ ...newCrmStatus,
            mailing_date_3: data.dateu
          });
        } else {
          setCrmStatus(newCrmStatus);
        }
      }
    }).catch(err => console.log(err));
  };

  const _changeContainersStatus = async newStatus => {
    const type = 'containers_status';
    const firstIdOrder = orders[0].thirdparty_id;
    const newCrmStatus = { ...crmStatus,
      return_status: newStatus
    };
    await Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["updateStatusCrm"])(newCrmStatus, type, firstIdOrder, weightToSend).then(data => {
      if (data.status === 'ok') {
        if ((Math.sign(data.return_id) === 1 || data.return_id[0] !== '-') && data.return_label_path.length > 0) {
          setCrmStatus({ ...newCrmStatus,
            return_date: data.dateu,
            return_label_path: data.return_label_path,
            return_id: data.return_id
          });
          setOnLoad(true);
          window.open(data.return_label_path);
        } else {
          setCrmStatus({ ...newCrmStatus,
            return_label_path: '',
            return_status: 0,
            return_id: `erreur n° ${data.return_id}`
          });
        }
      }
    }).catch(err => console.log(err));
    setOnLoad(true);
  };

  const _downloadLabelPath = () => {
    window.open(crmStatus.return_label_path);
  };

  const _displayMailingDate = mailingDate => {
    if (moment__WEBPACK_IMPORTED_MODULE_2___default()(mailingDate) > moment__WEBPACK_IMPORTED_MODULE_2___default()('2020-07-01')) {
      return 'Relancé le ' + moment__WEBPACK_IMPORTED_MODULE_2___default()(mailingDate).format('DD/MM/YYYY à HH:mm');
    }
  };

  const _checkLastMailingStatus = () => {
    if (crmStatus.mailing_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_0"]) {
      return false;
    }

    const start = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    let end;

    if (crmStatus.mailing_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_1"]) {
      end = moment__WEBPACK_IMPORTED_MODULE_2___default()(crmStatus.mailing_date_1);
    } else if (crmStatus.mailing_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_2"]) {
      end = moment__WEBPACK_IMPORTED_MODULE_2___default()(crmStatus.mailing_date_2);
    } else if (crmStatus.mailing_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_3"]) {
      end = moment__WEBPACK_IMPORTED_MODULE_2___default()(crmStatus.mailing_date_3);
    } else {
      end = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    }

    const diff = Math.abs(start.diff(end, 'd'));

    if (diff > 0) {
      return false;
    } else {
      return true;
    }
  };

  const _displayButtonFollowClient = status => {
    let classNameFollow;
    let statusText;

    if (status === _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_NO_FOLLOW"]) {
      classNameFollow = 'sav-is-unfollow';
      statusText = 'Suivre ce client';
    } else {
      classNameFollow = 'sav-is-follow';
      statusText = 'Ne plus suivre ce client';
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
      onClick: e => status !== _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_NO_FOLLOW"] ? window.confirm('Ce client ne sera plus suivi et toutes ses données CRM vont être remises à 0, êtes vous sur ?') && _handleUnfollowClient(e) : _handleFollowClient(e),
      className: classNameFollow,
      children: statusText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 13
    }, this);
  };

  const _handleUnfollowClient = () => {
    const defaultDate = moment__WEBPACK_IMPORTED_MODULE_2___default()('1970-01-01 00:00:00').format('YYYY-MM-DD HH:mm:ss');
    const newCrmStatus = { ...crmStatus,
      return_status: _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_NO_FOLLOW"],
      mailing_status: _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_0"],
      return_id: '0',
      return_date: defaultDate,
      mailing_date_1: defaultDate,
      mailing_date_2: defaultDate,
      mailing_date_3: defaultDate,
      return_label_path: null
    };
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["updateReturnStatusCrm"])(newCrmStatus).then(data => {
      if (data.status === 'ok') {
        setCrmStatus(newCrmStatus);
      }
    }).catch(err => console.log(err));
  };

  const _handleFollowClient = () => {
    const defaultDate = moment__WEBPACK_IMPORTED_MODULE_2___default()('1970-01-01 00:00:00').format('YYYY-MM-DD HH:mm:ss');
    const newCrmStatus = { ...crmStatus,
      return_status: _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_NOTHING_TO_DO"],
      mailing_status: _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_0"],
      return_id: '0',
      return_date: defaultDate,
      mailing_date_1: defaultDate,
      mailing_date_2: defaultDate,
      mailing_date_3: defaultDate,
      return_label_path: null
    };
    Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["updateReturnStatusCrm"])(newCrmStatus).then(data => {
      if (data.status === 'ok') {
        setCrmStatus(newCrmStatus);
      }
    }).catch(err => console.log(err));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (crmStatus) {
      setEmailInvoice(`https://dashboard.stripe.com/search?query=${crmStatus.customer_email}`);
    }
  }, [crmStatus]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (id !== 'email' && id !== 'name' && id !== 'ordernb') {
      _getClientInfosFromId();
    }
  }, [_getClientInfosFromId, id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (onLoad) {
      console.log('je recharge');
      Object(_API_BocolocoFactApi__WEBPACK_IMPORTED_MODULE_1__["getCustomerInfos"])(crmStatus.customer_id);
      setOnLoad(false);
    }
  }, [onLoad, crmStatus]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("main", {
    className: "sav-client wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Components_SAV_SavSearchingBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      clientSearchEmail: clientSearchEmail,
      setClientSearchEmail: setClientSearchEmail,
      clientSearchName: clientSearchName,
      setClientSearchName: setClientSearchName,
      clientSearchOrder: clientSearchOrder,
      setClientSearchOrder: setClientSearchOrder,
      setClientData: setClientData,
      clientData: clientData,
      isLoading: isLoading,
      Loader: react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a,
      errorMessage: errorMessage,
      setErrorMessage: setErrorMessage,
      setOrders: setOrders,
      setIsLoading: setIsLoading,
      setConsigneData: setConsigneData,
      _getCountFollow: _getCountFollow,
      _getInfosCrmByCustomerId: _getInfosCrmByCustomerId,
      setPurchaseData: setPurchaseData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 13
    }, this), isModalOpen && consigneData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Components_SAV_SavModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      crmStatus: crmStatus,
      toggleOpenModal: toggleOpenModal,
      toggleOpenInvoice: toggleOpenInvoice,
      consigneData: consigneData,
      setNewConsigneData: setNewConsigneData,
      newConsigneData: newConsigneData,
      clientData: clientData,
      _addStripeIdToCustomer: _addStripeIdToCustomer,
      _updateMailingStatus: _updateMailingStatus
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 17
    }, this), isInvoiceOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Components_SAV_InvoiceModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      toggleOpenInvoice: toggleOpenInvoice,
      crmStatus: crmStatus,
      _addStripeUrlToCustomer: _addStripeUrlToCustomer,
      _updateMailingStatus: _updateMailingStatus,
      newConsigneData: newConsigneData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 17
    }, this), orders && consigneData && clientData && returnData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
      children: [' ', crmStatus.id === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
        className: "error-data",
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: ["Mise \xE0 jour des donn\xE9es impossible ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 64
        }, this), "Fiche CRM inexistante"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("section", {
        className: "client-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "left-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "shopify",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
              children: "Donn\xE9es client"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 542,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
              href: `https://alexis-dusanter.myshopify.com/admin/customers/${clientData.id}`,
              rel: "noreferrer",
              target: "_blank",
              children: "GO TO SHOPIFY"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 543,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 541,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "client-data",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: ["Nom : ", clientData.first_name, " ", clientData.last_name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 550,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: ["Email : ", clientData.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 553,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: ["Tel : ", clientData.phone]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 554,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: ["Nb de commande : ", clientData.orders_count]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 555,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 549,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: "Adresse principale :"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 558,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: clientData.default_address.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 559,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: clientData.default_address.address1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 560,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: [clientData.default_address.zip, ", ", clientData.default_address.city, ", ", clientData.default_address.country]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 561,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: clientData.default_address.phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 564,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 557,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 548,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "client-data",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h5", {
                children: ["Client GID : ", clientData.customerId]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: ["Client Id : ", atob(clientData.customerId)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 570,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
            children: ["Les contenants consign\xE9s chez le client ", _convertGramToKg(totalConsigne + BOX_WEIGHT), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "follow-container",
            children: consigneData.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              className: "follow-subcontainer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: item.size
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 577,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: item.count
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 578,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                children: [item.count * item.weight, "g"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 579,
                columnNumber: 41
              }, this)]
            }, item.size, true, {
              fileName: _jsxFileName,
              lineNumber: 576,
              columnNumber: 37
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "return-header",
            onClick: () => setIsContainerVisible(!isContainerVisible),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
              children: ["Les ", returnData.length, " retours de contenant "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 584,
              columnNumber: 33
            }, this), isContainerVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegArrowAltCircleUp"], {
              size: 30,
              color: "#07ac96",
              onClick: () => setIsContainerVisible(!isContainerVisible)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 587,
              columnNumber: 37
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegArrowAltCircleDown"], {
              size: 30,
              color: "#07ac96",
              onClick: () => setIsContainerVisible(!isContainerVisible)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 589,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 29
          }, this), isContainerVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "return-container",
            children: returnData.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("ul", {
              className: "return-subcontainer",
              style: {
                color: crmStatus.return_date !== '1970-01-01 00:00:00' ? item[0].dater > crmStatus.return_date ? 'orange' : 'black' : 'black'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                className: "return-item",
                children: item[0].dater
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 607,
                columnNumber: 45
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                className: "return-item",
                children: item.map(subitem => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                  className: "return-subitem",
                  children: subitem.id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 610,
                  columnNumber: 53
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 608,
                columnNumber: 45
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
                className: "return-item",
                children: item.map(subitem => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
                  className: "return-subitem",
                  children: subitem.size
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 615,
                  columnNumber: 53
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 613,
                columnNumber: 45
              }, this)]
            }, item[0].id, true, {
              fileName: _jsxFileName,
              lineNumber: 595,
              columnNumber: 41
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "container-baught",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "container-baught-header",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
                children: "Les bocaux achet\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 624,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 623,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 622,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
              children: ["Les ", orders.length, " commandes "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 628,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "order-container",
              children: orders.map((item, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Components_SAV_OrderData__WEBPACK_IMPORTED_MODULE_6__["default"], {
                item: item
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 631,
                columnNumber: 41
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 629,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 627,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "right-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "right-col-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
              children: "Statut de suivis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 638,
              columnNumber: 33
            }, this), crmStatus && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "follow-action-container",
              children: _displayButtonFollowClient(crmStatus.return_status)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 639,
              columnNumber: 47
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 637,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "container-status",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "label-bocoloco",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                onClick: () => crmStatus.return_status !== _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_LABEL_SENT"] && !crmStatus.return_label_path ? window.confirm(`Attention, une étiquette générée est automatiquement payé. Etes vous sur de vouloir générer l'étiquette ?\nPoids : ${weightToSend / 1000} Kg`) && _changeContainersStatus(_Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_LABEL_SENT"]) : crmStatus.return_status !== _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_LABEL_SENT"] && moment__WEBPACK_IMPORTED_MODULE_2___default()(crmStatus.return_date) < moment__WEBPACK_IMPORTED_MODULE_2___default()('2020-07-01') ? _changeContainersStatus(_Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_LABEL_SENT"]) : _downloadLabelPath(),
                className: crmStatus.return_id > 0 ? 'button-status-activated' : undefined,
                children: moment__WEBPACK_IMPORTED_MODULE_2___default()(crmStatus.return_date) > moment__WEBPACK_IMPORTED_MODULE_2___default()('2020-07-01') && crmStatus.return_label_path ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                    children: "\xC9tiquette g\xE9n\xE9r\xE9e"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 661,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                    children: 'le ' + moment__WEBPACK_IMPORTED_MODULE_2___default()(crmStatus.return_date).format('DD/MM/YYYY à HH:mm')
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 662,
                    columnNumber: 49
                  }, this)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "G\xE9n\xE9rer une \xE9tiquette"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 665,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 644,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
                children: crmStatus.return_id && crmStatus.return_id.length >= 10 && (Math.sign(crmStatus.return_id) === -1 || crmStatus.return_id[10] === '-') && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                  href: "https://www.mondialrelay.fr/media/122867/solution-web-service-v57.pdf",
                  target: "_blank",
                  rel: "noreferrer",
                  children: crmStatus.return_id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 672,
                  columnNumber: 49
                }, this)
              }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
                children: crmStatus.return_id && crmStatus.return_status !== _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_NO_FOLLOW"] && (Math.sign(crmStatus.return_id) === 1 || crmStatus.return_id[10] !== '-') ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
                  href: `https://connect.mondialrelay.com/CC21OEPS/Expedition/Afficher?numeroExpedition=${crmStatus.return_id}`,
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Suivre colis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 686,
                  columnNumber: 45
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("select", {
                  name: "containerWeight",
                  id: "weight-select",
                  value: weightToSend,
                  onChange: e => setWeightToSend(e.target.value),
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                    value: totalConsigne + BOX_WEIGHT,
                    children: "Changer le poids"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 700,
                    columnNumber: 49
                  }, this), selectWeightArray.map(item => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("option", {
                      value: item,
                      children: [item / 1000, " Kg"]
                    }, item, true, {
                      fileName: _jsxFileName,
                      lineNumber: 703,
                      columnNumber: 57
                    }, this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 694,
                  columnNumber: 45
                }, this)
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 643,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: "container-status-btns",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                onClick: () => _changeContainersStatus(4),
                className: crmStatus.return_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_CONTAINER_BOUGHT"] ? 'button-status-activated' : undefined,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "Bocaux"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 717,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "achet\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 718,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 713,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: crmStatus.return_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_CONTAINER_PARTIALLY"] ? 'button-status-activated' : 'disable',
                disabled: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "Bocaux"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 724,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "part. re\xE7us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 725,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 720,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                className: crmStatus.return_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_CONTAINER_RECEIVED"] ? 'button-status-activated' : 'disable',
                disabled: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "Bocaux"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 731,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                  children: "re\xE7us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 732,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 727,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 712,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 642,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
            children: "Facturation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 737,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "invoice-section",
            children: [crmStatus.return_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_INVOICE_SENT"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
              disabled: true,
              className: "sent",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: "Facture"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 741,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: "envoy\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 742,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 740,
              columnNumber: 37
            }, this) : crmStatus.return_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_INVOICE_CREATED"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
              onClick: () => toggleOpenInvoice(true),
              className: "created",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: "Envoyer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 746,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: "Facture"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 747,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 745,
              columnNumber: 37
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
              onClick: () => toggleOpenModal(true),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: "Cr\xE9er"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 751,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: "facture"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 752,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 750,
              columnNumber: 37
            }, this), crmStatus.return_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["RS_CRM_INVOICE_SENT"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
              href: emailInvoice,
              target: "_blank",
              rel: "noreferrer",
              children: ["Suivre ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 757,
                columnNumber: 48
              }, this), "facture"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 756,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 738,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
            className: "mailing-status",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
              children: "Relances client"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 765,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                onClick: () => _changeMailingStatus(1),
                className: crmStatus.mailing_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_1"] ? 'button-status-activated' : undefined,
                disabled: crmStatus.mailing_status >= _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_1"] || _checkLastMailingStatus(),
                children: "1er relance"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 767,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: _displayMailingDate(crmStatus.mailing_date_1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 774,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 766,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                onClick: () => _changeMailingStatus(2),
                className: crmStatus.mailing_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_2"] ? 'button-status-activated' : undefined,
                disabled: crmStatus.mailing_status >= _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_2"] || _checkLastMailingStatus(),
                children: "2\xE9me relance"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 777,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: _displayMailingDate(crmStatus.mailing_date_2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 784,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 776,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
                onClick: () => _changeMailingStatus(3),
                className: crmStatus.mailing_status === _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_3"] ? 'button-status-activated' : undefined,
                disabled: crmStatus.mailing_status >= _Constants__WEBPACK_IMPORTED_MODULE_7__["MS_MAIL_3"] || _checkLastMailingStatus(),
                children: "3\xE9me relance"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 787,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
                children: _displayMailingDate(crmStatus.mailing_date_3)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 794,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 786,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 764,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 21
      }, this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 486,
    columnNumber: 9
  }, this);
}

_s(SavClient, "DeJ0ehaTqKlxLR9f1pY4kUp6jMI=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useParams"]];
});

_c = SavClient;
/* harmony default export */ __webpack_exports__["default"] = (SavClient);

var _c;

__webpack_require__.$Refresh$.register(_c, "SavClient");

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
//# sourceMappingURL=main.cdaafa586f047e9bb11f.hot-update.js.map