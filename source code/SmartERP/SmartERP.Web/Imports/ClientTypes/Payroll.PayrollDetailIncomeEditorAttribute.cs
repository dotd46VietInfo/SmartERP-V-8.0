﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Payroll
{
    public partial class PayrollDetailIncomeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Payroll.PayrollDetailIncomeEditor";

        public PayrollDetailIncomeEditorAttribute()
            : base(Key)
        {
        }
    }
}
