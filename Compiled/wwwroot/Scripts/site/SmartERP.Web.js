﻿var SmartERP;
(function (SmartERP) {
    var AccountKind;
    (function (AccountKind) {
        AccountKind[AccountKind["Debit"] = 1] = "Debit";
        AccountKind[AccountKind["Credit"] = 2] = "Credit";
    })(AccountKind = SmartERP.AccountKind || (SmartERP.AccountKind = {}));
    Serenity.Decorators.registerEnumType(AccountKind, 'SmartERP.AccountKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsColumns = /** @class */ (function () {
            function AccountsColumns() {
            }
            AccountsColumns.columnsKey = 'Accounts.Accounts';
            return AccountsColumns;
        }());
        Accounts.AccountsColumns = AccountsColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsForm = /** @class */ (function (_super) {
            __extends(AccountsForm, _super);
            function AccountsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AccountsForm.init) {
                    AccountsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = Accounts.AccountsEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(AccountsForm, [
                        'HeadName', w0,
                        'HeadCode', w1,
                        'ParentHead', w2,
                        'PHeadName', w0,
                        'HeadLevel', w1,
                        'HeadType', w0,
                        'IsTransaction', w3,
                        'IsGl', w3
                    ]);
                }
                return _this;
            }
            AccountsForm.formKey = 'Accounts.Accounts';
            return AccountsForm;
        }(Serenity.PrefixedContext));
        Accounts.AccountsForm = AccountsForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsRow;
        (function (AccountsRow) {
            AccountsRow.idProperty = 'Id';
            AccountsRow.isActiveProperty = 'IsActive';
            AccountsRow.nameProperty = 'HeadName';
            AccountsRow.localTextPrefix = 'Accounts.Accounts';
            AccountsRow.lookupKey = 'Accounts.Accounts';
            function getLookup() {
                return Q.getLookup('Accounts.Accounts');
            }
            AccountsRow.getLookup = getLookup;
            AccountsRow.deletePermission = 'Financial:Chart Of Accounts:Delete';
            AccountsRow.insertPermission = 'Financial:Chart Of Accounts:Create';
            AccountsRow.readPermission = 'Financial:Chart Of Accounts:View';
            AccountsRow.updatePermission = 'Financial:Chart Of Accounts:Update';
        })(AccountsRow = Accounts.AccountsRow || (Accounts.AccountsRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsService;
        (function (AccountsService) {
            AccountsService.baseUrl = 'Accounts/Accounts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AccountsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccountsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AccountsService = Accounts.AccountsService || (Accounts.AccountsService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsColumns = /** @class */ (function () {
            function BankTransactionsColumns() {
            }
            BankTransactionsColumns.columnsKey = 'Accounts.BankTransactions';
            return BankTransactionsColumns;
        }());
        Accounts.BankTransactionsColumns = BankTransactionsColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsForm = /** @class */ (function (_super) {
            __extends(BankTransactionsForm, _super);
            function BankTransactionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BankTransactionsForm.init) {
                    BankTransactionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(BankTransactionsForm, [
                        'VDate', w0,
                        'AccountType', w1,
                        'VNo', w2,
                        'CoaId', w3,
                        'Credit', w4,
                        'Narration', w5
                    ]);
                }
                return _this;
            }
            BankTransactionsForm.formKey = 'Accounts.BankTransactions';
            return BankTransactionsForm;
        }(Serenity.PrefixedContext));
        Accounts.BankTransactionsForm = BankTransactionsForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsRow;
        (function (BankTransactionsRow) {
            BankTransactionsRow.idProperty = 'Id';
            BankTransactionsRow.nameProperty = 'VNo';
            BankTransactionsRow.localTextPrefix = 'Accounts.BankTransactions';
            BankTransactionsRow.deletePermission = 'Cash\/Bank:Bank Transactions';
            BankTransactionsRow.insertPermission = 'Cash\/Bank:Bank Transactions';
            BankTransactionsRow.readPermission = 'Cash\/Bank:Bank Transactions';
            BankTransactionsRow.updatePermission = 'Cash\/Bank:Bank Transactions';
        })(BankTransactionsRow = Accounts.BankTransactionsRow || (Accounts.BankTransactionsRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsService;
        (function (BankTransactionsService) {
            BankTransactionsService.baseUrl = 'Accounts/BankTransactions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                BankTransactionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankTransactionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BankTransactionsService = Accounts.BankTransactionsService || (Accounts.BankTransactionsService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentColumns = /** @class */ (function () {
            function CashAdjustmentColumns() {
            }
            CashAdjustmentColumns.columnsKey = 'Accounts.CashAdjustment';
            return CashAdjustmentColumns;
        }());
        Accounts.CashAdjustmentColumns = CashAdjustmentColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentForm = /** @class */ (function (_super) {
            __extends(CashAdjustmentForm, _super);
            function CashAdjustmentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashAdjustmentForm.init) {
                    CashAdjustmentForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(CashAdjustmentForm, [
                        'VDate', w0,
                        'Coa', w1,
                        'AccountType', w2,
                        'Credit', w3,
                        'Narration', w4
                    ]);
                }
                return _this;
            }
            CashAdjustmentForm.formKey = 'Accounts.CashAdjustment';
            return CashAdjustmentForm;
        }(Serenity.PrefixedContext));
        Accounts.CashAdjustmentForm = CashAdjustmentForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentRow;
        (function (CashAdjustmentRow) {
            CashAdjustmentRow.idProperty = 'Id';
            CashAdjustmentRow.nameProperty = 'VNo';
            CashAdjustmentRow.localTextPrefix = 'Accounts.CashAdjustment';
            CashAdjustmentRow.deletePermission = 'Cash\/Bank:Cash Adjustment';
            CashAdjustmentRow.insertPermission = 'Cash\/Bank:Cash Adjustment';
            CashAdjustmentRow.readPermission = 'Cash\/Bank:Cash Adjustment';
            CashAdjustmentRow.updatePermission = 'Cash\/Bank:Cash Adjustment';
        })(CashAdjustmentRow = Accounts.CashAdjustmentRow || (Accounts.CashAdjustmentRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentService;
        (function (CashAdjustmentService) {
            CashAdjustmentService.baseUrl = 'Accounts/CashAdjustment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CashAdjustmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashAdjustmentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashAdjustmentService = Accounts.CashAdjustmentService || (Accounts.CashAdjustmentService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherColumns = /** @class */ (function () {
            function ContraVoucherColumns() {
            }
            ContraVoucherColumns.columnsKey = 'Accounts.ContraVoucher';
            return ContraVoucherColumns;
        }());
        Accounts.ContraVoucherColumns = ContraVoucherColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherForm = /** @class */ (function (_super) {
            __extends(ContraVoucherForm, _super);
            function ContraVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContraVoucherForm.init) {
                    ContraVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(ContraVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'Debit', w2,
                        'Credit', w2,
                        'Narration', w3
                    ]);
                }
                return _this;
            }
            ContraVoucherForm.formKey = 'Accounts.ContraVoucher';
            return ContraVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.ContraVoucherForm = ContraVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherRow;
        (function (ContraVoucherRow) {
            ContraVoucherRow.idProperty = 'Id';
            ContraVoucherRow.nameProperty = 'VNo';
            ContraVoucherRow.localTextPrefix = 'Accounts.ContraVoucher';
            ContraVoucherRow.deletePermission = 'Financial:Contra Voucher';
            ContraVoucherRow.insertPermission = 'Financial:Contra Voucher';
            ContraVoucherRow.readPermission = 'Financial:Contra Voucher';
            ContraVoucherRow.updatePermission = 'Financial:Contra Voucher';
        })(ContraVoucherRow = Accounts.ContraVoucherRow || (Accounts.ContraVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherService;
        (function (ContraVoucherService) {
            ContraVoucherService.baseUrl = 'Accounts/ContraVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ContraVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContraVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ContraVoucherService = Accounts.ContraVoucherService || (Accounts.ContraVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherColumns = /** @class */ (function () {
            function CreditVoucherColumns() {
            }
            CreditVoucherColumns.columnsKey = 'Accounts.CreditVoucher';
            return CreditVoucherColumns;
        }());
        Accounts.CreditVoucherColumns = CreditVoucherColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherForm = /** @class */ (function (_super) {
            __extends(CreditVoucherForm, _super);
            function CreditVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CreditVoucherForm.init) {
                    CreditVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(CreditVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'CreditAccountId', w1,
                        'Debit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            CreditVoucherForm.formKey = 'Accounts.CreditVoucher';
            return CreditVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.CreditVoucherForm = CreditVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherRow;
        (function (CreditVoucherRow) {
            CreditVoucherRow.idProperty = 'Id';
            CreditVoucherRow.nameProperty = 'VNo';
            CreditVoucherRow.localTextPrefix = 'Accounts.CreditVoucher';
            CreditVoucherRow.deletePermission = 'Financial:Credit Voucher';
            CreditVoucherRow.insertPermission = 'Financial:Credit Voucher';
            CreditVoucherRow.readPermission = 'Financial:Credit Voucher';
            CreditVoucherRow.updatePermission = 'Financial:Credit Voucher';
        })(CreditVoucherRow = Accounts.CreditVoucherRow || (Accounts.CreditVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherService;
        (function (CreditVoucherService) {
            CreditVoucherService.baseUrl = 'Accounts/CreditVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CreditVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(CreditVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CreditVoucherService = Accounts.CreditVoucherService || (Accounts.CreditVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveColumns = /** @class */ (function () {
            function CustomerReceiveColumns() {
            }
            CustomerReceiveColumns.columnsKey = 'Accounts.CustomerReceive';
            return CustomerReceiveColumns;
        }());
        Accounts.CustomerReceiveColumns = CustomerReceiveColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveForm = /** @class */ (function (_super) {
            __extends(CustomerReceiveForm, _super);
            function CustomerReceiveForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerReceiveForm.init) {
                    CustomerReceiveForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(CustomerReceiveForm, [
                        'VDate', w0,
                        'CustomerId', w1,
                        'CoaId', w1,
                        'Debit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            CustomerReceiveForm.formKey = 'Accounts.CustomerReceive';
            return CustomerReceiveForm;
        }(Serenity.PrefixedContext));
        Accounts.CustomerReceiveForm = CustomerReceiveForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveRow;
        (function (CustomerReceiveRow) {
            CustomerReceiveRow.idProperty = 'Id';
            CustomerReceiveRow.nameProperty = 'VNo';
            CustomerReceiveRow.localTextPrefix = 'Accounts.CustomerReceive';
            CustomerReceiveRow.deletePermission = 'Cash\/Bank:Customer Receive';
            CustomerReceiveRow.insertPermission = 'Cash\/Bank:Customer Receive';
            CustomerReceiveRow.readPermission = 'Cash\/Bank:Customer Receive';
            CustomerReceiveRow.updatePermission = 'Cash\/Bank:Customer Receive';
        })(CustomerReceiveRow = Accounts.CustomerReceiveRow || (Accounts.CustomerReceiveRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveService;
        (function (CustomerReceiveService) {
            CustomerReceiveService.baseUrl = 'Accounts/CustomerReceive';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CustomerReceiveService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerReceiveService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerReceiveService = Accounts.CustomerReceiveService || (Accounts.CustomerReceiveService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherColumns = /** @class */ (function () {
            function DebitVoucherColumns() {
            }
            DebitVoucherColumns.columnsKey = 'Accounts.DebitVoucher';
            return DebitVoucherColumns;
        }());
        Accounts.DebitVoucherColumns = DebitVoucherColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherForm = /** @class */ (function (_super) {
            __extends(DebitVoucherForm, _super);
            function DebitVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DebitVoucherForm.init) {
                    DebitVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(DebitVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'DebitAccountId', w1,
                        'Credit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            DebitVoucherForm.formKey = 'Accounts.DebitVoucher';
            return DebitVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.DebitVoucherForm = DebitVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherRow;
        (function (DebitVoucherRow) {
            DebitVoucherRow.idProperty = 'Id';
            DebitVoucherRow.nameProperty = 'VNo';
            DebitVoucherRow.localTextPrefix = 'Accounts.DebitVoucher';
            DebitVoucherRow.deletePermission = 'Financial:Debit Voucher';
            DebitVoucherRow.insertPermission = 'Financial:Debit Voucher';
            DebitVoucherRow.readPermission = 'Financial:Debit Voucher';
            DebitVoucherRow.updatePermission = 'Financial:Debit Voucher';
        })(DebitVoucherRow = Accounts.DebitVoucherRow || (Accounts.DebitVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherService;
        (function (DebitVoucherService) {
            DebitVoucherService.baseUrl = 'Accounts/DebitVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DebitVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(DebitVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DebitVoucherService = Accounts.DebitVoucherService || (Accounts.DebitVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherColumns = /** @class */ (function () {
            function JournalVoucherColumns() {
            }
            JournalVoucherColumns.columnsKey = 'Accounts.JournalVoucher';
            return JournalVoucherColumns;
        }());
        Accounts.JournalVoucherColumns = JournalVoucherColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherForm = /** @class */ (function (_super) {
            __extends(JournalVoucherForm, _super);
            function JournalVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JournalVoucherForm.init) {
                    JournalVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(JournalVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'Debit', w2,
                        'Credit', w2,
                        'Narration', w3
                    ]);
                }
                return _this;
            }
            JournalVoucherForm.formKey = 'Accounts.JournalVoucher';
            return JournalVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.JournalVoucherForm = JournalVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherRow;
        (function (JournalVoucherRow) {
            JournalVoucherRow.idProperty = 'Id';
            JournalVoucherRow.nameProperty = 'VNo';
            JournalVoucherRow.localTextPrefix = 'Accounts.JournalVoucher';
            JournalVoucherRow.deletePermission = 'Financial:Journal Voucher';
            JournalVoucherRow.insertPermission = 'Financial:Journal Voucher';
            JournalVoucherRow.readPermission = 'Financial:Journal Voucher';
            JournalVoucherRow.updatePermission = 'Financial:Journal Voucher';
        })(JournalVoucherRow = Accounts.JournalVoucherRow || (Accounts.JournalVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherService;
        (function (JournalVoucherService) {
            JournalVoucherService.baseUrl = 'Accounts/JournalVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                JournalVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(JournalVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JournalVoucherService = Accounts.JournalVoucherService || (Accounts.JournalVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceColumns = /** @class */ (function () {
            function OpeningBalanceColumns() {
            }
            OpeningBalanceColumns.columnsKey = 'Accounts.OpeningBalance';
            return OpeningBalanceColumns;
        }());
        Accounts.OpeningBalanceColumns = OpeningBalanceColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceForm = /** @class */ (function (_super) {
            __extends(OpeningBalanceForm, _super);
            function OpeningBalanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OpeningBalanceForm.init) {
                    OpeningBalanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(OpeningBalanceForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'AccountType', w2,
                        'Debit', w3,
                        'Narration', w4
                    ]);
                }
                return _this;
            }
            OpeningBalanceForm.formKey = 'Accounts.OpeningBalance';
            return OpeningBalanceForm;
        }(Serenity.PrefixedContext));
        Accounts.OpeningBalanceForm = OpeningBalanceForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceRow;
        (function (OpeningBalanceRow) {
            OpeningBalanceRow.idProperty = 'Id';
            OpeningBalanceRow.nameProperty = 'VNo';
            OpeningBalanceRow.localTextPrefix = 'Accounts.OpeningBalance';
            OpeningBalanceRow.deletePermission = 'Financial:Opening Balance';
            OpeningBalanceRow.insertPermission = 'Financial:Opening Balance';
            OpeningBalanceRow.readPermission = 'Financial:Opening Balance';
            OpeningBalanceRow.updatePermission = 'Financial:Opening Balance';
        })(OpeningBalanceRow = Accounts.OpeningBalanceRow || (Accounts.OpeningBalanceRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceService;
        (function (OpeningBalanceService) {
            OpeningBalanceService.baseUrl = 'Accounts/OpeningBalance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                OpeningBalanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(OpeningBalanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OpeningBalanceService = Accounts.OpeningBalanceService || (Accounts.OpeningBalanceService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentColumns = /** @class */ (function () {
            function SupplierPaymentColumns() {
            }
            SupplierPaymentColumns.columnsKey = 'Accounts.SupplierPayment';
            return SupplierPaymentColumns;
        }());
        Accounts.SupplierPaymentColumns = SupplierPaymentColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentForm = /** @class */ (function (_super) {
            __extends(SupplierPaymentForm, _super);
            function SupplierPaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierPaymentForm.init) {
                    SupplierPaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(SupplierPaymentForm, [
                        'VDate', w0,
                        'SupplierId', w1,
                        'CoaId', w1,
                        'Credit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            SupplierPaymentForm.formKey = 'Accounts.SupplierPayment';
            return SupplierPaymentForm;
        }(Serenity.PrefixedContext));
        Accounts.SupplierPaymentForm = SupplierPaymentForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentRow;
        (function (SupplierPaymentRow) {
            SupplierPaymentRow.idProperty = 'Id';
            SupplierPaymentRow.nameProperty = 'VNo';
            SupplierPaymentRow.localTextPrefix = 'Accounts.SupplierPayment';
            SupplierPaymentRow.deletePermission = 'Cash\/Bank:Supplier Payment';
            SupplierPaymentRow.insertPermission = 'Cash\/Bank:Supplier Payment';
            SupplierPaymentRow.readPermission = 'Cash\/Bank:Supplier Payment';
            SupplierPaymentRow.updatePermission = 'Cash\/Bank:Supplier Payment';
        })(SupplierPaymentRow = Accounts.SupplierPaymentRow || (Accounts.SupplierPaymentRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentService;
        (function (SupplierPaymentService) {
            SupplierPaymentService.baseUrl = 'Accounts/SupplierPayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SupplierPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierPaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierPaymentService = Accounts.SupplierPaymentService || (Accounts.SupplierPaymentService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsColumns = /** @class */ (function () {
            function TransactionsColumns() {
            }
            TransactionsColumns.columnsKey = 'Accounts.Transactions';
            return TransactionsColumns;
        }());
        Accounts.TransactionsColumns = TransactionsColumns;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsForm = /** @class */ (function (_super) {
            __extends(TransactionsForm, _super);
            function TransactionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransactionsForm.init) {
                    TransactionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.IntegerEditor;
                    Q.initFormType(TransactionsForm, [
                        'VNo', w0,
                        'Vtype', w0,
                        'VDate', w1,
                        'CoaId', w0,
                        'Coa', w0,
                        'Narration', w0,
                        'Debit', w2,
                        'Credit', w2,
                        'IsPosted', w3,
                        'IsAppove', w3,
                        'InsertDate', w1,
                        'InsertUserId', w4,
                        'UpdateDate', w1,
                        'UpdateUserId', w4
                    ]);
                }
                return _this;
            }
            TransactionsForm.formKey = 'Accounts.Transactions';
            return TransactionsForm;
        }(Serenity.PrefixedContext));
        Accounts.TransactionsForm = TransactionsForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsRow;
        (function (TransactionsRow) {
            TransactionsRow.idProperty = 'Id';
            TransactionsRow.nameProperty = 'VNo';
            TransactionsRow.localTextPrefix = 'Accounts.Transactions';
            TransactionsRow.deletePermission = 'Financial:Transactions';
            TransactionsRow.insertPermission = 'Financial:Transactions';
            TransactionsRow.readPermission = 'Financial:Transactions';
            TransactionsRow.updatePermission = 'Financial:Transactions';
        })(TransactionsRow = Accounts.TransactionsRow || (Accounts.TransactionsRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsService;
        (function (TransactionsService) {
            TransactionsService.baseUrl = 'Accounts/Transactions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                TransactionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransactionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransactionsService = Accounts.TransactionsService || (Accounts.TransactionsService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesColumns = /** @class */ (function () {
            function CitiesColumns() {
            }
            CitiesColumns.columnsKey = 'Administration.Cities';
            return CitiesColumns;
        }());
        Administration.CitiesColumns = CitiesColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesForm = /** @class */ (function (_super) {
            __extends(CitiesForm, _super);
            function CitiesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CitiesForm.init) {
                    CitiesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(CitiesForm, [
                        'Name', w0,
                        'CountryId', w1,
                        'StateId', w1
                    ]);
                }
                return _this;
            }
            CitiesForm.formKey = 'Administration.Cities';
            return CitiesForm;
        }(Serenity.PrefixedContext));
        Administration.CitiesForm = CitiesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesRow;
        (function (CitiesRow) {
            CitiesRow.idProperty = 'Id';
            CitiesRow.isActiveProperty = 'IsActive';
            CitiesRow.nameProperty = 'Name';
            CitiesRow.localTextPrefix = 'Administration.Cities';
            CitiesRow.lookupKey = 'Administration.Cities';
            function getLookup() {
                return Q.getLookup('Administration.Cities');
            }
            CitiesRow.getLookup = getLookup;
            CitiesRow.deletePermission = 'Masters:City:Delete';
            CitiesRow.insertPermission = 'Masters:City:Create';
            CitiesRow.readPermission = 'Masters:City:View';
            CitiesRow.updatePermission = 'Masters:City:Update';
        })(CitiesRow = Administration.CitiesRow || (Administration.CitiesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesService;
        (function (CitiesService) {
            CitiesService.baseUrl = 'Administration/Cities';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CitiesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CitiesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CitiesService = Administration.CitiesService || (Administration.CitiesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesColumns = /** @class */ (function () {
            function CompaniesColumns() {
            }
            CompaniesColumns.columnsKey = 'Administration.Companies';
            return CompaniesColumns;
        }());
        Administration.CompaniesColumns = CompaniesColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesForm = /** @class */ (function (_super) {
            __extends(CompaniesForm, _super);
            function CompaniesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CompaniesForm.init) {
                    CompaniesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(CompaniesForm, [
                        'CompanyName', w0,
                        'CompanyEmail', w0,
                        'Address', w0,
                        'Phone', w0,
                        'CurrencyId', w1,
                        'VatPercentage', w2,
                        'Vat', w0,
                        'VatType', w3,
                        'Logo', w4,
                        'SaleLogo', w4,
                        'Favicon', w4,
                        'CurrencyPosition', w3,
                        'FooterText', w5
                    ]);
                }
                return _this;
            }
            CompaniesForm.formKey = 'Administration.Companies';
            return CompaniesForm;
        }(Serenity.PrefixedContext));
        Administration.CompaniesForm = CompaniesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesRow;
        (function (CompaniesRow) {
            CompaniesRow.idProperty = 'Id';
            CompaniesRow.isActiveProperty = 'IsActive';
            CompaniesRow.nameProperty = 'CompanyName';
            CompaniesRow.localTextPrefix = 'Administration.Companies';
            CompaniesRow.lookupKey = 'Administration.Companies';
            function getLookup() {
                return Q.getLookup('Administration.Companies');
            }
            CompaniesRow.getLookup = getLookup;
            CompaniesRow.deletePermission = 'Administration:Settings';
            CompaniesRow.insertPermission = 'Administration:Settings';
            CompaniesRow.readPermission = 'Administration:Settings';
            CompaniesRow.updatePermission = 'Administration:Settings';
        })(CompaniesRow = Administration.CompaniesRow || (Administration.CompaniesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesService;
        (function (CompaniesService) {
            CompaniesService.baseUrl = 'Administration/Companies';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete',
                'GetDefaultCurrency'
            ].forEach(function (x) {
                CompaniesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompaniesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CompaniesService = Administration.CompaniesService || (Administration.CompaniesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesColumns = /** @class */ (function () {
            function CountriesColumns() {
            }
            CountriesColumns.columnsKey = 'Administration.Countries';
            return CountriesColumns;
        }());
        Administration.CountriesColumns = CountriesColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesForm = /** @class */ (function (_super) {
            __extends(CountriesForm, _super);
            function CountriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CountriesForm.init) {
                    CountriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CountriesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            CountriesForm.formKey = 'Administration.Countries';
            return CountriesForm;
        }(Serenity.PrefixedContext));
        Administration.CountriesForm = CountriesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesRow;
        (function (CountriesRow) {
            CountriesRow.idProperty = 'Id';
            CountriesRow.isActiveProperty = 'IsActive';
            CountriesRow.nameProperty = 'Name';
            CountriesRow.localTextPrefix = 'Administration.Countries';
            CountriesRow.lookupKey = 'Administration.Countries';
            function getLookup() {
                return Q.getLookup('Administration.Countries');
            }
            CountriesRow.getLookup = getLookup;
            CountriesRow.deletePermission = 'Masters:Country:Delete';
            CountriesRow.insertPermission = 'Masters:Country:Create';
            CountriesRow.readPermission = 'Masters:Country:View';
            CountriesRow.updatePermission = 'Masters:Country:Update';
        })(CountriesRow = Administration.CountriesRow || (Administration.CountriesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesService;
        (function (CountriesService) {
            CountriesService.baseUrl = 'Administration/Countries';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CountriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CountriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CountriesService = Administration.CountriesService || (Administration.CountriesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesColumns = /** @class */ (function () {
            function CurrenciesColumns() {
            }
            CurrenciesColumns.columnsKey = 'Administration.Currencies';
            return CurrenciesColumns;
        }());
        Administration.CurrenciesColumns = CurrenciesColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesForm = /** @class */ (function (_super) {
            __extends(CurrenciesForm, _super);
            function CurrenciesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CurrenciesForm.init) {
                    CurrenciesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CurrenciesForm, [
                        'CurrencyName', w0,
                        'CurrencySymbol', w0
                    ]);
                }
                return _this;
            }
            CurrenciesForm.formKey = 'Administration.Currencies';
            return CurrenciesForm;
        }(Serenity.PrefixedContext));
        Administration.CurrenciesForm = CurrenciesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesRow;
        (function (CurrenciesRow) {
            CurrenciesRow.idProperty = 'Id';
            CurrenciesRow.isActiveProperty = 'IsActive';
            CurrenciesRow.nameProperty = 'CurrencyName';
            CurrenciesRow.localTextPrefix = 'Administration.Currencies';
            CurrenciesRow.lookupKey = 'Administration.Currencies';
            function getLookup() {
                return Q.getLookup('Administration.Currencies');
            }
            CurrenciesRow.getLookup = getLookup;
            CurrenciesRow.deletePermission = 'Administration:Currency:Delete';
            CurrenciesRow.insertPermission = 'Administration:Currency:Create';
            CurrenciesRow.readPermission = 'Administration:Currency:View';
            CurrenciesRow.updatePermission = 'Administration:Currency:Update';
        })(CurrenciesRow = Administration.CurrenciesRow || (Administration.CurrenciesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesService;
        (function (CurrenciesService) {
            CurrenciesService.baseUrl = 'Administration/Currencies';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CurrenciesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CurrenciesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CurrenciesService = Administration.CurrenciesService || (Administration.CurrenciesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var NavigationListColumns = /** @class */ (function () {
            function NavigationListColumns() {
            }
            NavigationListColumns.columnsKey = 'Administration.NavigationList';
            return NavigationListColumns;
        }());
        Administration.NavigationListColumns = NavigationListColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var NavigationListForm = /** @class */ (function (_super) {
            __extends(NavigationListForm, _super);
            function NavigationListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NavigationListForm.init) {
                    NavigationListForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(NavigationListForm, [
                        'Title', w0,
                        'Url', w0,
                        'Permission', w0,
                        'Icon', w0,
                        'ParentId', w0,
                        'Sort', w1
                    ]);
                }
                return _this;
            }
            NavigationListForm.formKey = 'Administration.NavigationList';
            return NavigationListForm;
        }(Serenity.PrefixedContext));
        Administration.NavigationListForm = NavigationListForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var NavigationListRow;
        (function (NavigationListRow) {
            NavigationListRow.idProperty = 'Id';
            NavigationListRow.nameProperty = 'Title';
            NavigationListRow.localTextPrefix = 'Administration.NavigationList';
            NavigationListRow.deletePermission = 'Administration:General';
            NavigationListRow.insertPermission = 'Administration:General';
            NavigationListRow.readPermission = 'Administration:General';
            NavigationListRow.updatePermission = 'Administration:General';
        })(NavigationListRow = Administration.NavigationListRow || (Administration.NavigationListRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var NavigationListService;
        (function (NavigationListService) {
            NavigationListService.baseUrl = 'Administration/NavigationList';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NavigationListService[x] = function (r, s, o) {
                    return Q.serviceRequest(NavigationListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NavigationListService = Administration.NavigationListService || (Administration.NavigationListService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsColumns = /** @class */ (function () {
            function RegionsColumns() {
            }
            RegionsColumns.columnsKey = 'Administration.Regions';
            return RegionsColumns;
        }());
        Administration.RegionsColumns = RegionsColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsForm = /** @class */ (function (_super) {
            __extends(RegionsForm, _super);
            function RegionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionsForm.init) {
                    RegionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RegionsForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            RegionsForm.formKey = 'Administration.Regions';
            return RegionsForm;
        }(Serenity.PrefixedContext));
        Administration.RegionsForm = RegionsForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsRow;
        (function (RegionsRow) {
            RegionsRow.idProperty = 'Id';
            RegionsRow.isActiveProperty = 'IsActive';
            RegionsRow.nameProperty = 'Name';
            RegionsRow.localTextPrefix = 'Administration.Regions';
            RegionsRow.lookupKey = 'Administration.Regions';
            function getLookup() {
                return Q.getLookup('Administration.Regions');
            }
            RegionsRow.getLookup = getLookup;
            RegionsRow.deletePermission = 'Masters:Region:Delete';
            RegionsRow.insertPermission = 'Masters:Region:Create';
            RegionsRow.readPermission = 'Masters:Region:View';
            RegionsRow.updatePermission = 'Masters:Region:Update';
        })(RegionsRow = Administration.RegionsRow || (Administration.RegionsRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsService;
        (function (RegionsService) {
            RegionsService.baseUrl = 'Administration/Regions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                RegionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionsService = Administration.RegionsService || (Administration.RegionsService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersColumns = /** @class */ (function () {
            function ShippersColumns() {
            }
            ShippersColumns.columnsKey = 'Administration.Shippers';
            return ShippersColumns;
        }());
        Administration.ShippersColumns = ShippersColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersForm = /** @class */ (function (_super) {
            __extends(ShippersForm, _super);
            function ShippersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShippersForm.init) {
                    ShippersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ShippersForm, [
                        'CompanyName', w0,
                        'Phone', w0
                    ]);
                }
                return _this;
            }
            ShippersForm.formKey = 'Administration.Shippers';
            return ShippersForm;
        }(Serenity.PrefixedContext));
        Administration.ShippersForm = ShippersForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersRow;
        (function (ShippersRow) {
            ShippersRow.idProperty = 'Id';
            ShippersRow.isActiveProperty = 'IsActive';
            ShippersRow.nameProperty = 'CompanyName';
            ShippersRow.localTextPrefix = 'Administration.Shippers';
            ShippersRow.lookupKey = 'Administration.Shippers';
            function getLookup() {
                return Q.getLookup('Administration.Shippers');
            }
            ShippersRow.getLookup = getLookup;
            ShippersRow.deletePermission = 'Masters:Shipper:Delete';
            ShippersRow.insertPermission = 'Masters:Shipper:Create';
            ShippersRow.readPermission = 'Masters:Shipper:View';
            ShippersRow.updatePermission = 'Masters:Shipper:Update';
        })(ShippersRow = Administration.ShippersRow || (Administration.ShippersRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersService;
        (function (ShippersService) {
            ShippersService.baseUrl = 'Administration/Shippers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ShippersService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShippersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShippersService = Administration.ShippersService || (Administration.ShippersService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesColumns = /** @class */ (function () {
            function StatesColumns() {
            }
            StatesColumns.columnsKey = 'Administration.States';
            return StatesColumns;
        }());
        Administration.StatesColumns = StatesColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesForm = /** @class */ (function (_super) {
            __extends(StatesForm, _super);
            function StatesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StatesForm.init) {
                    StatesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(StatesForm, [
                        'Name', w0,
                        'CountryId', w1
                    ]);
                }
                return _this;
            }
            StatesForm.formKey = 'Administration.States';
            return StatesForm;
        }(Serenity.PrefixedContext));
        Administration.StatesForm = StatesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesRow;
        (function (StatesRow) {
            StatesRow.idProperty = 'Id';
            StatesRow.isActiveProperty = 'IsActive';
            StatesRow.nameProperty = 'Name';
            StatesRow.localTextPrefix = 'Administration.States';
            StatesRow.lookupKey = 'Administration.States';
            function getLookup() {
                return Q.getLookup('Administration.States');
            }
            StatesRow.getLookup = getLookup;
            StatesRow.deletePermission = 'Masters:State:Delete';
            StatesRow.insertPermission = 'Masters:State:Create';
            StatesRow.readPermission = 'Masters:State:View';
            StatesRow.updatePermission = 'Masters:State:Update';
        })(StatesRow = Administration.StatesRow || (Administration.StatesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesService;
        (function (StatesService) {
            StatesService.baseUrl = 'Administration/States';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                StatesService[x] = function (r, s, o) {
                    return Q.serviceRequest(StatesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StatesService = Administration.StatesService || (Administration.StatesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesColumns = /** @class */ (function () {
            function TerritoriesColumns() {
            }
            TerritoriesColumns.columnsKey = 'Administration.Territories';
            return TerritoriesColumns;
        }());
        Administration.TerritoriesColumns = TerritoriesColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesForm = /** @class */ (function (_super) {
            __extends(TerritoriesForm, _super);
            function TerritoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoriesForm.init) {
                    TerritoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TerritoriesForm, [
                        'TerritoryDescription', w0,
                        'RegionId', w1
                    ]);
                }
                return _this;
            }
            TerritoriesForm.formKey = 'Administration.Territories';
            return TerritoriesForm;
        }(Serenity.PrefixedContext));
        Administration.TerritoriesForm = TerritoriesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesRow;
        (function (TerritoriesRow) {
            TerritoriesRow.idProperty = 'Id';
            TerritoriesRow.isActiveProperty = 'IsActive';
            TerritoriesRow.nameProperty = 'TerritoryDescription';
            TerritoriesRow.localTextPrefix = 'Administration.Territories';
            TerritoriesRow.lookupKey = 'Administration.Territories';
            function getLookup() {
                return Q.getLookup('Administration.Territories');
            }
            TerritoriesRow.getLookup = getLookup;
            TerritoriesRow.deletePermission = 'Masters:Territory:Delete';
            TerritoriesRow.insertPermission = 'Masters:Territory:Create';
            TerritoriesRow.readPermission = 'Masters:Territory:View';
            TerritoriesRow.updatePermission = 'Masters:Territory:Update';
        })(TerritoriesRow = Administration.TerritoriesRow || (Administration.TerritoriesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesService;
        (function (TerritoriesService) {
            TerritoriesService.baseUrl = 'Administration/Territories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                TerritoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoriesService = Administration.TerritoriesService || (Administration.TerritoriesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesColumns = /** @class */ (function () {
            function WarehousesColumns() {
            }
            WarehousesColumns.columnsKey = 'Administration.Warehouses';
            return WarehousesColumns;
        }());
        Administration.WarehousesColumns = WarehousesColumns;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesForm = /** @class */ (function (_super) {
            __extends(WarehousesForm, _super);
            function WarehousesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WarehousesForm.init) {
                    WarehousesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(WarehousesForm, [
                        'Name', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'Phone', w0,
                        'Address', w2,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            WarehousesForm.formKey = 'Administration.Warehouses';
            return WarehousesForm;
        }(Serenity.PrefixedContext));
        Administration.WarehousesForm = WarehousesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesRow;
        (function (WarehousesRow) {
            WarehousesRow.idProperty = 'Id';
            WarehousesRow.isActiveProperty = 'IsActive';
            WarehousesRow.nameProperty = 'Name';
            WarehousesRow.localTextPrefix = 'Administration.Warehouses';
            WarehousesRow.lookupKey = 'Administration.Warehouses';
            function getLookup() {
                return Q.getLookup('Administration.Warehouses');
            }
            WarehousesRow.getLookup = getLookup;
            WarehousesRow.deletePermission = 'Masters:Warehouse:Delete';
            WarehousesRow.insertPermission = 'Masters:Warehouse:Create';
            WarehousesRow.readPermission = 'Masters:Warehouse:View';
            WarehousesRow.updatePermission = 'Masters:Warehouse:Update';
        })(WarehousesRow = Administration.WarehousesRow || (Administration.WarehousesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesService;
        (function (WarehousesService) {
            WarehousesService.baseUrl = 'Administration/Warehouses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                WarehousesService[x] = function (r, s, o) {
                    return Q.serviceRequest(WarehousesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WarehousesService = Administration.WarehousesService || (Administration.WarehousesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksColumns = /** @class */ (function () {
            function BanksColumns() {
            }
            BanksColumns.columnsKey = 'Banks.Banks';
            return BanksColumns;
        }());
        Banks.BanksColumns = BanksColumns;
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksForm = /** @class */ (function (_super) {
            __extends(BanksForm, _super);
            function BanksForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BanksForm.init) {
                    BanksForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    Q.initFormType(BanksForm, [
                        'BankName', w0,
                        'AcName', w0,
                        'AcNumber', w0,
                        'Branch', w0,
                        'SignaturePicture', w1
                    ]);
                }
                return _this;
            }
            BanksForm.formKey = 'Banks.Banks';
            return BanksForm;
        }(Serenity.PrefixedContext));
        Banks.BanksForm = BanksForm;
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksRow;
        (function (BanksRow) {
            BanksRow.idProperty = 'Id';
            BanksRow.isActiveProperty = 'IsActive';
            BanksRow.nameProperty = 'BankName';
            BanksRow.localTextPrefix = 'Banks.Banks';
            BanksRow.lookupKey = 'Banks.Banks';
            function getLookup() {
                return Q.getLookup('Banks.Banks');
            }
            BanksRow.getLookup = getLookup;
            BanksRow.deletePermission = 'Masters:Bank:Delete';
            BanksRow.insertPermission = 'Masters:Bank:Create';
            BanksRow.readPermission = 'Masters:Bank:View';
            BanksRow.updatePermission = 'Masters:Bank:Update';
        })(BanksRow = Banks.BanksRow || (Banks.BanksRow = {}));
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksService;
        (function (BanksService) {
            BanksService.baseUrl = 'Banks/Banks';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                BanksService[x] = function (r, s, o) {
                    return Q.serviceRequest(BanksService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BanksService = Banks.BanksService || (Banks.BanksService = {}));
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var BloodGroupKind;
    (function (BloodGroupKind) {
        BloodGroupKind[BloodGroupKind["APositive"] = 1] = "APositive";
        BloodGroupKind[BloodGroupKind["ANegative"] = 2] = "ANegative";
        BloodGroupKind[BloodGroupKind["BPositive"] = 3] = "BPositive";
        BloodGroupKind[BloodGroupKind["BNegative"] = 4] = "BNegative";
        BloodGroupKind[BloodGroupKind["ABPsitive"] = 5] = "ABPsitive";
        BloodGroupKind[BloodGroupKind["ABNegative"] = 6] = "ABNegative";
        BloodGroupKind[BloodGroupKind["OPositive"] = 7] = "OPositive";
        BloodGroupKind[BloodGroupKind["ONegative"] = 8] = "ONegative";
    })(BloodGroupKind = SmartERP.BloodGroupKind || (SmartERP.BloodGroupKind = {}));
    Serenity.Decorators.registerEnumType(BloodGroupKind, 'SmartERP.BloodGroupKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var BusinessPartners;
    (function (BusinessPartners) {
    })(BusinessPartners = SmartERP.BusinessPartners || (SmartERP.BusinessPartners = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var CashBank;
    (function (CashBank) {
    })(CashBank = SmartERP.CashBank || (SmartERP.CashBank = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var CurrencyPositionKind;
    (function (CurrencyPositionKind) {
        CurrencyPositionKind[CurrencyPositionKind["Left"] = 1] = "Left";
        CurrencyPositionKind[CurrencyPositionKind["Right"] = 2] = "Right";
    })(CurrencyPositionKind = SmartERP.CurrencyPositionKind || (SmartERP.CurrencyPositionKind = {}));
    Serenity.Decorators.registerEnumType(CurrencyPositionKind, 'SmartERP.CurrencyPositionKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersColumns = /** @class */ (function () {
            function CustomersColumns() {
            }
            CustomersColumns.columnsKey = 'Customers.Customers';
            return CustomersColumns;
        }());
        Customers.CustomersColumns = CustomersColumns;
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersForm = /** @class */ (function (_super) {
            __extends(CustomersForm, _super);
            function CustomersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomersForm.init) {
                    CustomersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(CustomersForm, [
                        'Name', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'CustomerGroupId', w1,
                        'Address', w2,
                        'RegionId', w1,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Website', w0,
                        'Fax', w0,
                        'Email', w0,
                        'EmailAddress', w0,
                        'PreviousCreditBalance', w3,
                        'CNIC', w0,
                        'NTN', w0,
                        'STRN', w0,
                        'SalesMan', w1,
                        'OrderBooker', w1,
                        'Vat', w0
                    ]);
                }
                return _this;
            }
            CustomersForm.formKey = 'Customers.Customers';
            return CustomersForm;
        }(Serenity.PrefixedContext));
        Customers.CustomersForm = CustomersForm;
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersRow;
        (function (CustomersRow) {
            CustomersRow.idProperty = 'Id';
            CustomersRow.isActiveProperty = 'IsActive';
            CustomersRow.nameProperty = 'Name';
            CustomersRow.localTextPrefix = 'Customers.Customers';
            CustomersRow.lookupKey = 'Customers.Customers';
            function getLookup() {
                return Q.getLookup('Customers.Customers');
            }
            CustomersRow.getLookup = getLookup;
            CustomersRow.deletePermission = 'Business Partners:Customer:Delete';
            CustomersRow.insertPermission = 'Business Partners:Customer:Create';
            CustomersRow.readPermission = 'Business Partners:Customer:View';
            CustomersRow.updatePermission = 'Business Partners:Customer:Update';
        })(CustomersRow = Customers.CustomersRow || (Customers.CustomersRow = {}));
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersService;
        (function (CustomersService) {
            CustomersService.baseUrl = 'Customers/Customers';
            [
                'Create',
                'Update',
                'Delete',
                'HeartBeat',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CustomersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomersService = Customers.CustomersService || (Customers.CustomersService = {}));
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesColumns = /** @class */ (function () {
            function ExpenseTypesColumns() {
            }
            ExpenseTypesColumns.columnsKey = 'Expenses.ExpenseTypes';
            return ExpenseTypesColumns;
        }());
        Expenses.ExpenseTypesColumns = ExpenseTypesColumns;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesForm = /** @class */ (function (_super) {
            __extends(ExpenseTypesForm, _super);
            function ExpenseTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpenseTypesForm.init) {
                    ExpenseTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ExpenseTypesForm, [
                        'Type', w0
                    ]);
                }
                return _this;
            }
            ExpenseTypesForm.formKey = 'Expenses.ExpenseTypes';
            return ExpenseTypesForm;
        }(Serenity.PrefixedContext));
        Expenses.ExpenseTypesForm = ExpenseTypesForm;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesRow;
        (function (ExpenseTypesRow) {
            ExpenseTypesRow.idProperty = 'Id';
            ExpenseTypesRow.isActiveProperty = 'IsActive';
            ExpenseTypesRow.nameProperty = 'Type';
            ExpenseTypesRow.localTextPrefix = 'Expenses.ExpenseTypes';
            ExpenseTypesRow.lookupKey = 'Expenses.ExpenseTypes';
            function getLookup() {
                return Q.getLookup('Expenses.ExpenseTypes');
            }
            ExpenseTypesRow.getLookup = getLookup;
            ExpenseTypesRow.deletePermission = 'Masters:Expense Type:Delete';
            ExpenseTypesRow.insertPermission = 'Masters:Expense Type:Create';
            ExpenseTypesRow.readPermission = 'Masters:Expense Type:View';
            ExpenseTypesRow.updatePermission = 'Masters:Expense Type:Update';
        })(ExpenseTypesRow = Expenses.ExpenseTypesRow || (Expenses.ExpenseTypesRow = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesService;
        (function (ExpenseTypesService) {
            ExpenseTypesService.baseUrl = 'Expenses/ExpenseTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ExpenseTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpenseTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpenseTypesService = Expenses.ExpenseTypesService || (Expenses.ExpenseTypesService = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesColumns = /** @class */ (function () {
            function ExpensesColumns() {
            }
            ExpensesColumns.columnsKey = 'Expenses.Expenses';
            return ExpensesColumns;
        }());
        Expenses.ExpensesColumns = ExpensesColumns;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesForm = /** @class */ (function (_super) {
            __extends(ExpensesForm, _super);
            function ExpensesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpensesForm.init) {
                    ExpensesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ExpensesForm, [
                        'ExpenseTypeId', w0,
                        'Date', w1,
                        'PaymentAccount', w0,
                        'Amount', w2
                    ]);
                }
                return _this;
            }
            ExpensesForm.formKey = 'Expenses.Expenses';
            return ExpensesForm;
        }(Serenity.PrefixedContext));
        Expenses.ExpensesForm = ExpensesForm;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesRow;
        (function (ExpensesRow) {
            ExpensesRow.idProperty = 'Id';
            ExpensesRow.isActiveProperty = 'IsActive';
            ExpensesRow.localTextPrefix = 'Expenses.Expenses';
            ExpensesRow.lookupKey = 'Expenses.Expenses';
            function getLookup() {
                return Q.getLookup('Expenses.Expenses');
            }
            ExpensesRow.getLookup = getLookup;
            ExpensesRow.deletePermission = 'Cash\/Bank:Expense:Delete';
            ExpensesRow.insertPermission = 'Cash\/Bank:Expense:Create';
            ExpensesRow.readPermission = 'Cash\/Bank:Expense:View';
            ExpensesRow.updatePermission = 'Cash\/Bank:Expense:Update';
        })(ExpensesRow = Expenses.ExpensesRow || (Expenses.ExpensesRow = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesService;
        (function (ExpensesService) {
            ExpensesService.baseUrl = 'Expenses/Expenses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ExpensesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpensesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpensesService = Expenses.ExpensesService || (Expenses.ExpensesService = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Financial;
    (function (Financial) {
    })(Financial = SmartERP.Financial || (SmartERP.Financial = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceColumns = /** @class */ (function () {
            function AttendanceColumns() {
            }
            AttendanceColumns.columnsKey = 'HumanResource.Attendance';
            return AttendanceColumns;
        }());
        HumanResource.AttendanceColumns = AttendanceColumns;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceForm = /** @class */ (function (_super) {
            __extends(AttendanceForm, _super);
            function AttendanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendanceForm.init) {
                    AttendanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateTimeEditor;
                    Q.initFormType(AttendanceForm, [
                        'EmployeeId', w0,
                        'CheckIn', w1,
                        'CheckOut', w1
                    ]);
                }
                return _this;
            }
            AttendanceForm.formKey = 'HumanResource.Attendance';
            return AttendanceForm;
        }(Serenity.PrefixedContext));
        HumanResource.AttendanceForm = AttendanceForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceRow;
        (function (AttendanceRow) {
            AttendanceRow.idProperty = 'Id';
            AttendanceRow.isActiveProperty = 'IsActive';
            AttendanceRow.localTextPrefix = 'HumanResource.Attendance';
            AttendanceRow.lookupKey = 'HumanResource.Attendance';
            function getLookup() {
                return Q.getLookup('HumanResource.Attendance');
            }
            AttendanceRow.getLookup = getLookup;
            AttendanceRow.deletePermission = 'Human Resource:Attendance:Delete';
            AttendanceRow.insertPermission = 'Human Resource:Attendance:Create';
            AttendanceRow.readPermission = 'Human Resource:Attendance:View';
            AttendanceRow.updatePermission = 'Human Resource:Attendance:Update';
        })(AttendanceRow = HumanResource.AttendanceRow || (HumanResource.AttendanceRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceService;
        (function (AttendanceService) {
            AttendanceService.baseUrl = 'HumanResource/Attendance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AttendanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendanceService = HumanResource.AttendanceService || (HumanResource.AttendanceService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsColumns = /** @class */ (function () {
            function DepartmentsColumns() {
            }
            DepartmentsColumns.columnsKey = 'HumanResource.Departments';
            return DepartmentsColumns;
        }());
        HumanResource.DepartmentsColumns = DepartmentsColumns;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsForm = /** @class */ (function (_super) {
            __extends(DepartmentsForm, _super);
            function DepartmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DepartmentsForm.init) {
                    DepartmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = HumanResource.DepartmentsEditor;
                    Q.initFormType(DepartmentsForm, [
                        'Department', w0,
                        'Description', w0,
                        'ParentDepartmentId', w1
                    ]);
                }
                return _this;
            }
            DepartmentsForm.formKey = 'HumanResource.Departments';
            return DepartmentsForm;
        }(Serenity.PrefixedContext));
        HumanResource.DepartmentsForm = DepartmentsForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsRow;
        (function (DepartmentsRow) {
            DepartmentsRow.idProperty = 'Id';
            DepartmentsRow.isActiveProperty = 'IsActive';
            DepartmentsRow.nameProperty = 'Department';
            DepartmentsRow.localTextPrefix = 'HumanResource.Departments';
            DepartmentsRow.lookupKey = 'HumanResource.Departments';
            function getLookup() {
                return Q.getLookup('HumanResource.Departments');
            }
            DepartmentsRow.getLookup = getLookup;
            DepartmentsRow.deletePermission = 'Human Resource:Department:Delete';
            DepartmentsRow.insertPermission = 'Human Resource:Department:Create';
            DepartmentsRow.readPermission = 'Human Resource:Department:View';
            DepartmentsRow.updatePermission = 'Human Resource:Department:Update';
        })(DepartmentsRow = HumanResource.DepartmentsRow || (HumanResource.DepartmentsRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsService;
        (function (DepartmentsService) {
            DepartmentsService.baseUrl = 'HumanResource/Departments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DepartmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DepartmentsService = HumanResource.DepartmentsService || (HumanResource.DepartmentsService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsColumns = /** @class */ (function () {
            function DesignationsColumns() {
            }
            DesignationsColumns.columnsKey = 'HumanResource.Designations';
            return DesignationsColumns;
        }());
        HumanResource.DesignationsColumns = DesignationsColumns;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsForm = /** @class */ (function (_super) {
            __extends(DesignationsForm, _super);
            function DesignationsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DesignationsForm.init) {
                    DesignationsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = HumanResource.DesignationsEditor;
                    Q.initFormType(DesignationsForm, [
                        'Designation', w0,
                        'Description', w0,
                        'ParentDesignationId', w1
                    ]);
                }
                return _this;
            }
            DesignationsForm.formKey = 'HumanResource.Designations';
            return DesignationsForm;
        }(Serenity.PrefixedContext));
        HumanResource.DesignationsForm = DesignationsForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsRow;
        (function (DesignationsRow) {
            DesignationsRow.idProperty = 'Id';
            DesignationsRow.isActiveProperty = 'IsActive';
            DesignationsRow.nameProperty = 'Designation';
            DesignationsRow.localTextPrefix = 'HumanResource.Designations';
            DesignationsRow.lookupKey = 'HumanResource.Designations';
            function getLookup() {
                return Q.getLookup('HumanResource.Designations');
            }
            DesignationsRow.getLookup = getLookup;
            DesignationsRow.deletePermission = 'Human Resource:Designation:Delete';
            DesignationsRow.insertPermission = 'Human Resource:Designation:Create';
            DesignationsRow.readPermission = 'Human Resource:Designation:View';
            DesignationsRow.updatePermission = 'Human Resource:Designation:Update';
        })(DesignationsRow = HumanResource.DesignationsRow || (HumanResource.DesignationsRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsService;
        (function (DesignationsService) {
            DesignationsService.baseUrl = 'HumanResource/Designations';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DesignationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DesignationsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DesignationsService = HumanResource.DesignationsService || (HumanResource.DesignationsService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeBankAccountsColumns = /** @class */ (function () {
            function EmployeeBankAccountsColumns() {
            }
            EmployeeBankAccountsColumns.columnsKey = 'HumanResource.EmployeeBankAccounts';
            return EmployeeBankAccountsColumns;
        }());
        HumanResource.EmployeeBankAccountsColumns = EmployeeBankAccountsColumns;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeBankAccountsForm = /** @class */ (function (_super) {
            __extends(EmployeeBankAccountsForm, _super);
            function EmployeeBankAccountsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeBankAccountsForm.init) {
                    EmployeeBankAccountsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(EmployeeBankAccountsForm, [
                        'AccountTitle', w0,
                        'AccountNumber', w0,
                        'BankName', w1,
                        'BankCode', w0,
                        'BankBranch', w0
                    ]);
                }
                return _this;
            }
            EmployeeBankAccountsForm.formKey = 'HumanResource.EmployeeBankAccounts';
            return EmployeeBankAccountsForm;
        }(Serenity.PrefixedContext));
        HumanResource.EmployeeBankAccountsForm = EmployeeBankAccountsForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeBankAccountsRow;
        (function (EmployeeBankAccountsRow) {
            EmployeeBankAccountsRow.idProperty = 'Id';
            EmployeeBankAccountsRow.nameProperty = 'AccountTitle';
            EmployeeBankAccountsRow.localTextPrefix = 'HumanResource.EmployeeBankAccounts';
            EmployeeBankAccountsRow.lookupKey = 'HumanResource.EmployeeBankAccounts';
            function getLookup() {
                return Q.getLookup('HumanResource.EmployeeBankAccounts');
            }
            EmployeeBankAccountsRow.getLookup = getLookup;
            EmployeeBankAccountsRow.deletePermission = 'Human Resource:Employee Bank Accounts:Delete';
            EmployeeBankAccountsRow.insertPermission = 'Human Resource:Employee Bank Accounts:Create';
            EmployeeBankAccountsRow.readPermission = 'Human Resource:Employee Bank Accounts:View';
            EmployeeBankAccountsRow.updatePermission = 'Human Resource:Employee Bank Accounts:Update';
        })(EmployeeBankAccountsRow = HumanResource.EmployeeBankAccountsRow || (HumanResource.EmployeeBankAccountsRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeBankAccountsService;
        (function (EmployeeBankAccountsService) {
            EmployeeBankAccountsService.baseUrl = 'HumanResource/EmployeeBankAccounts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeBankAccountsService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeBankAccountsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeBankAccountsService = HumanResource.EmployeeBankAccountsService || (HumanResource.EmployeeBankAccountsService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeDeductionsColumns = /** @class */ (function () {
            function EmployeeDeductionsColumns() {
            }
            EmployeeDeductionsColumns.columnsKey = 'HumanResource.EmployeeDeductions';
            return EmployeeDeductionsColumns;
        }());
        HumanResource.EmployeeDeductionsColumns = EmployeeDeductionsColumns;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeDeductionsForm = /** @class */ (function (_super) {
            __extends(EmployeeDeductionsForm, _super);
            function EmployeeDeductionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeDeductionsForm.init) {
                    EmployeeDeductionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(EmployeeDeductionsForm, [
                        'DeductionId', w0,
                        'Amount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            EmployeeDeductionsForm.formKey = 'HumanResource.EmployeeDeductions';
            return EmployeeDeductionsForm;
        }(Serenity.PrefixedContext));
        HumanResource.EmployeeDeductionsForm = EmployeeDeductionsForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeDeductionsRow;
        (function (EmployeeDeductionsRow) {
            EmployeeDeductionsRow.idProperty = 'Id';
            EmployeeDeductionsRow.isActiveProperty = 'IsActive';
            EmployeeDeductionsRow.nameProperty = 'DeductionName';
            EmployeeDeductionsRow.localTextPrefix = 'HumanResource.EmployeeDeductions';
            EmployeeDeductionsRow.deletePermission = 'Human Resource:Employee:Delete';
            EmployeeDeductionsRow.insertPermission = 'Human Resource:Employee:Create';
            EmployeeDeductionsRow.readPermission = 'Human Resource:Employee:View';
            EmployeeDeductionsRow.updatePermission = 'Human Resource:Employee:Update';
        })(EmployeeDeductionsRow = HumanResource.EmployeeDeductionsRow || (HumanResource.EmployeeDeductionsRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeDeductionsService;
        (function (EmployeeDeductionsService) {
            EmployeeDeductionsService.baseUrl = 'HumanResource/EmployeeDeductions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeDeductionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeDeductionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeDeductionsService = HumanResource.EmployeeDeductionsService || (HumanResource.EmployeeDeductionsService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeIncomesColumns = /** @class */ (function () {
            function EmployeeIncomesColumns() {
            }
            EmployeeIncomesColumns.columnsKey = 'HumanResource.EmployeeIncomes';
            return EmployeeIncomesColumns;
        }());
        HumanResource.EmployeeIncomesColumns = EmployeeIncomesColumns;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeIncomesForm = /** @class */ (function (_super) {
            __extends(EmployeeIncomesForm, _super);
            function EmployeeIncomesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeIncomesForm.init) {
                    EmployeeIncomesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(EmployeeIncomesForm, [
                        'IncomeId', w0,
                        'Amount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            EmployeeIncomesForm.formKey = 'HumanResource.EmployeeIncomes';
            return EmployeeIncomesForm;
        }(Serenity.PrefixedContext));
        HumanResource.EmployeeIncomesForm = EmployeeIncomesForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeIncomesRow;
        (function (EmployeeIncomesRow) {
            EmployeeIncomesRow.idProperty = 'Id';
            EmployeeIncomesRow.isActiveProperty = 'IsActive';
            EmployeeIncomesRow.nameProperty = 'IncomeName';
            EmployeeIncomesRow.localTextPrefix = 'HumanResource.EmployeeIncomes';
            EmployeeIncomesRow.deletePermission = 'Human Resource:Employee:Delete';
            EmployeeIncomesRow.insertPermission = 'Human Resource:Employee:Create';
            EmployeeIncomesRow.readPermission = 'Human Resource:Employee:View';
            EmployeeIncomesRow.updatePermission = 'Human Resource:Employee:Update';
        })(EmployeeIncomesRow = HumanResource.EmployeeIncomesRow || (HumanResource.EmployeeIncomesRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeIncomesService;
        (function (EmployeeIncomesService) {
            EmployeeIncomesService.baseUrl = 'HumanResource/EmployeeIncomes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeIncomesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeIncomesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeIncomesService = HumanResource.EmployeeIncomesService || (HumanResource.EmployeeIncomesService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesColumns = /** @class */ (function () {
            function EmployeesColumns() {
            }
            EmployeesColumns.columnsKey = 'HumanResource.Employees';
            return EmployeesColumns;
        }());
        HumanResource.EmployeesColumns = EmployeesColumns;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeesForm.init) {
                    EmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = HumanResource.DesignationsEditor;
                    var w2 = HumanResource.DepartmentsEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.ImageUploadEditor;
                    var w6 = s.LookupEditor;
                    var w7 = HumanResource.EmployeeIncomeEditor;
                    var w8 = HumanResource.EmployeeDeductionEditor;
                    Q.initFormType(EmployeesForm, [
                        'FirstName', w0,
                        'LastName', w0,
                        'DesignationId', w1,
                        'DepartmentId', w2,
                        'RateType', w3,
                        'Phone', w0,
                        'HoureRateSalary', w4,
                        'Email', w0,
                        'BloodGroup', w3,
                        'Picture', w5,
                        'CountryId', w6,
                        'StateId', w6,
                        'CityId', w6,
                        'ZipCode', w0,
                        'Address', w0,
                        'UserId', w6,
                        'RegionId', w6,
                        'TerritoryId', w6,
                        'BasicSalary', w4,
                        'PayrollBankId', w6,
                        'BankAccountForPayroll', w0,
                        'IncomeList', w7,
                        'DeductionList', w8
                    ]);
                }
                return _this;
            }
            EmployeesForm.formKey = 'HumanResource.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        HumanResource.EmployeesForm = EmployeesForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'Id';
            EmployeesRow.isActiveProperty = 'IsActive';
            EmployeesRow.nameProperty = 'EmployeeFullName';
            EmployeesRow.localTextPrefix = 'HumanResource.Employees';
            EmployeesRow.lookupKey = 'HumanResource.Employees';
            function getLookup() {
                return Q.getLookup('HumanResource.Employees');
            }
            EmployeesRow.getLookup = getLookup;
            EmployeesRow.deletePermission = 'Human Resource:Employee:Delete';
            EmployeesRow.insertPermission = 'Human Resource:Employee:Create';
            EmployeesRow.readPermission = 'Human Resource:Employee:View';
            EmployeesRow.updatePermission = 'Human Resource:Employee:Update';
        })(EmployeesRow = HumanResource.EmployeesRow || (HumanResource.EmployeesRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'HumanResource/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = HumanResource.EmployeesService || (HumanResource.EmployeesService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsColumns = /** @class */ (function () {
            function DamagedProductsColumns() {
            }
            DamagedProductsColumns.columnsKey = 'Inventory.DamagedProducts';
            return DamagedProductsColumns;
        }());
        Inventory.DamagedProductsColumns = DamagedProductsColumns;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsForm = /** @class */ (function (_super) {
            __extends(DamagedProductsForm, _super);
            function DamagedProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DamagedProductsForm.init) {
                    DamagedProductsForm.init = true;
                    var s = Serenity;
                    var w0 = SmartERP.Products.CategoriesEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(DamagedProductsForm, [
                        'CategoryId', w0,
                        'ProductId', w1,
                        'Code', w2,
                        'Name', w2,
                        'PurchasePrice', w3,
                        'Quantity', w3,
                        'Date', w4,
                        'Note', w5
                    ]);
                }
                return _this;
            }
            DamagedProductsForm.formKey = 'Inventory.DamagedProducts';
            return DamagedProductsForm;
        }(Serenity.PrefixedContext));
        Inventory.DamagedProductsForm = DamagedProductsForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsRow;
        (function (DamagedProductsRow) {
            DamagedProductsRow.idProperty = 'Id';
            DamagedProductsRow.isActiveProperty = 'IsActive';
            DamagedProductsRow.nameProperty = 'Code';
            DamagedProductsRow.localTextPrefix = 'Inventory.DamagedProducts';
            DamagedProductsRow.lookupKey = 'Inventory.DamagedProducts';
            function getLookup() {
                return Q.getLookup('Inventory.DamagedProducts');
            }
            DamagedProductsRow.getLookup = getLookup;
            DamagedProductsRow.deletePermission = 'Inventory:Damaged Product:Delete';
            DamagedProductsRow.insertPermission = 'Inventory:Damaged Product:Create';
            DamagedProductsRow.readPermission = 'Inventory:Damaged Product:View';
            DamagedProductsRow.updatePermission = 'Inventory:Damaged Product:Update';
        })(DamagedProductsRow = Inventory.DamagedProductsRow || (Inventory.DamagedProductsRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsService;
        (function (DamagedProductsService) {
            DamagedProductsService.baseUrl = 'Inventory/DamagedProducts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DamagedProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DamagedProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DamagedProductsService = Inventory.DamagedProductsService || (Inventory.DamagedProductsService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueColumns = /** @class */ (function () {
            function GoodsIssueColumns() {
            }
            GoodsIssueColumns.columnsKey = 'Inventory.GoodsIssue';
            return GoodsIssueColumns;
        }());
        Inventory.GoodsIssueColumns = GoodsIssueColumns;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsColumns = /** @class */ (function () {
            function GoodsIssueDetailsColumns() {
            }
            GoodsIssueDetailsColumns.columnsKey = 'Inventory.GoodsIssueDetails';
            return GoodsIssueDetailsColumns;
        }());
        Inventory.GoodsIssueDetailsColumns = GoodsIssueDetailsColumns;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsForm = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailsForm, _super);
            function GoodsIssueDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsIssueDetailsForm.init) {
                    GoodsIssueDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(GoodsIssueDetailsForm, [
                        'ProductId', w0,
                        'Quantity', w1,
                        'WarehouseId', w0,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            GoodsIssueDetailsForm.formKey = 'Inventory.GoodsIssueDetails';
            return GoodsIssueDetailsForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsIssueDetailsForm = GoodsIssueDetailsForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsRow;
        (function (GoodsIssueDetailsRow) {
            GoodsIssueDetailsRow.idProperty = 'Id';
            GoodsIssueDetailsRow.isActiveProperty = 'IsActive';
            GoodsIssueDetailsRow.nameProperty = 'ProductName';
            GoodsIssueDetailsRow.localTextPrefix = 'Inventory.GoodsIssueDetails';
            GoodsIssueDetailsRow.deletePermission = 'Inventory:Goods Issue:Delete';
            GoodsIssueDetailsRow.insertPermission = 'Inventory:Goods Issue:Create';
            GoodsIssueDetailsRow.readPermission = 'Inventory:Goods Issue:View';
            GoodsIssueDetailsRow.updatePermission = 'Inventory:Goods Issue:Update';
        })(GoodsIssueDetailsRow = Inventory.GoodsIssueDetailsRow || (Inventory.GoodsIssueDetailsRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsService;
        (function (GoodsIssueDetailsService) {
            GoodsIssueDetailsService.baseUrl = 'Inventory/GoodsIssueDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsIssueDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsIssueDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsIssueDetailsService = Inventory.GoodsIssueDetailsService || (Inventory.GoodsIssueDetailsService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueForm = /** @class */ (function (_super) {
            __extends(GoodsIssueForm, _super);
            function GoodsIssueForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsIssueForm.init) {
                    GoodsIssueForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = Inventory.GoodsIssueDetailEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(GoodsIssueForm, [
                        'SaleId', w0,
                        'CustomerId', w0,
                        'Date', w1,
                        'EmployeenId', w0,
                        'Reference', w2,
                        'LineItems', w3,
                        'TotalQuantity', w4,
                        'Remarks', w5,
                        'JournalRemarks', w5
                    ]);
                }
                return _this;
            }
            GoodsIssueForm.formKey = 'Inventory.GoodsIssue';
            return GoodsIssueForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsIssueForm = GoodsIssueForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueRow;
        (function (GoodsIssueRow) {
            GoodsIssueRow.idProperty = 'Id';
            GoodsIssueRow.isActiveProperty = 'IsActive';
            GoodsIssueRow.nameProperty = 'Date';
            GoodsIssueRow.localTextPrefix = 'Inventory.GoodsIssue';
            GoodsIssueRow.deletePermission = 'Inventory:Goods Issue:Delete';
            GoodsIssueRow.insertPermission = 'Inventory:Goods Issue:Create';
            GoodsIssueRow.readPermission = 'Inventory:Goods Issue:View';
            GoodsIssueRow.updatePermission = 'Inventory:Goods Issue:Update';
        })(GoodsIssueRow = Inventory.GoodsIssueRow || (Inventory.GoodsIssueRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueService;
        (function (GoodsIssueService) {
            GoodsIssueService.baseUrl = 'Inventory/GoodsIssue';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsIssueService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsIssueService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsIssueService = Inventory.GoodsIssueService || (Inventory.GoodsIssueService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptColumns = /** @class */ (function () {
            function GoodsReceiptColumns() {
            }
            GoodsReceiptColumns.columnsKey = 'Inventory.GoodsReceipt';
            return GoodsReceiptColumns;
        }());
        Inventory.GoodsReceiptColumns = GoodsReceiptColumns;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsColumns = /** @class */ (function () {
            function GoodsReceiptDetailsColumns() {
            }
            GoodsReceiptDetailsColumns.columnsKey = 'Inventory.GoodsReceiptDetails';
            return GoodsReceiptDetailsColumns;
        }());
        Inventory.GoodsReceiptDetailsColumns = GoodsReceiptDetailsColumns;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsForm = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailsForm, _super);
            function GoodsReceiptDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsReceiptDetailsForm.init) {
                    GoodsReceiptDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(GoodsReceiptDetailsForm, [
                        'ProductId', w0,
                        'Quantity', w1,
                        'WarehouseId', w0,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            GoodsReceiptDetailsForm.formKey = 'Inventory.GoodsReceiptDetails';
            return GoodsReceiptDetailsForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsReceiptDetailsForm = GoodsReceiptDetailsForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsRow;
        (function (GoodsReceiptDetailsRow) {
            GoodsReceiptDetailsRow.idProperty = 'Id';
            GoodsReceiptDetailsRow.isActiveProperty = 'IsActive';
            GoodsReceiptDetailsRow.nameProperty = 'ProductName';
            GoodsReceiptDetailsRow.localTextPrefix = 'Inventory.GoodsReceiptDetails';
            GoodsReceiptDetailsRow.deletePermission = 'Inventory:Goods Receipt:Delete';
            GoodsReceiptDetailsRow.insertPermission = 'Inventory:Goods Receipt:Create';
            GoodsReceiptDetailsRow.readPermission = 'Inventory:Goods Receipt:View';
            GoodsReceiptDetailsRow.updatePermission = 'Inventory:Goods Receipt:Update';
        })(GoodsReceiptDetailsRow = Inventory.GoodsReceiptDetailsRow || (Inventory.GoodsReceiptDetailsRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsService;
        (function (GoodsReceiptDetailsService) {
            GoodsReceiptDetailsService.baseUrl = 'Inventory/GoodsReceiptDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsReceiptDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsReceiptDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsReceiptDetailsService = Inventory.GoodsReceiptDetailsService || (Inventory.GoodsReceiptDetailsService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptForm = /** @class */ (function (_super) {
            __extends(GoodsReceiptForm, _super);
            function GoodsReceiptForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsReceiptForm.init) {
                    GoodsReceiptForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = Inventory.GoodsReceiptDetailEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(GoodsReceiptForm, [
                        'PurchaseId', w0,
                        'SupplierId', w0,
                        'Date', w1,
                        'EmployeenId', w0,
                        'Reference', w2,
                        'LineItems', w3,
                        'TotalQuantity', w4,
                        'Remarks', w5,
                        'JournalRemarks', w5
                    ]);
                }
                return _this;
            }
            GoodsReceiptForm.formKey = 'Inventory.GoodsReceipt';
            return GoodsReceiptForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsReceiptForm = GoodsReceiptForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptRow;
        (function (GoodsReceiptRow) {
            GoodsReceiptRow.idProperty = 'Id';
            GoodsReceiptRow.isActiveProperty = 'IsActive';
            GoodsReceiptRow.nameProperty = 'Date';
            GoodsReceiptRow.localTextPrefix = 'Inventory.GoodsReceipt';
            GoodsReceiptRow.deletePermission = 'Inventory:Goods Receipt:Delete';
            GoodsReceiptRow.insertPermission = 'Inventory:Goods Receipt:Create';
            GoodsReceiptRow.readPermission = 'Inventory:Goods Receipt:View';
            GoodsReceiptRow.updatePermission = 'Inventory:Goods Receipt:Update';
        })(GoodsReceiptRow = Inventory.GoodsReceiptRow || (Inventory.GoodsReceiptRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptService;
        (function (GoodsReceiptService) {
            GoodsReceiptService.baseUrl = 'Inventory/GoodsReceipt';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsReceiptService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsReceiptService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsReceiptService = Inventory.GoodsReceiptService || (Inventory.GoodsReceiptService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var UpdateStocksColumns = /** @class */ (function () {
            function UpdateStocksColumns() {
            }
            UpdateStocksColumns.columnsKey = 'Inventory.UpdateStocks';
            return UpdateStocksColumns;
        }());
        Inventory.UpdateStocksColumns = UpdateStocksColumns;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var UpdateStocksForm = /** @class */ (function (_super) {
            __extends(UpdateStocksForm, _super);
            function UpdateStocksForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UpdateStocksForm.init) {
                    UpdateStocksForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(UpdateStocksForm, [
                        'ProductId', w0,
                        'Quantity', w1,
                        'WarehouseId', w0,
                        'StockMode', w2,
                        'Status', w2,
                        'Note', w3
                    ]);
                }
                return _this;
            }
            UpdateStocksForm.formKey = 'Inventory.UpdateStocks';
            return UpdateStocksForm;
        }(Serenity.PrefixedContext));
        Inventory.UpdateStocksForm = UpdateStocksForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var UpdateStocksRow;
        (function (UpdateStocksRow) {
            UpdateStocksRow.idProperty = 'Id';
            UpdateStocksRow.nameProperty = 'Mode';
            UpdateStocksRow.localTextPrefix = 'Inventory.UpdateStocks';
            UpdateStocksRow.deletePermission = 'Inventory:Stocks:Delete';
            UpdateStocksRow.insertPermission = 'Inventory:Stocks:Create';
            UpdateStocksRow.readPermission = 'Inventory:Stocks:View';
            UpdateStocksRow.updatePermission = 'Inventory:Stocks:Update';
        })(UpdateStocksRow = Inventory.UpdateStocksRow || (Inventory.UpdateStocksRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var UpdateStocksService;
        (function (UpdateStocksService) {
            UpdateStocksService.baseUrl = 'Inventory/UpdateStocks';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UpdateStocksService[x] = function (r, s, o) {
                    return Q.serviceRequest(UpdateStocksService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UpdateStocksService = Inventory.UpdateStocksService || (Inventory.UpdateStocksService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesColumns = /** @class */ (function () {
            function AgendaItemTypesColumns() {
            }
            AgendaItemTypesColumns.columnsKey = 'Masters.AgendaItemTypes';
            return AgendaItemTypesColumns;
        }());
        Masters.AgendaItemTypesColumns = AgendaItemTypesColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesForm = /** @class */ (function (_super) {
            __extends(AgendaItemTypesForm, _super);
            function AgendaItemTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AgendaItemTypesForm.init) {
                    AgendaItemTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AgendaItemTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            AgendaItemTypesForm.formKey = 'Masters.AgendaItemTypes';
            return AgendaItemTypesForm;
        }(Serenity.PrefixedContext));
        Masters.AgendaItemTypesForm = AgendaItemTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesRow;
        (function (AgendaItemTypesRow) {
            AgendaItemTypesRow.idProperty = 'Id';
            AgendaItemTypesRow.isActiveProperty = 'IsActive';
            AgendaItemTypesRow.nameProperty = 'Name';
            AgendaItemTypesRow.localTextPrefix = 'Masters.AgendaItemTypes';
            AgendaItemTypesRow.lookupKey = 'Masters.AgendaItemTypes';
            function getLookup() {
                return Q.getLookup('Masters.AgendaItemTypes');
            }
            AgendaItemTypesRow.getLookup = getLookup;
            AgendaItemTypesRow.deletePermission = 'Masters:Agenda Item Types:Delete';
            AgendaItemTypesRow.insertPermission = 'Masters:Agenda Item Types:Create';
            AgendaItemTypesRow.readPermission = 'Masters:Agenda Item Types:View';
            AgendaItemTypesRow.updatePermission = 'Masters:Agenda Item Types:Update';
        })(AgendaItemTypesRow = Masters.AgendaItemTypesRow || (Masters.AgendaItemTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesService;
        (function (AgendaItemTypesService) {
            AgendaItemTypesService.baseUrl = 'Masters/AgendaItemTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AgendaItemTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgendaItemTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgendaItemTypesService = Masters.AgendaItemTypesService || (Masters.AgendaItemTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesColumns = /** @class */ (function () {
            function AttendanceStatusesColumns() {
            }
            AttendanceStatusesColumns.columnsKey = 'Masters.AttendanceStatuses';
            return AttendanceStatusesColumns;
        }());
        Masters.AttendanceStatusesColumns = AttendanceStatusesColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesForm = /** @class */ (function (_super) {
            __extends(AttendanceStatusesForm, _super);
            function AttendanceStatusesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendanceStatusesForm.init) {
                    AttendanceStatusesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AttendanceStatusesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            AttendanceStatusesForm.formKey = 'Masters.AttendanceStatuses';
            return AttendanceStatusesForm;
        }(Serenity.PrefixedContext));
        Masters.AttendanceStatusesForm = AttendanceStatusesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesRow;
        (function (AttendanceStatusesRow) {
            AttendanceStatusesRow.idProperty = 'Id';
            AttendanceStatusesRow.isActiveProperty = 'IsActive';
            AttendanceStatusesRow.nameProperty = 'Name';
            AttendanceStatusesRow.localTextPrefix = 'Masters.AttendanceStatuses';
            AttendanceStatusesRow.lookupKey = 'Masters.AttendanceStatuses';
            function getLookup() {
                return Q.getLookup('Masters.AttendanceStatuses');
            }
            AttendanceStatusesRow.getLookup = getLookup;
            AttendanceStatusesRow.deletePermission = 'Masters:Attendance Statuses:Delete';
            AttendanceStatusesRow.insertPermission = 'Masters:Attendance Statuses:Create';
            AttendanceStatusesRow.readPermission = 'Masters:Attendance Statusess:View';
            AttendanceStatusesRow.updatePermission = 'Masters:Attendance Statuses:Update';
        })(AttendanceStatusesRow = Masters.AttendanceStatusesRow || (Masters.AttendanceStatusesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesService;
        (function (AttendanceStatusesService) {
            AttendanceStatusesService.baseUrl = 'Masters/AttendanceStatuses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AttendanceStatusesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendanceStatusesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendanceStatusesService = Masters.AttendanceStatusesService || (Masters.AttendanceStatusesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesColumns = /** @class */ (function () {
            function AttendeeTypesColumns() {
            }
            AttendeeTypesColumns.columnsKey = 'Masters.AttendeeTypes';
            return AttendeeTypesColumns;
        }());
        Masters.AttendeeTypesColumns = AttendeeTypesColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesForm = /** @class */ (function (_super) {
            __extends(AttendeeTypesForm, _super);
            function AttendeeTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendeeTypesForm.init) {
                    AttendeeTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AttendeeTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            AttendeeTypesForm.formKey = 'Masters.AttendeeTypes';
            return AttendeeTypesForm;
        }(Serenity.PrefixedContext));
        Masters.AttendeeTypesForm = AttendeeTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesRow;
        (function (AttendeeTypesRow) {
            AttendeeTypesRow.idProperty = 'Id';
            AttendeeTypesRow.isActiveProperty = 'IsActive';
            AttendeeTypesRow.nameProperty = 'Name';
            AttendeeTypesRow.localTextPrefix = 'Masters.AttendeeTypes';
            AttendeeTypesRow.lookupKey = 'Masters.AttendeeTypes';
            function getLookup() {
                return Q.getLookup('Masters.AttendeeTypes');
            }
            AttendeeTypesRow.getLookup = getLookup;
            AttendeeTypesRow.deletePermission = 'Masters:Attendee Types:Delete';
            AttendeeTypesRow.insertPermission = 'Masters:Attendee Types:Create';
            AttendeeTypesRow.readPermission = 'Masters:Attendee Types:View';
            AttendeeTypesRow.updatePermission = 'Masters:Attendee Types:Update';
        })(AttendeeTypesRow = Masters.AttendeeTypesRow || (Masters.AttendeeTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesService;
        (function (AttendeeTypesService) {
            AttendeeTypesService.baseUrl = 'Masters/AttendeeTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AttendeeTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendeeTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendeeTypesService = Masters.AttendeeTypesService || (Masters.AttendeeTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsColumns = /** @class */ (function () {
            function CustomerGroupsColumns() {
            }
            CustomerGroupsColumns.columnsKey = 'Masters.CustomerGroups';
            return CustomerGroupsColumns;
        }());
        Masters.CustomerGroupsColumns = CustomerGroupsColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsForm = /** @class */ (function (_super) {
            __extends(CustomerGroupsForm, _super);
            function CustomerGroupsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerGroupsForm.init) {
                    CustomerGroupsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CustomerGroupsForm, [
                        'Name', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            CustomerGroupsForm.formKey = 'Masters.CustomerGroups';
            return CustomerGroupsForm;
        }(Serenity.PrefixedContext));
        Masters.CustomerGroupsForm = CustomerGroupsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsRow;
        (function (CustomerGroupsRow) {
            CustomerGroupsRow.idProperty = 'Id';
            CustomerGroupsRow.isActiveProperty = 'IsActive';
            CustomerGroupsRow.nameProperty = 'Name';
            CustomerGroupsRow.localTextPrefix = 'Masters.CustomerGroups';
            CustomerGroupsRow.lookupKey = 'Masters.CustomerGroups';
            function getLookup() {
                return Q.getLookup('Masters.CustomerGroups');
            }
            CustomerGroupsRow.getLookup = getLookup;
            CustomerGroupsRow.deletePermission = 'Masters:Customer Groups:Delete';
            CustomerGroupsRow.insertPermission = 'Masters:Customer Groups:Create';
            CustomerGroupsRow.readPermission = 'Masters:Customer Groups:View';
            CustomerGroupsRow.updatePermission = 'Masters:Customer Groups:Update';
        })(CustomerGroupsRow = Masters.CustomerGroupsRow || (Masters.CustomerGroupsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsService;
        (function (CustomerGroupsService) {
            CustomerGroupsService.baseUrl = 'Masters/CustomerGroups';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CustomerGroupsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerGroupsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerGroupsService = Masters.CustomerGroupsService || (Masters.CustomerGroupsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var DeductionsColumns = /** @class */ (function () {
            function DeductionsColumns() {
            }
            DeductionsColumns.columnsKey = 'Masters.Deductions';
            return DeductionsColumns;
        }());
        Masters.DeductionsColumns = DeductionsColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var DeductionsForm = /** @class */ (function (_super) {
            __extends(DeductionsForm, _super);
            function DeductionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DeductionsForm.init) {
                    DeductionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DeductionsForm, [
                        'Name', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            DeductionsForm.formKey = 'Masters.Deductions';
            return DeductionsForm;
        }(Serenity.PrefixedContext));
        Masters.DeductionsForm = DeductionsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var DeductionsRow;
        (function (DeductionsRow) {
            DeductionsRow.idProperty = 'Id';
            DeductionsRow.isActiveProperty = 'IsActive';
            DeductionsRow.nameProperty = 'Name';
            DeductionsRow.localTextPrefix = 'Masters.Deductions';
            DeductionsRow.lookupKey = 'Masters.Deductions';
            function getLookup() {
                return Q.getLookup('Masters.Deductions');
            }
            DeductionsRow.getLookup = getLookup;
            DeductionsRow.deletePermission = 'Masters:Deductions:Delete';
            DeductionsRow.insertPermission = 'Masters:Deductions:Create';
            DeductionsRow.readPermission = 'Masters:Deductions:View';
            DeductionsRow.updatePermission = 'Masters:Deductions:Update';
        })(DeductionsRow = Masters.DeductionsRow || (Masters.DeductionsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var DeductionsService;
        (function (DeductionsService) {
            DeductionsService.baseUrl = 'Masters/Deductions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DeductionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DeductionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DeductionsService = Masters.DeductionsService || (Masters.DeductionsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var IncomesColumns = /** @class */ (function () {
            function IncomesColumns() {
            }
            IncomesColumns.columnsKey = 'Masters.Incomes';
            return IncomesColumns;
        }());
        Masters.IncomesColumns = IncomesColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var IncomesForm = /** @class */ (function (_super) {
            __extends(IncomesForm, _super);
            function IncomesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IncomesForm.init) {
                    IncomesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(IncomesForm, [
                        'Name', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            IncomesForm.formKey = 'Masters.Incomes';
            return IncomesForm;
        }(Serenity.PrefixedContext));
        Masters.IncomesForm = IncomesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var IncomesRow;
        (function (IncomesRow) {
            IncomesRow.idProperty = 'Id';
            IncomesRow.isActiveProperty = 'IsActive';
            IncomesRow.nameProperty = 'Name';
            IncomesRow.localTextPrefix = 'Masters.Incomes';
            IncomesRow.lookupKey = 'Masters.Incomes';
            function getLookup() {
                return Q.getLookup('Masters.Incomes');
            }
            IncomesRow.getLookup = getLookup;
            IncomesRow.deletePermission = 'Masters:Incomes:Delete';
            IncomesRow.insertPermission = 'Masters:Incomes:Create';
            IncomesRow.readPermission = 'Masters:Incomes:View';
            IncomesRow.updatePermission = 'Masters:Incomes:Update';
        })(IncomesRow = Masters.IncomesRow || (Masters.IncomesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var IncomesService;
        (function (IncomesService) {
            IncomesService.baseUrl = 'Masters/Incomes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IncomesService[x] = function (r, s, o) {
                    return Q.serviceRequest(IncomesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IncomesService = Masters.IncomesService || (Masters.IncomesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsColumns = /** @class */ (function () {
            function LocationsColumns() {
            }
            LocationsColumns.columnsKey = 'Masters.Locations';
            return LocationsColumns;
        }());
        Masters.LocationsColumns = LocationsColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsForm = /** @class */ (function (_super) {
            __extends(LocationsForm, _super);
            function LocationsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LocationsForm.init) {
                    LocationsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(LocationsForm, [
                        'Name', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'Address', w0,
                        'Latitude', w0,
                        'Longitude', w0
                    ]);
                }
                return _this;
            }
            LocationsForm.formKey = 'Masters.Locations';
            return LocationsForm;
        }(Serenity.PrefixedContext));
        Masters.LocationsForm = LocationsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsRow;
        (function (LocationsRow) {
            LocationsRow.idProperty = 'Id';
            LocationsRow.isActiveProperty = 'IsActive';
            LocationsRow.nameProperty = 'Name';
            LocationsRow.localTextPrefix = 'Masters.Locations';
            LocationsRow.lookupKey = 'Masters.Locations';
            function getLookup() {
                return Q.getLookup('Masters.Locations');
            }
            LocationsRow.getLookup = getLookup;
            LocationsRow.deletePermission = 'Masters:Locations:Delete';
            LocationsRow.insertPermission = 'Masters:Locations:Create';
            LocationsRow.readPermission = 'Masters:Locations:View';
            LocationsRow.updatePermission = 'Masters:Locations:Update';
        })(LocationsRow = Masters.LocationsRow || (Masters.LocationsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsService;
        (function (LocationsService) {
            LocationsService.baseUrl = 'Masters/Locations';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                LocationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(LocationsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LocationsService = Masters.LocationsService || (Masters.LocationsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesColumns = /** @class */ (function () {
            function MeetingTypesColumns() {
            }
            MeetingTypesColumns.columnsKey = 'Masters.MeetingTypes';
            return MeetingTypesColumns;
        }());
        Masters.MeetingTypesColumns = MeetingTypesColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesForm = /** @class */ (function (_super) {
            __extends(MeetingTypesForm, _super);
            function MeetingTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeetingTypesForm.init) {
                    MeetingTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MeetingTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            MeetingTypesForm.formKey = 'Masters.MeetingTypes';
            return MeetingTypesForm;
        }(Serenity.PrefixedContext));
        Masters.MeetingTypesForm = MeetingTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesRow;
        (function (MeetingTypesRow) {
            MeetingTypesRow.idProperty = 'Id';
            MeetingTypesRow.isActiveProperty = 'IsActive';
            MeetingTypesRow.nameProperty = 'Name';
            MeetingTypesRow.localTextPrefix = 'Masters.MeetingTypes';
            MeetingTypesRow.lookupKey = 'Masters.MeetingTypes';
            function getLookup() {
                return Q.getLookup('Masters.MeetingTypes');
            }
            MeetingTypesRow.getLookup = getLookup;
            MeetingTypesRow.deletePermission = 'Masters:Meeting Types:Delete';
            MeetingTypesRow.insertPermission = 'Masters:Meeting Types:Create';
            MeetingTypesRow.readPermission = 'Masters:Meeting Types:View';
            MeetingTypesRow.updatePermission = 'Masters:Meeting Types:Update';
        })(MeetingTypesRow = Masters.MeetingTypesRow || (Masters.MeetingTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesService;
        (function (MeetingTypesService) {
            MeetingTypesService.baseUrl = 'Masters/MeetingTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                MeetingTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeetingTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeetingTypesService = Masters.MeetingTypesService || (Masters.MeetingTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesColumns = /** @class */ (function () {
            function ResolutionStatusesColumns() {
            }
            ResolutionStatusesColumns.columnsKey = 'Masters.ResolutionStatuses';
            return ResolutionStatusesColumns;
        }());
        Masters.ResolutionStatusesColumns = ResolutionStatusesColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesForm = /** @class */ (function (_super) {
            __extends(ResolutionStatusesForm, _super);
            function ResolutionStatusesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResolutionStatusesForm.init) {
                    ResolutionStatusesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ResolutionStatusesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            ResolutionStatusesForm.formKey = 'Masters.ResolutionStatuses';
            return ResolutionStatusesForm;
        }(Serenity.PrefixedContext));
        Masters.ResolutionStatusesForm = ResolutionStatusesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesRow;
        (function (ResolutionStatusesRow) {
            ResolutionStatusesRow.idProperty = 'Id';
            ResolutionStatusesRow.isActiveProperty = 'IsActive';
            ResolutionStatusesRow.nameProperty = 'Name';
            ResolutionStatusesRow.localTextPrefix = 'Masters.ResolutionStatuses';
            ResolutionStatusesRow.lookupKey = 'Masters.ResolutionStatuses';
            function getLookup() {
                return Q.getLookup('Masters.ResolutionStatuses');
            }
            ResolutionStatusesRow.getLookup = getLookup;
            ResolutionStatusesRow.deletePermission = 'Masters:Resolution Statuses:Delete';
            ResolutionStatusesRow.insertPermission = 'Masters:Resolution Statuses:Create';
            ResolutionStatusesRow.readPermission = 'Masters:Resolution Statuses:View';
            ResolutionStatusesRow.updatePermission = 'Masters:Resolution Statuses:Update';
        })(ResolutionStatusesRow = Masters.ResolutionStatusesRow || (Masters.ResolutionStatusesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesService;
        (function (ResolutionStatusesService) {
            ResolutionStatusesService.baseUrl = 'Masters/ResolutionStatuses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ResolutionStatusesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ResolutionStatusesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ResolutionStatusesService = Masters.ResolutionStatusesService || (Masters.ResolutionStatusesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsColumns = /** @class */ (function () {
            function SupplierGroupsColumns() {
            }
            SupplierGroupsColumns.columnsKey = 'Masters.SupplierGroups';
            return SupplierGroupsColumns;
        }());
        Masters.SupplierGroupsColumns = SupplierGroupsColumns;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsForm = /** @class */ (function (_super) {
            __extends(SupplierGroupsForm, _super);
            function SupplierGroupsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierGroupsForm.init) {
                    SupplierGroupsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierGroupsForm, [
                        'Name', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            SupplierGroupsForm.formKey = 'Masters.SupplierGroups';
            return SupplierGroupsForm;
        }(Serenity.PrefixedContext));
        Masters.SupplierGroupsForm = SupplierGroupsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsRow;
        (function (SupplierGroupsRow) {
            SupplierGroupsRow.idProperty = 'Id';
            SupplierGroupsRow.isActiveProperty = 'IsActive';
            SupplierGroupsRow.nameProperty = 'Name';
            SupplierGroupsRow.localTextPrefix = 'Masters.SupplierGroups';
            SupplierGroupsRow.lookupKey = 'Masters.SupplierGroups';
            function getLookup() {
                return Q.getLookup('Masters.SupplierGroups');
            }
            SupplierGroupsRow.getLookup = getLookup;
            SupplierGroupsRow.deletePermission = 'Masters:Supplier Groups:Delete';
            SupplierGroupsRow.insertPermission = 'Masters:Supplier Groups:Create';
            SupplierGroupsRow.readPermission = 'Masters:Supplier Groups:View';
            SupplierGroupsRow.updatePermission = 'Masters:Supplier Groups:Update';
        })(SupplierGroupsRow = Masters.SupplierGroupsRow || (Masters.SupplierGroupsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsService;
        (function (SupplierGroupsService) {
            SupplierGroupsService.baseUrl = 'Masters/SupplierGroups';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SupplierGroupsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierGroupsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierGroupsService = Masters.SupplierGroupsService || (Masters.SupplierGroupsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsColumns = /** @class */ (function () {
            function AgendaDecisionsColumns() {
            }
            AgendaDecisionsColumns.columnsKey = 'Meeting.AgendaDecisions';
            return AgendaDecisionsColumns;
        }());
        Meeting.AgendaDecisionsColumns = AgendaDecisionsColumns;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsForm = /** @class */ (function (_super) {
            __extends(AgendaDecisionsForm, _super);
            function AgendaDecisionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AgendaDecisionsForm.init) {
                    AgendaDecisionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.IntegerEditor;
                    var w5 = s.ImageUploadEditor;
                    Q.initFormType(AgendaDecisionsForm, [
                        'Meeting', w0,
                        'Description', w1,
                        'DueDate', w2,
                        'AssignedTo', w3,
                        'DecisionNumber', w4,
                        'RelatedAgendaItem', w3,
                        'ResolutionStatus', w3,
                        'Images', w5,
                        'Attachments', w5
                    ]);
                }
                return _this;
            }
            AgendaDecisionsForm.formKey = 'Meeting.AgendaDecisions';
            return AgendaDecisionsForm;
        }(Serenity.PrefixedContext));
        Meeting.AgendaDecisionsForm = AgendaDecisionsForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsRow;
        (function (AgendaDecisionsRow) {
            AgendaDecisionsRow.idProperty = 'Id';
            AgendaDecisionsRow.isActiveProperty = 'IsActive';
            AgendaDecisionsRow.nameProperty = 'Description';
            AgendaDecisionsRow.localTextPrefix = 'Meeting.AgendaDecisions';
            AgendaDecisionsRow.lookupKey = 'Meetings.AgendaDecisions';
            function getLookup() {
                return Q.getLookup('Meetings.AgendaDecisions');
            }
            AgendaDecisionsRow.getLookup = getLookup;
            AgendaDecisionsRow.deletePermission = 'Masters:Meeting:Delete';
            AgendaDecisionsRow.insertPermission = 'Masters:Meeting:Create';
            AgendaDecisionsRow.readPermission = 'Masters:Meeting:View';
            AgendaDecisionsRow.updatePermission = 'Masters:Meeting:Update';
        })(AgendaDecisionsRow = Meeting.AgendaDecisionsRow || (Meeting.AgendaDecisionsRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsService;
        (function (AgendaDecisionsService) {
            AgendaDecisionsService.baseUrl = 'Meeting/AgendaDecisions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AgendaDecisionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgendaDecisionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgendaDecisionsService = Meeting.AgendaDecisionsService || (Meeting.AgendaDecisionsService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsColumns = /** @class */ (function () {
            function AgendaItemsColumns() {
            }
            AgendaItemsColumns.columnsKey = 'Meeting.AgendaItems';
            return AgendaItemsColumns;
        }());
        Meeting.AgendaItemsColumns = AgendaItemsColumns;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsForm = /** @class */ (function (_super) {
            __extends(AgendaItemsForm, _super);
            function AgendaItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AgendaItemsForm.init) {
                    AgendaItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.ImageUploadEditor;
                    Q.initFormType(AgendaItemsForm, [
                        'Meeting', w0,
                        'Title', w0,
                        'Description', w1,
                        'ItemType', w2,
                        'RequestedBy', w2,
                        'SequenceNo', w3,
                        'Images', w4,
                        'Attachments', w4
                    ]);
                }
                return _this;
            }
            AgendaItemsForm.formKey = 'Meeting.AgendaItems';
            return AgendaItemsForm;
        }(Serenity.PrefixedContext));
        Meeting.AgendaItemsForm = AgendaItemsForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsRow;
        (function (AgendaItemsRow) {
            AgendaItemsRow.idProperty = 'Id';
            AgendaItemsRow.isActiveProperty = 'IsActive';
            AgendaItemsRow.nameProperty = 'Title';
            AgendaItemsRow.localTextPrefix = 'Meeting.AgendaItems';
            AgendaItemsRow.lookupKey = 'Meetings.AgendaItems';
            function getLookup() {
                return Q.getLookup('Meetings.AgendaItems');
            }
            AgendaItemsRow.getLookup = getLookup;
            AgendaItemsRow.deletePermission = 'Masters:Meeting:Delete';
            AgendaItemsRow.insertPermission = 'Masters:Meeting:Create';
            AgendaItemsRow.readPermission = 'Masters:Meeting:View';
            AgendaItemsRow.updatePermission = 'Masters:Meeting:Update';
        })(AgendaItemsRow = Meeting.AgendaItemsRow || (Meeting.AgendaItemsRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsService;
        (function (AgendaItemsService) {
            AgendaItemsService.baseUrl = 'Meeting/AgendaItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AgendaItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgendaItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgendaItemsService = Meeting.AgendaItemsService || (Meeting.AgendaItemsService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesColumns = /** @class */ (function () {
            function MeetingAttendeesColumns() {
            }
            MeetingAttendeesColumns.columnsKey = 'Meeting.MeetingAttendees';
            return MeetingAttendeesColumns;
        }());
        Meeting.MeetingAttendeesColumns = MeetingAttendeesColumns;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesForm = /** @class */ (function (_super) {
            __extends(MeetingAttendeesForm, _super);
            function MeetingAttendeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeetingAttendeesForm.init) {
                    MeetingAttendeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(MeetingAttendeesForm, [
                        'Attendee', w0,
                        'AttendeeType', w0,
                        'AttendanceStatus', w0
                    ]);
                }
                return _this;
            }
            MeetingAttendeesForm.formKey = 'Meeting.MeetingAttendees';
            return MeetingAttendeesForm;
        }(Serenity.PrefixedContext));
        Meeting.MeetingAttendeesForm = MeetingAttendeesForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesRow;
        (function (MeetingAttendeesRow) {
            MeetingAttendeesRow.idProperty = 'Id';
            MeetingAttendeesRow.isActiveProperty = 'IsActive';
            MeetingAttendeesRow.localTextPrefix = 'Meeting.MeetingAttendees';
            MeetingAttendeesRow.lookupKey = 'Meetings.MeetingAttendees';
            function getLookup() {
                return Q.getLookup('Meetings.MeetingAttendees');
            }
            MeetingAttendeesRow.getLookup = getLookup;
            MeetingAttendeesRow.deletePermission = 'Masters:Meeting:Delete';
            MeetingAttendeesRow.insertPermission = 'Masters:Meeting:Create';
            MeetingAttendeesRow.readPermission = 'Masters:Meeting:View';
            MeetingAttendeesRow.updatePermission = 'Masters:Meeting:Update';
        })(MeetingAttendeesRow = Meeting.MeetingAttendeesRow || (Meeting.MeetingAttendeesRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesService;
        (function (MeetingAttendeesService) {
            MeetingAttendeesService.baseUrl = 'Meeting/MeetingAttendees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                MeetingAttendeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeetingAttendeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeetingAttendeesService = Meeting.MeetingAttendeesService || (Meeting.MeetingAttendeesService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsColumns = /** @class */ (function () {
            function MeetingsColumns() {
            }
            MeetingsColumns.columnsKey = 'Meeting.Meetings';
            return MeetingsColumns;
        }());
        Meeting.MeetingsColumns = MeetingsColumns;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsForm = /** @class */ (function (_super) {
            __extends(MeetingsForm, _super);
            function MeetingsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeetingsForm.init) {
                    MeetingsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateTimeEditor;
                    var w3 = Meeting.MeetingAttendeesEditor;
                    var w4 = Meeting.AgendaItemsEditor;
                    var w5 = Meeting.AgendaDecisionsEditor;
                    Q.initFormType(MeetingsForm, [
                        'MeetingName', w0,
                        'MeetingType', w1,
                        'StartDate', w2,
                        'EndDate', w2,
                        'Department', w1,
                        'Location', w1,
                        'OrganizedBy', w1,
                        'Reporter', w1,
                        'Attendees', w3,
                        'AgendaItems', w4,
                        'AgendaDecisions', w5
                    ]);
                }
                return _this;
            }
            MeetingsForm.formKey = 'Meeting.Meetings';
            return MeetingsForm;
        }(Serenity.PrefixedContext));
        Meeting.MeetingsForm = MeetingsForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsRow;
        (function (MeetingsRow) {
            MeetingsRow.idProperty = 'Id';
            MeetingsRow.isActiveProperty = 'IsActive';
            MeetingsRow.nameProperty = 'MeetingName';
            MeetingsRow.localTextPrefix = 'Meeting.Meetings';
            MeetingsRow.lookupKey = 'Meetings.Meetings';
            function getLookup() {
                return Q.getLookup('Meetings.Meetings');
            }
            MeetingsRow.getLookup = getLookup;
            MeetingsRow.deletePermission = 'Masters:Meeting:Delete';
            MeetingsRow.insertPermission = 'Masters:Meeting:Create';
            MeetingsRow.readPermission = 'Masters:Meeting:View';
            MeetingsRow.updatePermission = 'Masters:Meeting:Update';
        })(MeetingsRow = Meeting.MeetingsRow || (Meeting.MeetingsRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsService;
        (function (MeetingsService) {
            MeetingsService.baseUrl = 'Meeting/Meetings';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                MeetingsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeetingsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeetingsService = Meeting.MeetingsService || (Meeting.MeetingsService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollColumns = /** @class */ (function () {
            function PayrollColumns() {
            }
            PayrollColumns.columnsKey = 'Payroll.Payroll';
            return PayrollColumns;
        }());
        Payroll.PayrollColumns = PayrollColumns;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailColumns = /** @class */ (function () {
            function PayrollDetailColumns() {
            }
            PayrollDetailColumns.columnsKey = 'Payroll.PayrollDetail';
            return PayrollDetailColumns;
        }());
        Payroll.PayrollDetailColumns = PayrollDetailColumns;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDeductionColumns = /** @class */ (function () {
            function PayrollDetailDeductionColumns() {
            }
            PayrollDetailDeductionColumns.columnsKey = 'Payroll.PayrollDetailDeduction';
            return PayrollDetailDeductionColumns;
        }());
        Payroll.PayrollDetailDeductionColumns = PayrollDetailDeductionColumns;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDeductionForm = /** @class */ (function (_super) {
            __extends(PayrollDetailDeductionForm, _super);
            function PayrollDetailDeductionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PayrollDetailDeductionForm.init) {
                    PayrollDetailDeductionForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PayrollDetailDeductionForm, [
                        'DeductionId', w0,
                        'ShortNote', w1,
                        'Amount', w2
                    ]);
                }
                return _this;
            }
            PayrollDetailDeductionForm.formKey = 'Payroll.PayrollDetailDeduction';
            return PayrollDetailDeductionForm;
        }(Serenity.PrefixedContext));
        Payroll.PayrollDetailDeductionForm = PayrollDetailDeductionForm;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDeductionRow;
        (function (PayrollDetailDeductionRow) {
            PayrollDetailDeductionRow.idProperty = 'Id';
            PayrollDetailDeductionRow.nameProperty = 'DeductionName';
            PayrollDetailDeductionRow.localTextPrefix = 'Payroll.PayrollDetailDeduction';
            PayrollDetailDeductionRow.deletePermission = 'Human Resource:Payroll:Delete';
            PayrollDetailDeductionRow.insertPermission = 'Human Resource:Payroll:Create';
            PayrollDetailDeductionRow.readPermission = 'Human Resource:Payroll:View';
            PayrollDetailDeductionRow.updatePermission = 'Human Resource:Payroll:Update';
        })(PayrollDetailDeductionRow = Payroll.PayrollDetailDeductionRow || (Payroll.PayrollDetailDeductionRow = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDeductionService;
        (function (PayrollDetailDeductionService) {
            PayrollDetailDeductionService.baseUrl = 'Payroll/PayrollDetailDeduction';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PayrollDetailDeductionService[x] = function (r, s, o) {
                    return Q.serviceRequest(PayrollDetailDeductionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PayrollDetailDeductionService = Payroll.PayrollDetailDeductionService || (Payroll.PayrollDetailDeductionService = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailForm = /** @class */ (function (_super) {
            __extends(PayrollDetailForm, _super);
            function PayrollDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PayrollDetailForm.init) {
                    PayrollDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = Payroll.PayrollDetailIncomeEditor;
                    var w4 = Payroll.PayrollDetailDeductionEditor;
                    Q.initFormType(PayrollDetailForm, [
                        'Id', w0,
                        'EmployeeId', w1,
                        'BankAccount', w0,
                        'BankName', w0,
                        'BasicSalary', w2,
                        'IncomeList', w3,
                        'DeductionList', w4,
                        'TotalIncome', w2,
                        'TotalDeduction', w2,
                        'TakeHomePay', w2
                    ]);
                }
                return _this;
            }
            PayrollDetailForm.formKey = 'Payroll.PayrollDetail';
            return PayrollDetailForm;
        }(Serenity.PrefixedContext));
        Payroll.PayrollDetailForm = PayrollDetailForm;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailIncomeColumns = /** @class */ (function () {
            function PayrollDetailIncomeColumns() {
            }
            PayrollDetailIncomeColumns.columnsKey = 'Payroll.PayrollDetailIncome';
            return PayrollDetailIncomeColumns;
        }());
        Payroll.PayrollDetailIncomeColumns = PayrollDetailIncomeColumns;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailIncomeForm = /** @class */ (function (_super) {
            __extends(PayrollDetailIncomeForm, _super);
            function PayrollDetailIncomeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PayrollDetailIncomeForm.init) {
                    PayrollDetailIncomeForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PayrollDetailIncomeForm, [
                        'IncomeId', w0,
                        'ShortNote', w1,
                        'Amount', w2
                    ]);
                }
                return _this;
            }
            PayrollDetailIncomeForm.formKey = 'Payroll.PayrollDetailIncome';
            return PayrollDetailIncomeForm;
        }(Serenity.PrefixedContext));
        Payroll.PayrollDetailIncomeForm = PayrollDetailIncomeForm;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailIncomeRow;
        (function (PayrollDetailIncomeRow) {
            PayrollDetailIncomeRow.idProperty = 'Id';
            PayrollDetailIncomeRow.nameProperty = 'IncomeName';
            PayrollDetailIncomeRow.localTextPrefix = 'Payroll.PayrollDetailIncome';
            PayrollDetailIncomeRow.deletePermission = 'Human Resource:Payroll:Delete';
            PayrollDetailIncomeRow.insertPermission = 'Human Resource:Payroll:Create';
            PayrollDetailIncomeRow.readPermission = 'Human Resource:Payroll:View';
            PayrollDetailIncomeRow.updatePermission = 'Human Resource:Payroll:Update';
        })(PayrollDetailIncomeRow = Payroll.PayrollDetailIncomeRow || (Payroll.PayrollDetailIncomeRow = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailIncomeService;
        (function (PayrollDetailIncomeService) {
            PayrollDetailIncomeService.baseUrl = 'Payroll/PayrollDetailIncome';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PayrollDetailIncomeService[x] = function (r, s, o) {
                    return Q.serviceRequest(PayrollDetailIncomeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PayrollDetailIncomeService = Payroll.PayrollDetailIncomeService || (Payroll.PayrollDetailIncomeService = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailRow;
        (function (PayrollDetailRow) {
            PayrollDetailRow.idProperty = 'Id';
            PayrollDetailRow.nameProperty = 'BankAccount';
            PayrollDetailRow.localTextPrefix = 'Payroll.PayrollDetail';
            PayrollDetailRow.deletePermission = 'Human Resource:Payroll:Delete';
            PayrollDetailRow.insertPermission = 'Human Resource:Payroll:Create';
            PayrollDetailRow.readPermission = 'Human Resource:Payroll:View';
            PayrollDetailRow.updatePermission = 'Human Resource:Payroll:Update';
        })(PayrollDetailRow = Payroll.PayrollDetailRow || (Payroll.PayrollDetailRow = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailService;
        (function (PayrollDetailService) {
            PayrollDetailService.baseUrl = 'Payroll/PayrollDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PayrollDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(PayrollDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PayrollDetailService = Payroll.PayrollDetailService || (Payroll.PayrollDetailService = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollForm = /** @class */ (function (_super) {
            __extends(PayrollForm, _super);
            function PayrollForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PayrollForm.init) {
                    PayrollForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = Payroll.PayrollDetailEditor;
                    var w4 = s.DecimalEditor;
                    Q.initFormType(PayrollForm, [
                        'Number', w0,
                        'PaymentDate', w1,
                        'CashBankId', w2,
                        'Description', w0,
                        'ItemList', w3,
                        'CurrencyName', w0,
                        'TotalBasicSalary', w4,
                        'TotalIncome', w4,
                        'TotalDeduction', w4,
                        'TotalTakeHomePay', w4,
                        'TotalPaymentAmount', w4
                    ]);
                }
                return _this;
            }
            PayrollForm.formKey = 'Payroll.Payroll';
            return PayrollForm;
        }(Serenity.PrefixedContext));
        Payroll.PayrollForm = PayrollForm;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollRow;
        (function (PayrollRow) {
            PayrollRow.idProperty = 'Id';
            PayrollRow.nameProperty = 'Number';
            PayrollRow.localTextPrefix = 'Payroll.Payroll';
            PayrollRow.deletePermission = 'Human Resource:Payroll:Delete';
            PayrollRow.insertPermission = 'Human Resource:Payroll:Create';
            PayrollRow.readPermission = 'Human Resource:Payroll:View';
            PayrollRow.updatePermission = 'Human Resource:Payroll:Update';
        })(PayrollRow = Payroll.PayrollRow || (Payroll.PayrollRow = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollService;
        (function (PayrollService) {
            PayrollService.baseUrl = 'Payroll/Payroll';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PayrollService[x] = function (r, s, o) {
                    return Q.serviceRequest(PayrollService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PayrollService = Payroll.PayrollService || (Payroll.PayrollService = {}));
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsColumns = /** @class */ (function () {
            function BrandsColumns() {
            }
            BrandsColumns.columnsKey = 'Products.Brands';
            return BrandsColumns;
        }());
        Products.BrandsColumns = BrandsColumns;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsForm = /** @class */ (function (_super) {
            __extends(BrandsForm, _super);
            function BrandsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BrandsForm.init) {
                    BrandsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(BrandsForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            BrandsForm.formKey = 'Products.Brands';
            return BrandsForm;
        }(Serenity.PrefixedContext));
        Products.BrandsForm = BrandsForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsRow;
        (function (BrandsRow) {
            BrandsRow.idProperty = 'Id';
            BrandsRow.isActiveProperty = 'IsActive';
            BrandsRow.nameProperty = 'Name';
            BrandsRow.localTextPrefix = 'Products.Brands';
            BrandsRow.lookupKey = 'Products.Brands';
            function getLookup() {
                return Q.getLookup('Products.Brands');
            }
            BrandsRow.getLookup = getLookup;
            BrandsRow.deletePermission = 'Inventory:Brand:Delete';
            BrandsRow.insertPermission = 'Inventory:Brand:Create';
            BrandsRow.readPermission = 'Inventory:Brand:View';
            BrandsRow.updatePermission = 'Inventory:Brand:Update';
        })(BrandsRow = Products.BrandsRow || (Products.BrandsRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsService;
        (function (BrandsService) {
            BrandsService.baseUrl = 'Products/Brands';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                BrandsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrandsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrandsService = Products.BrandsService || (Products.BrandsService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesColumns = /** @class */ (function () {
            function CategoriesColumns() {
            }
            CategoriesColumns.columnsKey = 'Products.Categories';
            return CategoriesColumns;
        }());
        Products.CategoriesColumns = CategoriesColumns;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesForm = /** @class */ (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesForm.init) {
                    CategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = Products.CategoriesEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CategoriesForm, [
                        'ParentCategoryId', w0,
                        'Name', w1,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            CategoriesForm.formKey = 'Products.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        Products.CategoriesForm = CategoriesForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesRow;
        (function (CategoriesRow) {
            CategoriesRow.idProperty = 'Id';
            CategoriesRow.isActiveProperty = 'IsActive';
            CategoriesRow.nameProperty = 'Name';
            CategoriesRow.localTextPrefix = 'Products.Categories';
            CategoriesRow.lookupKey = 'Products.Categories';
            function getLookup() {
                return Q.getLookup('Products.Categories');
            }
            CategoriesRow.getLookup = getLookup;
            CategoriesRow.deletePermission = 'Inventory:Category:Delete';
            CategoriesRow.insertPermission = 'Inventory:Category:Create';
            CategoriesRow.readPermission = 'Inventory:Category:View';
            CategoriesRow.updatePermission = 'Inventory:Category:Update';
        })(CategoriesRow = Products.CategoriesRow || (Products.CategoriesRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesService;
        (function (CategoriesService) {
            CategoriesService.baseUrl = 'Products/Categories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesService = Products.CategoriesService || (Products.CategoriesService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsColumns = /** @class */ (function () {
            function ProductsColumns() {
            }
            ProductsColumns.columnsKey = 'Products.Products';
            return ProductsColumns;
        }());
        Products.ProductsColumns = ProductsColumns;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsForm = /** @class */ (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsForm.init) {
                    ProductsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = Products.CategoriesEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(ProductsForm, [
                        'Barcode', w0,
                        'ProductName', w0,
                        'Sn', w0,
                        'Model', w0,
                        'UnitPrice', w1,
                        'UnitsInStock', w1,
                        'UnitsOnOrder', w1,
                        'ReorderLevel', w1,
                        'CategoryId', w2,
                        'UnitId', w3,
                        'BrandId', w3,
                        'Image', w4,
                        'ProductDetails', w5
                    ]);
                }
                return _this;
            }
            ProductsForm.formKey = 'Products.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        Products.ProductsForm = ProductsForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'Id';
            ProductsRow.isActiveProperty = 'IsActive';
            ProductsRow.nameProperty = 'ProductListName';
            ProductsRow.localTextPrefix = 'Products.Products';
            ProductsRow.lookupKey = 'Products.Products';
            function getLookup() {
                return Q.getLookup('Products.Products');
            }
            ProductsRow.getLookup = getLookup;
            ProductsRow.deletePermission = 'Inventory:Product:Delete';
            ProductsRow.insertPermission = 'Inventory:Product:Create';
            ProductsRow.readPermission = 'Inventory:Product:View';
            ProductsRow.updatePermission = 'Inventory:Product:Update';
        })(ProductsRow = Products.ProductsRow || (Products.ProductsRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'Products/Products';
            [
                'Create',
                'Update',
                'GetNextNumber',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsService = Products.ProductsService || (Products.ProductsService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsColumns = /** @class */ (function () {
            function UnitsColumns() {
            }
            UnitsColumns.columnsKey = 'Products.Units';
            return UnitsColumns;
        }());
        Products.UnitsColumns = UnitsColumns;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsForm = /** @class */ (function (_super) {
            __extends(UnitsForm, _super);
            function UnitsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnitsForm.init) {
                    UnitsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(UnitsForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            UnitsForm.formKey = 'Products.Units';
            return UnitsForm;
        }(Serenity.PrefixedContext));
        Products.UnitsForm = UnitsForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsRow;
        (function (UnitsRow) {
            UnitsRow.idProperty = 'Id';
            UnitsRow.isActiveProperty = 'IsActive';
            UnitsRow.nameProperty = 'Name';
            UnitsRow.localTextPrefix = 'Products.Units';
            UnitsRow.lookupKey = 'Products.Units';
            function getLookup() {
                return Q.getLookup('Products.Units');
            }
            UnitsRow.getLookup = getLookup;
            UnitsRow.deletePermission = 'Inventory:Unit:Delete';
            UnitsRow.insertPermission = 'Inventory:Unit:Create';
            UnitsRow.readPermission = 'Inventory:Unit:View';
            UnitsRow.updatePermission = 'Inventory:Unit:Update';
        })(UnitsRow = Products.UnitsRow || (Products.UnitsRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsService;
        (function (UnitsService) {
            UnitsService.baseUrl = 'Products/Units';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                UnitsService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnitsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnitsService = Products.UnitsService || (Products.UnitsService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases_1) {
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsColumns = /** @class */ (function () {
            function PurchaseDetailsColumns() {
            }
            PurchaseDetailsColumns.columnsKey = 'Purchases.PurchaseDetails';
            return PurchaseDetailsColumns;
        }());
        Purchases.PurchaseDetailsColumns = PurchaseDetailsColumns;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsForm = /** @class */ (function (_super) {
            __extends(PurchaseDetailsForm, _super);
            function PurchaseDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseDetailsForm.init) {
                    PurchaseDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(PurchaseDetailsForm, [
                        'BrandId', w0,
                        'ProductId', w0,
                        'UnitId', w0,
                        'Quantity', w1,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            PurchaseDetailsForm.formKey = 'Purchases.PurchaseDetails';
            return PurchaseDetailsForm;
        }(Serenity.PrefixedContext));
        Purchases.PurchaseDetailsForm = PurchaseDetailsForm;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsRow;
        (function (PurchaseDetailsRow) {
            PurchaseDetailsRow.idProperty = 'Id';
            PurchaseDetailsRow.isActiveProperty = 'IsActive';
            PurchaseDetailsRow.nameProperty = 'ProductName';
            PurchaseDetailsRow.localTextPrefix = 'Purchases.PurchaseDetails';
            PurchaseDetailsRow.deletePermission = 'Purchasing:Purchase:Delete';
            PurchaseDetailsRow.insertPermission = 'Purchasing:Purchase:Create';
            PurchaseDetailsRow.readPermission = 'Purchasing:Purchase:View';
            PurchaseDetailsRow.updatePermission = 'Purchasing:Purchase:Update';
        })(PurchaseDetailsRow = Purchases.PurchaseDetailsRow || (Purchases.PurchaseDetailsRow = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsService;
        (function (PurchaseDetailsService) {
            PurchaseDetailsService.baseUrl = 'Purchases/PurchaseDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                PurchaseDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseDetailsService = Purchases.PurchaseDetailsService || (Purchases.PurchaseDetailsService = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesColumns = /** @class */ (function () {
            function PurchasesColumns() {
            }
            PurchasesColumns.columnsKey = 'Purchases.Purchases';
            return PurchasesColumns;
        }());
        Purchases.PurchasesColumns = PurchasesColumns;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesForm = /** @class */ (function (_super) {
            __extends(PurchasesForm, _super);
            function PurchasesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchasesForm.init) {
                    PurchasesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = Purchases.PurchaseDetailEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.BooleanEditor;
                    var w6 = s.EnumEditor;
                    var w7 = s.TextAreaEditor;
                    Q.initFormType(PurchasesForm, [
                        'SupplierId', w0,
                        'InvoiceNo', w1,
                        'Date', w2,
                        'PaymentAccount', w0,
                        'LineItems', w3,
                        'GrandTotal', w4,
                        'Discount', w4,
                        'TotalDiscount', w4,
                        'NoTax', w5,
                        'Vat', w4,
                        'VatPercentage', w4,
                        'VatType', w6,
                        'TotalTax', w4,
                        'ShippingCost', w4,
                        'NetTotal', w4,
                        'PaidAmount', w4,
                        'Due', w4,
                        'Change', w4,
                        'Details', w7,
                        'RowVersion', w1
                    ]);
                }
                return _this;
            }
            PurchasesForm.formKey = 'Purchases.Purchases';
            return PurchasesForm;
        }(Serenity.PrefixedContext));
        Purchases.PurchasesForm = PurchasesForm;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesRow;
        (function (PurchasesRow) {
            PurchasesRow.idProperty = 'Id';
            PurchasesRow.isActiveProperty = 'IsActive';
            PurchasesRow.nameProperty = 'InvoiceNo';
            PurchasesRow.localTextPrefix = 'Purchases.Purchases';
            PurchasesRow.lookupKey = 'Purchases.Purchases';
            function getLookup() {
                return Q.getLookup('Purchases.Purchases');
            }
            PurchasesRow.getLookup = getLookup;
            PurchasesRow.deletePermission = 'Purchasing:Purchase:Delete';
            PurchasesRow.insertPermission = 'Purchasing:Purchase:Create';
            PurchasesRow.readPermission = 'Purchasing:Purchase:View';
            PurchasesRow.updatePermission = 'Purchasing:Purchase:Update';
        })(PurchasesRow = Purchases.PurchasesRow || (Purchases.PurchasesRow = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesService;
        (function (PurchasesService) {
            PurchasesService.baseUrl = 'Purchases/Purchases';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                PurchasesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchasesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchasesService = Purchases.PurchasesService || (Purchases.PurchasesService = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsColumns = /** @class */ (function () {
            function QuotationDetailsColumns() {
            }
            QuotationDetailsColumns.columnsKey = 'Quotations.QuotationDetails';
            return QuotationDetailsColumns;
        }());
        Quotations.QuotationDetailsColumns = QuotationDetailsColumns;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsForm = /** @class */ (function (_super) {
            __extends(QuotationDetailsForm, _super);
            function QuotationDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!QuotationDetailsForm.init) {
                    QuotationDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(QuotationDetailsForm, [
                        'BrandId', w0,
                        'ProductId', w0,
                        'UnitId', w0,
                        'Quantity', w1,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            QuotationDetailsForm.formKey = 'Quotations.QuotationDetails';
            return QuotationDetailsForm;
        }(Serenity.PrefixedContext));
        Quotations.QuotationDetailsForm = QuotationDetailsForm;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsRow;
        (function (QuotationDetailsRow) {
            QuotationDetailsRow.idProperty = 'Id';
            QuotationDetailsRow.isActiveProperty = 'IsActive';
            QuotationDetailsRow.nameProperty = 'ProductName';
            QuotationDetailsRow.localTextPrefix = 'Quotations.QuotationDetails';
            QuotationDetailsRow.deletePermission = 'Sales:Quotation:Delete';
            QuotationDetailsRow.insertPermission = 'Sales:Quotation:Create';
            QuotationDetailsRow.readPermission = 'Sales:Quotation:View';
            QuotationDetailsRow.updatePermission = 'Sales:Quotation:Update';
        })(QuotationDetailsRow = Quotations.QuotationDetailsRow || (Quotations.QuotationDetailsRow = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsService;
        (function (QuotationDetailsService) {
            QuotationDetailsService.baseUrl = 'Quotations/QuotationDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                QuotationDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(QuotationDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(QuotationDetailsService = Quotations.QuotationDetailsService || (Quotations.QuotationDetailsService = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsColumns = /** @class */ (function () {
            function QuotationsColumns() {
            }
            QuotationsColumns.columnsKey = 'Quotations.Quotations';
            return QuotationsColumns;
        }());
        Quotations.QuotationsColumns = QuotationsColumns;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsForm = /** @class */ (function (_super) {
            __extends(QuotationsForm, _super);
            function QuotationsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!QuotationsForm.init) {
                    QuotationsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = Quotations.QuotationsDetailEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.EnumEditor;
                    var w6 = s.TextAreaEditor;
                    var w7 = s.StringEditor;
                    Q.initFormType(QuotationsForm, [
                        'CustomerId', w0,
                        'Date', w1,
                        'ExpiryDate', w1,
                        'LineItems', w2,
                        'GrandTotal', w3,
                        'Discount', w3,
                        'TotalDiscount', w3,
                        'NoTax', w4,
                        'Vat', w3,
                        'VatPercentage', w3,
                        'VatType', w5,
                        'TotalTax', w3,
                        'ShippingCost', w3,
                        'NetTotal', w3,
                        'Details', w6,
                        'RowVersion', w7
                    ]);
                }
                return _this;
            }
            QuotationsForm.formKey = 'Quotations.Quotations';
            return QuotationsForm;
        }(Serenity.PrefixedContext));
        Quotations.QuotationsForm = QuotationsForm;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsRow;
        (function (QuotationsRow) {
            QuotationsRow.idProperty = 'Id';
            QuotationsRow.isActiveProperty = 'IsActive';
            QuotationsRow.nameProperty = 'Date';
            QuotationsRow.localTextPrefix = 'Quotations.Quotations';
            QuotationsRow.lookupKey = 'Quotations.Quotations';
            function getLookup() {
                return Q.getLookup('Quotations.Quotations');
            }
            QuotationsRow.getLookup = getLookup;
            QuotationsRow.deletePermission = 'Sales:Quotation:Delete';
            QuotationsRow.insertPermission = 'Sales:Quotation:Create';
            QuotationsRow.readPermission = 'Sales:Quotation:View';
            QuotationsRow.updatePermission = 'Sales:Quotation:Update';
        })(QuotationsRow = Quotations.QuotationsRow || (Quotations.QuotationsRow = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsService;
        (function (QuotationsService) {
            QuotationsService.baseUrl = 'Quotations/Quotations';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                QuotationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(QuotationsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(QuotationsService = Quotations.QuotationsService || (Quotations.QuotationsService = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var RateKind;
    (function (RateKind) {
        RateKind[RateKind["Hourly"] = 1] = "Hourly";
        RateKind[RateKind["Salary"] = 2] = "Salary";
    })(RateKind = SmartERP.RateKind || (SmartERP.RateKind = {}));
    Serenity.Decorators.registerEnumType(RateKind, 'SmartERP.RateKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var CustomerReceivableReportColumns = /** @class */ (function () {
            function CustomerReceivableReportColumns() {
            }
            CustomerReceivableReportColumns.columnsKey = 'Reports.CustomerReceivableReport';
            return CustomerReceivableReportColumns;
        }());
        Reports.CustomerReceivableReportColumns = CustomerReceivableReportColumns;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingColumns = /** @class */ (function () {
            function DailyClosingColumns() {
            }
            DailyClosingColumns.columnsKey = 'Reports.DailyClosing';
            return DailyClosingColumns;
        }());
        Reports.DailyClosingColumns = DailyClosingColumns;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingForm = /** @class */ (function (_super) {
            __extends(DailyClosingForm, _super);
            function DailyClosingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DailyClosingForm.init) {
                    DailyClosingForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(DailyClosingForm, [
                        'Date', w0,
                        'LastDayClosing', w1,
                        'CashIn', w1,
                        'CashOut', w1,
                        'Amount', w1
                    ]);
                }
                return _this;
            }
            DailyClosingForm.formKey = 'Reports.DailyClosing';
            return DailyClosingForm;
        }(Serenity.PrefixedContext));
        Reports.DailyClosingForm = DailyClosingForm;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingRow;
        (function (DailyClosingRow) {
            DailyClosingRow.idProperty = 'Id';
            DailyClosingRow.localTextPrefix = 'Reports.DailyClosing';
            DailyClosingRow.deletePermission = 'Report:Daily Closing Report';
            DailyClosingRow.insertPermission = 'Report:Daily Closing Report';
            DailyClosingRow.readPermission = 'Report:Daily Closing Report';
            DailyClosingRow.updatePermission = 'Report:Daily Closing Report';
        })(DailyClosingRow = Reports.DailyClosingRow || (Reports.DailyClosingRow = {}));
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingService;
        (function (DailyClosingService) {
            DailyClosingService.baseUrl = 'Reports/DailyClosing';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DailyClosingService[x] = function (r, s, o) {
                    return Q.serviceRequest(DailyClosingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DailyClosingService = Reports.DailyClosingService || (Reports.DailyClosingService = {}));
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports_1) {
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var StockReportColumns = /** @class */ (function () {
            function StockReportColumns() {
            }
            StockReportColumns.columnsKey = 'Reports.StockReport';
            return StockReportColumns;
        }());
        Reports.StockReportColumns = StockReportColumns;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var SupplierPayableReportColumns = /** @class */ (function () {
            function SupplierPayableReportColumns() {
            }
            SupplierPayableReportColumns.columnsKey = 'Reports.SupplierPayableReport';
            return SupplierPayableReportColumns;
        }());
        Reports.SupplierPayableReportColumns = SupplierPayableReportColumns;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales_1) {
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsColumns = /** @class */ (function () {
            function SaleDetailsColumns() {
            }
            SaleDetailsColumns.columnsKey = 'Sales.SaleDetails';
            return SaleDetailsColumns;
        }());
        Sales.SaleDetailsColumns = SaleDetailsColumns;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsForm = /** @class */ (function (_super) {
            __extends(SaleDetailsForm, _super);
            function SaleDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SaleDetailsForm.init) {
                    SaleDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(SaleDetailsForm, [
                        'BrandId', w0,
                        'ProductId', w0,
                        'UnitId', w0,
                        'Quantity', w1,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            SaleDetailsForm.formKey = 'Sales.SaleDetails';
            return SaleDetailsForm;
        }(Serenity.PrefixedContext));
        Sales.SaleDetailsForm = SaleDetailsForm;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsRow;
        (function (SaleDetailsRow) {
            SaleDetailsRow.idProperty = 'Id';
            SaleDetailsRow.isActiveProperty = 'IsActive';
            SaleDetailsRow.nameProperty = 'ProductName';
            SaleDetailsRow.localTextPrefix = 'Sales.SaleDetails';
            SaleDetailsRow.deletePermission = 'Sales:Sale:Delete';
            SaleDetailsRow.insertPermission = 'Sales:Sale:Create';
            SaleDetailsRow.readPermission = 'Sales:Sale:View';
            SaleDetailsRow.updatePermission = 'Sales:Sale:Update';
        })(SaleDetailsRow = Sales.SaleDetailsRow || (Sales.SaleDetailsRow = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsService;
        (function (SaleDetailsService) {
            SaleDetailsService.baseUrl = 'Sales/SaleDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SaleDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SaleDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SaleDetailsService = Sales.SaleDetailsService || (Sales.SaleDetailsService = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesColumns = /** @class */ (function () {
            function SalesColumns() {
            }
            SalesColumns.columnsKey = 'Sales.Sales';
            return SalesColumns;
        }());
        Sales.SalesColumns = SalesColumns;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesForm = /** @class */ (function (_super) {
            __extends(SalesForm, _super);
            function SalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesForm.init) {
                    SalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = Sales.SalesDetailEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.EnumEditor;
                    var w6 = s.TextAreaEditor;
                    var w7 = s.StringEditor;
                    Q.initFormType(SalesForm, [
                        'CustomerId', w0,
                        'Date', w1,
                        'PaymentAccount', w0,
                        'LineItems', w2,
                        'GrandTotal', w3,
                        'Discount', w3,
                        'TotalDiscount', w3,
                        'NoTax', w4,
                        'Vat', w3,
                        'VatPercentage', w3,
                        'VatType', w5,
                        'TotalTax', w3,
                        'ShippingCost', w3,
                        'NetTotal', w3,
                        'PaidAmount', w3,
                        'Due', w3,
                        'Change', w3,
                        'Details', w6,
                        'RowVersion', w7
                    ]);
                }
                return _this;
            }
            SalesForm.formKey = 'Sales.Sales';
            return SalesForm;
        }(Serenity.PrefixedContext));
        Sales.SalesForm = SalesForm;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesRow;
        (function (SalesRow) {
            SalesRow.idProperty = 'Id';
            SalesRow.isActiveProperty = 'IsActive';
            SalesRow.nameProperty = 'Date';
            SalesRow.localTextPrefix = 'Sales.Sales';
            SalesRow.lookupKey = 'Sales.Sales';
            function getLookup() {
                return Q.getLookup('Sales.Sales');
            }
            SalesRow.getLookup = getLookup;
            SalesRow.deletePermission = 'Sales:Sale:Delete';
            SalesRow.insertPermission = 'Sales:Sale:Create';
            SalesRow.readPermission = 'Sales:Sale:View';
            SalesRow.updatePermission = 'Sales:Sale:Update';
        })(SalesRow = Sales.SalesRow || (Sales.SalesRow = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesService;
        (function (SalesService) {
            SalesService.baseUrl = 'Sales/Sales';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesService = Sales.SalesService || (Sales.SalesService = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoiceDetailsColumns = /** @class */ (function () {
            function ServiceInvoiceDetailsColumns() {
            }
            ServiceInvoiceDetailsColumns.columnsKey = 'Services.ServiceInvoiceDetails';
            return ServiceInvoiceDetailsColumns;
        }());
        Services.ServiceInvoiceDetailsColumns = ServiceInvoiceDetailsColumns;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoiceDetailsForm = /** @class */ (function (_super) {
            __extends(ServiceInvoiceDetailsForm, _super);
            function ServiceInvoiceDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiceInvoiceDetailsForm.init) {
                    ServiceInvoiceDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(ServiceInvoiceDetailsForm, [
                        'ServiceId', w0,
                        'Quantity', w1,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            ServiceInvoiceDetailsForm.formKey = 'Services.ServiceInvoiceDetails';
            return ServiceInvoiceDetailsForm;
        }(Serenity.PrefixedContext));
        Services.ServiceInvoiceDetailsForm = ServiceInvoiceDetailsForm;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoiceDetailsRow;
        (function (ServiceInvoiceDetailsRow) {
            ServiceInvoiceDetailsRow.idProperty = 'Id';
            ServiceInvoiceDetailsRow.isActiveProperty = 'IsActive';
            ServiceInvoiceDetailsRow.nameProperty = 'Description';
            ServiceInvoiceDetailsRow.localTextPrefix = 'Services.ServiceInvoiceDetails';
            ServiceInvoiceDetailsRow.deletePermission = 'Services:Service Invoice:Delete';
            ServiceInvoiceDetailsRow.insertPermission = 'Services:Service Invoice:Create';
            ServiceInvoiceDetailsRow.readPermission = 'Services:Service Invoice:View';
            ServiceInvoiceDetailsRow.updatePermission = 'Services:Service Invoice:Update';
        })(ServiceInvoiceDetailsRow = Services.ServiceInvoiceDetailsRow || (Services.ServiceInvoiceDetailsRow = {}));
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoiceDetailsService;
        (function (ServiceInvoiceDetailsService) {
            ServiceInvoiceDetailsService.baseUrl = 'Services/ServiceInvoiceDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ServiceInvoiceDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiceInvoiceDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiceInvoiceDetailsService = Services.ServiceInvoiceDetailsService || (Services.ServiceInvoiceDetailsService = {}));
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesColumns = /** @class */ (function () {
            function ServiceInvoicesColumns() {
            }
            ServiceInvoicesColumns.columnsKey = 'Services.ServiceInvoices';
            return ServiceInvoicesColumns;
        }());
        Services.ServiceInvoicesColumns = ServiceInvoicesColumns;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesForm = /** @class */ (function (_super) {
            __extends(ServiceInvoicesForm, _super);
            function ServiceInvoicesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiceInvoicesForm.init) {
                    ServiceInvoicesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = Services.ServiceInvoicesDetailEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(ServiceInvoicesForm, [
                        'CustomerId', w0,
                        'Date', w1,
                        'PaymentAccount', w0,
                        'EmployeeId', w0,
                        'LineItems', w2,
                        'Discount', w3,
                        'TotalDiscount', w3,
                        'Vat', w3,
                        'TotalTax', w3,
                        'ShippingCost', w3,
                        'GrandTotal', w3,
                        'NetTotal', w3,
                        'PaidAmount', w3,
                        'Due', w3,
                        'Change', w3,
                        'Details', w4
                    ]);
                }
                return _this;
            }
            ServiceInvoicesForm.formKey = 'Services.ServiceInvoices';
            return ServiceInvoicesForm;
        }(Serenity.PrefixedContext));
        Services.ServiceInvoicesForm = ServiceInvoicesForm;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesRow;
        (function (ServiceInvoicesRow) {
            ServiceInvoicesRow.idProperty = 'Id';
            ServiceInvoicesRow.isActiveProperty = 'IsActive';
            ServiceInvoicesRow.nameProperty = 'Date';
            ServiceInvoicesRow.localTextPrefix = 'Services.ServiceInvoices';
            ServiceInvoicesRow.lookupKey = 'Services.ServiceInvoices';
            function getLookup() {
                return Q.getLookup('Services.ServiceInvoices');
            }
            ServiceInvoicesRow.getLookup = getLookup;
            ServiceInvoicesRow.deletePermission = 'Services:Service Invoice:Delete';
            ServiceInvoicesRow.insertPermission = 'Services:Service Invoice:Create';
            ServiceInvoicesRow.readPermission = 'Services:Service Invoice:View';
            ServiceInvoicesRow.updatePermission = 'Services:Service Invoice:Update';
        })(ServiceInvoicesRow = Services.ServiceInvoicesRow || (Services.ServiceInvoicesRow = {}));
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesService;
        (function (ServiceInvoicesService) {
            ServiceInvoicesService.baseUrl = 'Services/ServiceInvoices';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ServiceInvoicesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiceInvoicesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiceInvoicesService = Services.ServiceInvoicesService || (Services.ServiceInvoicesService = {}));
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServicesColumns = /** @class */ (function () {
            function ServicesColumns() {
            }
            ServicesColumns.columnsKey = 'Services.Services';
            return ServicesColumns;
        }());
        Services.ServicesColumns = ServicesColumns;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServicesForm = /** @class */ (function (_super) {
            __extends(ServicesForm, _super);
            function ServicesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServicesForm.init) {
                    ServicesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ServicesForm, [
                        'ServiceName', w0,
                        'Charge', w1,
                        'Description', w0,
                        'Tax', w1
                    ]);
                }
                return _this;
            }
            ServicesForm.formKey = 'Services.Services';
            return ServicesForm;
        }(Serenity.PrefixedContext));
        Services.ServicesForm = ServicesForm;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServicesRow;
        (function (ServicesRow) {
            ServicesRow.idProperty = 'Id';
            ServicesRow.isActiveProperty = 'IsActive';
            ServicesRow.nameProperty = 'ServiceName';
            ServicesRow.localTextPrefix = 'Services.Services';
            ServicesRow.lookupKey = 'Services.Services';
            function getLookup() {
                return Q.getLookup('Services.Services');
            }
            ServicesRow.getLookup = getLookup;
            ServicesRow.deletePermission = 'Masters:Service:Delete';
            ServicesRow.insertPermission = 'Masters:Service:Create';
            ServicesRow.readPermission = 'Masters:Service:View';
            ServicesRow.updatePermission = 'Masters:Service:Update';
        })(ServicesRow = Services.ServicesRow || (Services.ServicesRow = {}));
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServicesService;
        (function (ServicesService) {
            ServicesService.baseUrl = 'Services/Services';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ServicesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServicesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServicesService = Services.ServicesService || (Services.ServicesService = {}));
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var StatusKind;
    (function (StatusKind) {
        StatusKind[StatusKind["Pending"] = 1] = "Pending";
        StatusKind[StatusKind["Complete"] = 2] = "Complete";
    })(StatusKind = SmartERP.StatusKind || (SmartERP.StatusKind = {}));
    Serenity.Decorators.registerEnumType(StatusKind, 'SmartERP.StatusKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var StockKind;
    (function (StockKind) {
        StockKind[StockKind["IN"] = 1] = "IN";
        StockKind[StockKind["OUT"] = 2] = "OUT";
    })(StockKind = SmartERP.StockKind || (SmartERP.StockKind = {}));
    Serenity.Decorators.registerEnumType(StockKind, 'SmartERP.StockKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersColumns = /** @class */ (function () {
            function SuppliersColumns() {
            }
            SuppliersColumns.columnsKey = 'Suppliers.Suppliers';
            return SuppliersColumns;
        }());
        Suppliers.SuppliersColumns = SuppliersColumns;
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersForm = /** @class */ (function (_super) {
            __extends(SuppliersForm, _super);
            function SuppliersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SuppliersForm.init) {
                    SuppliersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(SuppliersForm, [
                        'CompanyName', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'SupplierGroupId', w1,
                        'Address', w2,
                        'RegionId', w1,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Website', w0,
                        'Fax', w0,
                        'Email', w0,
                        'EmailAddress', w0,
                        'PreviousCreditBalance', w3,
                        'CNIC', w0,
                        'NTN', w0,
                        'STRN', w0,
                        'OrderBooker', w1,
                        'Vat', w0
                    ]);
                }
                return _this;
            }
            SuppliersForm.formKey = 'Suppliers.Suppliers';
            return SuppliersForm;
        }(Serenity.PrefixedContext));
        Suppliers.SuppliersForm = SuppliersForm;
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersRow;
        (function (SuppliersRow) {
            SuppliersRow.idProperty = 'Id';
            SuppliersRow.isActiveProperty = 'IsActive';
            SuppliersRow.nameProperty = 'CompanyName';
            SuppliersRow.localTextPrefix = 'Suppliers.Suppliers';
            SuppliersRow.lookupKey = 'Suppliers.Suppliers';
            function getLookup() {
                return Q.getLookup('Suppliers.Suppliers');
            }
            SuppliersRow.getLookup = getLookup;
            SuppliersRow.deletePermission = 'Business Partners:Supplier:Delete';
            SuppliersRow.insertPermission = 'Business Partners:Supplier:Create';
            SuppliersRow.readPermission = 'Business Partners:Supplier:View';
            SuppliersRow.updatePermission = 'Business Partners:Supplier:Update';
        })(SuppliersRow = Suppliers.SuppliersRow || (Suppliers.SuppliersRow = {}));
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersService;
        (function (SuppliersService) {
            SuppliersService.baseUrl = 'Suppliers/Suppliers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SuppliersService[x] = function (r, s, o) {
                    return Q.serviceRequest(SuppliersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SuppliersService = Suppliers.SuppliersService || (Suppliers.SuppliersService = {}));
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Texts;
    (function (Texts) {
        SmartERP['Texts'] = Q.proxyTexts(Texts, '', { Db: { Accounts: { Accounts: { Balance: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, DeleteDate: 1, DeleteUserId: 1, DepreciationRate: 1, HeadCode: 1, HeadCodeName: 1, HeadLevel: 1, HeadName: 1, HeadType: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, IsBudget: 1, IsDepreciation: 1, IsGl: 1, IsTransaction: 1, OpeningBalance: 1, PHeadName: 1, ParentHead: 1, ParentHead1: 1, ParentHeadCustomerId: 1, ParentHeadDepreciationRate: 1, ParentHeadHeadCode: 1, ParentHeadHeadLevel: 1, ParentHeadHeadName: 1, ParentHeadHeadType: 1, ParentHeadIsBudget: 1, ParentHeadIsDepreciation: 1, ParentHeadIsGl: 1, ParentHeadIsTransaction: 1, ParentHeadPHeadName: 1, ParentHeadSupplierId: 1, SupplierAddress: 1, SupplierCityId: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountryId: 1, SupplierDeleteDate: 1, SupplierDeleteUserId: 1, SupplierEmail: 1, SupplierEmailAddress: 1, SupplierFax: 1, SupplierId: 1, SupplierInsertDate: 1, SupplierInsertUserId: 1, SupplierIsActive: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierPreviousCreditBalance: 1, SupplierRegionId: 1, SupplierStateId: 1, SupplierUpdateDate: 1, SupplierUpdateUserId: 1, SupplierWebsite: 1, UpdateDate: 1, UpdateUserId: 1 }, BankTransactions: { AccountType: 1, Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, CashAdjustment: { AccountType: 1, Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, ContraVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, CreditVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, CreditAccountId: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, CustomerReceive: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, CustomerId: 1, CustomerName: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, DebitVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, DebitAccountId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, JournalVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, OpeningBalance: { AccountType: 1, Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsOpening: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, SupplierPayment: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, SupplierCompanyName: 1, SupplierId: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, Transactions: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 } }, Administration: { Cities: { CountryId: 1, CountryName: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, StateCountryId: 1, StateId: 1, StateName: 1, UpdateDate: 1, UpdateUserId: 1 }, Companies: { Address: 1, CompanyEmail: 1, CompanyName: 1, CurrencyCurrencyName: 1, CurrencyCurrencySymbol: 1, CurrencyId: 1, CurrencyPosition: 1, DeleteDate: 1, DeleteUserId: 1, Favicon: 1, FooterText: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Logo: 1, Phone: 1, SaleLogo: 1, UpdateDate: 1, UpdateUserId: 1, Vat: 1, VatPercentage: 1, VatType: 1 }, Countries: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Currencies: { CurrencyName: 1, CurrencySymbol: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, UpdateDate: 1, UpdateUserId: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, NavigationList: { Icon: 1, Id: 1, ParentId: 1, Permission: 1, Sort: 1, Title: 1, Url: 1 }, Regions: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Shippers: { CompanyName: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, UpdateDate: 1, UpdateUserId: 1 }, States: { CountryId: 1, CountryName: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Territories: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, RegionId: 1, RegionName: 1, TerritoryDescription: 1, UpdateDate: 1, UpdateUserId: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 }, Warehouses: { Address: 1, CityCountryId: 1, CityDeleteDate: 1, CityDeleteUserId: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityName: 1, CityStateId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CountryDeleteDate: 1, CountryDeleteUserId: 1, CountryId: 1, CountryInsertDate: 1, CountryInsertUserId: 1, CountryIsActive: 1, CountryName: 1, CountryUpdateDate: 1, CountryUpdateUserId: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, Phone: 1, StateCountryId: 1, StateDeleteDate: 1, StateDeleteUserId: 1, StateId: 1, StateInsertDate: 1, StateInsertUserId: 1, StateIsActive: 1, StateName: 1, StateUpdateDate: 1, StateUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 } }, Banks: { Banks: { AcName: 1, AcNumber: 1, BankName: 1, Branch: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, SignaturePicture: 1, UpdateDate: 1, UpdateUserId: 1 } }, Customers: { Customers: { Address: 1, CNIC: 1, CityCountryId: 1, CityId: 1, CityName: 1, CityStateId: 1, ContactName: 1, ContactTitle: 1, CountryId: 1, CountryName: 1, CustomerBalance: 1, CustomerGroupId: 1, CustomerGroupName: 1, CustomerReceivable: 1, CustomerReceived: 1, DeleteDate: 1, DeleteUserId: 1, Email: 1, EmailAddress: 1, Fax: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, NTN: 1, Name: 1, OrderBooker: 1, OrderBookerName: 1, Phone: 1, PostalCode: 1, PreviousCreditBalance: 1, RegionId: 1, RegionName: 1, STRN: 1, SalesMan: 1, SalesManName: 1, StateCountryId: 1, StateId: 1, StateName: 1, UpdateDate: 1, UpdateUserId: 1, Vat: 1, Website: 1 } }, Expenses: { ExpenseTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Type: 1, UpdateDate: 1, UpdateUserId: 1 }, Expenses: { Amount: 1, Date: 1, DeleteDate: 1, DeleteUserId: 1, ExpenseTypeId: 1, ExpenseTypeType: 1, HeadCodeName: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, PaymentAccount: 1, UpdateDate: 1, UpdateUserId: 1, VNo: 1 } }, HumanResource: { Attendance: { CheckIn: 1, CheckOut: 1, DeleteDate: 1, DeleteUserId: 1, EmployeeAddress: 1, EmployeeBloodGroup: 1, EmployeeCityId: 1, EmployeeCnic: 1, EmployeeCountryId: 1, EmployeeDeleteDate: 1, EmployeeDeleteUserId: 1, EmployeeDepartmentId: 1, EmployeeDesignationId: 1, EmployeeEmail: 1, EmployeeFirstName: 1, EmployeeFullName: 1, EmployeeHoureRateSalary: 1, EmployeeId: 1, EmployeeInsertDate: 1, EmployeeInsertUserId: 1, EmployeeIsActive: 1, EmployeeLastName: 1, EmployeePhone: 1, EmployeePicture: 1, EmployeeRateType: 1, EmployeeRegionId: 1, EmployeeStateId: 1, EmployeeTerritoryId: 1, EmployeeUpdateDate: 1, EmployeeUpdateUserId: 1, EmployeeUserId: 1, EmployeeZipCode: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, StayTime: 1, UpdateDate: 1, UpdateUserId: 1 }, Departments: { DeleteDate: 1, DeleteUserId: 1, Department: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ParentDepartmentDepartment: 1, ParentDepartmentDescription: 1, ParentDepartmentId: 1, ParentDepartmentParentDepartmentId: 1, UpdateDate: 1, UpdateUserId: 1 }, Designations: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Designation: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ParentDesignationDescription: 1, ParentDesignationDesignation: 1, ParentDesignationId: 1, ParentDesignationParentDesignationId: 1, UpdateDate: 1, UpdateUserId: 1 }, EmployeeBankAccounts: { AccountNumber: 1, AccountTitle: 1, BankBranch: 1, BankCode: 1, BankName: 1, BankName1: 1, Employee: 1, EmployeeAddress: 1, EmployeeCompany: 1, EmployeeContactNumber: 1, EmployeeDateOfBirth: 1, EmployeeDateOfJoining: 1, EmployeeDepartment: 1, EmployeeDesignation: 1, EmployeeEmail: 1, EmployeeEmployeeCode: 1, EmployeeFirstName: 1, EmployeeGender: 1, EmployeeLastName: 1, EmployeeLocation: 1, EmployeeOfficeShift: 1, EmployeePhoto: 1, EmployeePinCode: 1, EmployeeReportsTo: 1, EmployeeUsername: 1, Id: 1 }, EmployeeDeductions: { Amount: 1, DeductionId: 1, DeductionName: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, EmployeeFullName: 1, EmployeeId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, UpdateDate: 1, UpdateUserId: 1 }, EmployeeIncomes: { Amount: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, EmployeeFullName: 1, EmployeeId: 1, Id: 1, IncomeId: 1, IncomeName: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, UpdateDate: 1, UpdateUserId: 1 }, Employees: { Address: 1, BankAccountForPayroll: 1, BasicSalary: 1, BloodGroup: 1, CityCountryId: 1, CityDeleteDate: 1, CityDeleteUserId: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityName: 1, CityStateId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CountryDeleteDate: 1, CountryDeleteUserId: 1, CountryId: 1, CountryInsertDate: 1, CountryInsertUserId: 1, CountryIsActive: 1, CountryName: 1, CountryUpdateDate: 1, CountryUpdateUserId: 1, DeductionList: 1, DeleteDate: 1, DeleteUserId: 1, Department: 1, DepartmentDescription: 1, DepartmentId: 1, DepartmentParentDepartmentId: 1, Designation: 1, DesignationDescription: 1, DesignationId: 1, DesignationParentDesignationId: 1, Email: 1, EmployeeFullName: 1, FirstName: 1, HoureRateSalary: 1, Id: 1, IncomeList: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastName: 1, PayrollBankId: 1, PayrollBankName: 1, Phone: 1, Picture: 1, RateType: 1, RegionDeleteDate: 1, RegionDeleteUserId: 1, RegionId: 1, RegionInsertDate: 1, RegionInsertUserId: 1, RegionIsActive: 1, RegionName: 1, RegionUpdateDate: 1, RegionUpdateUserId: 1, StateCountryId: 1, StateDeleteDate: 1, StateDeleteUserId: 1, StateId: 1, StateInsertDate: 1, StateInsertUserId: 1, StateIsActive: 1, StateName: 1, StateUpdateDate: 1, StateUpdateUserId: 1, TerritoryDeleteDate: 1, TerritoryDeleteUserId: 1, TerritoryId: 1, TerritoryInsertDate: 1, TerritoryInsertUserId: 1, TerritoryIsActive: 1, TerritoryRegionId: 1, TerritoryTerritoryDescription: 1, TerritoryUpdateDate: 1, TerritoryUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, ZipCode: 1 } }, Inventory: { DamagedProducts: { CategoryDeleteDate: 1, CategoryDeleteUserId: 1, CategoryDescription: 1, CategoryId: 1, CategoryInsertDate: 1, CategoryInsertUserId: 1, CategoryIsActive: 1, CategoryName: 1, CategoryParentCategoryId: 1, CategoryUpdateDate: 1, CategoryUpdateUserId: 1, Code: 1, Date: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, Note: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, PurchasePrice: 1, Quantity: 1, UpdateDate: 1, UpdateUserId: 1, VNo: 1 }, GoodsIssue: { CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Date: 1, DeleteDate: 1, DeleteUserId: 1, EmployeeFullName: 1, EmployeenAddress: 1, EmployeenBloodGroup: 1, EmployeenCityId: 1, EmployeenCnic: 1, EmployeenCountryId: 1, EmployeenDeleteDate: 1, EmployeenDeleteUserId: 1, EmployeenDepartmentId: 1, EmployeenDesignationId: 1, EmployeenEmail: 1, EmployeenFirstName: 1, EmployeenHoureRateSalary: 1, EmployeenId: 1, EmployeenInsertDate: 1, EmployeenInsertUserId: 1, EmployeenIsActive: 1, EmployeenLastName: 1, EmployeenPhone: 1, EmployeenPicture: 1, EmployeenRateType: 1, EmployeenRegionId: 1, EmployeenStateId: 1, EmployeenTerritoryId: 1, EmployeenUpdateDate: 1, EmployeenUpdateUserId: 1, EmployeenUserId: 1, EmployeenZipCode: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, JournalRemarks: 1, LineItems: 1, Reference: 1, Remarks: 1, SaleChange: 1, SaleCustomerId: 1, SaleDate: 1, SaleDetails: 1, SaleDiscount: 1, SaleDue: 1, SaleGrandTotal: 1, SaleId: 1, SaleInvoice: 1, SaleNetTotal: 1, SalePaidAmount: 1, SalePaymentAccount: 1, SaleShippingCost: 1, SaleTotalDiscount: 1, SaleTotalTax: 1, SaleVNo: 1, SaleVat: 1, TotalQuantity: 1, UpdateDate: 1, UpdateUserId: 1 }, GoodsIssueDetails: { DeleteDate: 1, DeleteUserId: 1, Description: 1, GoodsIssueCustomerId: 1, GoodsIssueDate: 1, GoodsIssueEmployeenId: 1, GoodsIssueId: 1, GoodsIssueJournalRemarks: 1, GoodsIssueReference: 1, GoodsIssueRemarks: 1, GoodsIssueSaleId: 1, GoodsIssueTotalQuantity: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Quantity: 1, UpdateDate: 1, UpdateUserId: 1, WarehouseAddress: 1, WarehouseCityId: 1, WarehouseCountryId: 1, WarehouseDescription: 1, WarehouseId: 1, WarehouseName: 1, WarehousePhone: 1, WarehouseStateId: 1, WarehouseWarehouseName: 1 }, GoodsReceipt: { Date: 1, DeleteDate: 1, DeleteUserId: 1, EmployeeFullName: 1, EmployeenAddress: 1, EmployeenBloodGroup: 1, EmployeenCityId: 1, EmployeenCnic: 1, EmployeenCountryId: 1, EmployeenDeleteDate: 1, EmployeenDeleteUserId: 1, EmployeenDepartmentId: 1, EmployeenDesignationId: 1, EmployeenEmail: 1, EmployeenFirstName: 1, EmployeenHoureRateSalary: 1, EmployeenId: 1, EmployeenInsertDate: 1, EmployeenInsertUserId: 1, EmployeenIsActive: 1, EmployeenLastName: 1, EmployeenPhone: 1, EmployeenPicture: 1, EmployeenRateType: 1, EmployeenRegionId: 1, EmployeenStateId: 1, EmployeenTerritoryId: 1, EmployeenUpdateDate: 1, EmployeenUpdateUserId: 1, EmployeenUserId: 1, EmployeenZipCode: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, JournalRemarks: 1, LineItems: 1, PurchaseBill: 1, PurchaseChange: 1, PurchaseDate: 1, PurchaseDetails: 1, PurchaseDiscount: 1, PurchaseDue: 1, PurchaseEmployeeId: 1, PurchaseGrandTotal: 1, PurchaseId: 1, PurchaseInvoiceNo: 1, PurchaseNetTotal: 1, PurchasePaidAmount: 1, PurchasePaymentAccount: 1, PurchaseShippingCost: 1, PurchaseSupplierId: 1, PurchaseTotalDiscount: 1, PurchaseVNo: 1, Reference: 1, Remarks: 1, SupplierAddress: 1, SupplierCityId: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountryId: 1, SupplierDeleteDate: 1, SupplierDeleteUserId: 1, SupplierEmail: 1, SupplierEmailAddress: 1, SupplierFax: 1, SupplierId: 1, SupplierInsertDate: 1, SupplierInsertUserId: 1, SupplierIsActive: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierPreviousCreditBalance: 1, SupplierRegionId: 1, SupplierStateId: 1, SupplierUpdateDate: 1, SupplierUpdateUserId: 1, SupplierWebsite: 1, TotalQuantity: 1, UpdateDate: 1, UpdateUserId: 1 }, GoodsReceiptDetails: { DeleteDate: 1, DeleteUserId: 1, Description: 1, GoodsReceiptDate: 1, GoodsReceiptEmployeenId: 1, GoodsReceiptId: 1, GoodsReceiptJournalRemarks: 1, GoodsReceiptPurchaseId: 1, GoodsReceiptReference: 1, GoodsReceiptRemarks: 1, GoodsReceiptSupplierId: 1, GoodsReceiptTotalQuantity: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Quantity: 1, UpdateDate: 1, UpdateUserId: 1, WarehouseAddress: 1, WarehouseCityId: 1, WarehouseCountryId: 1, WarehouseDescription: 1, WarehouseId: 1, WarehouseName: 1, WarehousePhone: 1, WarehouseStateId: 1, WarehouseWarehouseName: 1 }, UpdateStocks: { Id: 1, InsertDate: 1, Mode: 1, Note: 1, ProductBarcode: 1, ProductBranchId: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Quantity: 1, Status: 1, StockMode: 1, TransactionType: 1, VNo: 1, WarehouseAddress: 1, WarehouseBranchId: 1, WarehouseCityId: 1, WarehouseCountryId: 1, WarehouseDeleteDate: 1, WarehouseDeleteUserId: 1, WarehouseDescription: 1, WarehouseId: 1, WarehouseInsertDate: 1, WarehouseInsertUserId: 1, WarehouseIsActive: 1, WarehouseName: 1, WarehousePhone: 1, WarehouseStateId: 1, WarehouseUpdateDate: 1, WarehouseUpdateUserId: 1 } }, Masters: { AgendaItemTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, AttendanceStatuses: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, AttendeeTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, CustomerGroups: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Deductions: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Incomes: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Locations: { Address: 1, CityCountryId: 1, CityDeleteDate: 1, CityDeleteUserId: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityName: 1, CityStateId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CountryDeleteDate: 1, CountryDeleteUserId: 1, CountryId: 1, CountryInsertDate: 1, CountryInsertUserId: 1, CountryIsActive: 1, CountryName: 1, CountryUpdateDate: 1, CountryUpdateUserId: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Latitude: 1, Longitude: 1, Name: 1, StateCountryId: 1, StateDeleteDate: 1, StateDeleteUserId: 1, StateId: 1, StateInsertDate: 1, StateInsertUserId: 1, StateIsActive: 1, StateName: 1, StateUpdateDate: 1, StateUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, MeetingTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, ResolutionStatuses: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, SupplierGroups: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 } }, Meeting: { AgendaDecisions: { AssignedTo: 1, AssignedToAddress: 1, AssignedToBloodGroup: 1, AssignedToCityId: 1, AssignedToCnic: 1, AssignedToCountryId: 1, AssignedToDeleteDate: 1, AssignedToDeleteUserId: 1, AssignedToDepartmentId: 1, AssignedToDesignationId: 1, AssignedToEmail: 1, AssignedToFirstName: 1, AssignedToFullName: 1, AssignedToHoureRateSalary: 1, AssignedToInsertDate: 1, AssignedToInsertUserId: 1, AssignedToIsActive: 1, AssignedToLastName: 1, AssignedToPhone: 1, AssignedToPicture: 1, AssignedToRateType: 1, AssignedToRegionId: 1, AssignedToStateId: 1, AssignedToTerritoryId: 1, AssignedToUpdateDate: 1, AssignedToUpdateUserId: 1, AssignedToUserId: 1, AssignedToZipCode: 1, Attachments: 1, DecisionNumber: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, DueDate: 1, Id: 1, Images: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Meeting: 1, MeetingDepartment: 1, MeetingEndDate: 1, MeetingLocation: 1, MeetingMeetingName: 1, MeetingMeetingType: 1, MeetingOrganizedBy: 1, MeetingReporter: 1, MeetingStartDate: 1, RelatedAgendaItem: 1, RelatedAgendaItemAttachments: 1, RelatedAgendaItemDescription: 1, RelatedAgendaItemImages: 1, RelatedAgendaItemItemType: 1, RelatedAgendaItemMeeting: 1, RelatedAgendaItemRequestedBy: 1, RelatedAgendaItemSequenceNo: 1, RelatedAgendaItemTitle: 1, ResolutionStatus: 1, ResolutionStatusName: 1, UpdateDate: 1, UpdateUserId: 1 }, AgendaItems: { Attachments: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, Images: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ItemType: 1, ItemTypeName: 1, Meeting: 1, MeetingDepartment: 1, MeetingEndDate: 1, MeetingLocation: 1, MeetingMeetingName: 1, MeetingMeetingType: 1, MeetingOrganizedBy: 1, MeetingReporter: 1, MeetingStartDate: 1, RequestedBy: 1, RequestedByAddress: 1, RequestedByBloodGroup: 1, RequestedByCityId: 1, RequestedByCnic: 1, RequestedByCountryId: 1, RequestedByDeleteDate: 1, RequestedByDeleteUserId: 1, RequestedByDepartmentId: 1, RequestedByDesignationId: 1, RequestedByEmail: 1, RequestedByFirstName: 1, RequestedByFullName: 1, RequestedByHoureRateSalary: 1, RequestedByInsertDate: 1, RequestedByInsertUserId: 1, RequestedByIsActive: 1, RequestedByLastName: 1, RequestedByPhone: 1, RequestedByPicture: 1, RequestedByRateType: 1, RequestedByRegionId: 1, RequestedByStateId: 1, RequestedByTerritoryId: 1, RequestedByUpdateDate: 1, RequestedByUpdateUserId: 1, RequestedByUserId: 1, RequestedByZipCode: 1, SequenceNo: 1, Title: 1, UpdateDate: 1, UpdateUserId: 1 }, MeetingAttendees: { AttendanceStatus: 1, AttendanceStatusName: 1, Attendee: 1, AttendeeAddress: 1, AttendeeBloodGroup: 1, AttendeeCityId: 1, AttendeeCnic: 1, AttendeeCountryId: 1, AttendeeDeleteDate: 1, AttendeeDeleteUserId: 1, AttendeeDepartmentId: 1, AttendeeDesignationId: 1, AttendeeEmail: 1, AttendeeFirstName: 1, AttendeeFullName: 1, AttendeeHoureRateSalary: 1, AttendeeInsertDate: 1, AttendeeInsertUserId: 1, AttendeeIsActive: 1, AttendeeLastName: 1, AttendeePhone: 1, AttendeePicture: 1, AttendeeRateType: 1, AttendeeRegionId: 1, AttendeeStateId: 1, AttendeeTerritoryId: 1, AttendeeType: 1, AttendeeTypeName: 1, AttendeeUpdateDate: 1, AttendeeUpdateUserId: 1, AttendeeUserId: 1, AttendeeZipCode: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Meeting: 1, MeetingDepartment: 1, MeetingEndDate: 1, MeetingLocation: 1, MeetingMeetingName: 1, MeetingMeetingType: 1, MeetingOrganizedBy: 1, MeetingReporter: 1, MeetingStartDate: 1, UpdateDate: 1, UpdateUserId: 1 }, Meetings: { AgendaDecisions: 1, AgendaItems: 1, Attendees: 1, DeleteDate: 1, DeleteUserId: 1, Department: 1, Department1: 1, DepartmentDeleteDate: 1, DepartmentDeleteUserId: 1, DepartmentDescription: 1, DepartmentInsertDate: 1, DepartmentInsertUserId: 1, DepartmentIsActive: 1, DepartmentParentDepartmentId: 1, DepartmentUpdateDate: 1, DepartmentUpdateUserId: 1, EndDate: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Location: 1, LocationAddress: 1, LocationCityId: 1, LocationCountryId: 1, LocationLatitude: 1, LocationLongitude: 1, LocationName: 1, LocationStateId: 1, MeetingName: 1, MeetingType: 1, MeetingTypeName: 1, OrganizedBy: 1, OrganizedByAddress: 1, OrganizedByBloodGroup: 1, OrganizedByCityId: 1, OrganizedByCnic: 1, OrganizedByCountryId: 1, OrganizedByDeleteDate: 1, OrganizedByDeleteUserId: 1, OrganizedByDepartmentId: 1, OrganizedByDesignationId: 1, OrganizedByEmail: 1, OrganizedByFirstName: 1, OrganizedByFullName: 1, OrganizedByHoureRateSalary: 1, OrganizedByInsertDate: 1, OrganizedByInsertUserId: 1, OrganizedByIsActive: 1, OrganizedByLastName: 1, OrganizedByPhone: 1, OrganizedByPicture: 1, OrganizedByRateType: 1, OrganizedByRegionId: 1, OrganizedByStateId: 1, OrganizedByTerritoryId: 1, OrganizedByUpdateDate: 1, OrganizedByUpdateUserId: 1, OrganizedByUserId: 1, OrganizedByZipCode: 1, Reporter: 1, ReporterAddress: 1, ReporterBloodGroup: 1, ReporterCityId: 1, ReporterCnic: 1, ReporterCountryId: 1, ReporterDeleteDate: 1, ReporterDeleteUserId: 1, ReporterDepartmentId: 1, ReporterDesignationId: 1, ReporterEmail: 1, ReporterFirstName: 1, ReporterFullName: 1, ReporterHoureRateSalary: 1, ReporterInsertDate: 1, ReporterInsertUserId: 1, ReporterIsActive: 1, ReporterLastName: 1, ReporterPhone: 1, ReporterPicture: 1, ReporterRateType: 1, ReporterRegionId: 1, ReporterStateId: 1, ReporterTerritoryId: 1, ReporterUpdateDate: 1, ReporterUpdateUserId: 1, ReporterUserId: 1, ReporterZipCode: 1, StartDate: 1, UpdateDate: 1, UpdateUserId: 1 } }, Payroll: { Payroll: { CashBankId: 1, CashBankName: 1, CurrencyName: 1, Description: 1, Id: 1, ItemList: 1, Number: 1, PaymentDate: 1, TotalBasicSalary: 1, TotalDeduction: 1, TotalIncome: 1, TotalPaymentAmount: 1, TotalTakeHomePay: 1 }, PayrollDetail: { BankAccount: 1, BankName: 1, BasicSalary: 1, DeductionList: 1, EmployeeFullName: 1, EmployeeId: 1, Id: 1, IncomeList: 1, PayrollId: 1, TakeHomePay: 1, TotalDeduction: 1, TotalIncome: 1 }, PayrollDetailDeduction: { Amount: 1, DeductionId: 1, DeductionName: 1, Id: 1, PayrollDetailId: 1, ShortNote: 1 }, PayrollDetailIncome: { Amount: 1, Id: 1, IncomeId: 1, IncomeName: 1, PayrollDetailId: 1, ShortNote: 1 } }, Products: { Brands: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Categories: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, ParentCategoryDescription: 1, ParentCategoryId: 1, ParentCategoryName: 1, ParentCategoryParentCategoryId: 1, UpdateDate: 1, UpdateUserId: 1 }, Products: { Barcode: 1, BrandId: 1, BrandName: 1, CategoryDescription: 1, CategoryId: 1, CategoryName: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, Image: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Model: 1, ProductDetails: 1, ProductListName: 1, ProductName: 1, PurchasePrice: 1, QtyIn: 1, QtyOut: 1, ReorderLevel: 1, Sn: 1, Stock: 1, UnitDescription: 1, UnitId: 1, UnitName: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, UpdateDate: 1, UpdateUserId: 1 }, Units: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 } }, Purchases: { PurchaseDetails: { BrandId: 1, BrandName: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductBarcode: 1, ProductCategoryId: 1, ProductId: 1, ProductImage: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductQuantityPerUnit: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, PurchaseBankId: 1, PurchaseChange: 1, PurchaseDate: 1, PurchaseDetails: 1, PurchaseDiscount: 1, PurchaseDue: 1, PurchaseGrandTotal: 1, PurchaseId: 1, PurchaseInvoiceNo: 1, PurchaseNetTotal: 1, PurchasePaidAmount: 1, PurchasePaymentType: 1, PurchaseShippingCost: 1, PurchaseSupplierId: 1, PurchaseTotalDiscount: 1, PurchaseTotalTax: 1, PurchaseVat: 1, Quantity: 1, Total: 1, UnitId: 1, UnitName: 1, UnitPrice: 1, UnitUnitName: 1, UpdateDate: 1, UpdateUserId: 1 }, Purchases: { Change: 1, Date: 1, DeleteDate: 1, DeleteUserId: 1, Details: 1, Discount: 1, Due: 1, GrandTotal: 1, HeadCodeName: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceNo: 1, IsActive: 1, LineItems: 1, NetTotal: 1, NoTax: 1, PaidAmount: 1, PaymentAccount: 1, RowVersion: 1, ShippingCost: 1, SupplierAddress: 1, SupplierCityId: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountryId: 1, SupplierEmail: 1, SupplierEmailAddress: 1, SupplierFax: 1, SupplierId: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierPreviousCreditBalance: 1, SupplierRegionId: 1, SupplierStateId: 1, SupplierWebsite: 1, TotalDiscount: 1, TotalTax: 1, UpdateDate: 1, UpdateUserId: 1, VNo: 1, Vat: 1, VatPercentage: 1, VatType: 1 } }, Quotations: { QuotationDetails: { BrandId: 1, BrandName: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Quantity: 1, QuotationCustomerId: 1, QuotationDate: 1, QuotationDetails: 1, QuotationDiscount: 1, QuotationExpiryDate: 1, QuotationGrandTotal: 1, QuotationId: 1, QuotationNetTotal: 1, QuotationShippingCost: 1, QuotationTotalDiscount: 1, QuotationTotalTax: 1, QuotationVat: 1, Total: 1, UnitDeleteDate: 1, UnitDeleteUserId: 1, UnitDescription: 1, UnitId: 1, UnitInsertDate: 1, UnitInsertUserId: 1, UnitIsActive: 1, UnitName: 1, UnitPrice: 1, UnitUnitName: 1, UnitUpdateDate: 1, UnitUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, Quotations: { CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Date: 1, DeleteDate: 1, DeleteUserId: 1, Details: 1, Discount: 1, ExpiryDate: 1, GrandTotal: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LineItems: 1, NetTotal: 1, NoTax: 1, RowVersion: 1, ShippingCost: 1, TotalDiscount: 1, TotalTax: 1, UpdateDate: 1, UpdateUserId: 1, Vat: 1, VatPercentage: 1, VatType: 1 } }, Reports: { DailyClosing: { Adjustment: 1, Amount: 1, CashIn: 1, CashOut: 1, Date: 1, Id: 1, InsertDate: 1, InsertUserId: 1, LastClosingAmount: 1, LastClosingDate: 1, LastDayClosing: 1, Status: 1, TodayCashIn: 1, TodayCashOut: 1, UpdateDate: 1, UpdateUserId: 1 } }, Sales: { SaleDetails: { BrandId: 1, BrandName: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductBarcode: 1, ProductCategoryId: 1, ProductId: 1, ProductImage: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductQuantityPerUnit: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, Quantity: 1, SaleBankId: 1, SaleChange: 1, SaleCustomerId: 1, SaleDate: 1, SaleDetails: 1, SaleDiscount: 1, SaleDue: 1, SaleGrandTotal: 1, SaleId: 1, SaleNetTotal: 1, SalePaidAmount: 1, SalePaymentType: 1, SaleShippingCost: 1, SaleTotalDiscount: 1, SaleTotalTax: 1, SaleVat: 1, Total: 1, UnitId: 1, UnitName: 1, UnitPrice: 1, UnitUnitName: 1, UpdateDate: 1, UpdateUserId: 1 }, Sales: { Change: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerWebsite: 1, Date: 1, DeleteDate: 1, DeleteUserId: 1, Details: 1, Discount: 1, Due: 1, GrandTotal: 1, HeadCodeName: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LineItems: 1, NetTotal: 1, NoTax: 1, PaidAmount: 1, PaymentAccount: 1, RowVersion: 1, ShippingCost: 1, TotalDiscount: 1, TotalTax: 1, UpdateDate: 1, UpdateUserId: 1, VNo: 1, Vat: 1, VatPercentage: 1, VatType: 1 } }, Services: { ServiceInvoiceDetails: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Quantity: 1, ServiceCharge: 1, ServiceDescription: 1, ServiceId: 1, ServiceInvoiceChange: 1, ServiceInvoiceCustomerId: 1, ServiceInvoiceDate: 1, ServiceInvoiceDetails: 1, ServiceInvoiceDiscount: 1, ServiceInvoiceDue: 1, ServiceInvoiceGrandTotal: 1, ServiceInvoiceId: 1, ServiceInvoiceNetTotal: 1, ServiceInvoicePaidAmount: 1, ServiceInvoiceShippingCost: 1, ServiceInvoiceTotalDiscount: 1, ServiceInvoiceTotalTax: 1, ServiceInvoiceUserId: 1, ServiceInvoiceVat: 1, ServiceName: 1, ServiceServiceName: 1, ServiceTax: 1, Total: 1, UnitPrice: 1, UpdateDate: 1, UpdateUserId: 1 }, ServiceInvoices: { Change: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Date: 1, DeleteDate: 1, DeleteUserId: 1, Details: 1, Discount: 1, Due: 1, EmployeeFullName: 1, EmployeeId: 1, GrandTotal: 1, HeadCodeName: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LineItems: 1, NetTotal: 1, PaidAmount: 1, PaymentAccount: 1, ShippingCost: 1, TotalDiscount: 1, TotalTax: 1, UpdateDate: 1, UpdateUserId: 1, VNo: 1, Vat: 1 }, Services: { Charge: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ServiceName: 1, Tax: 1, UpdateDate: 1, UpdateUserId: 1 } }, Suppliers: { Suppliers: { Address: 1, CNIC: 1, CityCountryId: 1, CityId: 1, CityName: 1, CityStateId: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, CountryId: 1, CountryName: 1, DeleteDate: 1, DeleteUserId: 1, Email: 1, EmailAddress: 1, Fax: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, NTN: 1, OrderBooker: 1, OrderBookerName: 1, Phone: 1, PostalCode: 1, PreviousCreditBalance: 1, RegionId: 1, RegionName: 1, STRN: 1, StateCountryId: 1, StateId: 1, StateName: 1, SupplierBalance: 1, SupplierGroupId: 1, SupplierGroupName: 1, SupplierPaid: 1, SupplierPayable: 1, UpdateDate: 1, UpdateUserId: 1, Vat: 1, Website: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { Dashboard: 1, LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Glass001Style1: 1, Glass001Style10: 1, Glass001Style11: 1, Glass001Style2: 1, Glass001Style3: 1, Glass001Style4: 1, Glass001Style5: 1, Glass001Style6: 1, Glass001Style7: 1, Glass001Style8: 1, Glass001Style9: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, IdUpdateNotSupported: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, RowVersionFieldChanged: 1, RowVersionFieldEmpty: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SmartERP.Texts || (SmartERP.Texts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var VatKind;
    (function (VatKind) {
        VatKind[VatKind["Inclusive"] = 1] = "Inclusive";
        VatKind[VatKind["Exclusive"] = 2] = "Exclusive";
    })(VatKind = SmartERP.VatKind || (SmartERP.VatKind = {}));
    Serenity.Decorators.registerEnumType(VatKind, 'SmartERP.VatKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsDialog = /** @class */ (function (_super) {
            __extends(AccountsDialog, _super);
            function AccountsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.AccountsForm(_this.idPrefix);
                _this.form = new Accounts.AccountsForm(_this.idPrefix);
                _this.form.HeadName.element.attr("tabindex", 1);
                _this.setTabIndexSelect2(_this.form.ParentHead.element, 2);
                _this.form.IsGl.element.attr("tabindex", 3);
                _this.form.IsTransaction.element.attr("tabindex", 4);
                //https://github.com/volkanceylan/Serenity/issues/3935
                _this.form.ParentHead.changeSelect2(function (e) {
                    _this.UpdateAccountfields();
                });
                _this.form.HeadName.change(function (e) {
                    _this.UpdateAccountfields();
                });
                return _this;
            }
            AccountsDialog.prototype.getFormKey = function () { return Accounts.AccountsForm.formKey; };
            AccountsDialog.prototype.getIdProperty = function () { return Accounts.AccountsRow.idProperty; };
            AccountsDialog.prototype.getLocalTextPrefix = function () { return Accounts.AccountsRow.localTextPrefix; };
            AccountsDialog.prototype.getNameProperty = function () { return Accounts.AccountsRow.nameProperty; };
            AccountsDialog.prototype.getService = function () { return Accounts.AccountsService.baseUrl; };
            AccountsDialog.prototype.getDeletePermission = function () { return Accounts.AccountsRow.deletePermission; };
            AccountsDialog.prototype.getInsertPermission = function () { return Accounts.AccountsRow.insertPermission; };
            AccountsDialog.prototype.getUpdatePermission = function () { return Accounts.AccountsRow.updatePermission; };
            AccountsDialog.prototype.UpdateAccountfields = function () {
                if (this.isNew) {
                    var parentHead = Q.toId(this.form.ParentHead.value);
                    this.form.HeadType.value = 'A';
                    var accountsRows = SmartERP.Accounts.AccountsRow.getLookup().items;
                    if (parentHead != null) {
                        //alert(JSON.stringify(SmartERP.Accounts.AccountsRow.getLookup().itemById[parentHead]));
                        var parentRow = SmartERP.Accounts.AccountsRow.getLookup().itemById[parentHead];
                        this.form.HeadLevel.value = parentRow.HeadLevel + 1;
                        var headCode = parentRow.HeadCode * 100;
                        this.form.PHeadName.value = parentRow.HeadName;
                        for (var i = 0; i < accountsRows.length; i++) {
                            if (accountsRows[i].HeadLevel == parentRow.HeadLevel + 1) {
                                if (accountsRows[i].HeadCode > headCode) {
                                    headCode = accountsRows[i].HeadCode;
                                }
                            }
                        }
                        headCode++;
                        this.form.HeadCode.value = headCode;
                    }
                    else {
                        this.form.HeadLevel.value = 1;
                        //this.form.HeadCode.value = '1';
                        var headCode = 0;
                        this.form.PHeadName.value = 'COA';
                        for (var i = 0; i < accountsRows.length; i++) {
                            if (accountsRows[i].HeadLevel == 1) {
                                if (accountsRows[i].HeadCode > headCode) {
                                    headCode = accountsRows[i].HeadCode;
                                }
                            }
                        }
                        headCode++;
                        this.form.HeadCode.value = headCode;
                    }
                }
            };
            AccountsDialog.prototype.setTabIndexSelect2 = function (element, tabIndex) {
                element.prev("div.select2-container").find("input").attr("tabindex", tabIndex);
            };
            AccountsDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.HeadName.element.focus();
            };
            AccountsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], AccountsDialog);
            return AccountsDialog;
        }(Serenity.EntityDialog));
        Accounts.AccountsDialog = AccountsDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsEditor = /** @class */ (function (_super) {
            __extends(AccountsEditor, _super);
            function AccountsEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            AccountsEditor.prototype.getLookupKey = function () {
                return Accounts.AccountsRow.lookupKey;
            };
            AccountsEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.HeadName;
                while (item.ParentHead != null && !visited[item.ParentHead]) {
                    item = lookup.itemById[item.ParentHead];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.HeadName + " >> " + text;
                }
                return text;
            };
            AccountsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AccountsEditor);
            return AccountsEditor;
        }(Serenity.LookupEditorBase));
        Accounts.AccountsEditor = AccountsEditor;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsGrid = /** @class */ (function (_super) {
            __extends(AccountsGrid, _super);
            function AccountsGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    getParentId: function (x) { return x.ParentHead; },
                    toggleField: "HeadName" /* AccountsRow.Fields.HeadName */,
                    initialCollapse: function () { return false; }
                });
                return _this;
            }
            AccountsGrid.prototype.getColumnsKey = function () { return 'Accounts.Accounts'; };
            AccountsGrid.prototype.getDialogType = function () { return Accounts.AccountsDialog; };
            AccountsGrid.prototype.getIsActiveProperty = function () { return Accounts.AccountsRow.isActiveProperty; };
            AccountsGrid.prototype.getIdProperty = function () { return Accounts.AccountsRow.idProperty; };
            AccountsGrid.prototype.getInsertPermission = function () { return Accounts.AccountsRow.insertPermission; };
            AccountsGrid.prototype.getLocalTextPrefix = function () { return Accounts.AccountsRow.localTextPrefix; };
            AccountsGrid.prototype.getService = function () { return Accounts.AccountsService.baseUrl; };
            AccountsGrid.prototype.subDialogDataChange = function () {
                _super.prototype.subDialogDataChange.call(this);
                Q.reloadLookup(Accounts.AccountsRow.lookupKey);
            };
            AccountsGrid.prototype.usePager = function () {
                return false;
            };
            AccountsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(Q.indexOf(columns, function (x) { return x.name == "HeadName" /* AccountsRow.Fields.HeadName */; }) + 1, 0, {
                    field: 'Add Child Unit',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action add-child-unit" title="add child unit"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            AccountsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('add-child-unit')) {
                        var dlg = new Accounts.AccountsDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ParentHead: item.Id
                        });
                    }
                }
            };
            AccountsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountsGrid);
            return AccountsGrid;
        }(Serenity.EntityGrid));
        Accounts.AccountsGrid = AccountsGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsDialog = /** @class */ (function (_super) {
            __extends(BankTransactionsDialog, _super);
            function BankTransactionsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.BankTransactionsForm(_this.idPrefix);
                return _this;
            }
            BankTransactionsDialog.prototype.getFormKey = function () { return Accounts.BankTransactionsForm.formKey; };
            BankTransactionsDialog.prototype.getIdProperty = function () { return Accounts.BankTransactionsRow.idProperty; };
            BankTransactionsDialog.prototype.getLocalTextPrefix = function () { return Accounts.BankTransactionsRow.localTextPrefix; };
            BankTransactionsDialog.prototype.getNameProperty = function () { return Accounts.BankTransactionsRow.nameProperty; };
            BankTransactionsDialog.prototype.getService = function () { return Accounts.BankTransactionsService.baseUrl; };
            BankTransactionsDialog.prototype.getDeletePermission = function () { return Accounts.BankTransactionsRow.deletePermission; };
            BankTransactionsDialog.prototype.getInsertPermission = function () { return Accounts.BankTransactionsRow.insertPermission; };
            BankTransactionsDialog.prototype.getUpdatePermission = function () { return Accounts.BankTransactionsRow.updatePermission; };
            BankTransactionsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            BankTransactionsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], BankTransactionsDialog);
            return BankTransactionsDialog;
        }(Serenity.EntityDialog));
        Accounts.BankTransactionsDialog = BankTransactionsDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsGrid = /** @class */ (function (_super) {
            __extends(BankTransactionsGrid, _super);
            function BankTransactionsGrid(container) {
                return _super.call(this, container) || this;
            }
            BankTransactionsGrid.prototype.getColumnsKey = function () { return 'Accounts.BankTransactions'; };
            BankTransactionsGrid.prototype.getDialogType = function () { return Accounts.BankTransactionsDialog; };
            BankTransactionsGrid.prototype.getIdProperty = function () { return Accounts.BankTransactionsRow.idProperty; };
            BankTransactionsGrid.prototype.getInsertPermission = function () { return Accounts.BankTransactionsRow.insertPermission; };
            BankTransactionsGrid.prototype.getLocalTextPrefix = function () { return Accounts.BankTransactionsRow.localTextPrefix; };
            BankTransactionsGrid.prototype.getService = function () { return Accounts.BankTransactionsService.baseUrl; };
            BankTransactionsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BankTransactionsGrid);
            return BankTransactionsGrid;
        }(Serenity.EntityGrid));
        Accounts.BankTransactionsGrid = BankTransactionsGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentDialog = /** @class */ (function (_super) {
            __extends(CashAdjustmentDialog, _super);
            function CashAdjustmentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.CashAdjustmentForm(_this.idPrefix);
                return _this;
            }
            CashAdjustmentDialog.prototype.getFormKey = function () { return Accounts.CashAdjustmentForm.formKey; };
            CashAdjustmentDialog.prototype.getIdProperty = function () { return Accounts.CashAdjustmentRow.idProperty; };
            CashAdjustmentDialog.prototype.getLocalTextPrefix = function () { return Accounts.CashAdjustmentRow.localTextPrefix; };
            CashAdjustmentDialog.prototype.getNameProperty = function () { return Accounts.CashAdjustmentRow.nameProperty; };
            CashAdjustmentDialog.prototype.getService = function () { return Accounts.CashAdjustmentService.baseUrl; };
            CashAdjustmentDialog.prototype.getDeletePermission = function () { return Accounts.CashAdjustmentRow.deletePermission; };
            CashAdjustmentDialog.prototype.getInsertPermission = function () { return Accounts.CashAdjustmentRow.insertPermission; };
            CashAdjustmentDialog.prototype.getUpdatePermission = function () { return Accounts.CashAdjustmentRow.updatePermission; };
            CashAdjustmentDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CashAdjustmentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CashAdjustmentDialog);
            return CashAdjustmentDialog;
        }(Serenity.EntityDialog));
        Accounts.CashAdjustmentDialog = CashAdjustmentDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentGrid = /** @class */ (function (_super) {
            __extends(CashAdjustmentGrid, _super);
            function CashAdjustmentGrid(container) {
                return _super.call(this, container) || this;
            }
            CashAdjustmentGrid.prototype.getColumnsKey = function () { return 'Accounts.CashAdjustment'; };
            CashAdjustmentGrid.prototype.getDialogType = function () { return Accounts.CashAdjustmentDialog; };
            CashAdjustmentGrid.prototype.getIdProperty = function () { return Accounts.CashAdjustmentRow.idProperty; };
            CashAdjustmentGrid.prototype.getInsertPermission = function () { return Accounts.CashAdjustmentRow.insertPermission; };
            CashAdjustmentGrid.prototype.getLocalTextPrefix = function () { return Accounts.CashAdjustmentRow.localTextPrefix; };
            CashAdjustmentGrid.prototype.getService = function () { return Accounts.CashAdjustmentService.baseUrl; };
            CashAdjustmentGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CashAdjustmentGrid);
            return CashAdjustmentGrid;
        }(Serenity.EntityGrid));
        Accounts.CashAdjustmentGrid = CashAdjustmentGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherDialog = /** @class */ (function (_super) {
            __extends(ContraVoucherDialog, _super);
            function ContraVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.ContraVoucherForm(_this.idPrefix);
                return _this;
            }
            ContraVoucherDialog.prototype.getFormKey = function () { return Accounts.ContraVoucherForm.formKey; };
            ContraVoucherDialog.prototype.getIdProperty = function () { return Accounts.ContraVoucherRow.idProperty; };
            ContraVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.ContraVoucherRow.localTextPrefix; };
            ContraVoucherDialog.prototype.getNameProperty = function () { return Accounts.ContraVoucherRow.nameProperty; };
            ContraVoucherDialog.prototype.getService = function () { return Accounts.ContraVoucherService.baseUrl; };
            ContraVoucherDialog.prototype.getDeletePermission = function () { return Accounts.ContraVoucherRow.deletePermission; };
            ContraVoucherDialog.prototype.getInsertPermission = function () { return Accounts.ContraVoucherRow.insertPermission; };
            ContraVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.ContraVoucherRow.updatePermission; };
            ContraVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            ContraVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ContraVoucherDialog);
            return ContraVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.ContraVoucherDialog = ContraVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherGrid = /** @class */ (function (_super) {
            __extends(ContraVoucherGrid, _super);
            function ContraVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            ContraVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.ContraVoucher'; };
            ContraVoucherGrid.prototype.getDialogType = function () { return Accounts.ContraVoucherDialog; };
            ContraVoucherGrid.prototype.getIdProperty = function () { return Accounts.ContraVoucherRow.idProperty; };
            ContraVoucherGrid.prototype.getInsertPermission = function () { return Accounts.ContraVoucherRow.insertPermission; };
            ContraVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.ContraVoucherRow.localTextPrefix; };
            ContraVoucherGrid.prototype.getService = function () { return Accounts.ContraVoucherService.baseUrl; };
            ContraVoucherGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ContraVoucherGrid);
            return ContraVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.ContraVoucherGrid = ContraVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherDialog = /** @class */ (function (_super) {
            __extends(CreditVoucherDialog, _super);
            function CreditVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.CreditVoucherForm(_this.idPrefix);
                return _this;
            }
            CreditVoucherDialog.prototype.getFormKey = function () { return Accounts.CreditVoucherForm.formKey; };
            CreditVoucherDialog.prototype.getIdProperty = function () { return Accounts.CreditVoucherRow.idProperty; };
            CreditVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.CreditVoucherRow.localTextPrefix; };
            CreditVoucherDialog.prototype.getNameProperty = function () { return Accounts.CreditVoucherRow.nameProperty; };
            CreditVoucherDialog.prototype.getService = function () { return Accounts.CreditVoucherService.baseUrl; };
            CreditVoucherDialog.prototype.getDeletePermission = function () { return Accounts.CreditVoucherRow.deletePermission; };
            CreditVoucherDialog.prototype.getInsertPermission = function () { return Accounts.CreditVoucherRow.insertPermission; };
            CreditVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.CreditVoucherRow.updatePermission; };
            CreditVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CreditVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CreditVoucherDialog);
            return CreditVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.CreditVoucherDialog = CreditVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherGrid = /** @class */ (function (_super) {
            __extends(CreditVoucherGrid, _super);
            function CreditVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            CreditVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.CreditVoucher'; };
            CreditVoucherGrid.prototype.getDialogType = function () { return Accounts.CreditVoucherDialog; };
            CreditVoucherGrid.prototype.getIdProperty = function () { return Accounts.CreditVoucherRow.idProperty; };
            CreditVoucherGrid.prototype.getInsertPermission = function () { return Accounts.CreditVoucherRow.insertPermission; };
            CreditVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.CreditVoucherRow.localTextPrefix; };
            CreditVoucherGrid.prototype.getService = function () { return Accounts.CreditVoucherService.baseUrl; };
            CreditVoucherGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CreditVoucherGrid);
            return CreditVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.CreditVoucherGrid = CreditVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveDialog = /** @class */ (function (_super) {
            __extends(CustomerReceiveDialog, _super);
            function CustomerReceiveDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.CustomerReceiveForm(_this.idPrefix);
                return _this;
            }
            CustomerReceiveDialog.prototype.getFormKey = function () { return Accounts.CustomerReceiveForm.formKey; };
            CustomerReceiveDialog.prototype.getIdProperty = function () { return Accounts.CustomerReceiveRow.idProperty; };
            CustomerReceiveDialog.prototype.getLocalTextPrefix = function () { return Accounts.CustomerReceiveRow.localTextPrefix; };
            CustomerReceiveDialog.prototype.getNameProperty = function () { return Accounts.CustomerReceiveRow.nameProperty; };
            CustomerReceiveDialog.prototype.getService = function () { return Accounts.CustomerReceiveService.baseUrl; };
            CustomerReceiveDialog.prototype.getDeletePermission = function () { return Accounts.CustomerReceiveRow.deletePermission; };
            CustomerReceiveDialog.prototype.getInsertPermission = function () { return Accounts.CustomerReceiveRow.insertPermission; };
            CustomerReceiveDialog.prototype.getUpdatePermission = function () { return Accounts.CustomerReceiveRow.updatePermission; };
            CustomerReceiveDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CustomerReceiveDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerReceiveDialog);
            return CustomerReceiveDialog;
        }(Serenity.EntityDialog));
        Accounts.CustomerReceiveDialog = CustomerReceiveDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveGrid = /** @class */ (function (_super) {
            __extends(CustomerReceiveGrid, _super);
            function CustomerReceiveGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerReceiveGrid.prototype.getColumnsKey = function () { return 'Accounts.CustomerReceive'; };
            CustomerReceiveGrid.prototype.getDialogType = function () { return Accounts.CustomerReceiveDialog; };
            CustomerReceiveGrid.prototype.getIdProperty = function () { return Accounts.CustomerReceiveRow.idProperty; };
            CustomerReceiveGrid.prototype.getInsertPermission = function () { return Accounts.CustomerReceiveRow.insertPermission; };
            CustomerReceiveGrid.prototype.getLocalTextPrefix = function () { return Accounts.CustomerReceiveRow.localTextPrefix; };
            CustomerReceiveGrid.prototype.getService = function () { return Accounts.CustomerReceiveService.baseUrl; };
            CustomerReceiveGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerReceiveGrid);
            return CustomerReceiveGrid;
        }(Serenity.EntityGrid));
        Accounts.CustomerReceiveGrid = CustomerReceiveGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherDialog = /** @class */ (function (_super) {
            __extends(DebitVoucherDialog, _super);
            function DebitVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.DebitVoucherForm(_this.idPrefix);
                return _this;
            }
            DebitVoucherDialog.prototype.getFormKey = function () { return Accounts.DebitVoucherForm.formKey; };
            DebitVoucherDialog.prototype.getIdProperty = function () { return Accounts.DebitVoucherRow.idProperty; };
            DebitVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.DebitVoucherRow.localTextPrefix; };
            DebitVoucherDialog.prototype.getNameProperty = function () { return Accounts.DebitVoucherRow.nameProperty; };
            DebitVoucherDialog.prototype.getService = function () { return Accounts.DebitVoucherService.baseUrl; };
            DebitVoucherDialog.prototype.getDeletePermission = function () { return Accounts.DebitVoucherRow.deletePermission; };
            DebitVoucherDialog.prototype.getInsertPermission = function () { return Accounts.DebitVoucherRow.insertPermission; };
            DebitVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.DebitVoucherRow.updatePermission; };
            DebitVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            DebitVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DebitVoucherDialog);
            return DebitVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.DebitVoucherDialog = DebitVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherGrid = /** @class */ (function (_super) {
            __extends(DebitVoucherGrid, _super);
            function DebitVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            DebitVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.DebitVoucher'; };
            DebitVoucherGrid.prototype.getDialogType = function () { return Accounts.DebitVoucherDialog; };
            DebitVoucherGrid.prototype.getIdProperty = function () { return Accounts.DebitVoucherRow.idProperty; };
            DebitVoucherGrid.prototype.getInsertPermission = function () { return Accounts.DebitVoucherRow.insertPermission; };
            DebitVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.DebitVoucherRow.localTextPrefix; };
            DebitVoucherGrid.prototype.getService = function () { return Accounts.DebitVoucherService.baseUrl; };
            DebitVoucherGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], DebitVoucherGrid);
            return DebitVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.DebitVoucherGrid = DebitVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherDialog = /** @class */ (function (_super) {
            __extends(JournalVoucherDialog, _super);
            function JournalVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.JournalVoucherForm(_this.idPrefix);
                return _this;
            }
            JournalVoucherDialog.prototype.getFormKey = function () { return Accounts.JournalVoucherForm.formKey; };
            JournalVoucherDialog.prototype.getIdProperty = function () { return Accounts.JournalVoucherRow.idProperty; };
            JournalVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.JournalVoucherRow.localTextPrefix; };
            JournalVoucherDialog.prototype.getNameProperty = function () { return Accounts.JournalVoucherRow.nameProperty; };
            JournalVoucherDialog.prototype.getService = function () { return Accounts.JournalVoucherService.baseUrl; };
            JournalVoucherDialog.prototype.getDeletePermission = function () { return Accounts.JournalVoucherRow.deletePermission; };
            JournalVoucherDialog.prototype.getInsertPermission = function () { return Accounts.JournalVoucherRow.insertPermission; };
            JournalVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.JournalVoucherRow.updatePermission; };
            JournalVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            JournalVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], JournalVoucherDialog);
            return JournalVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.JournalVoucherDialog = JournalVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherGrid = /** @class */ (function (_super) {
            __extends(JournalVoucherGrid, _super);
            function JournalVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            JournalVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.JournalVoucher'; };
            JournalVoucherGrid.prototype.getDialogType = function () { return Accounts.JournalVoucherDialog; };
            JournalVoucherGrid.prototype.getIdProperty = function () { return Accounts.JournalVoucherRow.idProperty; };
            JournalVoucherGrid.prototype.getInsertPermission = function () { return Accounts.JournalVoucherRow.insertPermission; };
            JournalVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.JournalVoucherRow.localTextPrefix; };
            JournalVoucherGrid.prototype.getService = function () { return Accounts.JournalVoucherService.baseUrl; };
            JournalVoucherGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], JournalVoucherGrid);
            return JournalVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.JournalVoucherGrid = JournalVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceDialog = /** @class */ (function (_super) {
            __extends(OpeningBalanceDialog, _super);
            function OpeningBalanceDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.OpeningBalanceForm(_this.idPrefix);
                return _this;
            }
            OpeningBalanceDialog.prototype.getFormKey = function () { return Accounts.OpeningBalanceForm.formKey; };
            OpeningBalanceDialog.prototype.getIdProperty = function () { return Accounts.OpeningBalanceRow.idProperty; };
            OpeningBalanceDialog.prototype.getLocalTextPrefix = function () { return Accounts.OpeningBalanceRow.localTextPrefix; };
            OpeningBalanceDialog.prototype.getNameProperty = function () { return Accounts.OpeningBalanceRow.nameProperty; };
            OpeningBalanceDialog.prototype.getService = function () { return Accounts.OpeningBalanceService.baseUrl; };
            OpeningBalanceDialog.prototype.getDeletePermission = function () { return Accounts.OpeningBalanceRow.deletePermission; };
            OpeningBalanceDialog.prototype.getInsertPermission = function () { return Accounts.OpeningBalanceRow.insertPermission; };
            OpeningBalanceDialog.prototype.getUpdatePermission = function () { return Accounts.OpeningBalanceRow.updatePermission; };
            OpeningBalanceDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            OpeningBalanceDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            OpeningBalanceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OpeningBalanceDialog);
            return OpeningBalanceDialog;
        }(Serenity.EntityDialog));
        Accounts.OpeningBalanceDialog = OpeningBalanceDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceGrid = /** @class */ (function (_super) {
            __extends(OpeningBalanceGrid, _super);
            function OpeningBalanceGrid(container) {
                return _super.call(this, container) || this;
            }
            OpeningBalanceGrid.prototype.getColumnsKey = function () { return 'Accounts.OpeningBalance'; };
            OpeningBalanceGrid.prototype.getDialogType = function () { return Accounts.OpeningBalanceDialog; };
            OpeningBalanceGrid.prototype.getIdProperty = function () { return Accounts.OpeningBalanceRow.idProperty; };
            OpeningBalanceGrid.prototype.getInsertPermission = function () { return Accounts.OpeningBalanceRow.insertPermission; };
            OpeningBalanceGrid.prototype.getLocalTextPrefix = function () { return Accounts.OpeningBalanceRow.localTextPrefix; };
            OpeningBalanceGrid.prototype.getService = function () { return Accounts.OpeningBalanceService.baseUrl; };
            OpeningBalanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OpeningBalanceGrid);
            return OpeningBalanceGrid;
        }(Serenity.EntityGrid));
        Accounts.OpeningBalanceGrid = OpeningBalanceGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentDialog = /** @class */ (function (_super) {
            __extends(SupplierPaymentDialog, _super);
            function SupplierPaymentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.SupplierPaymentForm(_this.idPrefix);
                return _this;
            }
            SupplierPaymentDialog.prototype.getFormKey = function () { return Accounts.SupplierPaymentForm.formKey; };
            SupplierPaymentDialog.prototype.getIdProperty = function () { return Accounts.SupplierPaymentRow.idProperty; };
            SupplierPaymentDialog.prototype.getLocalTextPrefix = function () { return Accounts.SupplierPaymentRow.localTextPrefix; };
            SupplierPaymentDialog.prototype.getNameProperty = function () { return Accounts.SupplierPaymentRow.nameProperty; };
            SupplierPaymentDialog.prototype.getService = function () { return Accounts.SupplierPaymentService.baseUrl; };
            SupplierPaymentDialog.prototype.getDeletePermission = function () { return Accounts.SupplierPaymentRow.deletePermission; };
            SupplierPaymentDialog.prototype.getInsertPermission = function () { return Accounts.SupplierPaymentRow.insertPermission; };
            SupplierPaymentDialog.prototype.getUpdatePermission = function () { return Accounts.SupplierPaymentRow.updatePermission; };
            SupplierPaymentDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            SupplierPaymentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SupplierPaymentDialog);
            return SupplierPaymentDialog;
        }(Serenity.EntityDialog));
        Accounts.SupplierPaymentDialog = SupplierPaymentDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentGrid = /** @class */ (function (_super) {
            __extends(SupplierPaymentGrid, _super);
            function SupplierPaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierPaymentGrid.prototype.getColumnsKey = function () { return 'Accounts.SupplierPayment'; };
            SupplierPaymentGrid.prototype.getDialogType = function () { return Accounts.SupplierPaymentDialog; };
            SupplierPaymentGrid.prototype.getIdProperty = function () { return Accounts.SupplierPaymentRow.idProperty; };
            SupplierPaymentGrid.prototype.getInsertPermission = function () { return Accounts.SupplierPaymentRow.insertPermission; };
            SupplierPaymentGrid.prototype.getLocalTextPrefix = function () { return Accounts.SupplierPaymentRow.localTextPrefix; };
            SupplierPaymentGrid.prototype.getService = function () { return Accounts.SupplierPaymentService.baseUrl; };
            SupplierPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierPaymentGrid);
            return SupplierPaymentGrid;
        }(Serenity.EntityGrid));
        Accounts.SupplierPaymentGrid = SupplierPaymentGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsDialog = /** @class */ (function (_super) {
            __extends(TransactionsDialog, _super);
            function TransactionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.TransactionsForm(_this.idPrefix);
                return _this;
            }
            TransactionsDialog.prototype.getFormKey = function () { return Accounts.TransactionsForm.formKey; };
            TransactionsDialog.prototype.getIdProperty = function () { return Accounts.TransactionsRow.idProperty; };
            TransactionsDialog.prototype.getLocalTextPrefix = function () { return Accounts.TransactionsRow.localTextPrefix; };
            TransactionsDialog.prototype.getNameProperty = function () { return Accounts.TransactionsRow.nameProperty; };
            TransactionsDialog.prototype.getService = function () { return Accounts.TransactionsService.baseUrl; };
            TransactionsDialog.prototype.getDeletePermission = function () { return Accounts.TransactionsRow.deletePermission; };
            TransactionsDialog.prototype.getInsertPermission = function () { return Accounts.TransactionsRow.insertPermission; };
            TransactionsDialog.prototype.getUpdatePermission = function () { return Accounts.TransactionsRow.updatePermission; };
            TransactionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionsDialog);
            return TransactionsDialog;
        }(Serenity.EntityDialog));
        Accounts.TransactionsDialog = TransactionsDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsGrid = /** @class */ (function (_super) {
            __extends(TransactionsGrid, _super);
            function TransactionsGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionsGrid.prototype.getColumnsKey = function () { return 'Accounts.Transactions'; };
            TransactionsGrid.prototype.getDialogType = function () { return Accounts.TransactionsDialog; };
            TransactionsGrid.prototype.getIdProperty = function () { return Accounts.TransactionsRow.idProperty; };
            TransactionsGrid.prototype.getInsertPermission = function () { return Accounts.TransactionsRow.insertPermission; };
            TransactionsGrid.prototype.getLocalTextPrefix = function () { return Accounts.TransactionsRow.localTextPrefix; };
            TransactionsGrid.prototype.getService = function () { return Accounts.TransactionsService.baseUrl; };
            TransactionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionsGrid);
            return TransactionsGrid;
        }(Serenity.EntityGrid));
        Accounts.TransactionsGrid = TransactionsGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesDialog = /** @class */ (function (_super) {
            __extends(CitiesDialog, _super);
            function CitiesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CitiesForm(_this.idPrefix);
                return _this;
            }
            CitiesDialog.prototype.getFormKey = function () { return Administration.CitiesForm.formKey; };
            CitiesDialog.prototype.getIdProperty = function () { return Administration.CitiesRow.idProperty; };
            CitiesDialog.prototype.getLocalTextPrefix = function () { return Administration.CitiesRow.localTextPrefix; };
            CitiesDialog.prototype.getNameProperty = function () { return Administration.CitiesRow.nameProperty; };
            CitiesDialog.prototype.getService = function () { return Administration.CitiesService.baseUrl; };
            CitiesDialog.prototype.getDeletePermission = function () { return Administration.CitiesRow.deletePermission; };
            CitiesDialog.prototype.getInsertPermission = function () { return Administration.CitiesRow.insertPermission; };
            CitiesDialog.prototype.getUpdatePermission = function () { return Administration.CitiesRow.updatePermission; };
            CitiesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesDialog);
            return CitiesDialog;
        }(Serenity.EntityDialog));
        Administration.CitiesDialog = CitiesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesGrid = /** @class */ (function (_super) {
            __extends(CitiesGrid, _super);
            function CitiesGrid(container) {
                return _super.call(this, container) || this;
            }
            CitiesGrid.prototype.getColumnsKey = function () { return 'Administration.Cities'; };
            CitiesGrid.prototype.getDialogType = function () { return Administration.CitiesDialog; };
            CitiesGrid.prototype.getIsActiveProperty = function () { return Administration.CitiesRow.isActiveProperty; };
            CitiesGrid.prototype.getIdProperty = function () { return Administration.CitiesRow.idProperty; };
            CitiesGrid.prototype.getInsertPermission = function () { return Administration.CitiesRow.insertPermission; };
            CitiesGrid.prototype.getLocalTextPrefix = function () { return Administration.CitiesRow.localTextPrefix; };
            CitiesGrid.prototype.getService = function () { return Administration.CitiesService.baseUrl; };
            CitiesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CitiesGrid);
            return CitiesGrid;
        }(Serenity.EntityGrid));
        Administration.CitiesGrid = CitiesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesDialog = /** @class */ (function (_super) {
            __extends(CompaniesDialog, _super);
            function CompaniesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.CompaniesForm(_this.idPrefix);
                return _this;
            }
            CompaniesDialog.prototype.getFormKey = function () { return Administration.CompaniesForm.formKey; };
            CompaniesDialog.prototype.getIdProperty = function () { return Administration.CompaniesRow.idProperty; };
            CompaniesDialog.prototype.getLocalTextPrefix = function () { return Administration.CompaniesRow.localTextPrefix; };
            CompaniesDialog.prototype.getNameProperty = function () { return Administration.CompaniesRow.nameProperty; };
            CompaniesDialog.prototype.getService = function () { return Administration.CompaniesService.baseUrl; };
            CompaniesDialog.prototype.getDeletePermission = function () { return Administration.CompaniesRow.deletePermission; };
            CompaniesDialog.prototype.getInsertPermission = function () { return Administration.CompaniesRow.insertPermission; };
            CompaniesDialog.prototype.getUpdatePermission = function () { return Administration.CompaniesRow.updatePermission; };
            CompaniesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CompaniesDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            CompaniesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CompaniesDialog);
            return CompaniesDialog;
        }(Serenity.EntityDialog));
        Administration.CompaniesDialog = CompaniesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesGrid = /** @class */ (function (_super) {
            __extends(CompaniesGrid, _super);
            function CompaniesGrid(container) {
                return _super.call(this, container) || this;
            }
            CompaniesGrid.prototype.getColumnsKey = function () { return 'Administration.Companies'; };
            CompaniesGrid.prototype.getDialogType = function () { return Administration.CompaniesDialog; };
            CompaniesGrid.prototype.getIsActiveProperty = function () { return Administration.CompaniesRow.isActiveProperty; };
            CompaniesGrid.prototype.getIdProperty = function () { return Administration.CompaniesRow.idProperty; };
            CompaniesGrid.prototype.getInsertPermission = function () { return Administration.CompaniesRow.insertPermission; };
            CompaniesGrid.prototype.getLocalTextPrefix = function () { return Administration.CompaniesRow.localTextPrefix; };
            CompaniesGrid.prototype.getService = function () { return Administration.CompaniesService.baseUrl; };
            CompaniesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CompaniesGrid);
            return CompaniesGrid;
        }(Serenity.EntityGrid));
        Administration.CompaniesGrid = CompaniesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesDialog = /** @class */ (function (_super) {
            __extends(CountriesDialog, _super);
            function CountriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CountriesForm(_this.idPrefix);
                return _this;
            }
            CountriesDialog.prototype.getFormKey = function () { return Administration.CountriesForm.formKey; };
            CountriesDialog.prototype.getIdProperty = function () { return Administration.CountriesRow.idProperty; };
            CountriesDialog.prototype.getLocalTextPrefix = function () { return Administration.CountriesRow.localTextPrefix; };
            CountriesDialog.prototype.getNameProperty = function () { return Administration.CountriesRow.nameProperty; };
            CountriesDialog.prototype.getService = function () { return Administration.CountriesService.baseUrl; };
            CountriesDialog.prototype.getDeletePermission = function () { return Administration.CountriesRow.deletePermission; };
            CountriesDialog.prototype.getInsertPermission = function () { return Administration.CountriesRow.insertPermission; };
            CountriesDialog.prototype.getUpdatePermission = function () { return Administration.CountriesRow.updatePermission; };
            CountriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CountriesDialog);
            return CountriesDialog;
        }(Serenity.EntityDialog));
        Administration.CountriesDialog = CountriesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesGrid = /** @class */ (function (_super) {
            __extends(CountriesGrid, _super);
            function CountriesGrid(container) {
                return _super.call(this, container) || this;
            }
            CountriesGrid.prototype.getColumnsKey = function () { return 'Administration.Countries'; };
            CountriesGrid.prototype.getDialogType = function () { return Administration.CountriesDialog; };
            CountriesGrid.prototype.getIsActiveProperty = function () { return Administration.CountriesRow.isActiveProperty; };
            CountriesGrid.prototype.getIdProperty = function () { return Administration.CountriesRow.idProperty; };
            CountriesGrid.prototype.getInsertPermission = function () { return Administration.CountriesRow.insertPermission; };
            CountriesGrid.prototype.getLocalTextPrefix = function () { return Administration.CountriesRow.localTextPrefix; };
            CountriesGrid.prototype.getService = function () { return Administration.CountriesService.baseUrl; };
            CountriesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CountriesGrid);
            return CountriesGrid;
        }(Serenity.EntityGrid));
        Administration.CountriesGrid = CountriesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesDialog = /** @class */ (function (_super) {
            __extends(CurrenciesDialog, _super);
            function CurrenciesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CurrenciesForm(_this.idPrefix);
                return _this;
            }
            CurrenciesDialog.prototype.getFormKey = function () { return Administration.CurrenciesForm.formKey; };
            CurrenciesDialog.prototype.getIdProperty = function () { return Administration.CurrenciesRow.idProperty; };
            CurrenciesDialog.prototype.getLocalTextPrefix = function () { return Administration.CurrenciesRow.localTextPrefix; };
            CurrenciesDialog.prototype.getNameProperty = function () { return Administration.CurrenciesRow.nameProperty; };
            CurrenciesDialog.prototype.getService = function () { return Administration.CurrenciesService.baseUrl; };
            CurrenciesDialog.prototype.getDeletePermission = function () { return Administration.CurrenciesRow.deletePermission; };
            CurrenciesDialog.prototype.getInsertPermission = function () { return Administration.CurrenciesRow.insertPermission; };
            CurrenciesDialog.prototype.getUpdatePermission = function () { return Administration.CurrenciesRow.updatePermission; };
            CurrenciesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrenciesDialog);
            return CurrenciesDialog;
        }(Serenity.EntityDialog));
        Administration.CurrenciesDialog = CurrenciesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesGrid = /** @class */ (function (_super) {
            __extends(CurrenciesGrid, _super);
            function CurrenciesGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrenciesGrid.prototype.getColumnsKey = function () { return 'Administration.Currencies'; };
            CurrenciesGrid.prototype.getDialogType = function () { return Administration.CurrenciesDialog; };
            CurrenciesGrid.prototype.getIsActiveProperty = function () { return Administration.CurrenciesRow.isActiveProperty; };
            CurrenciesGrid.prototype.getIdProperty = function () { return Administration.CurrenciesRow.idProperty; };
            CurrenciesGrid.prototype.getInsertPermission = function () { return Administration.CurrenciesRow.insertPermission; };
            CurrenciesGrid.prototype.getLocalTextPrefix = function () { return Administration.CurrenciesRow.localTextPrefix; };
            CurrenciesGrid.prototype.getService = function () { return Administration.CurrenciesService.baseUrl; };
            CurrenciesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CurrenciesGrid);
            return CurrenciesGrid;
        }(Serenity.EntityGrid));
        Administration.CurrenciesGrid = CurrenciesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageRow.Fields.LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var NavigationListDialog = /** @class */ (function (_super) {
            __extends(NavigationListDialog, _super);
            function NavigationListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.NavigationListForm(_this.idPrefix);
                return _this;
            }
            NavigationListDialog.prototype.getFormKey = function () { return Administration.NavigationListForm.formKey; };
            NavigationListDialog.prototype.getIdProperty = function () { return Administration.NavigationListRow.idProperty; };
            NavigationListDialog.prototype.getLocalTextPrefix = function () { return Administration.NavigationListRow.localTextPrefix; };
            NavigationListDialog.prototype.getNameProperty = function () { return Administration.NavigationListRow.nameProperty; };
            NavigationListDialog.prototype.getService = function () { return Administration.NavigationListService.baseUrl; };
            NavigationListDialog.prototype.getDeletePermission = function () { return Administration.NavigationListRow.deletePermission; };
            NavigationListDialog.prototype.getInsertPermission = function () { return Administration.NavigationListRow.insertPermission; };
            NavigationListDialog.prototype.getUpdatePermission = function () { return Administration.NavigationListRow.updatePermission; };
            NavigationListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NavigationListDialog);
            return NavigationListDialog;
        }(Serenity.EntityDialog));
        Administration.NavigationListDialog = NavigationListDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var NavigationListGrid = /** @class */ (function (_super) {
            __extends(NavigationListGrid, _super);
            function NavigationListGrid(container) {
                return _super.call(this, container) || this;
            }
            NavigationListGrid.prototype.getColumnsKey = function () { return Administration.NavigationListColumns.columnsKey; };
            NavigationListGrid.prototype.getDialogType = function () { return Administration.NavigationListDialog; };
            NavigationListGrid.prototype.getIdProperty = function () { return Administration.NavigationListRow.idProperty; };
            NavigationListGrid.prototype.getInsertPermission = function () { return Administration.NavigationListRow.insertPermission; };
            NavigationListGrid.prototype.getLocalTextPrefix = function () { return Administration.NavigationListRow.localTextPrefix; };
            NavigationListGrid.prototype.getService = function () { return Administration.NavigationListService.baseUrl; };
            NavigationListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NavigationListGrid);
            return NavigationListGrid;
        }(Serenity.EntityGrid));
        Administration.NavigationListGrid = NavigationListGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsDialog = /** @class */ (function (_super) {
            __extends(RegionsDialog, _super);
            function RegionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RegionsForm(_this.idPrefix);
                return _this;
            }
            RegionsDialog.prototype.getFormKey = function () { return Administration.RegionsForm.formKey; };
            RegionsDialog.prototype.getIdProperty = function () { return Administration.RegionsRow.idProperty; };
            RegionsDialog.prototype.getLocalTextPrefix = function () { return Administration.RegionsRow.localTextPrefix; };
            RegionsDialog.prototype.getNameProperty = function () { return Administration.RegionsRow.nameProperty; };
            RegionsDialog.prototype.getService = function () { return Administration.RegionsService.baseUrl; };
            RegionsDialog.prototype.getDeletePermission = function () { return Administration.RegionsRow.deletePermission; };
            RegionsDialog.prototype.getInsertPermission = function () { return Administration.RegionsRow.insertPermission; };
            RegionsDialog.prototype.getUpdatePermission = function () { return Administration.RegionsRow.updatePermission; };
            RegionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionsDialog);
            return RegionsDialog;
        }(Serenity.EntityDialog));
        Administration.RegionsDialog = RegionsDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsGrid = /** @class */ (function (_super) {
            __extends(RegionsGrid, _super);
            function RegionsGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionsGrid.prototype.getColumnsKey = function () { return 'Administration.Regions'; };
            RegionsGrid.prototype.getDialogType = function () { return Administration.RegionsDialog; };
            RegionsGrid.prototype.getIsActiveProperty = function () { return Administration.RegionsRow.isActiveProperty; };
            RegionsGrid.prototype.getIdProperty = function () { return Administration.RegionsRow.idProperty; };
            RegionsGrid.prototype.getInsertPermission = function () { return Administration.RegionsRow.insertPermission; };
            RegionsGrid.prototype.getLocalTextPrefix = function () { return Administration.RegionsRow.localTextPrefix; };
            RegionsGrid.prototype.getService = function () { return Administration.RegionsService.baseUrl; };
            RegionsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], RegionsGrid);
            return RegionsGrid;
        }(Serenity.EntityGrid));
        Administration.RegionsGrid = RegionsGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleRow.Fields.RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersDialog = /** @class */ (function (_super) {
            __extends(ShippersDialog, _super);
            function ShippersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.ShippersForm(_this.idPrefix);
                return _this;
            }
            ShippersDialog.prototype.getFormKey = function () { return Administration.ShippersForm.formKey; };
            ShippersDialog.prototype.getIdProperty = function () { return Administration.ShippersRow.idProperty; };
            ShippersDialog.prototype.getLocalTextPrefix = function () { return Administration.ShippersRow.localTextPrefix; };
            ShippersDialog.prototype.getNameProperty = function () { return Administration.ShippersRow.nameProperty; };
            ShippersDialog.prototype.getService = function () { return Administration.ShippersService.baseUrl; };
            ShippersDialog.prototype.getDeletePermission = function () { return Administration.ShippersRow.deletePermission; };
            ShippersDialog.prototype.getInsertPermission = function () { return Administration.ShippersRow.insertPermission; };
            ShippersDialog.prototype.getUpdatePermission = function () { return Administration.ShippersRow.updatePermission; };
            ShippersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShippersDialog);
            return ShippersDialog;
        }(Serenity.EntityDialog));
        Administration.ShippersDialog = ShippersDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersGrid = /** @class */ (function (_super) {
            __extends(ShippersGrid, _super);
            function ShippersGrid(container) {
                return _super.call(this, container) || this;
            }
            ShippersGrid.prototype.getColumnsKey = function () { return 'Administration.Shippers'; };
            ShippersGrid.prototype.getDialogType = function () { return Administration.ShippersDialog; };
            ShippersGrid.prototype.getIsActiveProperty = function () { return Administration.ShippersRow.isActiveProperty; };
            ShippersGrid.prototype.getIdProperty = function () { return Administration.ShippersRow.idProperty; };
            ShippersGrid.prototype.getInsertPermission = function () { return Administration.ShippersRow.insertPermission; };
            ShippersGrid.prototype.getLocalTextPrefix = function () { return Administration.ShippersRow.localTextPrefix; };
            ShippersGrid.prototype.getService = function () { return Administration.ShippersService.baseUrl; };
            ShippersGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ShippersGrid);
            return ShippersGrid;
        }(Serenity.EntityGrid));
        Administration.ShippersGrid = ShippersGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesDialog = /** @class */ (function (_super) {
            __extends(StatesDialog, _super);
            function StatesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.StatesForm(_this.idPrefix);
                return _this;
            }
            StatesDialog.prototype.getFormKey = function () { return Administration.StatesForm.formKey; };
            StatesDialog.prototype.getIdProperty = function () { return Administration.StatesRow.idProperty; };
            StatesDialog.prototype.getLocalTextPrefix = function () { return Administration.StatesRow.localTextPrefix; };
            StatesDialog.prototype.getNameProperty = function () { return Administration.StatesRow.nameProperty; };
            StatesDialog.prototype.getService = function () { return Administration.StatesService.baseUrl; };
            StatesDialog.prototype.getDeletePermission = function () { return Administration.StatesRow.deletePermission; };
            StatesDialog.prototype.getInsertPermission = function () { return Administration.StatesRow.insertPermission; };
            StatesDialog.prototype.getUpdatePermission = function () { return Administration.StatesRow.updatePermission; };
            StatesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StatesDialog);
            return StatesDialog;
        }(Serenity.EntityDialog));
        Administration.StatesDialog = StatesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesGrid = /** @class */ (function (_super) {
            __extends(StatesGrid, _super);
            function StatesGrid(container) {
                return _super.call(this, container) || this;
            }
            StatesGrid.prototype.getColumnsKey = function () { return 'Administration.States'; };
            StatesGrid.prototype.getDialogType = function () { return Administration.StatesDialog; };
            StatesGrid.prototype.getIsActiveProperty = function () { return Administration.StatesRow.isActiveProperty; };
            StatesGrid.prototype.getIdProperty = function () { return Administration.StatesRow.idProperty; };
            StatesGrid.prototype.getInsertPermission = function () { return Administration.StatesRow.insertPermission; };
            StatesGrid.prototype.getLocalTextPrefix = function () { return Administration.StatesRow.localTextPrefix; };
            StatesGrid.prototype.getService = function () { return Administration.StatesService.baseUrl; };
            StatesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], StatesGrid);
            return StatesGrid;
        }(Serenity.EntityGrid));
        Administration.StatesGrid = StatesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesDialog = /** @class */ (function (_super) {
            __extends(TerritoriesDialog, _super);
            function TerritoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TerritoriesForm(_this.idPrefix);
                return _this;
            }
            TerritoriesDialog.prototype.getFormKey = function () { return Administration.TerritoriesForm.formKey; };
            TerritoriesDialog.prototype.getIdProperty = function () { return Administration.TerritoriesRow.idProperty; };
            TerritoriesDialog.prototype.getLocalTextPrefix = function () { return Administration.TerritoriesRow.localTextPrefix; };
            TerritoriesDialog.prototype.getNameProperty = function () { return Administration.TerritoriesRow.nameProperty; };
            TerritoriesDialog.prototype.getService = function () { return Administration.TerritoriesService.baseUrl; };
            TerritoriesDialog.prototype.getDeletePermission = function () { return Administration.TerritoriesRow.deletePermission; };
            TerritoriesDialog.prototype.getInsertPermission = function () { return Administration.TerritoriesRow.insertPermission; };
            TerritoriesDialog.prototype.getUpdatePermission = function () { return Administration.TerritoriesRow.updatePermission; };
            TerritoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoriesDialog);
            return TerritoriesDialog;
        }(Serenity.EntityDialog));
        Administration.TerritoriesDialog = TerritoriesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesGrid = /** @class */ (function (_super) {
            __extends(TerritoriesGrid, _super);
            function TerritoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoriesGrid.prototype.getColumnsKey = function () { return 'Administration.Territories'; };
            TerritoriesGrid.prototype.getDialogType = function () { return Administration.TerritoriesDialog; };
            TerritoriesGrid.prototype.getIsActiveProperty = function () { return Administration.TerritoriesRow.isActiveProperty; };
            TerritoriesGrid.prototype.getIdProperty = function () { return Administration.TerritoriesRow.idProperty; };
            TerritoriesGrid.prototype.getInsertPermission = function () { return Administration.TerritoriesRow.insertPermission; };
            TerritoriesGrid.prototype.getLocalTextPrefix = function () { return Administration.TerritoriesRow.localTextPrefix; };
            TerritoriesGrid.prototype.getService = function () { return Administration.TerritoriesService.baseUrl; };
            TerritoriesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], TerritoriesGrid);
            return TerritoriesGrid;
        }(Serenity.EntityGrid));
        Administration.TerritoriesGrid = TerritoriesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* UserRow.Fields.Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SmartERP.Authorization || (SmartERP.Authorization = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesDialog = /** @class */ (function (_super) {
            __extends(WarehousesDialog, _super);
            function WarehousesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.WarehousesForm(_this.idPrefix);
                return _this;
            }
            WarehousesDialog.prototype.getFormKey = function () { return Administration.WarehousesForm.formKey; };
            WarehousesDialog.prototype.getIdProperty = function () { return Administration.WarehousesRow.idProperty; };
            WarehousesDialog.prototype.getLocalTextPrefix = function () { return Administration.WarehousesRow.localTextPrefix; };
            WarehousesDialog.prototype.getNameProperty = function () { return Administration.WarehousesRow.nameProperty; };
            WarehousesDialog.prototype.getService = function () { return Administration.WarehousesService.baseUrl; };
            WarehousesDialog.prototype.getDeletePermission = function () { return Administration.WarehousesRow.deletePermission; };
            WarehousesDialog.prototype.getInsertPermission = function () { return Administration.WarehousesRow.insertPermission; };
            WarehousesDialog.prototype.getUpdatePermission = function () { return Administration.WarehousesRow.updatePermission; };
            WarehousesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], WarehousesDialog);
            return WarehousesDialog;
        }(Serenity.EntityDialog));
        Administration.WarehousesDialog = WarehousesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesGrid = /** @class */ (function (_super) {
            __extends(WarehousesGrid, _super);
            function WarehousesGrid(container) {
                return _super.call(this, container) || this;
            }
            WarehousesGrid.prototype.getColumnsKey = function () { return 'Administration.Warehouses'; };
            WarehousesGrid.prototype.getDialogType = function () { return Administration.WarehousesDialog; };
            WarehousesGrid.prototype.getIdProperty = function () { return Administration.WarehousesRow.idProperty; };
            WarehousesGrid.prototype.getInsertPermission = function () { return Administration.WarehousesRow.insertPermission; };
            WarehousesGrid.prototype.getLocalTextPrefix = function () { return Administration.WarehousesRow.localTextPrefix; };
            WarehousesGrid.prototype.getService = function () { return Administration.WarehousesService.baseUrl; };
            WarehousesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], WarehousesGrid);
            return WarehousesGrid;
        }(Serenity.EntityGrid));
        Administration.WarehousesGrid = WarehousesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksDialog = /** @class */ (function (_super) {
            __extends(BanksDialog, _super);
            function BanksDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Banks.BanksForm(_this.idPrefix);
                return _this;
            }
            BanksDialog.prototype.getFormKey = function () { return Banks.BanksForm.formKey; };
            BanksDialog.prototype.getIdProperty = function () { return Banks.BanksRow.idProperty; };
            BanksDialog.prototype.getLocalTextPrefix = function () { return Banks.BanksRow.localTextPrefix; };
            BanksDialog.prototype.getNameProperty = function () { return Banks.BanksRow.nameProperty; };
            BanksDialog.prototype.getService = function () { return Banks.BanksService.baseUrl; };
            BanksDialog.prototype.getDeletePermission = function () { return Banks.BanksRow.deletePermission; };
            BanksDialog.prototype.getInsertPermission = function () { return Banks.BanksRow.insertPermission; };
            BanksDialog.prototype.getUpdatePermission = function () { return Banks.BanksRow.updatePermission; };
            BanksDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BanksDialog);
            return BanksDialog;
        }(Serenity.EntityDialog));
        Banks.BanksDialog = BanksDialog;
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksGrid = /** @class */ (function (_super) {
            __extends(BanksGrid, _super);
            function BanksGrid(container) {
                return _super.call(this, container) || this;
            }
            BanksGrid.prototype.getColumnsKey = function () { return 'Banks.Banks'; };
            BanksGrid.prototype.getDialogType = function () { return Banks.BanksDialog; };
            BanksGrid.prototype.getIsActiveProperty = function () { return Banks.BanksRow.isActiveProperty; };
            BanksGrid.prototype.getIdProperty = function () { return Banks.BanksRow.idProperty; };
            BanksGrid.prototype.getInsertPermission = function () { return Banks.BanksRow.insertPermission; };
            BanksGrid.prototype.getLocalTextPrefix = function () { return Banks.BanksRow.localTextPrefix; };
            BanksGrid.prototype.getService = function () { return Banks.BanksService.baseUrl; };
            BanksGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BanksGrid);
            return BanksGrid;
        }(Serenity.EntityGrid));
        Banks.BanksGrid = BanksGrid;
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SmartERP.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SmartERP.LanguageList || (SmartERP.LanguageList = {}));
})(SmartERP || (SmartERP = {}));
var J;
(function (J) {
    function initSkins(themeCookieName) {
        var findSidebarForm = function () {
            setTimeout(function () {
                if ($('form.sidebar-form')) {
                    $('form.sidebar-form').insertAfter("a.sidebar-toggle");
                    $('form.sidebar-form').addClass("must-show-search-bar").css("display", "inline-flex");
                    var sidebarToggleHeight = $(".sidebar-toggle").height();
                    $('form.sidebar-form')
                        .css("padding", "0")
                        .css("margin", "0")
                        .css("margin-top", "".concat(sidebarToggleHeight / 2 - 16, "px"));
                    $(".sidebar-menu > li > a").first().css("height", "50px").css("line-height", "40px");
                }
                else {
                    findSidebarForm();
                }
            }, 10);
        };
        var curSkinClass = $.cookie(themeCookieName) || "blue";
        console.log(curSkinClass);
        switch (curSkinClass.toLowerCase().trim()) {
            case "glass-001-style-1":
            case "glass-001-style-2":
            case "glass-001-style-3":
            case "glass-001-style-4":
            case "glass-001-style-5":
            case "glass-001-style-6":
            case "glass-001-style-7":
            case "glass-001-style-8":
            case "glass-001-style-9":
            case "glass-001-style-10":
            case "glass-001-style-11":
                $.datepicker.setDefaults({
                    buttonImage: null,
                    buttonImageOnly: false,
                    buttonText: '<i class="fa fa-calendar j-skin-text-color"></i>'
                });
                Serenity.DataGrid.defaultRowHeight = 30;
                Serenity.DataGrid.defaultHeaderHeight = 30;
                break;
            default:
                break;
        }
        if (curSkinClass.toLowerCase().trim() == "glass-001-style-6") {
            $(document).ready(function () {
                $("body").append("<div id=\"video-background-container\" />");
                $('#video-background-container').vide({
                    //mp4: '/Content/skins/glass001/assets/bg006.mp4',
                    webm: '/Content/skins/glass001/assets/bg006.webm',
                    //ogv: '/Content/skins/glass001/assets/bg006.ogv',
                    poster: '/Content/skins/glass001/assets/navy.png'
                }, {
                    loop: true,
                    muted: true,
                    autoplay: true,
                    bgColor: 'transparent',
                    posterType: 'jpg',
                    className: "video-background-wrapper"
                });
                var player = $('#video-background-container video')[0];
                player.onpause = function () {
                    try {
                        player.play();
                    }
                    catch (_a) {
                    }
                };
            });
        }
        //if (curSkinClass.toLowerCase().trim() == "glass-001-style-10") {
        //    $(document).ready(function () {
        //        $("body").append(`<div id="video-background-container" />`);
        //        ($('#video-background-container') as any).vide({
        //            mp4: '/Content/skins/glass001/assets/y-vbg/vbg06.mp4',
        //            //webm: '/Content/skins/glass001/assets/y-vbg/bg006.webm',
        //            //ogv: '/Content/skins/glass001/assets/bg006.ogv',
        //            poster: '/Content/skins/glass001/assets/navy.png'
        //        }, {
        //            loop: true,
        //            muted: true,
        //            autoplay: true,
        //            bgColor: 'transparent',
        //            posterType: 'jpg',
        //            className: "video-background-wrapper"
        //        });
        //        let player = $('#video-background-container video')[0];
        //        player.onpause = function () {
        //            try {
        //                (player as any).play();
        //            } catch{
        //            }
        //        };
        //    });
        //}
        if (curSkinClass.toLowerCase().trim() == "glass-001-style-1" || curSkinClass.toLowerCase().trim() == "glass-001-style-3") {
            $(document).ready(function () {
                $("body").append("<div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>\n                    <div class=\"bg-animation-firefly\"></div>");
            });
        }
        if (curSkinClass.toLowerCase().trim() == "glass-001-style-1" ||
            curSkinClass.toLowerCase().trim() == "glass-001-style-3" ||
            curSkinClass.toLowerCase().trim() == "glass-001-style-9" ||
            curSkinClass.toLowerCase().trim() == "glass-001-style-10" ||
            curSkinClass.toLowerCase().trim() == "glass-001-style-11") {
            $(document).ready(function () { findSidebarForm(); });
        }
        if (curSkinClass.toLowerCase().trim() == "glass-001-style-4") {
            $(document).ready(function () {
                $("body").append("<ul class=\"bg-animation-box\"><li class=\"circle-box\"></li><li class=\"corners-box-20\"></li><li class=\"circle-box\"></li><li class=\"corners-box-20\"></li><li></li><li class=\"corners-box-35\"></li><li class=\"circle-box\"></li><li></li></ul>");
            });
        }
    }
    J.initSkins = initSkins;
})(J || (J = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="Helpers/J.initSkins.ts" />
var SmartERP;
(function (SmartERP) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SmartERP');
        Serenity.EntityDialog.defaultLanguageList = SmartERP.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        J.initSkins('ThemePreference');
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SmartERP.ScriptInitialization || (SmartERP.ScriptInitialization = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SmartERP.DialogUtils || (SmartERP.DialogUtils = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload();
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                    window.location.reload();
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                var glassStyleIdx = 1;
                while (glassStyleIdx <= 11) {
                    Q.addOption(select, "glass-001-style-".concat(glassStyleIdx), Q.text("Site.Layout.Glass001Style".concat(glassStyleIdx)));
                    glassStyleIdx++;
                }
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersDialog = /** @class */ (function (_super) {
            __extends(CustomersDialog, _super);
            function CustomersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Customers.CustomersForm(_this.idPrefix);
                return _this;
            }
            CustomersDialog.prototype.getFormKey = function () { return Customers.CustomersForm.formKey; };
            CustomersDialog.prototype.getIdProperty = function () { return Customers.CustomersRow.idProperty; };
            CustomersDialog.prototype.getLocalTextPrefix = function () { return Customers.CustomersRow.localTextPrefix; };
            CustomersDialog.prototype.getNameProperty = function () { return Customers.CustomersRow.nameProperty; };
            CustomersDialog.prototype.getService = function () { return Customers.CustomersService.baseUrl; };
            CustomersDialog.prototype.getDeletePermission = function () { return Customers.CustomersRow.deletePermission; };
            CustomersDialog.prototype.getInsertPermission = function () { return Customers.CustomersRow.insertPermission; };
            CustomersDialog.prototype.getUpdatePermission = function () { return Customers.CustomersRow.updatePermission; };
            CustomersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomersDialog);
            return CustomersDialog;
        }(Serenity.EntityDialog));
        Customers.CustomersDialog = CustomersDialog;
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersGrid = /** @class */ (function (_super) {
            __extends(CustomersGrid, _super);
            function CustomersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomersGrid.prototype.getColumnsKey = function () { return 'Customers.Customers'; };
            CustomersGrid.prototype.getDialogType = function () { return Customers.CustomersDialog; };
            CustomersGrid.prototype.getIsActiveProperty = function () { return Customers.CustomersRow.isActiveProperty; };
            CustomersGrid.prototype.getIdProperty = function () { return Customers.CustomersRow.idProperty; };
            CustomersGrid.prototype.getInsertPermission = function () { return Customers.CustomersRow.insertPermission; };
            CustomersGrid.prototype.getLocalTextPrefix = function () { return Customers.CustomersRow.localTextPrefix; };
            CustomersGrid.prototype.getService = function () { return Customers.CustomersService.baseUrl; };
            CustomersGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomersGrid);
            return CustomersGrid;
        }(Serenity.EntityGrid));
        Customers.CustomersGrid = CustomersGrid;
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesDialog = /** @class */ (function (_super) {
            __extends(ExpenseTypesDialog, _super);
            function ExpenseTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.ExpenseTypesForm(_this.idPrefix);
                return _this;
            }
            ExpenseTypesDialog.prototype.getFormKey = function () { return Expenses.ExpenseTypesForm.formKey; };
            ExpenseTypesDialog.prototype.getIdProperty = function () { return Expenses.ExpenseTypesRow.idProperty; };
            ExpenseTypesDialog.prototype.getLocalTextPrefix = function () { return Expenses.ExpenseTypesRow.localTextPrefix; };
            ExpenseTypesDialog.prototype.getNameProperty = function () { return Expenses.ExpenseTypesRow.nameProperty; };
            ExpenseTypesDialog.prototype.getService = function () { return Expenses.ExpenseTypesService.baseUrl; };
            ExpenseTypesDialog.prototype.getDeletePermission = function () { return Expenses.ExpenseTypesRow.deletePermission; };
            ExpenseTypesDialog.prototype.getInsertPermission = function () { return Expenses.ExpenseTypesRow.insertPermission; };
            ExpenseTypesDialog.prototype.getUpdatePermission = function () { return Expenses.ExpenseTypesRow.updatePermission; };
            ExpenseTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpenseTypesDialog);
            return ExpenseTypesDialog;
        }(Serenity.EntityDialog));
        Expenses.ExpenseTypesDialog = ExpenseTypesDialog;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesGrid = /** @class */ (function (_super) {
            __extends(ExpenseTypesGrid, _super);
            function ExpenseTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpenseTypesGrid.prototype.getColumnsKey = function () { return 'Expenses.ExpenseTypes'; };
            ExpenseTypesGrid.prototype.getDialogType = function () { return Expenses.ExpenseTypesDialog; };
            ExpenseTypesGrid.prototype.getIdProperty = function () { return Expenses.ExpenseTypesRow.idProperty; };
            ExpenseTypesGrid.prototype.getInsertPermission = function () { return Expenses.ExpenseTypesRow.insertPermission; };
            ExpenseTypesGrid.prototype.getLocalTextPrefix = function () { return Expenses.ExpenseTypesRow.localTextPrefix; };
            ExpenseTypesGrid.prototype.getService = function () { return Expenses.ExpenseTypesService.baseUrl; };
            ExpenseTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpenseTypesGrid);
            return ExpenseTypesGrid;
        }(Serenity.EntityGrid));
        Expenses.ExpenseTypesGrid = ExpenseTypesGrid;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesDialog = /** @class */ (function (_super) {
            __extends(ExpensesDialog, _super);
            function ExpensesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.ExpensesForm(_this.idPrefix);
                return _this;
            }
            ExpensesDialog.prototype.getFormKey = function () { return Expenses.ExpensesForm.formKey; };
            ExpensesDialog.prototype.getIdProperty = function () { return Expenses.ExpensesRow.idProperty; };
            ExpensesDialog.prototype.getLocalTextPrefix = function () { return Expenses.ExpensesRow.localTextPrefix; };
            ExpensesDialog.prototype.getService = function () { return Expenses.ExpensesService.baseUrl; };
            ExpensesDialog.prototype.getDeletePermission = function () { return Expenses.ExpensesRow.deletePermission; };
            ExpensesDialog.prototype.getInsertPermission = function () { return Expenses.ExpensesRow.insertPermission; };
            ExpensesDialog.prototype.getUpdatePermission = function () { return Expenses.ExpensesRow.updatePermission; };
            ExpensesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesDialog);
            return ExpensesDialog;
        }(Serenity.EntityDialog));
        Expenses.ExpensesDialog = ExpensesDialog;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesGrid = /** @class */ (function (_super) {
            __extends(ExpensesGrid, _super);
            function ExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpensesGrid.prototype.getColumnsKey = function () { return 'Expenses.Expenses'; };
            ExpensesGrid.prototype.getDialogType = function () { return Expenses.ExpensesDialog; };
            ExpensesGrid.prototype.getIdProperty = function () { return Expenses.ExpensesRow.idProperty; };
            ExpensesGrid.prototype.getInsertPermission = function () { return Expenses.ExpensesRow.insertPermission; };
            ExpensesGrid.prototype.getLocalTextPrefix = function () { return Expenses.ExpensesRow.localTextPrefix; };
            ExpensesGrid.prototype.getService = function () { return Expenses.ExpensesService.baseUrl; };
            ExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesGrid);
            return ExpensesGrid;
        }(Serenity.EntityGrid));
        Expenses.ExpensesGrid = ExpensesGrid;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceDialog = /** @class */ (function (_super) {
            __extends(AttendanceDialog, _super);
            function AttendanceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.AttendanceForm(_this.idPrefix);
                return _this;
            }
            AttendanceDialog.prototype.getFormKey = function () { return HumanResource.AttendanceForm.formKey; };
            AttendanceDialog.prototype.getIdProperty = function () { return HumanResource.AttendanceRow.idProperty; };
            AttendanceDialog.prototype.getLocalTextPrefix = function () { return HumanResource.AttendanceRow.localTextPrefix; };
            AttendanceDialog.prototype.getService = function () { return HumanResource.AttendanceService.baseUrl; };
            AttendanceDialog.prototype.getDeletePermission = function () { return HumanResource.AttendanceRow.deletePermission; };
            AttendanceDialog.prototype.getInsertPermission = function () { return HumanResource.AttendanceRow.insertPermission; };
            AttendanceDialog.prototype.getUpdatePermission = function () { return HumanResource.AttendanceRow.updatePermission; };
            AttendanceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceDialog);
            return AttendanceDialog;
        }(Serenity.EntityDialog));
        HumanResource.AttendanceDialog = AttendanceDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceGrid = /** @class */ (function (_super) {
            __extends(AttendanceGrid, _super);
            function AttendanceGrid(container) {
                return _super.call(this, container) || this;
            }
            AttendanceGrid.prototype.getColumnsKey = function () { return 'HumanResource.Attendance'; };
            AttendanceGrid.prototype.getDialogType = function () { return HumanResource.AttendanceDialog; };
            AttendanceGrid.prototype.getIdProperty = function () { return HumanResource.AttendanceRow.idProperty; };
            AttendanceGrid.prototype.getInsertPermission = function () { return HumanResource.AttendanceRow.insertPermission; };
            AttendanceGrid.prototype.getLocalTextPrefix = function () { return HumanResource.AttendanceRow.localTextPrefix; };
            AttendanceGrid.prototype.getService = function () { return HumanResource.AttendanceService.baseUrl; };
            AttendanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceGrid);
            return AttendanceGrid;
        }(Serenity.EntityGrid));
        HumanResource.AttendanceGrid = AttendanceGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsDialog = /** @class */ (function (_super) {
            __extends(DepartmentsDialog, _super);
            function DepartmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.DepartmentsForm(_this.idPrefix);
                return _this;
            }
            DepartmentsDialog.prototype.getFormKey = function () { return HumanResource.DepartmentsForm.formKey; };
            DepartmentsDialog.prototype.getIdProperty = function () { return HumanResource.DepartmentsRow.idProperty; };
            DepartmentsDialog.prototype.getLocalTextPrefix = function () { return HumanResource.DepartmentsRow.localTextPrefix; };
            DepartmentsDialog.prototype.getNameProperty = function () { return HumanResource.DepartmentsRow.nameProperty; };
            DepartmentsDialog.prototype.getService = function () { return HumanResource.DepartmentsService.baseUrl; };
            DepartmentsDialog.prototype.getDeletePermission = function () { return HumanResource.DepartmentsRow.deletePermission; };
            DepartmentsDialog.prototype.getInsertPermission = function () { return HumanResource.DepartmentsRow.insertPermission; };
            DepartmentsDialog.prototype.getUpdatePermission = function () { return HumanResource.DepartmentsRow.updatePermission; };
            DepartmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsDialog);
            return DepartmentsDialog;
        }(Serenity.EntityDialog));
        HumanResource.DepartmentsDialog = DepartmentsDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsEditor = /** @class */ (function (_super) {
            __extends(DepartmentsEditor, _super);
            function DepartmentsEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            DepartmentsEditor.prototype.getLookupKey = function () {
                return HumanResource.DepartmentsRow.lookupKey;
            };
            DepartmentsEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Department;
                while (item.ParentDepartmentId != null && !visited[item.ParentDepartmentId]) {
                    item = lookup.itemById[item.ParentDepartmentId];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.Department + " >> " + text;
                }
                return text;
            };
            DepartmentsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], DepartmentsEditor);
            return DepartmentsEditor;
        }(Serenity.LookupEditorBase));
        HumanResource.DepartmentsEditor = DepartmentsEditor;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsGrid = /** @class */ (function (_super) {
            __extends(DepartmentsGrid, _super);
            function DepartmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartmentsGrid.prototype.getColumnsKey = function () { return 'HumanResource.Departments'; };
            DepartmentsGrid.prototype.getDialogType = function () { return HumanResource.DepartmentsDialog; };
            DepartmentsGrid.prototype.getIsActiveProperty = function () { return HumanResource.DepartmentsRow.isActiveProperty; };
            DepartmentsGrid.prototype.getIdProperty = function () { return HumanResource.DepartmentsRow.idProperty; };
            DepartmentsGrid.prototype.getInsertPermission = function () { return HumanResource.DepartmentsRow.insertPermission; };
            DepartmentsGrid.prototype.getLocalTextPrefix = function () { return HumanResource.DepartmentsRow.localTextPrefix; };
            DepartmentsGrid.prototype.getService = function () { return HumanResource.DepartmentsService.baseUrl; };
            DepartmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsGrid);
            return DepartmentsGrid;
        }(Serenity.EntityGrid));
        HumanResource.DepartmentsGrid = DepartmentsGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsDialog = /** @class */ (function (_super) {
            __extends(DesignationsDialog, _super);
            function DesignationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.DesignationsForm(_this.idPrefix);
                return _this;
            }
            DesignationsDialog.prototype.getFormKey = function () { return HumanResource.DesignationsForm.formKey; };
            DesignationsDialog.prototype.getIdProperty = function () { return HumanResource.DesignationsRow.idProperty; };
            DesignationsDialog.prototype.getLocalTextPrefix = function () { return HumanResource.DesignationsRow.localTextPrefix; };
            DesignationsDialog.prototype.getNameProperty = function () { return HumanResource.DesignationsRow.nameProperty; };
            DesignationsDialog.prototype.getService = function () { return HumanResource.DesignationsService.baseUrl; };
            DesignationsDialog.prototype.getDeletePermission = function () { return HumanResource.DesignationsRow.deletePermission; };
            DesignationsDialog.prototype.getInsertPermission = function () { return HumanResource.DesignationsRow.insertPermission; };
            DesignationsDialog.prototype.getUpdatePermission = function () { return HumanResource.DesignationsRow.updatePermission; };
            DesignationsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationsDialog);
            return DesignationsDialog;
        }(Serenity.EntityDialog));
        HumanResource.DesignationsDialog = DesignationsDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsEditor = /** @class */ (function (_super) {
            __extends(DesignationsEditor, _super);
            function DesignationsEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            DesignationsEditor.prototype.getLookupKey = function () {
                return HumanResource.DesignationsRow.lookupKey;
            };
            DesignationsEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Designation;
                while (item.ParentDesignationId != null && !visited[item.ParentDesignationId]) {
                    item = lookup.itemById[item.ParentDesignationId];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.Designation + " >> " + text;
                }
                return text;
            };
            DesignationsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], DesignationsEditor);
            return DesignationsEditor;
        }(Serenity.LookupEditorBase));
        HumanResource.DesignationsEditor = DesignationsEditor;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsGrid = /** @class */ (function (_super) {
            __extends(DesignationsGrid, _super);
            function DesignationsGrid(container) {
                return _super.call(this, container) || this;
            }
            DesignationsGrid.prototype.getColumnsKey = function () { return 'HumanResource.Designations'; };
            DesignationsGrid.prototype.getDialogType = function () { return HumanResource.DesignationsDialog; };
            DesignationsGrid.prototype.getIsActiveProperty = function () { return HumanResource.DesignationsRow.isActiveProperty; };
            DesignationsGrid.prototype.getIdProperty = function () { return HumanResource.DesignationsRow.idProperty; };
            DesignationsGrid.prototype.getInsertPermission = function () { return HumanResource.DesignationsRow.insertPermission; };
            DesignationsGrid.prototype.getLocalTextPrefix = function () { return HumanResource.DesignationsRow.localTextPrefix; };
            DesignationsGrid.prototype.getService = function () { return HumanResource.DesignationsService.baseUrl; };
            DesignationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationsGrid);
            return DesignationsGrid;
        }(Serenity.EntityGrid));
        HumanResource.DesignationsGrid = DesignationsGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeBankAccountsDialog = /** @class */ (function (_super) {
            __extends(EmployeeBankAccountsDialog, _super);
            function EmployeeBankAccountsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.EmployeeBankAccountsForm(_this.idPrefix);
                return _this;
            }
            EmployeeBankAccountsDialog.prototype.getFormKey = function () { return HumanResource.EmployeeBankAccountsForm.formKey; };
            EmployeeBankAccountsDialog.prototype.getIdProperty = function () { return HumanResource.EmployeeBankAccountsRow.idProperty; };
            EmployeeBankAccountsDialog.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeBankAccountsRow.localTextPrefix; };
            EmployeeBankAccountsDialog.prototype.getNameProperty = function () { return HumanResource.EmployeeBankAccountsRow.nameProperty; };
            EmployeeBankAccountsDialog.prototype.getService = function () { return HumanResource.EmployeeBankAccountsService.baseUrl; };
            EmployeeBankAccountsDialog.prototype.getDeletePermission = function () { return HumanResource.EmployeeBankAccountsRow.deletePermission; };
            EmployeeBankAccountsDialog.prototype.getInsertPermission = function () { return HumanResource.EmployeeBankAccountsRow.insertPermission; };
            EmployeeBankAccountsDialog.prototype.getUpdatePermission = function () { return HumanResource.EmployeeBankAccountsRow.updatePermission; };
            EmployeeBankAccountsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeBankAccountsDialog);
            return EmployeeBankAccountsDialog;
        }(Serenity.EntityDialog));
        HumanResource.EmployeeBankAccountsDialog = EmployeeBankAccountsDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeBankAccountsGrid = /** @class */ (function (_super) {
            __extends(EmployeeBankAccountsGrid, _super);
            function EmployeeBankAccountsGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeBankAccountsGrid.prototype.getColumnsKey = function () { return 'HumanResource.EmployeeBankAccounts'; };
            EmployeeBankAccountsGrid.prototype.getDialogType = function () { return HumanResource.EmployeeBankAccountsDialog; };
            EmployeeBankAccountsGrid.prototype.getIdProperty = function () { return HumanResource.EmployeeBankAccountsRow.idProperty; };
            EmployeeBankAccountsGrid.prototype.getInsertPermission = function () { return HumanResource.EmployeeBankAccountsRow.insertPermission; };
            EmployeeBankAccountsGrid.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeBankAccountsRow.localTextPrefix; };
            EmployeeBankAccountsGrid.prototype.getService = function () { return HumanResource.EmployeeBankAccountsService.baseUrl; };
            EmployeeBankAccountsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeBankAccountsGrid);
            return EmployeeBankAccountsGrid;
        }(Serenity.EntityGrid));
        HumanResource.EmployeeBankAccountsGrid = EmployeeBankAccountsGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeDeductionEditor = /** @class */ (function (_super) {
            __extends(EmployeeDeductionEditor, _super);
            function EmployeeDeductionEditor(container) {
                return _super.call(this, container) || this;
            }
            EmployeeDeductionEditor.prototype.getColumnsKey = function () { return HumanResource.EmployeeDeductionsColumns.columnsKey; };
            EmployeeDeductionEditor.prototype.getDialogType = function () { return HumanResource.EmployeeDeductionsDialog; };
            EmployeeDeductionEditor.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeDeductionsRow.localTextPrefix; };
            EmployeeDeductionEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.DeductionName = SmartERP.Masters.DeductionsRow.getLookup()
                    .itemById[row.DeductionId].Name;
                return true;
            };
            EmployeeDeductionEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            EmployeeDeductionEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            EmployeeDeductionEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeDeductionEditor);
            return EmployeeDeductionEditor;
        }(Serenity.Extensions.GridEditorBase));
        HumanResource.EmployeeDeductionEditor = EmployeeDeductionEditor;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeDeductionsDialog = /** @class */ (function (_super) {
            __extends(EmployeeDeductionsDialog, _super);
            function EmployeeDeductionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.EmployeeDeductionsForm(_this.idPrefix);
                return _this;
            }
            EmployeeDeductionsDialog.prototype.getFormKey = function () { return HumanResource.EmployeeDeductionsForm.formKey; };
            EmployeeDeductionsDialog.prototype.getIdProperty = function () { return HumanResource.EmployeeDeductionsRow.idProperty; };
            EmployeeDeductionsDialog.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeDeductionsRow.localTextPrefix; };
            EmployeeDeductionsDialog.prototype.getNameProperty = function () { return HumanResource.EmployeeDeductionsRow.nameProperty; };
            EmployeeDeductionsDialog.prototype.getService = function () { return HumanResource.EmployeeDeductionsService.baseUrl; };
            EmployeeDeductionsDialog.prototype.getDeletePermission = function () { return HumanResource.EmployeeDeductionsRow.deletePermission; };
            EmployeeDeductionsDialog.prototype.getInsertPermission = function () { return HumanResource.EmployeeDeductionsRow.insertPermission; };
            EmployeeDeductionsDialog.prototype.getUpdatePermission = function () { return HumanResource.EmployeeDeductionsRow.updatePermission; };
            EmployeeDeductionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeDeductionsDialog);
            return EmployeeDeductionsDialog;
        }(Serenity.Extensions.GridEditorDialog));
        HumanResource.EmployeeDeductionsDialog = EmployeeDeductionsDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeDeductionsGrid = /** @class */ (function (_super) {
            __extends(EmployeeDeductionsGrid, _super);
            function EmployeeDeductionsGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeDeductionsGrid.prototype.getColumnsKey = function () { return HumanResource.EmployeeDeductionsColumns.columnsKey; };
            EmployeeDeductionsGrid.prototype.getDialogType = function () { return HumanResource.EmployeeDeductionsDialog; };
            EmployeeDeductionsGrid.prototype.getIdProperty = function () { return HumanResource.EmployeeDeductionsRow.idProperty; };
            EmployeeDeductionsGrid.prototype.getInsertPermission = function () { return HumanResource.EmployeeDeductionsRow.insertPermission; };
            EmployeeDeductionsGrid.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeDeductionsRow.localTextPrefix; };
            EmployeeDeductionsGrid.prototype.getService = function () { return HumanResource.EmployeeDeductionsService.baseUrl; };
            EmployeeDeductionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeDeductionsGrid);
            return EmployeeDeductionsGrid;
        }(Serenity.EntityGrid));
        HumanResource.EmployeeDeductionsGrid = EmployeeDeductionsGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeIncomeEditor = /** @class */ (function (_super) {
            __extends(EmployeeIncomeEditor, _super);
            function EmployeeIncomeEditor(container) {
                return _super.call(this, container) || this;
            }
            EmployeeIncomeEditor.prototype.getColumnsKey = function () { return HumanResource.EmployeeIncomesColumns.columnsKey; };
            EmployeeIncomeEditor.prototype.getDialogType = function () { return HumanResource.EmployeeIncomesDialog; };
            EmployeeIncomeEditor.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeIncomesRow.localTextPrefix; };
            EmployeeIncomeEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.IncomeName = SmartERP.Masters.IncomesRow.getLookup()
                    .itemById[row.IncomeId].Name;
                return true;
            };
            EmployeeIncomeEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            EmployeeIncomeEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            EmployeeIncomeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeIncomeEditor);
            return EmployeeIncomeEditor;
        }(Serenity.Extensions.GridEditorBase));
        HumanResource.EmployeeIncomeEditor = EmployeeIncomeEditor;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeIncomesDialog = /** @class */ (function (_super) {
            __extends(EmployeeIncomesDialog, _super);
            function EmployeeIncomesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.EmployeeIncomesForm(_this.idPrefix);
                return _this;
            }
            EmployeeIncomesDialog.prototype.getFormKey = function () { return HumanResource.EmployeeIncomesForm.formKey; };
            EmployeeIncomesDialog.prototype.getIdProperty = function () { return HumanResource.EmployeeIncomesRow.idProperty; };
            EmployeeIncomesDialog.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeIncomesRow.localTextPrefix; };
            EmployeeIncomesDialog.prototype.getNameProperty = function () { return HumanResource.EmployeeIncomesRow.nameProperty; };
            EmployeeIncomesDialog.prototype.getService = function () { return HumanResource.EmployeeIncomesService.baseUrl; };
            EmployeeIncomesDialog.prototype.getDeletePermission = function () { return HumanResource.EmployeeIncomesRow.deletePermission; };
            EmployeeIncomesDialog.prototype.getInsertPermission = function () { return HumanResource.EmployeeIncomesRow.insertPermission; };
            EmployeeIncomesDialog.prototype.getUpdatePermission = function () { return HumanResource.EmployeeIncomesRow.updatePermission; };
            EmployeeIncomesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeIncomesDialog);
            return EmployeeIncomesDialog;
        }(Serenity.Extensions.GridEditorDialog));
        HumanResource.EmployeeIncomesDialog = EmployeeIncomesDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeeIncomesGrid = /** @class */ (function (_super) {
            __extends(EmployeeIncomesGrid, _super);
            function EmployeeIncomesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeIncomesGrid.prototype.getColumnsKey = function () { return HumanResource.EmployeeIncomesColumns.columnsKey; };
            EmployeeIncomesGrid.prototype.getDialogType = function () { return HumanResource.EmployeeIncomesDialog; };
            EmployeeIncomesGrid.prototype.getIdProperty = function () { return HumanResource.EmployeeIncomesRow.idProperty; };
            EmployeeIncomesGrid.prototype.getInsertPermission = function () { return HumanResource.EmployeeIncomesRow.insertPermission; };
            EmployeeIncomesGrid.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeeIncomesRow.localTextPrefix; };
            EmployeeIncomesGrid.prototype.getService = function () { return HumanResource.EmployeeIncomesService.baseUrl; };
            EmployeeIncomesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeIncomesGrid);
            return EmployeeIncomesGrid;
        }(Serenity.EntityGrid));
        HumanResource.EmployeeIncomesGrid = EmployeeIncomesGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesDialog = /** @class */ (function (_super) {
            __extends(EmployeesDialog, _super);
            function EmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.EmployeesForm(_this.idPrefix);
                return _this;
            }
            EmployeesDialog.prototype.getFormKey = function () { return HumanResource.EmployeesForm.formKey; };
            EmployeesDialog.prototype.getIdProperty = function () { return HumanResource.EmployeesRow.idProperty; };
            EmployeesDialog.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeesRow.localTextPrefix; };
            EmployeesDialog.prototype.getNameProperty = function () { return HumanResource.EmployeesRow.nameProperty; };
            EmployeesDialog.prototype.getService = function () { return HumanResource.EmployeesService.baseUrl; };
            EmployeesDialog.prototype.getDeletePermission = function () { return HumanResource.EmployeesRow.deletePermission; };
            EmployeesDialog.prototype.getInsertPermission = function () { return HumanResource.EmployeesRow.insertPermission; };
            EmployeesDialog.prototype.getUpdatePermission = function () { return HumanResource.EmployeesRow.updatePermission; };
            EmployeesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], EmployeesDialog);
            return EmployeesDialog;
        }(Serenity.EntityDialog));
        HumanResource.EmployeesDialog = EmployeesDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesGrid = /** @class */ (function (_super) {
            __extends(EmployeesGrid, _super);
            function EmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeesGrid.prototype.getColumnsKey = function () { return 'HumanResource.Employees'; };
            EmployeesGrid.prototype.getDialogType = function () { return HumanResource.EmployeesDialog; };
            EmployeesGrid.prototype.getIsActiveProperty = function () { return HumanResource.EmployeesRow.isActiveProperty; };
            EmployeesGrid.prototype.getIdProperty = function () { return HumanResource.EmployeesRow.idProperty; };
            EmployeesGrid.prototype.getInsertPermission = function () { return HumanResource.EmployeesRow.insertPermission; };
            EmployeesGrid.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeesRow.localTextPrefix; };
            EmployeesGrid.prototype.getService = function () { return HumanResource.EmployeesService.baseUrl; };
            EmployeesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], EmployeesGrid);
            return EmployeesGrid;
        }(Serenity.EntityGrid));
        HumanResource.EmployeesGrid = EmployeesGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsDialog = /** @class */ (function (_super) {
            __extends(DamagedProductsDialog, _super);
            function DamagedProductsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.DamagedProductsForm(_this.idPrefix);
                _this.form = new Inventory.DamagedProductsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        var item = SmartERP.Products.ProductsRow.getLookup().itemById[productID];
                        _this.form.Name.value = item.ProductName;
                        _this.form.Code.value = item.Barcode;
                        _this.form.PurchasePrice.value = item.PurchasePrice;
                        _this.form.Quantity.value = 1;
                    }
                });
                return _this;
            }
            DamagedProductsDialog.prototype.getFormKey = function () { return Inventory.DamagedProductsForm.formKey; };
            DamagedProductsDialog.prototype.getIdProperty = function () { return Inventory.DamagedProductsRow.idProperty; };
            DamagedProductsDialog.prototype.getLocalTextPrefix = function () { return Inventory.DamagedProductsRow.localTextPrefix; };
            DamagedProductsDialog.prototype.getNameProperty = function () { return Inventory.DamagedProductsRow.nameProperty; };
            DamagedProductsDialog.prototype.getService = function () { return Inventory.DamagedProductsService.baseUrl; };
            DamagedProductsDialog.prototype.getDeletePermission = function () { return Inventory.DamagedProductsRow.deletePermission; };
            DamagedProductsDialog.prototype.getInsertPermission = function () { return Inventory.DamagedProductsRow.insertPermission; };
            DamagedProductsDialog.prototype.getUpdatePermission = function () { return Inventory.DamagedProductsRow.updatePermission; };
            DamagedProductsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DamagedProductsDialog);
            return DamagedProductsDialog;
        }(Serenity.EntityDialog));
        Inventory.DamagedProductsDialog = DamagedProductsDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsGrid = /** @class */ (function (_super) {
            __extends(DamagedProductsGrid, _super);
            function DamagedProductsGrid(container) {
                return _super.call(this, container) || this;
            }
            DamagedProductsGrid.prototype.getColumnsKey = function () { return 'Inventory.DamagedProducts'; };
            DamagedProductsGrid.prototype.getDialogType = function () { return Inventory.DamagedProductsDialog; };
            DamagedProductsGrid.prototype.getIdProperty = function () { return Inventory.DamagedProductsRow.idProperty; };
            DamagedProductsGrid.prototype.getInsertPermission = function () { return Inventory.DamagedProductsRow.insertPermission; };
            DamagedProductsGrid.prototype.getLocalTextPrefix = function () { return Inventory.DamagedProductsRow.localTextPrefix; };
            DamagedProductsGrid.prototype.getService = function () { return Inventory.DamagedProductsService.baseUrl; };
            DamagedProductsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Inventory.DamagedProductsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            DamagedProductsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], DamagedProductsGrid);
            return DamagedProductsGrid;
        }(Serenity.EntityGrid));
        Inventory.DamagedProductsGrid = DamagedProductsGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailEditDialog = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailEditDialog, _super);
            function GoodsIssueDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsIssueDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.Quantity.value = 1;
                        //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        //this.form.Quantity.value = 1;
                        //this.form.Discount.value = 0;
                        //var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        //this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            GoodsIssueDetailEditDialog.prototype.getFormKey = function () { return Inventory.GoodsIssueDetailsForm.formKey; };
            GoodsIssueDetailEditDialog.prototype.getNameProperty = function () { return Inventory.GoodsIssueDetailsRow.nameProperty; };
            GoodsIssueDetailEditDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsIssueDetailEditDialog);
            return GoodsIssueDetailEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Inventory.GoodsIssueDetailEditDialog = GoodsIssueDetailEditDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailEditor = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailEditor, _super);
            function GoodsIssueDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            GoodsIssueDetailEditor.prototype.getColumnsKey = function () { return "Inventory.GoodsIssueDetails"; };
            GoodsIssueDetailEditor.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailEditor.prototype.getDialogType = function () { return Inventory.GoodsIssueDetailEditDialog; };
            GoodsIssueDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            GoodsIssueDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.WarehouseName = SmartERP.Administration.WarehousesRow.getLookup()
                    .itemById[row.WarehouseId].Name;
                //row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                //row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                //    .itemById[row.UnitId].Name;
                return true;
            };
            GoodsIssueDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            GoodsIssueDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], GoodsIssueDetailEditor);
            return GoodsIssueDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Inventory.GoodsIssueDetailEditor = GoodsIssueDetailEditor;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDialog = /** @class */ (function (_super) {
            __extends(GoodsIssueDialog, _super);
            function GoodsIssueDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsIssueForm(_this.idPrefix);
                _this.form = new Inventory.GoodsIssueForm(_this.idPrefix);
                _this.form.SaleId.change(function (e) {
                    var saleId = Q.toId(_this.form.SaleId.value);
                    if (saleId != null) {
                        _this.form.CustomerId.value = Q.toId(SmartERP.Sales.SalesRow.getLookup().itemById[saleId].CustomerId);
                    }
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    var totalQuantity = 0;
                    for (var _i = 0, _a = _this.form.LineItems.getItems(); _i < _a.length; _i++) {
                        var k = _a[_i];
                        totalQuantity += k.Quantity;
                    }
                    _this.form.TotalQuantity.value = totalQuantity;
                    // Q.notifySuccess(total.toString());
                });
                return _this;
            }
            GoodsIssueDialog.prototype.getFormKey = function () { return Inventory.GoodsIssueForm.formKey; };
            GoodsIssueDialog.prototype.getIdProperty = function () { return Inventory.GoodsIssueRow.idProperty; };
            GoodsIssueDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueRow.localTextPrefix; };
            GoodsIssueDialog.prototype.getNameProperty = function () { return Inventory.GoodsIssueRow.nameProperty; };
            GoodsIssueDialog.prototype.getService = function () { return Inventory.GoodsIssueService.baseUrl; };
            GoodsIssueDialog.prototype.getDeletePermission = function () { return Inventory.GoodsIssueRow.deletePermission; };
            GoodsIssueDialog.prototype.getInsertPermission = function () { return Inventory.GoodsIssueRow.insertPermission; };
            GoodsIssueDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsIssueRow.updatePermission; };
            GoodsIssueDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
            };
            GoodsIssueDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            GoodsIssueDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], GoodsIssueDialog);
            return GoodsIssueDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsIssueDialog = GoodsIssueDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueGrid = /** @class */ (function (_super) {
            __extends(GoodsIssueGrid, _super);
            function GoodsIssueGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsIssueGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsIssue'; };
            GoodsIssueGrid.prototype.getDialogType = function () { return Inventory.GoodsIssueDialog; };
            GoodsIssueGrid.prototype.getIdProperty = function () { return Inventory.GoodsIssueRow.idProperty; };
            GoodsIssueGrid.prototype.getInsertPermission = function () { return Inventory.GoodsIssueRow.insertPermission; };
            GoodsIssueGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueRow.localTextPrefix; };
            GoodsIssueGrid.prototype.getService = function () { return Inventory.GoodsIssueService.baseUrl; };
            GoodsIssueGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], GoodsIssueGrid);
            return GoodsIssueGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsIssueGrid = GoodsIssueGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsDialog = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailsDialog, _super);
            function GoodsIssueDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.GoodsIssueDetailsForm(_this.idPrefix);
                return _this;
            }
            GoodsIssueDetailsDialog.prototype.getFormKey = function () { return Inventory.GoodsIssueDetailsForm.formKey; };
            GoodsIssueDetailsDialog.prototype.getIdProperty = function () { return Inventory.GoodsIssueDetailsRow.idProperty; };
            GoodsIssueDetailsDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailsDialog.prototype.getNameProperty = function () { return Inventory.GoodsIssueDetailsRow.nameProperty; };
            GoodsIssueDetailsDialog.prototype.getService = function () { return Inventory.GoodsIssueDetailsService.baseUrl; };
            GoodsIssueDetailsDialog.prototype.getDeletePermission = function () { return Inventory.GoodsIssueDetailsRow.deletePermission; };
            GoodsIssueDetailsDialog.prototype.getInsertPermission = function () { return Inventory.GoodsIssueDetailsRow.insertPermission; };
            GoodsIssueDetailsDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsIssueDetailsRow.updatePermission; };
            GoodsIssueDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsIssueDetailsDialog);
            return GoodsIssueDetailsDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsIssueDetailsDialog = GoodsIssueDetailsDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsGrid = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailsGrid, _super);
            function GoodsIssueDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsIssueDetailsGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsIssueDetails'; };
            GoodsIssueDetailsGrid.prototype.getDialogType = function () { return Inventory.GoodsIssueDetailsDialog; };
            GoodsIssueDetailsGrid.prototype.getIdProperty = function () { return Inventory.GoodsIssueDetailsRow.idProperty; };
            GoodsIssueDetailsGrid.prototype.getInsertPermission = function () { return Inventory.GoodsIssueDetailsRow.insertPermission; };
            GoodsIssueDetailsGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailsGrid.prototype.getService = function () { return Inventory.GoodsIssueDetailsService.baseUrl; };
            GoodsIssueDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsIssueDetailsGrid);
            return GoodsIssueDetailsGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsIssueDetailsGrid = GoodsIssueDetailsGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailEditDialog = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailEditDialog, _super);
            function GoodsReceiptDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsReceiptDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.Quantity.value = 1;
                        //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        //this.form.Quantity.value = 1;
                        //this.form.Discount.value = 0;
                        //var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        //this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            GoodsReceiptDetailEditDialog.prototype.getFormKey = function () { return Inventory.GoodsReceiptDetailsForm.formKey; };
            GoodsReceiptDetailEditDialog.prototype.getNameProperty = function () { return Inventory.GoodsReceiptDetailsRow.nameProperty; };
            GoodsReceiptDetailEditDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsReceiptDetailEditDialog);
            return GoodsReceiptDetailEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Inventory.GoodsReceiptDetailEditDialog = GoodsReceiptDetailEditDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailEditor = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailEditor, _super);
            function GoodsReceiptDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            GoodsReceiptDetailEditor.prototype.getColumnsKey = function () { return "Inventory.GoodsReceiptDetails"; };
            GoodsReceiptDetailEditor.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailEditor.prototype.getDialogType = function () { return Inventory.GoodsReceiptDetailEditDialog; };
            GoodsReceiptDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            GoodsReceiptDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.WarehouseName = SmartERP.Administration.WarehousesRow.getLookup()
                    .itemById[row.WarehouseId].Name;
                //row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                //row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                //    .itemById[row.UnitId].Name;
                return true;
            };
            GoodsReceiptDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            GoodsReceiptDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], GoodsReceiptDetailEditor);
            return GoodsReceiptDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Inventory.GoodsReceiptDetailEditor = GoodsReceiptDetailEditor;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDialog = /** @class */ (function (_super) {
            __extends(GoodsReceiptDialog, _super);
            function GoodsReceiptDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsReceiptForm(_this.idPrefix);
                _this.form = new Inventory.GoodsReceiptForm(_this.idPrefix);
                _this.form.PurchaseId.change(function (e) {
                    var purchaseId = Q.toId(_this.form.PurchaseId.value);
                    if (purchaseId != null) {
                        _this.form.SupplierId.value = Q.toId(SmartERP.Purchases.PurchasesRow.getLookup().itemById[purchaseId].SupplierId);
                    }
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    var totalQuantity = 0;
                    for (var _i = 0, _a = _this.form.LineItems.getItems(); _i < _a.length; _i++) {
                        var k = _a[_i];
                        totalQuantity += k.Quantity;
                    }
                    _this.form.TotalQuantity.value = totalQuantity;
                    // Q.notifySuccess(total.toString());
                });
                return _this;
            }
            GoodsReceiptDialog.prototype.getFormKey = function () { return Inventory.GoodsReceiptForm.formKey; };
            GoodsReceiptDialog.prototype.getIdProperty = function () { return Inventory.GoodsReceiptRow.idProperty; };
            GoodsReceiptDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptRow.localTextPrefix; };
            GoodsReceiptDialog.prototype.getNameProperty = function () { return Inventory.GoodsReceiptRow.nameProperty; };
            GoodsReceiptDialog.prototype.getService = function () { return Inventory.GoodsReceiptService.baseUrl; };
            GoodsReceiptDialog.prototype.getDeletePermission = function () { return Inventory.GoodsReceiptRow.deletePermission; };
            GoodsReceiptDialog.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptRow.insertPermission; };
            GoodsReceiptDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsReceiptRow.updatePermission; };
            GoodsReceiptDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
            };
            GoodsReceiptDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            GoodsReceiptDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], GoodsReceiptDialog);
            return GoodsReceiptDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsReceiptDialog = GoodsReceiptDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptGrid = /** @class */ (function (_super) {
            __extends(GoodsReceiptGrid, _super);
            function GoodsReceiptGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsReceiptGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsReceipt'; };
            GoodsReceiptGrid.prototype.getDialogType = function () { return Inventory.GoodsReceiptDialog; };
            GoodsReceiptGrid.prototype.getIdProperty = function () { return Inventory.GoodsReceiptRow.idProperty; };
            GoodsReceiptGrid.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptRow.insertPermission; };
            GoodsReceiptGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptRow.localTextPrefix; };
            GoodsReceiptGrid.prototype.getService = function () { return Inventory.GoodsReceiptService.baseUrl; };
            GoodsReceiptGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], GoodsReceiptGrid);
            return GoodsReceiptGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsReceiptGrid = GoodsReceiptGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsDialog = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailsDialog, _super);
            function GoodsReceiptDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.GoodsReceiptDetailsForm(_this.idPrefix);
                return _this;
            }
            GoodsReceiptDetailsDialog.prototype.getFormKey = function () { return Inventory.GoodsReceiptDetailsForm.formKey; };
            GoodsReceiptDetailsDialog.prototype.getIdProperty = function () { return Inventory.GoodsReceiptDetailsRow.idProperty; };
            GoodsReceiptDetailsDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailsDialog.prototype.getNameProperty = function () { return Inventory.GoodsReceiptDetailsRow.nameProperty; };
            GoodsReceiptDetailsDialog.prototype.getService = function () { return Inventory.GoodsReceiptDetailsService.baseUrl; };
            GoodsReceiptDetailsDialog.prototype.getDeletePermission = function () { return Inventory.GoodsReceiptDetailsRow.deletePermission; };
            GoodsReceiptDetailsDialog.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptDetailsRow.insertPermission; };
            GoodsReceiptDetailsDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsReceiptDetailsRow.updatePermission; };
            GoodsReceiptDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsReceiptDetailsDialog);
            return GoodsReceiptDetailsDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsReceiptDetailsDialog = GoodsReceiptDetailsDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsGrid = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailsGrid, _super);
            function GoodsReceiptDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsReceiptDetailsGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsReceiptDetails'; };
            GoodsReceiptDetailsGrid.prototype.getDialogType = function () { return Inventory.GoodsReceiptDetailsDialog; };
            GoodsReceiptDetailsGrid.prototype.getIdProperty = function () { return Inventory.GoodsReceiptDetailsRow.idProperty; };
            GoodsReceiptDetailsGrid.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptDetailsRow.insertPermission; };
            GoodsReceiptDetailsGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailsGrid.prototype.getService = function () { return Inventory.GoodsReceiptDetailsService.baseUrl; };
            GoodsReceiptDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsReceiptDetailsGrid);
            return GoodsReceiptDetailsGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsReceiptDetailsGrid = GoodsReceiptDetailsGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var UpdateStocksDialog = /** @class */ (function (_super) {
            __extends(UpdateStocksDialog, _super);
            function UpdateStocksDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.UpdateStocksForm(_this.idPrefix);
                return _this;
            }
            UpdateStocksDialog.prototype.getFormKey = function () { return Inventory.UpdateStocksForm.formKey; };
            UpdateStocksDialog.prototype.getIdProperty = function () { return Inventory.UpdateStocksRow.idProperty; };
            UpdateStocksDialog.prototype.getLocalTextPrefix = function () { return Inventory.UpdateStocksRow.localTextPrefix; };
            UpdateStocksDialog.prototype.getNameProperty = function () { return Inventory.UpdateStocksRow.nameProperty; };
            UpdateStocksDialog.prototype.getService = function () { return Inventory.UpdateStocksService.baseUrl; };
            UpdateStocksDialog.prototype.getDeletePermission = function () { return Inventory.UpdateStocksRow.deletePermission; };
            UpdateStocksDialog.prototype.getInsertPermission = function () { return Inventory.UpdateStocksRow.insertPermission; };
            UpdateStocksDialog.prototype.getUpdatePermission = function () { return Inventory.UpdateStocksRow.updatePermission; };
            UpdateStocksDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UpdateStocksDialog);
            return UpdateStocksDialog;
        }(Serenity.EntityDialog));
        Inventory.UpdateStocksDialog = UpdateStocksDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var UpdateStocksGrid = /** @class */ (function (_super) {
            __extends(UpdateStocksGrid, _super);
            function UpdateStocksGrid(container) {
                return _super.call(this, container) || this;
            }
            UpdateStocksGrid.prototype.getColumnsKey = function () { return 'Inventory.UpdateStocks'; };
            UpdateStocksGrid.prototype.getDialogType = function () { return Inventory.UpdateStocksDialog; };
            UpdateStocksGrid.prototype.getIdProperty = function () { return Inventory.UpdateStocksRow.idProperty; };
            UpdateStocksGrid.prototype.getInsertPermission = function () { return Inventory.UpdateStocksRow.insertPermission; };
            UpdateStocksGrid.prototype.getLocalTextPrefix = function () { return Inventory.UpdateStocksRow.localTextPrefix; };
            UpdateStocksGrid.prototype.getService = function () { return Inventory.UpdateStocksService.baseUrl; };
            UpdateStocksGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UpdateStocksGrid);
            return UpdateStocksGrid;
        }(Serenity.EntityGrid));
        Inventory.UpdateStocksGrid = UpdateStocksGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesDialog = /** @class */ (function (_super) {
            __extends(AgendaItemTypesDialog, _super);
            function AgendaItemTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.AgendaItemTypesForm(_this.idPrefix);
                return _this;
            }
            AgendaItemTypesDialog.prototype.getFormKey = function () { return Masters.AgendaItemTypesForm.formKey; };
            AgendaItemTypesDialog.prototype.getIdProperty = function () { return Masters.AgendaItemTypesRow.idProperty; };
            AgendaItemTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.AgendaItemTypesRow.localTextPrefix; };
            AgendaItemTypesDialog.prototype.getNameProperty = function () { return Masters.AgendaItemTypesRow.nameProperty; };
            AgendaItemTypesDialog.prototype.getService = function () { return Masters.AgendaItemTypesService.baseUrl; };
            AgendaItemTypesDialog.prototype.getDeletePermission = function () { return Masters.AgendaItemTypesRow.deletePermission; };
            AgendaItemTypesDialog.prototype.getInsertPermission = function () { return Masters.AgendaItemTypesRow.insertPermission; };
            AgendaItemTypesDialog.prototype.getUpdatePermission = function () { return Masters.AgendaItemTypesRow.updatePermission; };
            AgendaItemTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemTypesDialog);
            return AgendaItemTypesDialog;
        }(Serenity.EntityDialog));
        Masters.AgendaItemTypesDialog = AgendaItemTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesGrid = /** @class */ (function (_super) {
            __extends(AgendaItemTypesGrid, _super);
            function AgendaItemTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            AgendaItemTypesGrid.prototype.getColumnsKey = function () { return 'Masters.AgendaItemTypes'; };
            AgendaItemTypesGrid.prototype.getDialogType = function () { return Masters.AgendaItemTypesDialog; };
            AgendaItemTypesGrid.prototype.getIsActiveProperty = function () { return Masters.AgendaItemTypesRow.isActiveProperty; };
            AgendaItemTypesGrid.prototype.getIdProperty = function () { return Masters.AgendaItemTypesRow.idProperty; };
            AgendaItemTypesGrid.prototype.getInsertPermission = function () { return Masters.AgendaItemTypesRow.insertPermission; };
            AgendaItemTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.AgendaItemTypesRow.localTextPrefix; };
            AgendaItemTypesGrid.prototype.getService = function () { return Masters.AgendaItemTypesService.baseUrl; };
            AgendaItemTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemTypesGrid);
            return AgendaItemTypesGrid;
        }(Serenity.EntityGrid));
        Masters.AgendaItemTypesGrid = AgendaItemTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesDialog = /** @class */ (function (_super) {
            __extends(AttendanceStatusesDialog, _super);
            function AttendanceStatusesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.AttendanceStatusesForm(_this.idPrefix);
                return _this;
            }
            AttendanceStatusesDialog.prototype.getFormKey = function () { return Masters.AttendanceStatusesForm.formKey; };
            AttendanceStatusesDialog.prototype.getIdProperty = function () { return Masters.AttendanceStatusesRow.idProperty; };
            AttendanceStatusesDialog.prototype.getLocalTextPrefix = function () { return Masters.AttendanceStatusesRow.localTextPrefix; };
            AttendanceStatusesDialog.prototype.getNameProperty = function () { return Masters.AttendanceStatusesRow.nameProperty; };
            AttendanceStatusesDialog.prototype.getService = function () { return Masters.AttendanceStatusesService.baseUrl; };
            AttendanceStatusesDialog.prototype.getDeletePermission = function () { return Masters.AttendanceStatusesRow.deletePermission; };
            AttendanceStatusesDialog.prototype.getInsertPermission = function () { return Masters.AttendanceStatusesRow.insertPermission; };
            AttendanceStatusesDialog.prototype.getUpdatePermission = function () { return Masters.AttendanceStatusesRow.updatePermission; };
            AttendanceStatusesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceStatusesDialog);
            return AttendanceStatusesDialog;
        }(Serenity.EntityDialog));
        Masters.AttendanceStatusesDialog = AttendanceStatusesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesGrid = /** @class */ (function (_super) {
            __extends(AttendanceStatusesGrid, _super);
            function AttendanceStatusesGrid(container) {
                return _super.call(this, container) || this;
            }
            AttendanceStatusesGrid.prototype.getColumnsKey = function () { return 'Masters.AttendanceStatuses'; };
            AttendanceStatusesGrid.prototype.getDialogType = function () { return Masters.AttendanceStatusesDialog; };
            AttendanceStatusesGrid.prototype.getIsActiveProperty = function () { return Masters.AttendanceStatusesRow.isActiveProperty; };
            AttendanceStatusesGrid.prototype.getIdProperty = function () { return Masters.AttendanceStatusesRow.idProperty; };
            AttendanceStatusesGrid.prototype.getInsertPermission = function () { return Masters.AttendanceStatusesRow.insertPermission; };
            AttendanceStatusesGrid.prototype.getLocalTextPrefix = function () { return Masters.AttendanceStatusesRow.localTextPrefix; };
            AttendanceStatusesGrid.prototype.getService = function () { return Masters.AttendanceStatusesService.baseUrl; };
            AttendanceStatusesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceStatusesGrid);
            return AttendanceStatusesGrid;
        }(Serenity.EntityGrid));
        Masters.AttendanceStatusesGrid = AttendanceStatusesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesDialog = /** @class */ (function (_super) {
            __extends(AttendeeTypesDialog, _super);
            function AttendeeTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.AttendeeTypesForm(_this.idPrefix);
                return _this;
            }
            AttendeeTypesDialog.prototype.getFormKey = function () { return Masters.AttendeeTypesForm.formKey; };
            AttendeeTypesDialog.prototype.getIdProperty = function () { return Masters.AttendeeTypesRow.idProperty; };
            AttendeeTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.AttendeeTypesRow.localTextPrefix; };
            AttendeeTypesDialog.prototype.getNameProperty = function () { return Masters.AttendeeTypesRow.nameProperty; };
            AttendeeTypesDialog.prototype.getService = function () { return Masters.AttendeeTypesService.baseUrl; };
            AttendeeTypesDialog.prototype.getDeletePermission = function () { return Masters.AttendeeTypesRow.deletePermission; };
            AttendeeTypesDialog.prototype.getInsertPermission = function () { return Masters.AttendeeTypesRow.insertPermission; };
            AttendeeTypesDialog.prototype.getUpdatePermission = function () { return Masters.AttendeeTypesRow.updatePermission; };
            AttendeeTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendeeTypesDialog);
            return AttendeeTypesDialog;
        }(Serenity.EntityDialog));
        Masters.AttendeeTypesDialog = AttendeeTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesGrid = /** @class */ (function (_super) {
            __extends(AttendeeTypesGrid, _super);
            function AttendeeTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            AttendeeTypesGrid.prototype.getColumnsKey = function () { return 'Masters.AttendeeTypes'; };
            AttendeeTypesGrid.prototype.getDialogType = function () { return Masters.AttendeeTypesDialog; };
            AttendeeTypesGrid.prototype.getIsActiveProperty = function () { return Masters.AttendeeTypesRow.isActiveProperty; };
            AttendeeTypesGrid.prototype.getIdProperty = function () { return Masters.AttendeeTypesRow.idProperty; };
            AttendeeTypesGrid.prototype.getInsertPermission = function () { return Masters.AttendeeTypesRow.insertPermission; };
            AttendeeTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.AttendeeTypesRow.localTextPrefix; };
            AttendeeTypesGrid.prototype.getService = function () { return Masters.AttendeeTypesService.baseUrl; };
            AttendeeTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendeeTypesGrid);
            return AttendeeTypesGrid;
        }(Serenity.EntityGrid));
        Masters.AttendeeTypesGrid = AttendeeTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsDialog = /** @class */ (function (_super) {
            __extends(CustomerGroupsDialog, _super);
            function CustomerGroupsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.CustomerGroupsForm(_this.idPrefix);
                return _this;
            }
            CustomerGroupsDialog.prototype.getFormKey = function () { return Masters.CustomerGroupsForm.formKey; };
            CustomerGroupsDialog.prototype.getIdProperty = function () { return Masters.CustomerGroupsRow.idProperty; };
            CustomerGroupsDialog.prototype.getLocalTextPrefix = function () { return Masters.CustomerGroupsRow.localTextPrefix; };
            CustomerGroupsDialog.prototype.getNameProperty = function () { return Masters.CustomerGroupsRow.nameProperty; };
            CustomerGroupsDialog.prototype.getService = function () { return Masters.CustomerGroupsService.baseUrl; };
            CustomerGroupsDialog.prototype.getDeletePermission = function () { return Masters.CustomerGroupsRow.deletePermission; };
            CustomerGroupsDialog.prototype.getInsertPermission = function () { return Masters.CustomerGroupsRow.insertPermission; };
            CustomerGroupsDialog.prototype.getUpdatePermission = function () { return Masters.CustomerGroupsRow.updatePermission; };
            CustomerGroupsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGroupsDialog);
            return CustomerGroupsDialog;
        }(Serenity.EntityDialog));
        Masters.CustomerGroupsDialog = CustomerGroupsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsGrid = /** @class */ (function (_super) {
            __extends(CustomerGroupsGrid, _super);
            function CustomerGroupsGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGroupsGrid.prototype.getColumnsKey = function () { return 'Masters.CustomerGroups'; };
            CustomerGroupsGrid.prototype.getDialogType = function () { return Masters.CustomerGroupsDialog; };
            CustomerGroupsGrid.prototype.getIdProperty = function () { return Masters.CustomerGroupsRow.idProperty; };
            CustomerGroupsGrid.prototype.getIsActiveProperty = function () { return Masters.CustomerGroupsRow.isActiveProperty; };
            CustomerGroupsGrid.prototype.getInsertPermission = function () { return Masters.CustomerGroupsRow.insertPermission; };
            CustomerGroupsGrid.prototype.getLocalTextPrefix = function () { return Masters.CustomerGroupsRow.localTextPrefix; };
            CustomerGroupsGrid.prototype.getService = function () { return Masters.CustomerGroupsService.baseUrl; };
            CustomerGroupsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGroupsGrid);
            return CustomerGroupsGrid;
        }(Serenity.EntityGrid));
        Masters.CustomerGroupsGrid = CustomerGroupsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var DeductionsDialog = /** @class */ (function (_super) {
            __extends(DeductionsDialog, _super);
            function DeductionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.DeductionsForm(_this.idPrefix);
                return _this;
            }
            DeductionsDialog.prototype.getFormKey = function () { return Masters.DeductionsForm.formKey; };
            DeductionsDialog.prototype.getIdProperty = function () { return Masters.DeductionsRow.idProperty; };
            DeductionsDialog.prototype.getLocalTextPrefix = function () { return Masters.DeductionsRow.localTextPrefix; };
            DeductionsDialog.prototype.getNameProperty = function () { return Masters.DeductionsRow.nameProperty; };
            DeductionsDialog.prototype.getService = function () { return Masters.DeductionsService.baseUrl; };
            DeductionsDialog.prototype.getDeletePermission = function () { return Masters.DeductionsRow.deletePermission; };
            DeductionsDialog.prototype.getInsertPermission = function () { return Masters.DeductionsRow.insertPermission; };
            DeductionsDialog.prototype.getUpdatePermission = function () { return Masters.DeductionsRow.updatePermission; };
            DeductionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DeductionsDialog);
            return DeductionsDialog;
        }(Serenity.EntityDialog));
        Masters.DeductionsDialog = DeductionsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var DeductionsGrid = /** @class */ (function (_super) {
            __extends(DeductionsGrid, _super);
            function DeductionsGrid(container) {
                return _super.call(this, container) || this;
            }
            DeductionsGrid.prototype.getColumnsKey = function () { return Masters.DeductionsColumns.columnsKey; };
            DeductionsGrid.prototype.getDialogType = function () { return Masters.DeductionsDialog; };
            DeductionsGrid.prototype.getIdProperty = function () { return Masters.DeductionsRow.idProperty; };
            DeductionsGrid.prototype.getInsertPermission = function () { return Masters.DeductionsRow.insertPermission; };
            DeductionsGrid.prototype.getLocalTextPrefix = function () { return Masters.DeductionsRow.localTextPrefix; };
            DeductionsGrid.prototype.getService = function () { return Masters.DeductionsService.baseUrl; };
            DeductionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DeductionsGrid);
            return DeductionsGrid;
        }(Serenity.EntityGrid));
        Masters.DeductionsGrid = DeductionsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var IncomesDialog = /** @class */ (function (_super) {
            __extends(IncomesDialog, _super);
            function IncomesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.IncomesForm(_this.idPrefix);
                return _this;
            }
            IncomesDialog.prototype.getFormKey = function () { return Masters.IncomesForm.formKey; };
            IncomesDialog.prototype.getIdProperty = function () { return Masters.IncomesRow.idProperty; };
            IncomesDialog.prototype.getLocalTextPrefix = function () { return Masters.IncomesRow.localTextPrefix; };
            IncomesDialog.prototype.getNameProperty = function () { return Masters.IncomesRow.nameProperty; };
            IncomesDialog.prototype.getService = function () { return Masters.IncomesService.baseUrl; };
            IncomesDialog.prototype.getDeletePermission = function () { return Masters.IncomesRow.deletePermission; };
            IncomesDialog.prototype.getInsertPermission = function () { return Masters.IncomesRow.insertPermission; };
            IncomesDialog.prototype.getUpdatePermission = function () { return Masters.IncomesRow.updatePermission; };
            IncomesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IncomesDialog);
            return IncomesDialog;
        }(Serenity.EntityDialog));
        Masters.IncomesDialog = IncomesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var IncomesGrid = /** @class */ (function (_super) {
            __extends(IncomesGrid, _super);
            function IncomesGrid(container) {
                return _super.call(this, container) || this;
            }
            IncomesGrid.prototype.getColumnsKey = function () { return Masters.IncomesColumns.columnsKey; };
            IncomesGrid.prototype.getDialogType = function () { return Masters.IncomesDialog; };
            IncomesGrid.prototype.getIdProperty = function () { return Masters.IncomesRow.idProperty; };
            IncomesGrid.prototype.getInsertPermission = function () { return Masters.IncomesRow.insertPermission; };
            IncomesGrid.prototype.getLocalTextPrefix = function () { return Masters.IncomesRow.localTextPrefix; };
            IncomesGrid.prototype.getService = function () { return Masters.IncomesService.baseUrl; };
            IncomesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IncomesGrid);
            return IncomesGrid;
        }(Serenity.EntityGrid));
        Masters.IncomesGrid = IncomesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsDialog = /** @class */ (function (_super) {
            __extends(LocationsDialog, _super);
            function LocationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.LocationsForm(_this.idPrefix);
                return _this;
            }
            LocationsDialog.prototype.getFormKey = function () { return Masters.LocationsForm.formKey; };
            LocationsDialog.prototype.getIdProperty = function () { return Masters.LocationsRow.idProperty; };
            LocationsDialog.prototype.getLocalTextPrefix = function () { return Masters.LocationsRow.localTextPrefix; };
            LocationsDialog.prototype.getNameProperty = function () { return Masters.LocationsRow.nameProperty; };
            LocationsDialog.prototype.getService = function () { return Masters.LocationsService.baseUrl; };
            LocationsDialog.prototype.getDeletePermission = function () { return Masters.LocationsRow.deletePermission; };
            LocationsDialog.prototype.getInsertPermission = function () { return Masters.LocationsRow.insertPermission; };
            LocationsDialog.prototype.getUpdatePermission = function () { return Masters.LocationsRow.updatePermission; };
            LocationsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationsDialog);
            return LocationsDialog;
        }(Serenity.EntityDialog));
        Masters.LocationsDialog = LocationsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsGrid = /** @class */ (function (_super) {
            __extends(LocationsGrid, _super);
            function LocationsGrid(container) {
                return _super.call(this, container) || this;
            }
            LocationsGrid.prototype.getColumnsKey = function () { return 'Masters.Locations'; };
            LocationsGrid.prototype.getDialogType = function () { return Masters.LocationsDialog; };
            LocationsGrid.prototype.getIsActiveProperty = function () { return Masters.LocationsRow.isActiveProperty; };
            LocationsGrid.prototype.getIdProperty = function () { return Masters.LocationsRow.idProperty; };
            LocationsGrid.prototype.getInsertPermission = function () { return Masters.LocationsRow.insertPermission; };
            LocationsGrid.prototype.getLocalTextPrefix = function () { return Masters.LocationsRow.localTextPrefix; };
            LocationsGrid.prototype.getService = function () { return Masters.LocationsService.baseUrl; };
            LocationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationsGrid);
            return LocationsGrid;
        }(Serenity.EntityGrid));
        Masters.LocationsGrid = LocationsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesDialog = /** @class */ (function (_super) {
            __extends(MeetingTypesDialog, _super);
            function MeetingTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.MeetingTypesForm(_this.idPrefix);
                return _this;
            }
            MeetingTypesDialog.prototype.getFormKey = function () { return Masters.MeetingTypesForm.formKey; };
            MeetingTypesDialog.prototype.getIdProperty = function () { return Masters.MeetingTypesRow.idProperty; };
            MeetingTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.MeetingTypesRow.localTextPrefix; };
            MeetingTypesDialog.prototype.getNameProperty = function () { return Masters.MeetingTypesRow.nameProperty; };
            MeetingTypesDialog.prototype.getService = function () { return Masters.MeetingTypesService.baseUrl; };
            MeetingTypesDialog.prototype.getDeletePermission = function () { return Masters.MeetingTypesRow.deletePermission; };
            MeetingTypesDialog.prototype.getInsertPermission = function () { return Masters.MeetingTypesRow.insertPermission; };
            MeetingTypesDialog.prototype.getUpdatePermission = function () { return Masters.MeetingTypesRow.updatePermission; };
            MeetingTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingTypesDialog);
            return MeetingTypesDialog;
        }(Serenity.EntityDialog));
        Masters.MeetingTypesDialog = MeetingTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesGrid = /** @class */ (function (_super) {
            __extends(MeetingTypesGrid, _super);
            function MeetingTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingTypesGrid.prototype.getColumnsKey = function () { return 'Masters.MeetingTypes'; };
            MeetingTypesGrid.prototype.getDialogType = function () { return Masters.MeetingTypesDialog; };
            MeetingTypesGrid.prototype.getIsActiveProperty = function () { return Masters.MeetingTypesRow.isActiveProperty; };
            MeetingTypesGrid.prototype.getIdProperty = function () { return Masters.MeetingTypesRow.idProperty; };
            MeetingTypesGrid.prototype.getInsertPermission = function () { return Masters.MeetingTypesRow.insertPermission; };
            MeetingTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.MeetingTypesRow.localTextPrefix; };
            MeetingTypesGrid.prototype.getService = function () { return Masters.MeetingTypesService.baseUrl; };
            MeetingTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingTypesGrid);
            return MeetingTypesGrid;
        }(Serenity.EntityGrid));
        Masters.MeetingTypesGrid = MeetingTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesDialog = /** @class */ (function (_super) {
            __extends(ResolutionStatusesDialog, _super);
            function ResolutionStatusesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.ResolutionStatusesForm(_this.idPrefix);
                return _this;
            }
            ResolutionStatusesDialog.prototype.getFormKey = function () { return Masters.ResolutionStatusesForm.formKey; };
            ResolutionStatusesDialog.prototype.getIdProperty = function () { return Masters.ResolutionStatusesRow.idProperty; };
            ResolutionStatusesDialog.prototype.getLocalTextPrefix = function () { return Masters.ResolutionStatusesRow.localTextPrefix; };
            ResolutionStatusesDialog.prototype.getNameProperty = function () { return Masters.ResolutionStatusesRow.nameProperty; };
            ResolutionStatusesDialog.prototype.getService = function () { return Masters.ResolutionStatusesService.baseUrl; };
            ResolutionStatusesDialog.prototype.getDeletePermission = function () { return Masters.ResolutionStatusesRow.deletePermission; };
            ResolutionStatusesDialog.prototype.getInsertPermission = function () { return Masters.ResolutionStatusesRow.insertPermission; };
            ResolutionStatusesDialog.prototype.getUpdatePermission = function () { return Masters.ResolutionStatusesRow.updatePermission; };
            ResolutionStatusesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ResolutionStatusesDialog);
            return ResolutionStatusesDialog;
        }(Serenity.EntityDialog));
        Masters.ResolutionStatusesDialog = ResolutionStatusesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesGrid = /** @class */ (function (_super) {
            __extends(ResolutionStatusesGrid, _super);
            function ResolutionStatusesGrid(container) {
                return _super.call(this, container) || this;
            }
            ResolutionStatusesGrid.prototype.getColumnsKey = function () { return 'Masters.ResolutionStatuses'; };
            ResolutionStatusesGrid.prototype.getDialogType = function () { return Masters.ResolutionStatusesDialog; };
            ResolutionStatusesGrid.prototype.getIsActiveProperty = function () { return Masters.ResolutionStatusesRow.isActiveProperty; };
            ResolutionStatusesGrid.prototype.getIdProperty = function () { return Masters.ResolutionStatusesRow.idProperty; };
            ResolutionStatusesGrid.prototype.getInsertPermission = function () { return Masters.ResolutionStatusesRow.insertPermission; };
            ResolutionStatusesGrid.prototype.getLocalTextPrefix = function () { return Masters.ResolutionStatusesRow.localTextPrefix; };
            ResolutionStatusesGrid.prototype.getService = function () { return Masters.ResolutionStatusesService.baseUrl; };
            ResolutionStatusesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ResolutionStatusesGrid);
            return ResolutionStatusesGrid;
        }(Serenity.EntityGrid));
        Masters.ResolutionStatusesGrid = ResolutionStatusesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsDialog = /** @class */ (function (_super) {
            __extends(SupplierGroupsDialog, _super);
            function SupplierGroupsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.SupplierGroupsForm(_this.idPrefix);
                return _this;
            }
            SupplierGroupsDialog.prototype.getFormKey = function () { return Masters.SupplierGroupsForm.formKey; };
            SupplierGroupsDialog.prototype.getIdProperty = function () { return Masters.SupplierGroupsRow.idProperty; };
            SupplierGroupsDialog.prototype.getLocalTextPrefix = function () { return Masters.SupplierGroupsRow.localTextPrefix; };
            SupplierGroupsDialog.prototype.getNameProperty = function () { return Masters.SupplierGroupsRow.nameProperty; };
            SupplierGroupsDialog.prototype.getService = function () { return Masters.SupplierGroupsService.baseUrl; };
            SupplierGroupsDialog.prototype.getDeletePermission = function () { return Masters.SupplierGroupsRow.deletePermission; };
            SupplierGroupsDialog.prototype.getInsertPermission = function () { return Masters.SupplierGroupsRow.insertPermission; };
            SupplierGroupsDialog.prototype.getUpdatePermission = function () { return Masters.SupplierGroupsRow.updatePermission; };
            SupplierGroupsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGroupsDialog);
            return SupplierGroupsDialog;
        }(Serenity.EntityDialog));
        Masters.SupplierGroupsDialog = SupplierGroupsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsGrid = /** @class */ (function (_super) {
            __extends(SupplierGroupsGrid, _super);
            function SupplierGroupsGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGroupsGrid.prototype.getColumnsKey = function () { return 'Masters.SupplierGroups'; };
            SupplierGroupsGrid.prototype.getDialogType = function () { return Masters.SupplierGroupsDialog; };
            SupplierGroupsGrid.prototype.getIdProperty = function () { return Masters.SupplierGroupsRow.idProperty; };
            SupplierGroupsGrid.prototype.getIsActiveProperty = function () { return Masters.SupplierGroupsRow.isActiveProperty; };
            SupplierGroupsGrid.prototype.getInsertPermission = function () { return Masters.SupplierGroupsRow.insertPermission; };
            SupplierGroupsGrid.prototype.getLocalTextPrefix = function () { return Masters.SupplierGroupsRow.localTextPrefix; };
            SupplierGroupsGrid.prototype.getService = function () { return Masters.SupplierGroupsService.baseUrl; };
            SupplierGroupsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGroupsGrid);
            return SupplierGroupsGrid;
        }(Serenity.EntityGrid));
        Masters.SupplierGroupsGrid = SupplierGroupsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsDialog = /** @class */ (function (_super) {
            __extends(AgendaDecisionsDialog, _super);
            function AgendaDecisionsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.AgendaDecisionsForm(_this.idPrefix);
                _this.form = new Meeting.AgendaDecisionsForm(_this.idPrefix);
                var url = window.location.href;
                var index = url.lastIndexOf('Meetings#edit/');
                var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
                return _this;
                //this.form.RelatedAgendaItem.
                //this.form.Meeting.set_value(metingId);
            }
            AgendaDecisionsDialog.prototype.getFormKey = function () { return Meeting.AgendaDecisionsForm.formKey; };
            AgendaDecisionsDialog.prototype.getIdProperty = function () { return Meeting.AgendaDecisionsRow.idProperty; };
            AgendaDecisionsDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            AgendaDecisionsDialog.prototype.getNameProperty = function () { return Meeting.AgendaDecisionsRow.nameProperty; };
            AgendaDecisionsDialog.prototype.getService = function () { return Meeting.AgendaDecisionsService.baseUrl; };
            AgendaDecisionsDialog.prototype.getDeletePermission = function () { return Meeting.AgendaDecisionsRow.deletePermission; };
            AgendaDecisionsDialog.prototype.getInsertPermission = function () { return Meeting.AgendaDecisionsRow.insertPermission; };
            AgendaDecisionsDialog.prototype.getUpdatePermission = function () { return Meeting.AgendaDecisionsRow.updatePermission; };
            AgendaDecisionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaDecisionsDialog);
            return AgendaDecisionsDialog;
        }(Serenity.EntityDialog));
        Meeting.AgendaDecisionsDialog = AgendaDecisionsDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsGrid = /** @class */ (function (_super) {
            __extends(AgendaDecisionsGrid, _super);
            function AgendaDecisionsGrid(container) {
                return _super.call(this, container) || this;
            }
            AgendaDecisionsGrid.prototype.getColumnsKey = function () { return 'Meeting.AgendaDecisions'; };
            AgendaDecisionsGrid.prototype.getDialogType = function () { return Meeting.AgendaDecisionsDialog; };
            AgendaDecisionsGrid.prototype.getIsActiveProperty = function () { return Meeting.AgendaDecisionsRow.isActiveProperty; };
            AgendaDecisionsGrid.prototype.getIdProperty = function () { return Meeting.AgendaDecisionsRow.idProperty; };
            AgendaDecisionsGrid.prototype.getInsertPermission = function () { return Meeting.AgendaDecisionsRow.insertPermission; };
            AgendaDecisionsGrid.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            AgendaDecisionsGrid.prototype.getService = function () { return Meeting.AgendaDecisionsService.baseUrl; };
            AgendaDecisionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaDecisionsGrid);
            return AgendaDecisionsGrid;
        }(Serenity.EntityGrid));
        Meeting.AgendaDecisionsGrid = AgendaDecisionsGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsDialog = /** @class */ (function (_super) {
            __extends(AgendaItemsDialog, _super);
            function AgendaItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.AgendaItemsForm(_this.idPrefix);
                return _this;
            }
            AgendaItemsDialog.prototype.getFormKey = function () { return Meeting.AgendaItemsForm.formKey; };
            AgendaItemsDialog.prototype.getIdProperty = function () { return Meeting.AgendaItemsRow.idProperty; };
            AgendaItemsDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsDialog.prototype.getNameProperty = function () { return Meeting.AgendaItemsRow.nameProperty; };
            AgendaItemsDialog.prototype.getService = function () { return Meeting.AgendaItemsService.baseUrl; };
            AgendaItemsDialog.prototype.getDeletePermission = function () { return Meeting.AgendaItemsRow.deletePermission; };
            AgendaItemsDialog.prototype.getInsertPermission = function () { return Meeting.AgendaItemsRow.insertPermission; };
            AgendaItemsDialog.prototype.getUpdatePermission = function () { return Meeting.AgendaItemsRow.updatePermission; };
            AgendaItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemsDialog);
            return AgendaItemsDialog;
        }(Serenity.EntityDialog));
        Meeting.AgendaItemsDialog = AgendaItemsDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsGrid = /** @class */ (function (_super) {
            __extends(AgendaItemsGrid, _super);
            function AgendaItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            AgendaItemsGrid.prototype.getColumnsKey = function () { return 'Meeting.AgendaItems'; };
            AgendaItemsGrid.prototype.getDialogType = function () { return Meeting.AgendaItemsDialog; };
            AgendaItemsGrid.prototype.getIsActiveProperty = function () { return Meeting.AgendaItemsRow.isActiveProperty; };
            AgendaItemsGrid.prototype.getIdProperty = function () { return Meeting.AgendaItemsRow.idProperty; };
            AgendaItemsGrid.prototype.getInsertPermission = function () { return Meeting.AgendaItemsRow.insertPermission; };
            AgendaItemsGrid.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsGrid.prototype.getService = function () { return Meeting.AgendaItemsService.baseUrl; };
            AgendaItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemsGrid);
            return AgendaItemsGrid;
        }(Serenity.EntityGrid));
        Meeting.AgendaItemsGrid = AgendaItemsGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesDialog = /** @class */ (function (_super) {
            __extends(MeetingAttendeesDialog, _super);
            function MeetingAttendeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAttendeesForm(_this.idPrefix);
                return _this;
            }
            MeetingAttendeesDialog.prototype.getFormKey = function () { return Meeting.MeetingAttendeesForm.formKey; };
            MeetingAttendeesDialog.prototype.getIdProperty = function () { return Meeting.MeetingAttendeesRow.idProperty; };
            MeetingAttendeesDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesDialog.prototype.getService = function () { return Meeting.MeetingAttendeesService.baseUrl; };
            MeetingAttendeesDialog.prototype.getDeletePermission = function () { return Meeting.MeetingAttendeesRow.deletePermission; };
            MeetingAttendeesDialog.prototype.getInsertPermission = function () { return Meeting.MeetingAttendeesRow.insertPermission; };
            MeetingAttendeesDialog.prototype.getUpdatePermission = function () { return Meeting.MeetingAttendeesRow.updatePermission; };
            MeetingAttendeesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAttendeesDialog);
            return MeetingAttendeesDialog;
        }(Serenity.EntityDialog));
        Meeting.MeetingAttendeesDialog = MeetingAttendeesDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesGrid = /** @class */ (function (_super) {
            __extends(MeetingAttendeesGrid, _super);
            function MeetingAttendeesGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAttendeesGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAttendees'; };
            MeetingAttendeesGrid.prototype.getDialogType = function () { return Meeting.MeetingAttendeesDialog; };
            MeetingAttendeesGrid.prototype.getIsActiveProperty = function () { return Meeting.MeetingAttendeesRow.isActiveProperty; };
            MeetingAttendeesGrid.prototype.getIdProperty = function () { return Meeting.MeetingAttendeesRow.idProperty; };
            MeetingAttendeesGrid.prototype.getInsertPermission = function () { return Meeting.MeetingAttendeesRow.insertPermission; };
            MeetingAttendeesGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesGrid.prototype.getService = function () { return Meeting.MeetingAttendeesService.baseUrl; };
            MeetingAttendeesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAttendeesGrid);
            return MeetingAttendeesGrid;
        }(Serenity.EntityGrid));
        Meeting.MeetingAttendeesGrid = MeetingAttendeesGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsEditDialog = /** @class */ (function (_super) {
            __extends(AgendaDecisionsEditDialog, _super);
            function AgendaDecisionsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.AgendaDecisionsForm(_this.idPrefix);
                var url = window.location.href;
                var index = url.lastIndexOf('Meetings#edit/');
                var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
                return _this;
                //alert(this.form.ResolutionStatus.value);
                //this.form.Meeting.value=metingId;
            }
            AgendaDecisionsEditDialog.prototype.getFormKey = function () { return Meeting.AgendaDecisionsForm.formKey; };
            AgendaDecisionsEditDialog.prototype.getNameProperty = function () { return Meeting.AgendaDecisionsRow.nameProperty; };
            AgendaDecisionsEditDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            //protected updateInterface() {
            //    super.updateInterface();
            //    var url = window.location.href
            //    var index = url.lastIndexOf('Meetings#edit/');
            //    var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
            //    //this.form.RelatedAgendaItem.cascadeFrom = "Meeting";
            //    //this.form.RelatedAgendaItem.value = metingId;
            //    this.form.Meeting.value = metingId;
            //}d    
            AgendaDecisionsEditDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                var url = window.location.href;
                var index = url.lastIndexOf('Meetings#edit/');
                if (index > 0) {
                    var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
                    //this.form.RelatedAgendaItem.cascadeFrom = "Meeting";
                    //this.form.RelatedAgendaItem.value = metingId;
                    this.form.Meeting.value = metingId;
                    this.form.Meeting.element.trigger("change");
                    //console.log(this.form.ResolutionStatus);
                    //alert(this.form.ResolutionStatus.value);
                }
            };
            AgendaDecisionsEditDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                //alert(this.form.ResolutionStatus.value);
                //console.log(this.form.ResolutionStatus);
                //this.form.Meeting.setState();
                //var url = window.location.href
                //alert(url);
                //var index = url.lastIndexOf('Meetings#edit/');
                //alert(index);
                //var substring = url.substring(index).replace('Meetings#edit/', '');
                //alert(substring);
                //var q = Q.parseQueryString();
                //console.log(q);
            };
            AgendaDecisionsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaDecisionsEditDialog);
            return AgendaDecisionsEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Meeting.AgendaDecisionsEditDialog = AgendaDecisionsEditDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsEditor = /** @class */ (function (_super) {
            __extends(AgendaDecisionsEditor, _super);
            function AgendaDecisionsEditor(container) {
                return _super.call(this, container) || this;
            }
            AgendaDecisionsEditor.prototype.getColumnsKey = function () { return "Meeting.AgendaDecisions"; };
            AgendaDecisionsEditor.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            AgendaDecisionsEditor.prototype.getDialogType = function () { return Meeting.AgendaDecisionsEditDialog; };
            AgendaDecisionsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            AgendaDecisionsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.AssignedTo) {
                    row.AssignedToFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                        .itemById[row.AssignedTo].EmployeeFullName;
                }
                if (row.RelatedAgendaItem) {
                    row.RelatedAgendaItemTitle = SmartERP.Meeting.AgendaItemsRow.getLookup()
                        .itemById[row.RelatedAgendaItem].Title;
                }
                if (row.ResolutionStatus) {
                    row.ResolutionStatusName = SmartERP.Masters.ResolutionStatusesRow.getLookup().itemById[row.ResolutionStatus].Name;
                }
                return true;
            };
            AgendaDecisionsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            AgendaDecisionsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AgendaDecisionsEditor);
            return AgendaDecisionsEditor;
        }(Serenity.Extensions.GridEditorBase));
        Meeting.AgendaDecisionsEditor = AgendaDecisionsEditor;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsEditDialog = /** @class */ (function (_super) {
            __extends(AgendaItemsEditDialog, _super);
            function AgendaItemsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.AgendaItemsForm(_this.idPrefix);
                return _this;
            }
            AgendaItemsEditDialog.prototype.getFormKey = function () { return Meeting.AgendaItemsForm.formKey; };
            AgendaItemsEditDialog.prototype.getNameProperty = function () { return Meeting.AgendaItemsRow.nameProperty; };
            AgendaItemsEditDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemsEditDialog);
            return AgendaItemsEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Meeting.AgendaItemsEditDialog = AgendaItemsEditDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsEditor = /** @class */ (function (_super) {
            __extends(AgendaItemsEditor, _super);
            function AgendaItemsEditor(container) {
                return _super.call(this, container) || this;
            }
            AgendaItemsEditor.prototype.getColumnsKey = function () { return "Meeting.AgendaItems"; };
            AgendaItemsEditor.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsEditor.prototype.getDialogType = function () { return Meeting.AgendaItemsEditDialog; };
            AgendaItemsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            AgendaItemsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.RequestedBy) {
                    row.RequestedByFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                        .itemById[row.RequestedBy].EmployeeFullName;
                }
                if (row.ItemType) {
                    row.ItemTypeName = SmartERP.Masters.MeetingTypesRow.getLookup().itemById[row.ItemType].Name;
                }
                return true;
            };
            AgendaItemsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            AgendaItemsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AgendaItemsEditor);
            return AgendaItemsEditor;
        }(Serenity.Extensions.GridEditorBase));
        Meeting.AgendaItemsEditor = AgendaItemsEditor;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesEditDialog = /** @class */ (function (_super) {
            __extends(MeetingAttendeesEditDialog, _super);
            function MeetingAttendeesEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.MeetingAttendeesForm(_this.idPrefix);
                return _this;
                //this.form.ProductId.changeSelect2(e => {
                //    var productID = Q.toId(this.form.ProductId.value);
                //    if (productID != null) {
                //        this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                //        this.form.Quantity.value = 1;
                //        this.form.Discount.value = 0;
                //        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                //        this.form.UnitId.value = unitId;
                //    }
                //});
            }
            MeetingAttendeesEditDialog.prototype.getFormKey = function () { return Meeting.MeetingAttendeesForm.formKey; };
            //protected getNameProperty() { return MeetingAttendeesRow.nameProperty; }
            MeetingAttendeesEditDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAttendeesEditDialog);
            return MeetingAttendeesEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Meeting.MeetingAttendeesEditDialog = MeetingAttendeesEditDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesEditor = /** @class */ (function (_super) {
            __extends(MeetingAttendeesEditor, _super);
            function MeetingAttendeesEditor(container) {
                return _super.call(this, container) || this;
            }
            MeetingAttendeesEditor.prototype.getColumnsKey = function () { return "Meeting.MeetingAttendees"; };
            MeetingAttendeesEditor.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesEditor.prototype.getDialogType = function () { return Meeting.MeetingAttendeesEditDialog; };
            MeetingAttendeesEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            MeetingAttendeesEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.Attendee) {
                    row.AttendeeFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                        .itemById[row.Attendee].EmployeeFullName;
                }
                if (row.AttendeeType) {
                    row.AttendeeTypeName = SmartERP.Masters.AttendeeTypesRow.getLookup().itemById[row.AttendeeType].Name;
                }
                if (row.AttendanceStatus) {
                    row.AttendanceStatusName = SmartERP.Masters.AttendanceStatusesRow.getLookup().itemById[row.AttendanceStatus].Name;
                }
                return true;
            };
            MeetingAttendeesEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            MeetingAttendeesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MeetingAttendeesEditor);
            return MeetingAttendeesEditor;
        }(Serenity.Extensions.GridEditorBase));
        Meeting.MeetingAttendeesEditor = MeetingAttendeesEditor;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsDialog = /** @class */ (function (_super) {
            __extends(MeetingsDialog, _super);
            function MeetingsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.MeetingsForm(_this.idPrefix);
                return _this;
                //var q = Q.parseQueryString();
                //var url = window.location.href
                // alert(url);
                // var index = url.indexOf('#');
                // alert(url.substring(index,2));
            }
            MeetingsDialog.prototype.getFormKey = function () { return Meeting.MeetingsForm.formKey; };
            MeetingsDialog.prototype.getIdProperty = function () { return Meeting.MeetingsRow.idProperty; };
            MeetingsDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingsRow.localTextPrefix; };
            MeetingsDialog.prototype.getNameProperty = function () { return Meeting.MeetingsRow.nameProperty; };
            MeetingsDialog.prototype.getService = function () { return Meeting.MeetingsService.baseUrl; };
            MeetingsDialog.prototype.getDeletePermission = function () { return Meeting.MeetingsRow.deletePermission; };
            MeetingsDialog.prototype.getInsertPermission = function () { return Meeting.MeetingsRow.insertPermission; };
            MeetingsDialog.prototype.getUpdatePermission = function () { return Meeting.MeetingsRow.updatePermission; };
            MeetingsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                //var q = Q.parseQueryString();
                //alert(q["Id"]);
                if (this.isNewOrDeleted() == true) {
                    var $tabs = $('.property-tabs');
                    $tabs.children().each(function (index, tab) {
                        if (index > 0) {
                            $(tab).addClass('ui-state-disabled');
                            $(tab).on('click', function () { return false; });
                        }
                    });
                }
            };
            MeetingsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], MeetingsDialog);
            return MeetingsDialog;
        }(Serenity.EntityDialog));
        Meeting.MeetingsDialog = MeetingsDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsGrid = /** @class */ (function (_super) {
            __extends(MeetingsGrid, _super);
            function MeetingsGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingsGrid.prototype.getColumnsKey = function () { return 'Meeting.Meetings'; };
            MeetingsGrid.prototype.getDialogType = function () { return Meeting.MeetingsDialog; };
            MeetingsGrid.prototype.getIsActiveProperty = function () { return Meeting.MeetingsRow.isActiveProperty; };
            MeetingsGrid.prototype.getIdProperty = function () { return Meeting.MeetingsRow.idProperty; };
            MeetingsGrid.prototype.getInsertPermission = function () { return Meeting.MeetingsRow.insertPermission; };
            MeetingsGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingsRow.localTextPrefix; };
            MeetingsGrid.prototype.getService = function () { return Meeting.MeetingsService.baseUrl; };
            MeetingsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], MeetingsGrid);
            return MeetingsGrid;
        }(Serenity.EntityGrid));
        Meeting.MeetingsGrid = MeetingsGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (window.location !== window.parent.location) {
                        Q.notifyError("To log in to SmartERP to view the demo please <strong>click on the</strong> <h4>Remove Frame</h4> <h5>Button on Top Bar at Right Corner</h5>", '', { hideDuration: 500000, closeButton: true });
                        return;
                    }
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div style=\"text-align:center\">\n        <img src=\"/Content/images/logo-login.svg\" style=\"height:100px;\"/>\n    </div>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    ".concat(Q.text("Forms.Membership.Login.SignInButton"), "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"").concat(Q.resolveUrl('~/Account/ForgotPassword'), "\"><i class=\"fa fa-angle-right\"></i>&nbsp;").concat(Q.text("Forms.Membership.Login.ForgotPassword"), "</a>\n               \n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n");
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDialog = /** @class */ (function (_super) {
            __extends(PayrollDialog, _super);
            function PayrollDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Payroll.PayrollForm(_this.idPrefix);
                _this.form.ItemList.element.css('height', '400px');
                _this.form.ItemList.view.onRowCountChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.ItemList.view.onDataChanged.subscribe(function () {
                    _this.recalculate();
                });
                SmartERP.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            PayrollDialog.prototype.getFormKey = function () { return Payroll.PayrollForm.formKey; };
            PayrollDialog.prototype.getIdProperty = function () { return Payroll.PayrollRow.idProperty; };
            PayrollDialog.prototype.getLocalTextPrefix = function () { return Payroll.PayrollRow.localTextPrefix; };
            PayrollDialog.prototype.getNameProperty = function () { return Payroll.PayrollRow.nameProperty; };
            PayrollDialog.prototype.getService = function () { return Payroll.PayrollService.baseUrl; };
            PayrollDialog.prototype.getDeletePermission = function () { return Payroll.PayrollRow.deletePermission; };
            PayrollDialog.prototype.getInsertPermission = function () { return Payroll.PayrollRow.insertPermission; };
            PayrollDialog.prototype.getUpdatePermission = function () { return Payroll.PayrollRow.updatePermission; };
            PayrollDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            PayrollDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            PayrollDialog.prototype.recalculate = function () {
                this.form.TotalBasicSalary.value = 0;
                this.form.TotalIncome.value = 0;
                this.form.TotalDeduction.value = 0;
                this.form.TotalTakeHomePay.value = 0;
                for (var _i = 0, _a = this.form.ItemList.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.form.TotalBasicSalary.value += item.BasicSalary;
                    this.form.TotalIncome.value += item.TotalIncome;
                    this.form.TotalDeduction.value += item.TotalDeduction;
                    this.form.TotalTakeHomePay.value += item.TakeHomePay;
                }
            };
            PayrollDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    SmartERP.Administration.CompaniesService.GetDefaultCurrency({
                        CompanyId: 1
                    }, function (response) {
                        _this.form.CurrencyName.value = response.CurrencyName;
                    });
                }
            };
            PayrollDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //this.saveAndCloseButton.hide();
                //if (this.isNew()) {
                //    this.deleteButton.show();
                //    this.deleteButton.toggleClass('disabled', true);
                //}
            };
            PayrollDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PayrollDialog);
            return PayrollDialog;
        }(Serenity.EntityDialog));
        Payroll.PayrollDialog = PayrollDialog;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollGrid = /** @class */ (function (_super) {
            __extends(PayrollGrid, _super);
            function PayrollGrid(container) {
                return _super.call(this, container) || this;
            }
            PayrollGrid.prototype.getColumnsKey = function () { return Payroll.PayrollColumns.columnsKey; };
            PayrollGrid.prototype.getDialogType = function () { return Payroll.PayrollDialog; };
            PayrollGrid.prototype.getIdProperty = function () { return Payroll.PayrollRow.idProperty; };
            PayrollGrid.prototype.getInsertPermission = function () { return Payroll.PayrollRow.insertPermission; };
            PayrollGrid.prototype.getLocalTextPrefix = function () { return Payroll.PayrollRow.localTextPrefix; };
            PayrollGrid.prototype.getService = function () { return Payroll.PayrollService.baseUrl; };
            PayrollGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollGrid);
            return PayrollGrid;
        }(Serenity.EntityGrid));
        Payroll.PayrollGrid = PayrollGrid;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDialog = /** @class */ (function (_super) {
            __extends(PayrollDetailDialog, _super);
            function PayrollDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Payroll.PayrollDetailForm(_this.idPrefix);
                _this.form.EmployeeId.changeSelect2(function (args) {
                    var employeeId = _this.form.EmployeeId.value;
                    if (Q.isEmptyOrNull(employeeId)) {
                        return;
                    }
                    SmartERP.HumanResource.EmployeesService.Retrieve({
                        EntityId: employeeId
                    }, function (response) {
                        _this.form.BankAccount.value = response.Entity.BankAccountForPayroll;
                        _this.form.BankName.value = response.Entity.PayrollBankName;
                        _this.form.BasicSalary.value = response.Entity.BasicSalary;
                        var requestIncome = [];
                        SmartERP.HumanResource.EmployeeIncomesService.List({
                            Criteria: Serenity.Criteria.and(requestIncome.Criteria, [['EmployeeId'], '=', employeeId])
                        }, function (response) {
                            var items = [];
                            for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                                var item = _a[_i];
                                items.push({
                                    IncomeId: item.IncomeId,
                                    IncomeName: item.IncomeName,
                                    Amount: item.Amount
                                });
                            }
                            _this.form.IncomeList.value = items;
                        });
                        var requestDeduction = [];
                        SmartERP.HumanResource.EmployeeDeductionsService.List({
                            Criteria: Serenity.Criteria.and(requestDeduction.Criteria, [['EmployeeId'], '=', employeeId])
                        }, function (response) {
                            var items = [];
                            for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                                var item = _a[_i];
                                items.push({
                                    DeductionId: item.DeductionId,
                                    DeductionName: item.DeductionName,
                                    Amount: item.Amount
                                });
                            }
                            _this.form.DeductionList.value = items;
                        });
                        _this.recalculateTakeHomePay();
                    });
                });
                _this.form.BasicSalary.change(function () {
                    _this.recalculateTakeHomePay();
                });
                //income
                _this.form.IncomeList.view.onRowCountChanged.subscribe(function () {
                    _this.recalculateTakeHomePay();
                });
                _this.form.IncomeList.view.onDataChanged.subscribe(function () {
                    _this.recalculateTakeHomePay();
                });
                //deduction
                _this.form.DeductionList.view.onRowCountChanged.subscribe(function () {
                    _this.recalculateTakeHomePay();
                });
                _this.form.DeductionList.view.onDataChanged.subscribe(function () {
                    _this.recalculateTakeHomePay();
                });
                SmartERP.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            PayrollDetailDialog.prototype.getFormKey = function () { return Payroll.PayrollDetailForm.formKey; };
            PayrollDetailDialog.prototype.getIdProperty = function () { return Payroll.PayrollDetailRow.idProperty; };
            PayrollDetailDialog.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailRow.localTextPrefix; };
            PayrollDetailDialog.prototype.getNameProperty = function () { return Payroll.PayrollDetailRow.nameProperty; };
            PayrollDetailDialog.prototype.getService = function () { return Payroll.PayrollDetailService.baseUrl; };
            PayrollDetailDialog.prototype.getDeletePermission = function () { return Payroll.PayrollDetailRow.deletePermission; };
            PayrollDetailDialog.prototype.getInsertPermission = function () { return Payroll.PayrollDetailRow.insertPermission; };
            PayrollDetailDialog.prototype.getUpdatePermission = function () { return Payroll.PayrollDetailRow.updatePermission; };
            PayrollDetailDialog.prototype.recalculateIncome = function () {
                this.form.TotalIncome.value = 0;
                for (var _i = 0, _a = this.form.IncomeList.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.form.TotalIncome.value += item.Amount;
                }
            };
            PayrollDetailDialog.prototype.recalculateDeduction = function () {
                this.form.TotalDeduction.value = 0;
                for (var _i = 0, _a = this.form.DeductionList.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.form.TotalDeduction.value += item.Amount;
                }
            };
            PayrollDetailDialog.prototype.recalculateTakeHomePay = function () {
                this.recalculateIncome();
                this.recalculateDeduction();
                this.form.TakeHomePay.value = this.form.BasicSalary.value + this.form.TotalIncome.value - this.form.TotalDeduction.value;
            };
            PayrollDetailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isNew()) {
                    this.deleteButton.show();
                    this.deleteButton.toggleClass('disabled', true);
                }
                this.toolbar.findButton('print-salary-slip').toggle(this.isEditMode());
            };
            PayrollDetailDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.form.Id.element.prop('disabled', true);
                this.form.BankAccount.element.prop('disabled', true);
                this.form.BankName.element.prop('disabled', true);
                this.form.BasicSalary.element.prop('disabled', true);
                this.form.TotalIncome.element.prop('disabled', true);
                this.form.TotalDeduction.element.prop('disabled', true);
                this.form.TakeHomePay.element.prop('disabled', true);
                this.payrollDetailId = this.form.Id.value;
                this.form.Id.getGridField().toggle(false);
            };
            PayrollDetailDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            PayrollDetailDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            PayrollDetailDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print Salary Slip',
                    cssClass: 'export-pdf-button print-salary-slip',
                    reportKey: 'PayrollDetailPrint',
                    getParams: function () { return ({
                        Id: _this.payrollDetailId
                    }); }
                }));
                return buttons;
            };
            PayrollDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PayrollDetailDialog);
            return PayrollDetailDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Payroll.PayrollDetailDialog = PayrollDetailDialog;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailEditor = /** @class */ (function (_super) {
            __extends(PayrollDetailEditor, _super);
            function PayrollDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            PayrollDetailEditor.prototype.getColumnsKey = function () { return Payroll.PayrollDetailColumns.columnsKey; };
            PayrollDetailEditor.prototype.getDialogType = function () { return Payroll.PayrollDetailDialog; };
            PayrollDetailEditor.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailRow.localTextPrefix; };
            PayrollDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.EmployeeFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                    .itemById[row.EmployeeId].EmployeeFullName;
                return true;
            };
            PayrollDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            PayrollDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            PayrollDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailEditor);
            return PayrollDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Payroll.PayrollDetailEditor = PayrollDetailEditor;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailGrid = /** @class */ (function (_super) {
            __extends(PayrollDetailGrid, _super);
            function PayrollDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            PayrollDetailGrid.prototype.getColumnsKey = function () { return Payroll.PayrollDetailColumns.columnsKey; };
            PayrollDetailGrid.prototype.getDialogType = function () { return Payroll.PayrollDetailDialog; };
            PayrollDetailGrid.prototype.getIdProperty = function () { return Payroll.PayrollDetailRow.idProperty; };
            PayrollDetailGrid.prototype.getInsertPermission = function () { return Payroll.PayrollDetailRow.insertPermission; };
            PayrollDetailGrid.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailRow.localTextPrefix; };
            PayrollDetailGrid.prototype.getService = function () { return Payroll.PayrollDetailService.baseUrl; };
            PayrollDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailGrid);
            return PayrollDetailGrid;
        }(Serenity.EntityGrid));
        Payroll.PayrollDetailGrid = PayrollDetailGrid;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDeductionDialog = /** @class */ (function (_super) {
            __extends(PayrollDetailDeductionDialog, _super);
            function PayrollDetailDeductionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Payroll.PayrollDetailDeductionForm(_this.idPrefix);
                return _this;
            }
            PayrollDetailDeductionDialog.prototype.getFormKey = function () { return Payroll.PayrollDetailDeductionForm.formKey; };
            PayrollDetailDeductionDialog.prototype.getIdProperty = function () { return Payroll.PayrollDetailDeductionRow.idProperty; };
            PayrollDetailDeductionDialog.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailDeductionRow.localTextPrefix; };
            PayrollDetailDeductionDialog.prototype.getNameProperty = function () { return Payroll.PayrollDetailDeductionRow.nameProperty; };
            PayrollDetailDeductionDialog.prototype.getService = function () { return Payroll.PayrollDetailDeductionService.baseUrl; };
            PayrollDetailDeductionDialog.prototype.getDeletePermission = function () { return Payroll.PayrollDetailDeductionRow.deletePermission; };
            PayrollDetailDeductionDialog.prototype.getInsertPermission = function () { return Payroll.PayrollDetailDeductionRow.insertPermission; };
            PayrollDetailDeductionDialog.prototype.getUpdatePermission = function () { return Payroll.PayrollDetailDeductionRow.updatePermission; };
            PayrollDetailDeductionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailDeductionDialog);
            return PayrollDetailDeductionDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Payroll.PayrollDetailDeductionDialog = PayrollDetailDeductionDialog;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDeductionEditor = /** @class */ (function (_super) {
            __extends(PayrollDetailDeductionEditor, _super);
            function PayrollDetailDeductionEditor(container) {
                return _super.call(this, container) || this;
            }
            PayrollDetailDeductionEditor.prototype.getColumnsKey = function () { return Payroll.PayrollDetailDeductionColumns.columnsKey; };
            PayrollDetailDeductionEditor.prototype.getDialogType = function () { return Payroll.PayrollDetailDeductionDialog; };
            PayrollDetailDeductionEditor.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailDeductionRow.localTextPrefix; };
            PayrollDetailDeductionEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.DeductionName = SmartERP.Masters.DeductionsRow.getLookup()
                    .itemById[row.DeductionId].Name;
                return true;
            };
            PayrollDetailDeductionEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            PayrollDetailDeductionEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            PayrollDetailDeductionEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailDeductionEditor);
            return PayrollDetailDeductionEditor;
        }(Serenity.Extensions.GridEditorBase));
        Payroll.PayrollDetailDeductionEditor = PayrollDetailDeductionEditor;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailDeductionGrid = /** @class */ (function (_super) {
            __extends(PayrollDetailDeductionGrid, _super);
            function PayrollDetailDeductionGrid(container) {
                return _super.call(this, container) || this;
            }
            PayrollDetailDeductionGrid.prototype.getColumnsKey = function () { return Payroll.PayrollDetailDeductionColumns.columnsKey; };
            PayrollDetailDeductionGrid.prototype.getDialogType = function () { return Payroll.PayrollDetailDeductionDialog; };
            PayrollDetailDeductionGrid.prototype.getIdProperty = function () { return Payroll.PayrollDetailDeductionRow.idProperty; };
            PayrollDetailDeductionGrid.prototype.getInsertPermission = function () { return Payroll.PayrollDetailDeductionRow.insertPermission; };
            PayrollDetailDeductionGrid.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailDeductionRow.localTextPrefix; };
            PayrollDetailDeductionGrid.prototype.getService = function () { return Payroll.PayrollDetailDeductionService.baseUrl; };
            PayrollDetailDeductionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailDeductionGrid);
            return PayrollDetailDeductionGrid;
        }(Serenity.EntityGrid));
        Payroll.PayrollDetailDeductionGrid = PayrollDetailDeductionGrid;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailIncomeDialog = /** @class */ (function (_super) {
            __extends(PayrollDetailIncomeDialog, _super);
            function PayrollDetailIncomeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Payroll.PayrollDetailIncomeForm(_this.idPrefix);
                return _this;
            }
            PayrollDetailIncomeDialog.prototype.getFormKey = function () { return Payroll.PayrollDetailIncomeForm.formKey; };
            PayrollDetailIncomeDialog.prototype.getIdProperty = function () { return Payroll.PayrollDetailIncomeRow.idProperty; };
            PayrollDetailIncomeDialog.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailIncomeRow.localTextPrefix; };
            PayrollDetailIncomeDialog.prototype.getNameProperty = function () { return Payroll.PayrollDetailIncomeRow.nameProperty; };
            PayrollDetailIncomeDialog.prototype.getService = function () { return Payroll.PayrollDetailIncomeService.baseUrl; };
            PayrollDetailIncomeDialog.prototype.getDeletePermission = function () { return Payroll.PayrollDetailIncomeRow.deletePermission; };
            PayrollDetailIncomeDialog.prototype.getInsertPermission = function () { return Payroll.PayrollDetailIncomeRow.insertPermission; };
            PayrollDetailIncomeDialog.prototype.getUpdatePermission = function () { return Payroll.PayrollDetailIncomeRow.updatePermission; };
            PayrollDetailIncomeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailIncomeDialog);
            return PayrollDetailIncomeDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Payroll.PayrollDetailIncomeDialog = PayrollDetailIncomeDialog;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailIncomeEditor = /** @class */ (function (_super) {
            __extends(PayrollDetailIncomeEditor, _super);
            function PayrollDetailIncomeEditor(container) {
                return _super.call(this, container) || this;
            }
            PayrollDetailIncomeEditor.prototype.getColumnsKey = function () { return Payroll.PayrollDetailIncomeColumns.columnsKey; };
            PayrollDetailIncomeEditor.prototype.getDialogType = function () { return Payroll.PayrollDetailIncomeDialog; };
            PayrollDetailIncomeEditor.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailIncomeRow.localTextPrefix; };
            PayrollDetailIncomeEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.IncomeName = SmartERP.Masters.IncomesRow.getLookup()
                    .itemById[row.IncomeId].Name;
                return true;
            };
            PayrollDetailIncomeEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            PayrollDetailIncomeEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            PayrollDetailIncomeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailIncomeEditor);
            return PayrollDetailIncomeEditor;
        }(Serenity.Extensions.GridEditorBase));
        Payroll.PayrollDetailIncomeEditor = PayrollDetailIncomeEditor;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Payroll;
    (function (Payroll) {
        var PayrollDetailIncomeGrid = /** @class */ (function (_super) {
            __extends(PayrollDetailIncomeGrid, _super);
            function PayrollDetailIncomeGrid(container) {
                return _super.call(this, container) || this;
            }
            PayrollDetailIncomeGrid.prototype.getColumnsKey = function () { return Payroll.PayrollDetailIncomeColumns.columnsKey; };
            PayrollDetailIncomeGrid.prototype.getDialogType = function () { return Payroll.PayrollDetailIncomeDialog; };
            PayrollDetailIncomeGrid.prototype.getIdProperty = function () { return Payroll.PayrollDetailIncomeRow.idProperty; };
            PayrollDetailIncomeGrid.prototype.getInsertPermission = function () { return Payroll.PayrollDetailIncomeRow.insertPermission; };
            PayrollDetailIncomeGrid.prototype.getLocalTextPrefix = function () { return Payroll.PayrollDetailIncomeRow.localTextPrefix; };
            PayrollDetailIncomeGrid.prototype.getService = function () { return Payroll.PayrollDetailIncomeService.baseUrl; };
            PayrollDetailIncomeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PayrollDetailIncomeGrid);
            return PayrollDetailIncomeGrid;
        }(Serenity.EntityGrid));
        Payroll.PayrollDetailIncomeGrid = PayrollDetailIncomeGrid;
    })(Payroll = SmartERP.Payroll || (SmartERP.Payroll = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsDialog = /** @class */ (function (_super) {
            __extends(BrandsDialog, _super);
            function BrandsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Products.BrandsForm(_this.idPrefix);
                return _this;
            }
            BrandsDialog.prototype.getFormKey = function () { return Products.BrandsForm.formKey; };
            BrandsDialog.prototype.getIdProperty = function () { return Products.BrandsRow.idProperty; };
            BrandsDialog.prototype.getLocalTextPrefix = function () { return Products.BrandsRow.localTextPrefix; };
            BrandsDialog.prototype.getNameProperty = function () { return Products.BrandsRow.nameProperty; };
            BrandsDialog.prototype.getService = function () { return Products.BrandsService.baseUrl; };
            BrandsDialog.prototype.getDeletePermission = function () { return Products.BrandsRow.deletePermission; };
            BrandsDialog.prototype.getInsertPermission = function () { return Products.BrandsRow.insertPermission; };
            BrandsDialog.prototype.getUpdatePermission = function () { return Products.BrandsRow.updatePermission; };
            BrandsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandsDialog);
            return BrandsDialog;
        }(Serenity.EntityDialog));
        Products.BrandsDialog = BrandsDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsGrid = /** @class */ (function (_super) {
            __extends(BrandsGrid, _super);
            function BrandsGrid(container) {
                return _super.call(this, container) || this;
            }
            BrandsGrid.prototype.getColumnsKey = function () { return 'Products.Brands'; };
            BrandsGrid.prototype.getDialogType = function () { return Products.BrandsDialog; };
            BrandsGrid.prototype.getIsActiveProperty = function () { return Products.BrandsRow.isActiveProperty; };
            BrandsGrid.prototype.getIdProperty = function () { return Products.BrandsRow.idProperty; };
            BrandsGrid.prototype.getInsertPermission = function () { return Products.BrandsRow.insertPermission; };
            BrandsGrid.prototype.getLocalTextPrefix = function () { return Products.BrandsRow.localTextPrefix; };
            BrandsGrid.prototype.getService = function () { return Products.BrandsService.baseUrl; };
            BrandsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BrandsGrid);
            return BrandsGrid;
        }(Serenity.EntityGrid));
        Products.BrandsGrid = BrandsGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesDialog = /** @class */ (function (_super) {
            __extends(CategoriesDialog, _super);
            function CategoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Products.CategoriesForm(_this.idPrefix);
                return _this;
            }
            CategoriesDialog.prototype.getFormKey = function () { return Products.CategoriesForm.formKey; };
            CategoriesDialog.prototype.getIdProperty = function () { return Products.CategoriesRow.idProperty; };
            CategoriesDialog.prototype.getLocalTextPrefix = function () { return Products.CategoriesRow.localTextPrefix; };
            CategoriesDialog.prototype.getNameProperty = function () { return Products.CategoriesRow.nameProperty; };
            CategoriesDialog.prototype.getService = function () { return Products.CategoriesService.baseUrl; };
            CategoriesDialog.prototype.getDeletePermission = function () { return Products.CategoriesRow.deletePermission; };
            CategoriesDialog.prototype.getInsertPermission = function () { return Products.CategoriesRow.insertPermission; };
            CategoriesDialog.prototype.getUpdatePermission = function () { return Products.CategoriesRow.updatePermission; };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        Products.CategoriesDialog = CategoriesDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesEditor = /** @class */ (function (_super) {
            __extends(CategoriesEditor, _super);
            function CategoriesEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CategoriesEditor.prototype.getLookupKey = function () {
                return Products.CategoriesRow.lookupKey;
            };
            CategoriesEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Name;
                while (item.ParentCategoryId != null && !visited[item.ParentCategoryId]) {
                    item = lookup.itemById[item.ParentCategoryId];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.Name + " >> " + text;
                }
                return text;
            };
            CategoriesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CategoriesEditor);
            return CategoriesEditor;
        }(Serenity.LookupEditorBase));
        Products.CategoriesEditor = CategoriesEditor;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesGrid = /** @class */ (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    getParentId: function (x) { return x.ParentCategoryId; },
                    toggleField: "Name" /* CategoriesRow.Fields.Name */,
                    initialCollapse: function () { return false; }
                });
                return _this;
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'Products.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return Products.CategoriesDialog; };
            CategoriesGrid.prototype.getIsActiveProperty = function () { return Products.CategoriesRow.isActiveProperty; };
            CategoriesGrid.prototype.getIdProperty = function () { return Products.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getInsertPermission = function () { return Products.CategoriesRow.insertPermission; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return Products.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return Products.CategoriesService.baseUrl; };
            CategoriesGrid.prototype.subDialogDataChange = function () {
                _super.prototype.subDialogDataChange.call(this);
                Q.reloadLookup(Products.CategoriesRow.lookupKey);
            };
            CategoriesGrid.prototype.usePager = function () {
                return false;
            };
            CategoriesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(Q.indexOf(columns, function (x) { return x.name == "Name" /* CategoriesRow.Fields.Name */; }) + 1, 0, {
                    field: 'Add Child Unit',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action add-child-unit" title="add child unit"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            CategoriesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('add-child-unit')) {
                        var dlg = new Products.CategoriesDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ParentCategoryId: item.Id
                        });
                    }
                }
            };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        Products.CategoriesGrid = CategoriesGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsDialog = /** @class */ (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Products.ProductsForm(_this.idPrefix);
                _this.form.ProductName.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            ProductsDialog.prototype.getFormKey = function () { return Products.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return Products.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return Products.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return Products.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return Products.ProductsService.baseUrl; };
            ProductsDialog.prototype.getDeletePermission = function () { return Products.ProductsRow.deletePermission; };
            ProductsDialog.prototype.getInsertPermission = function () { return Products.ProductsRow.insertPermission; };
            ProductsDialog.prototype.getUpdatePermission = function () { return Products.ProductsRow.updatePermission; };
            ProductsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            ProductsDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.Sn.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'P').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    SmartERP.Products.ProductsService.GetNextNumber({
                        Prefix: prefix,
                        Length: 7 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.Sn.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.Sn.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            ProductsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        Products.ProductsDialog = ProductsDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsGrid = /** @class */ (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'Products.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return Products.ProductsDialog; };
            ProductsGrid.prototype.getIsActiveProperty = function () { return Products.ProductsRow.isActiveProperty; };
            ProductsGrid.prototype.getIdProperty = function () { return Products.ProductsRow.idProperty; };
            ProductsGrid.prototype.getInsertPermission = function () { return Products.ProductsRow.insertPermission; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return Products.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return Products.ProductsService.baseUrl; };
            ProductsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Products.ProductsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        Products.ProductsGrid = ProductsGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsDialog = /** @class */ (function (_super) {
            __extends(UnitsDialog, _super);
            function UnitsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Products.UnitsForm(_this.idPrefix);
                return _this;
            }
            UnitsDialog.prototype.getFormKey = function () { return Products.UnitsForm.formKey; };
            UnitsDialog.prototype.getIdProperty = function () { return Products.UnitsRow.idProperty; };
            UnitsDialog.prototype.getLocalTextPrefix = function () { return Products.UnitsRow.localTextPrefix; };
            UnitsDialog.prototype.getNameProperty = function () { return Products.UnitsRow.nameProperty; };
            UnitsDialog.prototype.getService = function () { return Products.UnitsService.baseUrl; };
            UnitsDialog.prototype.getDeletePermission = function () { return Products.UnitsRow.deletePermission; };
            UnitsDialog.prototype.getInsertPermission = function () { return Products.UnitsRow.insertPermission; };
            UnitsDialog.prototype.getUpdatePermission = function () { return Products.UnitsRow.updatePermission; };
            UnitsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitsDialog);
            return UnitsDialog;
        }(Serenity.EntityDialog));
        Products.UnitsDialog = UnitsDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsGrid = /** @class */ (function (_super) {
            __extends(UnitsGrid, _super);
            function UnitsGrid(container) {
                return _super.call(this, container) || this;
            }
            UnitsGrid.prototype.getColumnsKey = function () { return 'Products.Units'; };
            UnitsGrid.prototype.getDialogType = function () { return Products.UnitsDialog; };
            UnitsGrid.prototype.getIsActiveProperty = function () { return Products.UnitsRow.isActiveProperty; };
            UnitsGrid.prototype.getIdProperty = function () { return Products.UnitsRow.idProperty; };
            UnitsGrid.prototype.getInsertPermission = function () { return Products.UnitsRow.insertPermission; };
            UnitsGrid.prototype.getLocalTextPrefix = function () { return Products.UnitsRow.localTextPrefix; };
            UnitsGrid.prototype.getService = function () { return Products.UnitsService.baseUrl; };
            UnitsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], UnitsGrid);
            return UnitsGrid;
        }(Serenity.EntityGrid));
        Products.UnitsGrid = UnitsGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsDialog = /** @class */ (function (_super) {
            __extends(PurchaseDetailsDialog, _super);
            function PurchaseDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchases.PurchaseDetailsForm(_this.idPrefix);
                return _this;
            }
            PurchaseDetailsDialog.prototype.getFormKey = function () { return Purchases.PurchaseDetailsForm.formKey; };
            PurchaseDetailsDialog.prototype.getIdProperty = function () { return Purchases.PurchaseDetailsRow.idProperty; };
            PurchaseDetailsDialog.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailsDialog.prototype.getNameProperty = function () { return Purchases.PurchaseDetailsRow.nameProperty; };
            PurchaseDetailsDialog.prototype.getService = function () { return Purchases.PurchaseDetailsService.baseUrl; };
            PurchaseDetailsDialog.prototype.getDeletePermission = function () { return Purchases.PurchaseDetailsRow.deletePermission; };
            PurchaseDetailsDialog.prototype.getInsertPermission = function () { return Purchases.PurchaseDetailsRow.insertPermission; };
            PurchaseDetailsDialog.prototype.getUpdatePermission = function () { return Purchases.PurchaseDetailsRow.updatePermission; };
            PurchaseDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailsDialog);
            return PurchaseDetailsDialog;
        }(Serenity.EntityDialog));
        Purchases.PurchaseDetailsDialog = PurchaseDetailsDialog;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsGrid = /** @class */ (function (_super) {
            __extends(PurchaseDetailsGrid, _super);
            function PurchaseDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseDetailsGrid.prototype.getColumnsKey = function () { return 'Purchases.PurchaseDetails'; };
            PurchaseDetailsGrid.prototype.getDialogType = function () { return Purchases.PurchaseDetailsDialog; };
            PurchaseDetailsGrid.prototype.getIdProperty = function () { return Purchases.PurchaseDetailsRow.idProperty; };
            PurchaseDetailsGrid.prototype.getInsertPermission = function () { return Purchases.PurchaseDetailsRow.insertPermission; };
            PurchaseDetailsGrid.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailsGrid.prototype.getService = function () { return Purchases.PurchaseDetailsService.baseUrl; };
            PurchaseDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailsGrid);
            return PurchaseDetailsGrid;
        }(Serenity.EntityGrid));
        Purchases.PurchaseDetailsGrid = PurchaseDetailsGrid;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailEditDialog = /** @class */ (function (_super) {
            __extends(PurchaseDetailEditDialog, _super);
            function PurchaseDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchases.PurchaseDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].PurchasePrice;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                        _this.form.UnitPrice.value = 0;
                        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        _this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            PurchaseDetailEditDialog.prototype.getFormKey = function () { return Purchases.PurchaseDetailsForm.formKey; };
            PurchaseDetailEditDialog.prototype.getNameProperty = function () { return Purchases.PurchaseDetailsRow.nameProperty; };
            PurchaseDetailEditDialog.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailEditDialog);
            return PurchaseDetailEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Purchases.PurchaseDetailEditDialog = PurchaseDetailEditDialog;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailEditor = /** @class */ (function (_super) {
            __extends(PurchaseDetailEditor, _super);
            function PurchaseDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            PurchaseDetailEditor.prototype.getColumnsKey = function () { return "Purchases.PurchaseDetails"; };
            PurchaseDetailEditor.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailEditor.prototype.getDialogType = function () { return Purchases.PurchaseDetailEditDialog; };
            PurchaseDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            PurchaseDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                    .itemById[row.UnitId].Name;
                return true;
            };
            PurchaseDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            PurchaseDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PurchaseDetailEditor);
            return PurchaseDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Purchases.PurchaseDetailEditor = PurchaseDetailEditor;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesDialog = /** @class */ (function (_super) {
            __extends(PurchasesDialog, _super);
            function PurchasesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchases.PurchasesForm(_this.idPrefix);
                _this.form = new Purchases.PurchasesForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                    // Q.notifySuccess(total.toString());
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                //this.form.Vat.change(() => {
                //    this.doCalculation();
                //});
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                _this.form.PaidAmount.change(function () {
                    _this.doCalculation();
                });
                _this.form.NoTax.change(function () {
                    _this.doCalculation();
                });
                return _this;
            }
            PurchasesDialog.prototype.getFormKey = function () { return Purchases.PurchasesForm.formKey; };
            PurchasesDialog.prototype.getIdProperty = function () { return Purchases.PurchasesRow.idProperty; };
            PurchasesDialog.prototype.getLocalTextPrefix = function () { return Purchases.PurchasesRow.localTextPrefix; };
            PurchasesDialog.prototype.getNameProperty = function () { return Purchases.PurchasesRow.nameProperty; };
            PurchasesDialog.prototype.getService = function () { return Purchases.PurchasesService.baseUrl; };
            PurchasesDialog.prototype.getDeletePermission = function () { return Purchases.PurchasesRow.deletePermission; };
            PurchasesDialog.prototype.getInsertPermission = function () { return Purchases.PurchasesRow.insertPermission; };
            PurchasesDialog.prototype.getUpdatePermission = function () { return Purchases.PurchasesRow.updatePermission; };
            PurchasesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                //this.updateExpiryDate();
            };
            PurchasesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            PurchasesDialog.prototype.doCalculation = function () {
                var total = 0;
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.Total || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _b = 0, _c = this.form.LineItems.getItems(); _b < _c.length; _b++) {
                    var k = _c[_b];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                var vat = 0;
                if (this.isNew) {
                    if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                        var Company = SmartERP.Administration.CompaniesRow.getLookup().items[0];
                        vat = Company.VatPercentage;
                        this.form.VatPercentage.value = vat;
                        this.form.VatType.value = Company.VatType.toString();
                    }
                }
                if (this.form.NoTax.value == false) {
                    this.form.VatPercentage.value = vat;
                }
                else {
                    this.form.VatPercentage.value = 0;
                }
                var vat = this.form.VatPercentage.value;
                if (this.form.VatType.value == SmartERP.VatKind.Exclusive.toString()) {
                    this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
                }
                else {
                    this.form.Vat.value = ((this.form.GrandTotal.value - this.form.Discount.value) * vat) / (100 + vat);
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
                }
                this.form.TotalTax.value = this.form.Vat.value;
                this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
                if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                    this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                    this.form.Due.value = 0;
                }
                else {
                    this.form.Change.value = 0;
                }
            };
            PurchasesDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                Q.confirm("Do you want to print this", function () {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Purchases.PurchaseReport',
                        params: {
                            OrderID: response.EntityId
                        }
                    });
                });
            };
            PurchasesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PurchasesDialog);
            return PurchasesDialog;
        }(Serenity.EntityDialog));
        Purchases.PurchasesDialog = PurchasesDialog;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesGrid = /** @class */ (function (_super) {
            __extends(PurchasesGrid, _super);
            function PurchasesGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchasesGrid.prototype.getColumnsKey = function () { return 'Purchases.Purchases'; };
            PurchasesGrid.prototype.getDialogType = function () { return Purchases.PurchasesDialog; };
            PurchasesGrid.prototype.getIdProperty = function () { return Purchases.PurchasesRow.idProperty; };
            PurchasesGrid.prototype.getInsertPermission = function () { return Purchases.PurchasesRow.insertPermission; };
            PurchasesGrid.prototype.getLocalTextPrefix = function () { return Purchases.PurchasesRow.localTextPrefix; };
            PurchasesGrid.prototype.getService = function () { return Purchases.PurchasesService.baseUrl; };
            PurchasesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Bill',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-bill" title="Download Quotation">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Bill',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-bill" title="View Quotation">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            PurchasesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-bill')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Purchases.PurchaseReport',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-bill')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Purchases.PurchaseReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            PurchasesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Purchases.PurchasesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PurchasesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], PurchasesGrid);
            return PurchasesGrid;
        }(Serenity.EntityGrid));
        Purchases.PurchasesGrid = PurchasesGrid;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsDialog = /** @class */ (function (_super) {
            __extends(QuotationDetailsDialog, _super);
            function QuotationDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Quotations.QuotationDetailsForm(_this.idPrefix);
                return _this;
            }
            QuotationDetailsDialog.prototype.getFormKey = function () { return Quotations.QuotationDetailsForm.formKey; };
            QuotationDetailsDialog.prototype.getIdProperty = function () { return Quotations.QuotationDetailsRow.idProperty; };
            QuotationDetailsDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationDetailsDialog.prototype.getNameProperty = function () { return Quotations.QuotationDetailsRow.nameProperty; };
            QuotationDetailsDialog.prototype.getService = function () { return Quotations.QuotationDetailsService.baseUrl; };
            QuotationDetailsDialog.prototype.getDeletePermission = function () { return Quotations.QuotationDetailsRow.deletePermission; };
            QuotationDetailsDialog.prototype.getInsertPermission = function () { return Quotations.QuotationDetailsRow.insertPermission; };
            QuotationDetailsDialog.prototype.getUpdatePermission = function () { return Quotations.QuotationDetailsRow.updatePermission; };
            QuotationDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationDetailsDialog);
            return QuotationDetailsDialog;
        }(Serenity.EntityDialog));
        Quotations.QuotationDetailsDialog = QuotationDetailsDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsGrid = /** @class */ (function (_super) {
            __extends(QuotationDetailsGrid, _super);
            function QuotationDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            QuotationDetailsGrid.prototype.getColumnsKey = function () { return 'Quotations.QuotationDetails'; };
            QuotationDetailsGrid.prototype.getDialogType = function () { return Quotations.QuotationDetailsDialog; };
            QuotationDetailsGrid.prototype.getIdProperty = function () { return Quotations.QuotationDetailsRow.idProperty; };
            QuotationDetailsGrid.prototype.getInsertPermission = function () { return Quotations.QuotationDetailsRow.insertPermission; };
            QuotationDetailsGrid.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationDetailsGrid.prototype.getService = function () { return Quotations.QuotationDetailsService.baseUrl; };
            QuotationDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationDetailsGrid);
            return QuotationDetailsGrid;
        }(Serenity.EntityGrid));
        Quotations.QuotationDetailsGrid = QuotationDetailsGrid;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsDetailEditDialog = /** @class */ (function (_super) {
            __extends(QuotationsDetailEditDialog, _super);
            function QuotationsDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Quotations.QuotationDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        _this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            QuotationsDetailEditDialog.prototype.getFormKey = function () { return Quotations.QuotationDetailsForm.formKey; };
            QuotationsDetailEditDialog.prototype.getNameProperty = function () { return Quotations.QuotationDetailsRow.nameProperty; };
            QuotationsDetailEditDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationsDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationsDetailEditDialog);
            return QuotationsDetailEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Quotations.QuotationsDetailEditDialog = QuotationsDetailEditDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsDetailEditor = /** @class */ (function (_super) {
            __extends(QuotationsDetailEditor, _super);
            function QuotationsDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            QuotationsDetailEditor.prototype.getColumnsKey = function () { return "Quotations.QuotationDetails"; };
            QuotationsDetailEditor.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationsDetailEditor.prototype.getDialogType = function () { return Quotations.QuotationsDetailEditDialog; };
            QuotationsDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            QuotationsDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                // alert('test');
                //if (row.Quntity!>0) {
                //    return false;
                //}
                //if (row.UnitPrice! > 0) {
                //    return false;
                //}
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                    .itemById[row.UnitId].Name;
                //row.PurchasePrice = SmartERP.Products.ProductsRow.getLookup()
                //    .itemById[row.ProductId].PurchasePrice;
                //console.log('product');
                //console.log(XInventory.Products.ProductsRow.getLookup()
                //    .itemById[row.ProductId]);
                return true;
            };
            QuotationsDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            QuotationsDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], QuotationsDetailEditor);
            return QuotationsDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Quotations.QuotationsDetailEditor = QuotationsDetailEditor;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsDialog = /** @class */ (function (_super) {
            __extends(QuotationsDialog, _super);
            function QuotationsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Quotations.QuotationsForm(_this.idPrefix);
                _this.form = new Quotations.QuotationsForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                    _this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                    // Q.notifySuccess(total.toString());
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                _this.form.Vat.change(function () {
                    _this.doCalculation();
                });
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                _this.form.NoTax.change(function () {
                    _this.doCalculation();
                });
                return _this;
            }
            QuotationsDialog.prototype.getFormKey = function () { return Quotations.QuotationsForm.formKey; };
            QuotationsDialog.prototype.getIdProperty = function () { return Quotations.QuotationsRow.idProperty; };
            QuotationsDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationsRow.localTextPrefix; };
            QuotationsDialog.prototype.getNameProperty = function () { return Quotations.QuotationsRow.nameProperty; };
            QuotationsDialog.prototype.getService = function () { return Quotations.QuotationsService.baseUrl; };
            QuotationsDialog.prototype.getDeletePermission = function () { return Quotations.QuotationsRow.deletePermission; };
            QuotationsDialog.prototype.getInsertPermission = function () { return Quotations.QuotationsRow.insertPermission; };
            QuotationsDialog.prototype.getUpdatePermission = function () { return Quotations.QuotationsRow.updatePermission; };
            QuotationsDialog.prototype.updateExpiryDate = function () {
                var NoOfMonths = 1;
                var toBeDueDate = new Date(this.form.Date.value);
                this.form.ExpiryDate.value = new Date(new Date(this.form.Date.value).setMonth(toBeDueDate.getMonth() + NoOfMonths)).toDateString();
            };
            QuotationsDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.updateExpiryDate();
            };
            QuotationsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            QuotationsDialog.prototype.doCalculation = function () {
                var total = 0;
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.Total || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _b = 0, _c = this.form.LineItems.getItems(); _b < _c.length; _b++) {
                    var k = _c[_b];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                var vat = 0;
                if (this.isNew) {
                    if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                        var Company = SmartERP.Administration.CompaniesRow.getLookup().items[0];
                        vat = Company.VatPercentage;
                        this.form.VatPercentage.value = vat;
                        this.form.VatType.value = Company.VatType.toString();
                    }
                }
                if (this.form.NoTax.value == false) {
                    this.form.VatPercentage.value = vat;
                }
                else {
                    this.form.VatPercentage.value = 0;
                }
                var vat = this.form.VatPercentage.value;
                if (this.form.VatType.value == SmartERP.VatKind.Exclusive.toString()) {
                    this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
                }
                else {
                    this.form.Vat.value = ((this.form.GrandTotal.value - this.form.Discount.value) * vat) / (100 + vat);
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
                }
                this.form.TotalTax.value = this.form.Vat.value;
            };
            QuotationsDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                Q.confirm("Do you want to print this", function () {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Quotations.QuotationReport',
                        params: {
                            OrderID: response.EntityId
                        }
                    });
                });
            };
            QuotationsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], QuotationsDialog);
            return QuotationsDialog;
        }(Serenity.EntityDialog));
        Quotations.QuotationsDialog = QuotationsDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsGrid = /** @class */ (function (_super) {
            __extends(QuotationsGrid, _super);
            function QuotationsGrid(container) {
                return _super.call(this, container) || this;
            }
            QuotationsGrid.prototype.getColumnsKey = function () { return 'Quotations.Quotations'; };
            QuotationsGrid.prototype.getDialogType = function () { return Quotations.QuotationsDialog; };
            QuotationsGrid.prototype.getIdProperty = function () { return Quotations.QuotationsRow.idProperty; };
            QuotationsGrid.prototype.getInsertPermission = function () { return Quotations.QuotationsRow.insertPermission; };
            QuotationsGrid.prototype.getLocalTextPrefix = function () { return Quotations.QuotationsRow.localTextPrefix; };
            QuotationsGrid.prototype.getService = function () { return Quotations.QuotationsService.baseUrl; };
            QuotationsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Quotation',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-quotation" title="Download Quotation">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Quotation',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-quotation" title="View Quotation">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            QuotationsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-quotation')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Quotations.QuotationReport',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-quotation')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Quotations.QuotationReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            QuotationsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Quotations.QuotationsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            QuotationsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], QuotationsGrid);
            return QuotationsGrid;
        }(Serenity.EntityGrid));
        Quotations.QuotationsGrid = QuotationsGrid;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var CustomerReceivableReportGrid = /** @class */ (function (_super) {
            __extends(CustomerReceivableReportGrid, _super);
            function CustomerReceivableReportGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerReceivableReportGrid.prototype.getColumnsKey = function () { return 'Reports.CustomerReceivableReport'; };
            CustomerReceivableReportGrid.prototype.getDialogType = function () { return SmartERP.Customers.CustomersDialog; };
            CustomerReceivableReportGrid.prototype.getIsActiveProperty = function () { return SmartERP.Customers.CustomersRow.isActiveProperty; };
            CustomerReceivableReportGrid.prototype.getIdProperty = function () { return SmartERP.Customers.CustomersRow.idProperty; };
            CustomerReceivableReportGrid.prototype.getInsertPermission = function () { return SmartERP.Customers.CustomersRow.insertPermission; };
            CustomerReceivableReportGrid.prototype.getLocalTextPrefix = function () { return SmartERP.Customers.CustomersRow.localTextPrefix; };
            CustomerReceivableReportGrid.prototype.getService = function () { return SmartERP.Customers.CustomersService.baseUrl; };
            CustomerReceivableReportGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                //request.Criteria = Serenity.Criteria.and(request.Criteria,
                //    [['InStock'], '>', 0])
                //    ;
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '<', 10] (which means string 'A' is less than 10
                return true;
            };
            CustomerReceivableReportGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            CustomerReceivableReportGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerReceivableReportGrid);
            return CustomerReceivableReportGrid;
        }(Serenity.EntityGrid));
        Reports.CustomerReceivableReportGrid = CustomerReceivableReportGrid;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingDialog = /** @class */ (function (_super) {
            __extends(DailyClosingDialog, _super);
            function DailyClosingDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Reports.DailyClosingForm(_this.idPrefix);
                _this.form = new Reports.DailyClosingForm(_this.idPrefix);
                return _this;
            }
            DailyClosingDialog.prototype.getFormKey = function () { return Reports.DailyClosingForm.formKey; };
            DailyClosingDialog.prototype.getIdProperty = function () { return Reports.DailyClosingRow.idProperty; };
            DailyClosingDialog.prototype.getLocalTextPrefix = function () { return Reports.DailyClosingRow.localTextPrefix; };
            DailyClosingDialog.prototype.getService = function () { return Reports.DailyClosingService.baseUrl; };
            DailyClosingDialog.prototype.getDeletePermission = function () { return Reports.DailyClosingRow.deletePermission; };
            DailyClosingDialog.prototype.getInsertPermission = function () { return Reports.DailyClosingRow.insertPermission; };
            DailyClosingDialog.prototype.getUpdatePermission = function () { return Reports.DailyClosingRow.updatePermission; };
            DailyClosingDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            DailyClosingDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                //window.location.href = "/Customers/Customers";
            };
            DailyClosingDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DailyClosingDialog);
            return DailyClosingDialog;
        }(Serenity.EntityDialog));
        Reports.DailyClosingDialog = DailyClosingDialog;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingGrid = /** @class */ (function (_super) {
            __extends(DailyClosingGrid, _super);
            function DailyClosingGrid(container) {
                return _super.call(this, container) || this;
            }
            DailyClosingGrid.prototype.getColumnsKey = function () { return 'Reports.DailyClosing'; };
            DailyClosingGrid.prototype.getDialogType = function () { return Reports.DailyClosingDialog; };
            DailyClosingGrid.prototype.getIdProperty = function () { return Reports.DailyClosingRow.idProperty; };
            DailyClosingGrid.prototype.getInsertPermission = function () { return Reports.DailyClosingRow.insertPermission; };
            DailyClosingGrid.prototype.getLocalTextPrefix = function () { return Reports.DailyClosingRow.localTextPrefix; };
            DailyClosingGrid.prototype.getService = function () { return Reports.DailyClosingService.baseUrl; };
            DailyClosingGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            DailyClosingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DailyClosingGrid);
            return DailyClosingGrid;
        }(Serenity.EntityGrid));
        Reports.DailyClosingGrid = DailyClosingGrid;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var StockReport = /** @class */ (function (_super) {
            __extends(StockReport, _super);
            function StockReport(container) {
                return _super.call(this, container) || this;
            }
            StockReport.prototype.getColumnsKey = function () { return 'Reports.StockReport'; };
            StockReport.prototype.getDialogType = function () { return SmartERP.Products.ProductsDialog; };
            StockReport.prototype.getIsActiveProperty = function () { return SmartERP.Products.ProductsRow.isActiveProperty; };
            StockReport.prototype.getIdProperty = function () { return SmartERP.Products.ProductsRow.idProperty; };
            StockReport.prototype.getInsertPermission = function () { return SmartERP.Products.ProductsRow.insertPermission; };
            StockReport.prototype.getLocalTextPrefix = function () { return SmartERP.Products.ProductsRow.localTextPrefix; };
            StockReport.prototype.getService = function () { return SmartERP.Products.ProductsService.baseUrl; };
            StockReport.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                //request.Criteria = Serenity.Criteria.and(request.Criteria,
                //    [['InStock'], '>', 0])
                //    ;
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '<', 10] (which means string 'A' is less than 10
                return true;
            };
            StockReport.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            StockReport = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], StockReport);
            return StockReport;
        }(Serenity.EntityGrid));
        Reports.StockReport = StockReport;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var SupplierPayableReportGrid = /** @class */ (function (_super) {
            __extends(SupplierPayableReportGrid, _super);
            function SupplierPayableReportGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierPayableReportGrid.prototype.getColumnsKey = function () { return 'Reports.SupplierPayableReport'; };
            SupplierPayableReportGrid.prototype.getDialogType = function () { return SmartERP.Suppliers.SuppliersDialog; };
            SupplierPayableReportGrid.prototype.getIsActiveProperty = function () { return SmartERP.Suppliers.SuppliersRow.isActiveProperty; };
            SupplierPayableReportGrid.prototype.getIdProperty = function () { return SmartERP.Suppliers.SuppliersRow.idProperty; };
            SupplierPayableReportGrid.prototype.getInsertPermission = function () { return SmartERP.Suppliers.SuppliersRow.insertPermission; };
            SupplierPayableReportGrid.prototype.getLocalTextPrefix = function () { return SmartERP.Suppliers.SuppliersRow.localTextPrefix; };
            SupplierPayableReportGrid.prototype.getService = function () { return SmartERP.Suppliers.SuppliersService.baseUrl; };
            SupplierPayableReportGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                //request.Criteria = Serenity.Criteria.and(request.Criteria,
                //    [['InStock'], '>', 0])
                //    ;
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '<', 10] (which means string 'A' is less than 10
                return true;
            };
            SupplierPayableReportGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            SupplierPayableReportGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SupplierPayableReportGrid);
            return SupplierPayableReportGrid;
        }(Serenity.EntityGrid));
        Reports.SupplierPayableReportGrid = SupplierPayableReportGrid;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsDialog = /** @class */ (function (_super) {
            __extends(SaleDetailsDialog, _super);
            function SaleDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SaleDetailsForm(_this.idPrefix);
                return _this;
            }
            SaleDetailsDialog.prototype.getFormKey = function () { return Sales.SaleDetailsForm.formKey; };
            SaleDetailsDialog.prototype.getIdProperty = function () { return Sales.SaleDetailsRow.idProperty; };
            SaleDetailsDialog.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SaleDetailsDialog.prototype.getNameProperty = function () { return Sales.SaleDetailsRow.nameProperty; };
            SaleDetailsDialog.prototype.getService = function () { return Sales.SaleDetailsService.baseUrl; };
            SaleDetailsDialog.prototype.getDeletePermission = function () { return Sales.SaleDetailsRow.deletePermission; };
            SaleDetailsDialog.prototype.getInsertPermission = function () { return Sales.SaleDetailsRow.insertPermission; };
            SaleDetailsDialog.prototype.getUpdatePermission = function () { return Sales.SaleDetailsRow.updatePermission; };
            SaleDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleDetailsDialog);
            return SaleDetailsDialog;
        }(Serenity.EntityDialog));
        Sales.SaleDetailsDialog = SaleDetailsDialog;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsGrid = /** @class */ (function (_super) {
            __extends(SaleDetailsGrid, _super);
            function SaleDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            SaleDetailsGrid.prototype.getColumnsKey = function () { return 'Sales.SaleDetails'; };
            SaleDetailsGrid.prototype.getDialogType = function () { return Sales.SaleDetailsDialog; };
            SaleDetailsGrid.prototype.getIdProperty = function () { return Sales.SaleDetailsRow.idProperty; };
            SaleDetailsGrid.prototype.getInsertPermission = function () { return Sales.SaleDetailsRow.insertPermission; };
            SaleDetailsGrid.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SaleDetailsGrid.prototype.getService = function () { return Sales.SaleDetailsService.baseUrl; };
            SaleDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleDetailsGrid);
            return SaleDetailsGrid;
        }(Serenity.EntityGrid));
        Sales.SaleDetailsGrid = SaleDetailsGrid;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesDetailEditDialog = /** @class */ (function (_super) {
            __extends(SalesDetailEditDialog, _super);
            function SalesDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.SaleDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        _this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            SalesDetailEditDialog.prototype.getFormKey = function () { return Sales.SaleDetailsForm.formKey; };
            SalesDetailEditDialog.prototype.getNameProperty = function () { return Sales.SaleDetailsRow.nameProperty; };
            SalesDetailEditDialog.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SalesDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesDetailEditDialog);
            return SalesDetailEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Sales.SalesDetailEditDialog = SalesDetailEditDialog;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesDetailEditor = /** @class */ (function (_super) {
            __extends(SalesDetailEditor, _super);
            function SalesDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            SalesDetailEditor.prototype.getColumnsKey = function () { return "Sales.SaleDetails"; };
            SalesDetailEditor.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SalesDetailEditor.prototype.getDialogType = function () { return Sales.SalesDetailEditDialog; };
            SalesDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            SalesDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                    .itemById[row.UnitId].Name;
                return true;
            };
            SalesDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            SalesDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SalesDetailEditor);
            return SalesDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Sales.SalesDetailEditor = SalesDetailEditor;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesDialog = /** @class */ (function (_super) {
            __extends(SalesDialog, _super);
            function SalesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.SalesForm(_this.idPrefix);
                _this.form = new Sales.SalesForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                    // Q.notifySuccess(total.toString());
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                _this.form.Vat.change(function () {
                    _this.doCalculation();
                });
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                _this.form.PaidAmount.change(function () {
                    _this.doCalculation();
                });
                _this.form.NoTax.change(function () {
                    _this.doCalculation();
                });
                return _this;
            }
            SalesDialog.prototype.getFormKey = function () { return Sales.SalesForm.formKey; };
            SalesDialog.prototype.getIdProperty = function () { return Sales.SalesRow.idProperty; };
            SalesDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesRow.localTextPrefix; };
            SalesDialog.prototype.getNameProperty = function () { return Sales.SalesRow.nameProperty; };
            SalesDialog.prototype.getService = function () { return Sales.SalesService.baseUrl; };
            SalesDialog.prototype.getDeletePermission = function () { return Sales.SalesRow.deletePermission; };
            SalesDialog.prototype.getInsertPermission = function () { return Sales.SalesRow.insertPermission; };
            SalesDialog.prototype.getUpdatePermission = function () { return Sales.SalesRow.updatePermission; };
            //private updateExpiryDate() {
            //    var NoOfMonths = 1;
            //    var toBeDueDate = new Date(this.form.Date.value);
            //    this.form.ExpiryDate.value = new Date(new Date(this.form.Date.value).setMonth(toBeDueDate.getMonth() + NoOfMonths)).toDateString();
            //}
            SalesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                //this.updateExpiryDate();
            };
            SalesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            SalesDialog.prototype.doCalculation = function () {
                var total = 0;
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.Total || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _b = 0, _c = this.form.LineItems.getItems(); _b < _c.length; _b++) {
                    var k = _c[_b];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                //https://www.quora.com/What-is-the-formula-for-calculating-the-inclusive-tax-amount-from-a-given-amount
                var vat = 0;
                if (this.isNew) {
                    if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                        var Company = SmartERP.Administration.CompaniesRow.getLookup().items[0];
                        vat = Company.VatPercentage;
                        this.form.VatPercentage.value = vat;
                        this.form.VatType.value = Company.VatType.toString();
                    }
                }
                if (this.form.NoTax.value == false) {
                    this.form.VatPercentage.value = vat;
                }
                else {
                    this.form.VatPercentage.value = 0;
                }
                var vat = this.form.VatPercentage.value;
                if (this.form.VatType.value == SmartERP.VatKind.Exclusive.toString()) {
                    this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
                }
                else {
                    this.form.Vat.value = ((this.form.GrandTotal.value - this.form.Discount.value) * vat) / (100 + vat);
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
                }
                this.form.TotalTax.value = this.form.Vat.value;
                this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
                if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                    this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                    this.form.Due.value = 0;
                }
                else {
                    this.form.Change.value = 0;
                }
            };
            SalesDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                Q.confirm("Do you want to print this", function () {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Sales.SalesReport',
                        params: {
                            OrderID: response.EntityId
                        }
                    });
                });
            };
            SalesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SalesDialog);
            return SalesDialog;
        }(Serenity.EntityDialog));
        Sales.SalesDialog = SalesDialog;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesGrid = /** @class */ (function (_super) {
            __extends(SalesGrid, _super);
            function SalesGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesGrid.prototype.getColumnsKey = function () { return 'Sales.Sales'; };
            SalesGrid.prototype.getDialogType = function () { return Sales.SalesDialog; };
            SalesGrid.prototype.getIdProperty = function () { return Sales.SalesRow.idProperty; };
            SalesGrid.prototype.getInsertPermission = function () { return Sales.SalesRow.insertPermission; };
            SalesGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesRow.localTextPrefix; };
            SalesGrid.prototype.getService = function () { return Sales.SalesService.baseUrl; };
            SalesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Download Invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-invoice" title="View Invoice">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            SalesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Sales.SalesReport',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-invoice')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Sales.SalesReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            SalesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Sales.SalesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SalesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SalesGrid);
            return SalesGrid;
        }(Serenity.EntityGrid));
        Sales.SalesGrid = SalesGrid;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoiceDetailsDialog = /** @class */ (function (_super) {
            __extends(ServiceInvoiceDetailsDialog, _super);
            function ServiceInvoiceDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Services.ServiceInvoiceDetailsForm(_this.idPrefix);
                return _this;
            }
            ServiceInvoiceDetailsDialog.prototype.getFormKey = function () { return Services.ServiceInvoiceDetailsForm.formKey; };
            ServiceInvoiceDetailsDialog.prototype.getIdProperty = function () { return Services.ServiceInvoiceDetailsRow.idProperty; };
            ServiceInvoiceDetailsDialog.prototype.getLocalTextPrefix = function () { return Services.ServiceInvoiceDetailsRow.localTextPrefix; };
            ServiceInvoiceDetailsDialog.prototype.getNameProperty = function () { return Services.ServiceInvoiceDetailsRow.nameProperty; };
            ServiceInvoiceDetailsDialog.prototype.getService = function () { return Services.ServiceInvoiceDetailsService.baseUrl; };
            ServiceInvoiceDetailsDialog.prototype.getDeletePermission = function () { return Services.ServiceInvoiceDetailsRow.deletePermission; };
            ServiceInvoiceDetailsDialog.prototype.getInsertPermission = function () { return Services.ServiceInvoiceDetailsRow.insertPermission; };
            ServiceInvoiceDetailsDialog.prototype.getUpdatePermission = function () { return Services.ServiceInvoiceDetailsRow.updatePermission; };
            ServiceInvoiceDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceInvoiceDetailsDialog);
            return ServiceInvoiceDetailsDialog;
        }(Serenity.EntityDialog));
        Services.ServiceInvoiceDetailsDialog = ServiceInvoiceDetailsDialog;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoiceDetailsGrid = /** @class */ (function (_super) {
            __extends(ServiceInvoiceDetailsGrid, _super);
            function ServiceInvoiceDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiceInvoiceDetailsGrid.prototype.getColumnsKey = function () { return 'Services.ServiceInvoiceDetails'; };
            ServiceInvoiceDetailsGrid.prototype.getDialogType = function () { return Services.ServiceInvoiceDetailsDialog; };
            ServiceInvoiceDetailsGrid.prototype.getIdProperty = function () { return Services.ServiceInvoiceDetailsRow.idProperty; };
            ServiceInvoiceDetailsGrid.prototype.getInsertPermission = function () { return Services.ServiceInvoiceDetailsRow.insertPermission; };
            ServiceInvoiceDetailsGrid.prototype.getLocalTextPrefix = function () { return Services.ServiceInvoiceDetailsRow.localTextPrefix; };
            ServiceInvoiceDetailsGrid.prototype.getService = function () { return Services.ServiceInvoiceDetailsService.baseUrl; };
            ServiceInvoiceDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceInvoiceDetailsGrid);
            return ServiceInvoiceDetailsGrid;
        }(Serenity.EntityGrid));
        Services.ServiceInvoiceDetailsGrid = ServiceInvoiceDetailsGrid;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesDetailEditDialog = /** @class */ (function (_super) {
            __extends(ServiceInvoicesDetailEditDialog, _super);
            function ServiceInvoicesDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Services.ServiceInvoiceDetailsForm(_this.idPrefix);
                _this.form.ServiceId.changeSelect2(function (e) {
                    var serviceID = Q.toId(_this.form.ServiceId.value);
                    if (serviceID != null) {
                        _this.form.UnitPrice.value = SmartERP.Services.ServicesRow.getLookup().itemById[serviceID].Charge;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                    }
                });
                return _this;
            }
            ServiceInvoicesDetailEditDialog.prototype.getFormKey = function () { return Services.ServiceInvoiceDetailsForm.formKey; };
            ServiceInvoicesDetailEditDialog.prototype.getNameProperty = function () { return Services.ServiceInvoiceDetailsRow.nameProperty; };
            ServiceInvoicesDetailEditDialog.prototype.getLocalTextPrefix = function () { return Services.ServiceInvoiceDetailsRow.localTextPrefix; };
            ServiceInvoicesDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceInvoicesDetailEditDialog);
            return ServiceInvoicesDetailEditDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Services.ServiceInvoicesDetailEditDialog = ServiceInvoicesDetailEditDialog;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesDetailEditor = /** @class */ (function (_super) {
            __extends(ServiceInvoicesDetailEditor, _super);
            function ServiceInvoicesDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            ServiceInvoicesDetailEditor.prototype.getColumnsKey = function () { return "Services.ServiceInvoiceDetails"; };
            ServiceInvoicesDetailEditor.prototype.getLocalTextPrefix = function () { return Services.ServiceInvoiceDetailsRow.localTextPrefix; };
            ServiceInvoicesDetailEditor.prototype.getDialogType = function () { return Services.ServiceInvoicesDetailEditDialog; };
            ServiceInvoicesDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            ServiceInvoicesDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                // alert('test');
                //if (row.Quntity!>0) {
                //    return false;
                //}
                //if (row.UnitPrice! > 0) {
                //    return false;
                //}
                row.ServiceName = SmartERP.Services.ServicesRow.getLookup()
                    .itemById[row.ServiceId].ServiceName;
                row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                //row.PurchasePrice = SmartERP.Products.ProductsRow.getLookup()
                //    .itemById[row.ProductId].PurchasePrice;
                //console.log('product');
                //console.log(XInventory.Products.ProductsRow.getLookup()
                //    .itemById[row.ProductId]);
                return true;
            };
            ServiceInvoicesDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            ServiceInvoicesDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ServiceInvoicesDetailEditor);
            return ServiceInvoicesDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Services.ServiceInvoicesDetailEditor = ServiceInvoicesDetailEditor;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesDialog = /** @class */ (function (_super) {
            __extends(ServiceInvoicesDialog, _super);
            function ServiceInvoicesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Services.ServiceInvoicesForm(_this.idPrefix);
                _this.form = new Services.ServiceInvoicesForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                    // Q.notifySuccess(total.toString());
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                _this.form.Vat.change(function () {
                    _this.doCalculation();
                });
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                _this.form.PaidAmount.change(function () {
                    _this.doCalculation();
                });
                return _this;
            }
            ServiceInvoicesDialog.prototype.getFormKey = function () { return Services.ServiceInvoicesForm.formKey; };
            ServiceInvoicesDialog.prototype.getIdProperty = function () { return Services.ServiceInvoicesRow.idProperty; };
            ServiceInvoicesDialog.prototype.getLocalTextPrefix = function () { return Services.ServiceInvoicesRow.localTextPrefix; };
            ServiceInvoicesDialog.prototype.getNameProperty = function () { return Services.ServiceInvoicesRow.nameProperty; };
            ServiceInvoicesDialog.prototype.getService = function () { return Services.ServiceInvoicesService.baseUrl; };
            ServiceInvoicesDialog.prototype.getDeletePermission = function () { return Services.ServiceInvoicesRow.deletePermission; };
            ServiceInvoicesDialog.prototype.getInsertPermission = function () { return Services.ServiceInvoicesRow.insertPermission; };
            ServiceInvoicesDialog.prototype.getUpdatePermission = function () { return Services.ServiceInvoicesRow.updatePermission; };
            ServiceInvoicesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                //this.updateExpiryDate();
            };
            ServiceInvoicesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            ServiceInvoicesDialog.prototype.doCalculation = function () {
                var total = 0;
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.Total || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _b = 0, _c = this.form.LineItems.getItems(); _b < _c.length; _b++) {
                    var k = _c[_b];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                var vat = 0;
                var vatType = SmartERP.VatKind.Exclusive;
                if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                    var Company = SmartERP.Administration.CompaniesRow.getLookup().items[0];
                    vat = Company.VatPercentage;
                    vatType = Company.VatType;
                }
                if (vatType == SmartERP.VatKind.Exclusive) {
                    this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
                }
                else {
                    this.form.Vat.value = ((this.form.GrandTotal.value - this.form.Discount.value) * vat) / (100 + vat);
                    this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                    this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
                }
                this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
                if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                    this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                    this.form.Due.value = 0;
                }
                else {
                    this.form.Change.value = 0;
                }
            };
            ServiceInvoicesDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                Q.confirm("Do you want to print this", function () {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'Services.ServiceReport',
                        params: {
                            OrderID: response.EntityId
                        }
                    });
                });
            };
            ServiceInvoicesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ServiceInvoicesDialog);
            return ServiceInvoicesDialog;
        }(Serenity.EntityDialog));
        Services.ServiceInvoicesDialog = ServiceInvoicesDialog;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServiceInvoicesGrid = /** @class */ (function (_super) {
            __extends(ServiceInvoicesGrid, _super);
            function ServiceInvoicesGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiceInvoicesGrid.prototype.getColumnsKey = function () { return 'Services.ServiceInvoices'; };
            ServiceInvoicesGrid.prototype.getDialogType = function () { return Services.ServiceInvoicesDialog; };
            ServiceInvoicesGrid.prototype.getIdProperty = function () { return Services.ServiceInvoicesRow.idProperty; };
            ServiceInvoicesGrid.prototype.getInsertPermission = function () { return Services.ServiceInvoicesRow.insertPermission; };
            ServiceInvoicesGrid.prototype.getLocalTextPrefix = function () { return Services.ServiceInvoicesRow.localTextPrefix; };
            ServiceInvoicesGrid.prototype.getService = function () { return Services.ServiceInvoicesService.baseUrl; };
            ServiceInvoicesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Download Invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-invoice" title="View Invoice">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            ServiceInvoicesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Services.ServiceReport',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-invoice')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'Services.ServiceReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            ServiceInvoicesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Services.ServiceInvoicesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ServiceInvoicesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ServiceInvoicesGrid);
            return ServiceInvoicesGrid;
        }(Serenity.EntityGrid));
        Services.ServiceInvoicesGrid = ServiceInvoicesGrid;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServicesDialog = /** @class */ (function (_super) {
            __extends(ServicesDialog, _super);
            function ServicesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Services.ServicesForm(_this.idPrefix);
                return _this;
            }
            ServicesDialog.prototype.getFormKey = function () { return Services.ServicesForm.formKey; };
            ServicesDialog.prototype.getIdProperty = function () { return Services.ServicesRow.idProperty; };
            ServicesDialog.prototype.getLocalTextPrefix = function () { return Services.ServicesRow.localTextPrefix; };
            ServicesDialog.prototype.getNameProperty = function () { return Services.ServicesRow.nameProperty; };
            ServicesDialog.prototype.getService = function () { return Services.ServicesService.baseUrl; };
            ServicesDialog.prototype.getDeletePermission = function () { return Services.ServicesRow.deletePermission; };
            ServicesDialog.prototype.getInsertPermission = function () { return Services.ServicesRow.insertPermission; };
            ServicesDialog.prototype.getUpdatePermission = function () { return Services.ServicesRow.updatePermission; };
            ServicesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServicesDialog);
            return ServicesDialog;
        }(Serenity.EntityDialog));
        Services.ServicesDialog = ServicesDialog;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Services;
    (function (Services) {
        var ServicesGrid = /** @class */ (function (_super) {
            __extends(ServicesGrid, _super);
            function ServicesGrid(container) {
                return _super.call(this, container) || this;
            }
            ServicesGrid.prototype.getColumnsKey = function () { return 'Services.Services'; };
            ServicesGrid.prototype.getDialogType = function () { return Services.ServicesDialog; };
            ServicesGrid.prototype.getIdProperty = function () { return Services.ServicesRow.idProperty; };
            ServicesGrid.prototype.getInsertPermission = function () { return Services.ServicesRow.insertPermission; };
            ServicesGrid.prototype.getLocalTextPrefix = function () { return Services.ServicesRow.localTextPrefix; };
            ServicesGrid.prototype.getService = function () { return Services.ServicesService.baseUrl; };
            ServicesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServicesGrid);
            return ServicesGrid;
        }(Serenity.EntityGrid));
        Services.ServicesGrid = ServicesGrid;
    })(Services = SmartERP.Services || (SmartERP.Services = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersDialog = /** @class */ (function (_super) {
            __extends(SuppliersDialog, _super);
            function SuppliersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Suppliers.SuppliersForm(_this.idPrefix);
                return _this;
            }
            SuppliersDialog.prototype.getFormKey = function () { return Suppliers.SuppliersForm.formKey; };
            SuppliersDialog.prototype.getIdProperty = function () { return Suppliers.SuppliersRow.idProperty; };
            SuppliersDialog.prototype.getLocalTextPrefix = function () { return Suppliers.SuppliersRow.localTextPrefix; };
            SuppliersDialog.prototype.getNameProperty = function () { return Suppliers.SuppliersRow.nameProperty; };
            SuppliersDialog.prototype.getService = function () { return Suppliers.SuppliersService.baseUrl; };
            SuppliersDialog.prototype.getDeletePermission = function () { return Suppliers.SuppliersRow.deletePermission; };
            SuppliersDialog.prototype.getInsertPermission = function () { return Suppliers.SuppliersRow.insertPermission; };
            SuppliersDialog.prototype.getUpdatePermission = function () { return Suppliers.SuppliersRow.updatePermission; };
            SuppliersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SuppliersDialog);
            return SuppliersDialog;
        }(Serenity.EntityDialog));
        Suppliers.SuppliersDialog = SuppliersDialog;
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersGrid = /** @class */ (function (_super) {
            __extends(SuppliersGrid, _super);
            function SuppliersGrid(container) {
                return _super.call(this, container) || this;
            }
            SuppliersGrid.prototype.getColumnsKey = function () { return 'Suppliers.Suppliers'; };
            SuppliersGrid.prototype.getDialogType = function () { return Suppliers.SuppliersDialog; };
            SuppliersGrid.prototype.getIsActiveProperty = function () { return Suppliers.SuppliersRow.isActiveProperty; };
            SuppliersGrid.prototype.getIdProperty = function () { return Suppliers.SuppliersRow.idProperty; };
            SuppliersGrid.prototype.getInsertPermission = function () { return Suppliers.SuppliersRow.insertPermission; };
            SuppliersGrid.prototype.getLocalTextPrefix = function () { return Suppliers.SuppliersRow.localTextPrefix; };
            SuppliersGrid.prototype.getService = function () { return Suppliers.SuppliersService.baseUrl; };
            SuppliersGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SuppliersGrid);
            return SuppliersGrid;
        }(Serenity.EntityGrid));
        Suppliers.SuppliersGrid = SuppliersGrid;
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));