﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SmartERP.Payroll.PayrollRow;

namespace SmartERP.Payroll
{
    public interface IPayrollDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PayrollDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPayrollDeleteHandler
    {
        public PayrollDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}