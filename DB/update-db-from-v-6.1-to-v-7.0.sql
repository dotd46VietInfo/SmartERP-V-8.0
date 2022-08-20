
GO
/****** Object:  Table [dbo].[Deduction]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Deduction](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](1000) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK_Deduction] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeBankAccounts]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeBankAccounts](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Employee] [bigint] NOT NULL,
	[AccountTitle] [nvarchar](250) NOT NULL,
	[AccountNumber] [nvarchar](250) NOT NULL,
	[BankName] [bigint] NOT NULL,
	[BankCode] [nvarchar](250) NOT NULL,
	[BankBranch] [nvarchar](250) NULL,
	[InsertUserId] [int] NULL,
	[InsertDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_EmployeeBankAccounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeDeduction]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeDeduction](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NOT NULL,
	[DeductionId] [bigint] NOT NULL,
	[Description] [nvarchar](1000) NULL,
	[Amount] [float] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK_EmployeeDeduction] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeIncome]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeIncome](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NOT NULL,
	[IncomeId] [bigint] NOT NULL,
	[Description] [nvarchar](1000) NULL,
	[Amount] [float] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK_EmployeeIncome] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Income]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Income](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](1000) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK_Income] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payees]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payees](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Payee] [nvarchar](250) NOT NULL,
	[ContactNumber] [nvarchar](250) NULL,
	[InsertUserId] [int] NULL,
	[InsertDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Payees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payers]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payers](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Payer] [nvarchar](250) NOT NULL,
	[ContactNumber] [nvarchar](250) NULL,
	[InsertUserId] [int] NULL,
	[InsertDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Payers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payroll]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payroll](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Number] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](1000) NULL,
	[PaymentDate] [datetime] NOT NULL,
	[CashBankId] [bigint] NOT NULL,
	[TotalBasicSalary] [float] NOT NULL,
	[TotalIncome] [float] NOT NULL,
	[TotalDeduction] [float] NOT NULL,
	[TotalTakeHomePay] [float] NOT NULL,
	[TotalPaymentAmount] [float] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
	[CurrencyName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Payroll] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PayrollDetail]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PayrollDetail](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[PayrollId] [bigint] NOT NULL,
	[EmployeeId] [bigint] NOT NULL,
	[BankAccount] [nvarchar](200) NOT NULL,
	[BankName] [nvarchar](200) NOT NULL,
	[BasicSalary] [float] NOT NULL,
	[TotalIncome] [float] NOT NULL,
	[TotalDeduction] [float] NOT NULL,
	[TakeHomePay] [float] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK_PayrollDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PayrollDetailDeduction]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PayrollDetailDeduction](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[PayrollDetailId] [bigint] NOT NULL,
	[DeductionId] [bigint] NOT NULL,
	[ShortNote] [nvarchar](100) NULL,
	[Amount] [float] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK_PayrollDetailDeduction] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PayrollDetailIncome]    Script Date: 7/7/2022 6:26:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PayrollDetailIncome](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[PayrollDetailId] [bigint] NOT NULL,
	[IncomeId] [bigint] NOT NULL,
	[ShortNote] [nvarchar](100) NULL,
	[Amount] [float] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK_PayrollDetailIncome] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Deduction] ADD  CONSTRAINT [DF_Deduction_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeBankAccounts] ADD  CONSTRAINT [DF_EmployeeBankAccounts_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeDeduction] ADD  CONSTRAINT [DF_EmployeeDeduction_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeIncome] ADD  CONSTRAINT [DF_EmployeeIncome_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Income] ADD  CONSTRAINT [DF_Income_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Payees] ADD  CONSTRAINT [DF_Payees_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Payers] ADD  CONSTRAINT [DF_Payers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Payroll] ADD  CONSTRAINT [DF_Payroll_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[PayrollDetail] ADD  CONSTRAINT [DF_PayrollDetail_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[PayrollDetailDeduction] ADD  CONSTRAINT [DF_PayrollDetailDeduction_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[PayrollDetailIncome] ADD  CONSTRAINT [DF_PayrollDetailIncome_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeBankAccounts]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeBankAccounts_Banks] FOREIGN KEY([BankName])
REFERENCES [dbo].[Banks] ([Id])
GO
ALTER TABLE [dbo].[EmployeeBankAccounts] CHECK CONSTRAINT [FK_EmployeeBankAccounts_Banks]
GO
ALTER TABLE [dbo].[EmployeeBankAccounts]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeBankAccounts_Employees] FOREIGN KEY([Employee])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[EmployeeBankAccounts] CHECK CONSTRAINT [FK_EmployeeBankAccounts_Employees]
GO



/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
ALTER TABLE dbo.Employees ADD
      BasicSalary float(53) NOT NULL CONSTRAINT DF_Employees_BasicSalary DEFAULT 0,
	PayrollBankId bigint NULL,
	BankAccountForPayroll nvarchar(250) NULL
GO
ALTER TABLE dbo.Employees SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
