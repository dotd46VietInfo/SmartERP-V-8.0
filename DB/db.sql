USE [SmartERP_Default_v1]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounts](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[HeadCode] [bigint] NOT NULL,
	[HeadName] [nvarchar](100) NOT NULL,
	[ParentHead] [bigint] NULL,
	[PHeadName] [nvarchar](100) NULL,
	[HeadLevel] [int] NOT NULL,
	[HeadType] [nvarchar](1) NOT NULL,
	[IsTransaction] [bit] NOT NULL,
	[IsGL] [bit] NOT NULL,
	[IsBudget] [bit] NOT NULL,
	[IsDepreciation] [bit] NOT NULL,
	[CustomerId] [bigint] NULL,
	[SupplierId] [bigint] NULL,
	[DepreciationRate] [float] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[EmployeeId] [bigint] NULL,
	[ExpenseTypeId] [bigint] NULL,
	[BankId] [bigint] NULL,
 CONSTRAINT [PK_Accounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaDecisions]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AgendaDecisions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](4000) NOT NULL,
	[DueDate] [datetime] NULL,
	[AssignedTo] [bigint] NULL,
	[DecisionNumber] [int] NULL,
	[RelatedAgendaItem] [bigint] NULL,
	[ResolutionStatus] [bigint] NOT NULL,
	[Images] [nvarchar](4000) NULL,
	[Attachments] [nvarchar](4000) NULL,
	[Meeting] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AgendaDecisions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaItems]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AgendaItems](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ItemType] [bigint] NOT NULL,
	[RequestedBy] [bigint] NULL,
	[SequenceNo] [int] NOT NULL,
	[Images] [nvarchar](4000) NULL,
	[Attachments] [nvarchar](4000) NULL,
	[Meeting] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AgendaItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaItemTypes]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AgendaItemTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AgendaItemTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Attendance]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Attendance](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NOT NULL,
	[CheckIn] [datetime] NULL,
	[CheckOut] [datetime] NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Attendance] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AttendanceStatuses]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AttendanceStatuses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AttendanceStatuses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AttendeeTypes]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AttendeeTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AttendeeTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Banks]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Banks](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[BankName] [nvarchar](250) NOT NULL,
	[ACName] [nvarchar](250) NOT NULL,
	[ACNumber] [nvarchar](250) NOT NULL,
	[Branch] [nvarchar](250) NOT NULL,
	[SignaturePicture] [nvarchar](250) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Banks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brands]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brands](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Brands] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ParentCategoryId] [bigint] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cities]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cities](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NOT NULL,
	[StateId] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Cities] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Companies]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Companies](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](250) NOT NULL,
	[CompanyEmail] [nvarchar](250) NULL,
	[Address] [nvarchar](500) NULL,
	[Phone] [nvarchar](250) NULL,
	[CurrencyId] [bigint] NULL,
	[VatPercentage] [float] NOT NULL,
	[Logo] [nvarchar](250) NULL,
	[SaleLogo] [nvarchar](250) NULL,
	[Favicon] [nvarchar](250) NULL,
	[CurrencyPosition] [int] NOT NULL,
	[FooterText] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[VatType] [int] NOT NULL,
	[Vat] [nvarchar](50) NULL,
	[ShowVatOnPDF] [bit] NOT NULL,
	[ShowVatOnPurchase] [bit] NOT NULL,
	[AllowNegetiveInventory] [bit] NOT NULL,
 CONSTRAINT [PK_Companies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Countries]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Countries](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Countries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Currencies]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Currencies](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CurrencyName] [nvarchar](250) NOT NULL,
	[CurrencySymbol] [nvarchar](50) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Currencies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerGroups]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerGroups](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_CustomerGroups] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[ContactName] [nvarchar](250) NULL,
	[ContactTitle] [nvarchar](250) NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[Address] [nvarchar](500) NULL,
	[RegionId] [bigint] NULL,
	[PostalCode] [nvarchar](250) NULL,
	[Phone] [nvarchar](250) NULL,
	[Fax] [nvarchar](250) NULL,
	[Website] [nvarchar](250) NULL,
	[Email] [nvarchar](250) NULL,
	[EmailAddress] [nvarchar](250) NULL,
	[PreviousCreditBalance] [float] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[CustomerGroupId] [bigint] NULL,
	[CNIC] [nvarchar](50) NULL,
	[NTN] [nvarchar](50) NULL,
	[STRN] [nvarchar](50) NULL,
	[SalesMan] [bigint] NULL,
	[Vat] [nvarchar](50) NULL,
	[OrderBooker] [bigint] NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DailyClosing]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DailyClosing](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[LastDayClosing] [float] NOT NULL,
	[CashIn] [float] NOT NULL,
	[CashOut] [float] NOT NULL,
	[Date] [date] NOT NULL,
	[Amount] [float] NOT NULL,
	[Adjustment] [float] NOT NULL,
	[Status] [int] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
 CONSTRAINT [PK_DailyClosing] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DamagedProducts]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DamagedProducts](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](250) NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CategoryId] [bigint] NOT NULL,
	[PurchasePrice] [float] NOT NULL,
	[Quantity] [float] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Note] [nvarchar](4000) NULL,
	[ProductId] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[VNo] [bigint] NULL,
 CONSTRAINT [PK_DamagedProducts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Deduction]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Departments]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Department] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ParentDepartmentId] [bigint] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Departments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Designations]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Designations](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Designation] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ParentDesignationId] [bigint] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Designations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeBankAccounts]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeDeduction]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeeIncome]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NOT NULL,
	[LastName] [nvarchar](100) NOT NULL,
	[DesignationId] [bigint] NOT NULL,
	[DepartmentId] [bigint] NOT NULL,
	[RateType] [int] NOT NULL,
	[Phone] [nvarchar](250) NOT NULL,
	[HoureRateSalary] [float] NOT NULL,
	[Email] [nvarchar](250) NULL,
	[BloodGroup] [int] NULL,
	[Picture] [nvarchar](250) NULL,
	[CountryId] [bigint] NOT NULL,
	[StateId] [bigint] NOT NULL,
	[CityId] [bigint] NOT NULL,
	[ZipCode] [nvarchar](50) NULL,
	[Address] [nvarchar](4000) NOT NULL,
	[UserId] [int] NULL,
	[RegionId] [bigint] NULL,
	[TerritoryId] [bigint] NULL,
	[CNIC] [nvarchar](250) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[BasicSalary] [float] NOT NULL,
	[PayrollBankId] [bigint] NULL,
	[BankAccountForPayroll] [nvarchar](250) NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Exceptions]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Exceptions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GUID] [uniqueidentifier] NOT NULL,
	[ApplicationName] [nvarchar](50) NOT NULL,
	[MachineName] [nvarchar](50) NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[Type] [nvarchar](100) NOT NULL,
	[IsProtected] [bit] NOT NULL,
	[Host] [nvarchar](100) NULL,
	[Url] [nvarchar](500) NULL,
	[HTTPMethod] [nvarchar](10) NULL,
	[IPAddress] [nvarchar](40) NULL,
	[Source] [nvarchar](100) NULL,
	[Message] [nvarchar](1000) NULL,
	[Detail] [nvarchar](max) NULL,
	[StatusCode] [int] NULL,
	[SQL] [nvarchar](max) NULL,
	[DeletionDate] [datetime] NULL,
	[FullJson] [nvarchar](max) NULL,
	[ErrorHash] [int] NULL,
	[DuplicateCount] [int] NOT NULL,
 CONSTRAINT [PK_Exceptions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Expenses]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Expenses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ExpenseTypeId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Amount] [float] NOT NULL,
	[PaymentAccount] [bigint] NOT NULL,
	[VNo] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Expenses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExpenseTypes]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_ExpenseTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsIssue]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsIssue](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[SaleId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[TotalQuantity] [float] NOT NULL,
	[EmployeenId] [bigint] NULL,
	[Remarks] [nvarchar](4000) NULL,
	[JournalRemarks] [nvarchar](4000) NULL,
	[Reference] [nvarchar](250) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_GoodsIssue] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsIssueDetails]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsIssueDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GoodsIssueId] [bigint] NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[Quantity] [float] NOT NULL,
	[WarehouseId] [bigint] NOT NULL,
	[WarehouseName] [nvarchar](250) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_GoodsIssueDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsReceipt]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsReceipt](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SupplierId] [bigint] NOT NULL,
	[PurchaseId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[TotalQuantity] [float] NOT NULL,
	[EmployeenId] [bigint] NULL,
	[Remarks] [nvarchar](4000) NULL,
	[JournalRemarks] [nvarchar](4000) NULL,
	[Reference] [nvarchar](250) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_GoodsReceipt] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsReceiptDetails]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsReceiptDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GoodsReceiptId] [bigint] NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[Quantity] [float] NOT NULL,
	[WarehouseId] [bigint] NOT NULL,
	[WarehouseName] [nvarchar](250) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_GoodsReceiptDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Income]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Languages]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [nvarchar](10) NOT NULL,
	[LanguageName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Locations]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Locations](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[Address] [nvarchar](1000) NULL,
	[Latitude] [nvarchar](250) NULL,
	[Longitude] [nvarchar](250) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Locations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MeetingAttendees]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MeetingAttendees](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AttendeeType] [bigint] NOT NULL,
	[AttendanceStatus] [bigint] NOT NULL,
	[Attendee] [bigint] NOT NULL,
	[Meeting] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_MeetingAttendees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Meetings]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Meetings](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[MeetingName] [nvarchar](250) NOT NULL,
	[MeetingType] [bigint] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[Department] [bigint] NULL,
	[Location] [bigint] NOT NULL,
	[OrganizedBy] [bigint] NULL,
	[Reporter] [bigint] NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Meetings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MeetingTypes]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MeetingTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_MeetingTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payees]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payers]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payroll]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PayrollDetail]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PayrollDetailDeduction]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PayrollDetailIncome]    Script Date: 7/7/2022 8:29:19 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [nvarchar](250) NULL,
	[SN] [nvarchar](250) NULL,
	[ProductName] [nvarchar](250) NULL,
	[Model] [nvarchar](250) NULL,
	[UnitPrice] [float] NOT NULL,
	[UnitsInStock] [float] NOT NULL,
	[UnitsOnOrder] [float] NOT NULL,
	[ReorderLevel] [float] NOT NULL,
	[CategoryId] [bigint] NOT NULL,
	[UnitId] [bigint] NOT NULL,
	[BrandId] [bigint] NULL,
	[Image] [nvarchar](250) NULL,
	[ProductDetails] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PurchaseDetails]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[UnitId] [bigint] NOT NULL,
	[UnitName] [nvarchar](250) NULL,
	[Quantity] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[PurchaseId] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_PurchaseDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Purchases]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Purchases](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SupplierId] [bigint] NOT NULL,
	[InvoiceNo] [nvarchar](250) NULL,
	[Date] [datetime] NOT NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[PaidAmount] [float] NOT NULL,
	[Due] [float] NOT NULL,
	[Change] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[PaymentAccount] [bigint] NULL,
	[EmployeeId] [bigint] NULL,
	[VNo] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[RowVersion] [timestamp] NOT NULL,
	[Vat] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[VatPercentage] [float] NOT NULL,
	[NoTax] [bit] NOT NULL,
	[VatType] [int] NOT NULL,
 CONSTRAINT [PK_Purchases] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuotationDetails]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuotationDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[UnitId] [bigint] NOT NULL,
	[UnitName] [nvarchar](250) NULL,
	[Quantity] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[QuotationId] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_QuotationDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Quotations]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Quotations](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[Vat] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[ExpiryDate] [datetime] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[RowVersion] [timestamp] NOT NULL,
	[VatPercentage] [float] NOT NULL,
	[NoTax] [bit] NOT NULL,
	[VatType] [int] NOT NULL,
 CONSTRAINT [PK_Quotations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Regions]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Regions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Regions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ResolutionStatuses]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResolutionStatuses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_ResolutionStatuses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolePermissions]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermissions](
	[RolePermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED 
(
	[RolePermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SaleDetails]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SaleDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[UnitId] [bigint] NOT NULL,
	[UnitName] [nvarchar](250) NULL,
	[Quantity] [float] NOT NULL,
	[PurchasePrice] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[SaleId] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_SaleDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sales]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sales](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[Vat] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[PaidAmount] [float] NOT NULL,
	[Due] [float] NOT NULL,
	[Change] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[PaymentAccount] [bigint] NULL,
	[VNo] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[RowVersion] [timestamp] NOT NULL,
	[VatPercentage] [float] NOT NULL,
	[NoTax] [bit] NOT NULL,
	[VatType] [int] NOT NULL,
 CONSTRAINT [PK_Sales] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiceInvoiceDetails]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceInvoiceDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ServiceId] [bigint] NOT NULL,
	[ServiceName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[Quantity] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[ServiceInvoiceId] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_ServiceInvoiceDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiceInvoices]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceInvoices](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[UserId] [int] NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[Vat] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[PaidAmount] [float] NOT NULL,
	[Due] [float] NOT NULL,
	[Change] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[PaymentAccount] [bigint] NULL,
	[EmployeeId] [bigint] NULL,
	[VNo] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_ServiceInvoices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Services]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Services](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ServiceName] [nvarchar](250) NOT NULL,
	[Charge] [float] NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[Tax] [float] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Services] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shippers]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shippers](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](250) NOT NULL,
	[Phone] [nvarchar](250) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Shippers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[States]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[States](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_States] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stocks]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stocks](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[Quantity] [float] NOT NULL,
	[VNo] [bigint] NOT NULL,
	[WarehouseId] [bigint] NULL,
	[Mode] [nvarchar](10) NOT NULL,
	[TransactionType] [nvarchar](50) NOT NULL,
	[Status] [int] NOT NULL,
	[Note] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Stocks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SupplierGroups]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SupplierGroups](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_SupplierGroups] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Suppliers]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Suppliers](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[ContactName] [nvarchar](250) NULL,
	[ContactTitle] [nvarchar](250) NULL,
	[Address] [nvarchar](500) NULL,
	[RegionId] [bigint] NULL,
	[PostalCode] [nvarchar](250) NULL,
	[Phone] [nvarchar](250) NULL,
	[Fax] [nvarchar](250) NULL,
	[Website] [nvarchar](250) NULL,
	[Email] [nvarchar](250) NULL,
	[EmailAddress] [nvarchar](250) NULL,
	[PreviousCreditBalance] [float] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[SupplierGroupId] [bigint] NULL,
	[CNIC] [nvarchar](50) NULL,
	[NTN] [nvarchar](50) NULL,
	[STRN] [nvarchar](50) NULL,
	[OrderBooker] [bigint] NULL,
	[Vat] [nvarchar](50) NULL,
 CONSTRAINT [PK_Suppliers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Territories]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Territories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[TerritoryDescription] [nvarchar](250) NOT NULL,
	[RegionId] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Territories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transactions]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transactions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[VNo] [nvarchar](50) NOT NULL,
	[Vtype] [nvarchar](50) NOT NULL,
	[VDate] [datetime] NOT NULL,
	[COAId] [bigint] NOT NULL,
	[COA] [nvarchar](50) NOT NULL,
	[Narration] [text] NOT NULL,
	[Debit] [float] NOT NULL,
	[Credit] [float] NOT NULL,
	[IsPosted] [bit] NOT NULL,
	[IsAppove] [bit] NOT NULL,
	[IsOpening] [bit] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Transactions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Units]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Units](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Units] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPermissions]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPermissions](
	[UserPermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
	[Granted] [bit] NOT NULL,
 CONSTRAINT [PK_UserPermissions] PRIMARY KEY CLUSTERED 
(
	[UserPermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPreferences]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPreferences](
	[UserPreferenceId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[PreferenceType] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserPreferences] PRIMARY KEY CLUSTERED 
(
	[UserPreferenceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[DisplayName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NULL,
	[Source] [nvarchar](4) NOT NULL,
	[PasswordHash] [nvarchar](86) NOT NULL,
	[PasswordSalt] [nvarchar](10) NOT NULL,
	[LastDirectoryUpdate] [datetime] NULL,
	[UserImage] [nvarchar](100) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VersionInfo]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VersionInfo](
	[Version] [bigint] NOT NULL,
	[AppliedOn] [datetime] NULL,
	[Description] [nvarchar](1024) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Warehouses]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Warehouses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[Phone] [nvarchar](250) NULL,
	[Address] [nvarchar](500) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Warehouses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Accounts] ON 
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (1, 1, N'Assets', NULL, N'COA', 1, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:07.297' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (2, 2, N'Equity', NULL, N'COA', 1, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:22.427' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (3, 3, N'Income', NULL, N'COA', 1, N'I', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:31.683' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (4, 4, N'Expence', NULL, N'COA', 1, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:40.143' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (5, 5, N'Liabilities', NULL, N'COA', 1, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:54.223' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (6, 101, N'Non Current Assets', 1, N'Assets', 2, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:27:22.113' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (7, 102, N'Current Asset', 1, N'Assets', 2, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:28:05.907' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (8, 10101, N'Inventory', 6, N'Non Current Assets', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:31:37.187' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (9, 10102, N'Service Receive', 6, N'Non Current Assets', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:32:06.007' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (10, 10201, N'Cash & Cash Equivalent', 7, N'Current Asset', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:32:54.037' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (11, 10202, N'Account Receivable', 7, N'Current Asset', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:33:34.010' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (12, 1020201, N'Customer Receivable', 11, N'Account Receivable', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:34:27.590' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (13, 1020202, N'Loan Receivable', 11, N'Account Receivable', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:34:49.920' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (14, 1020203, N'Cash In Hand', 10, N'Cash & Cash Equivalent', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:35:17.623' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (15, 1020204, N'Cash At Bank', 10, N'Cash & Cash Equivalent', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:35:40.100' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (16, 301, N'Product Sale', 3, N'Income', 2, N'I', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:36:23.947' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (17, 302, N'Service Income', 3, N'Income', 2, N'I', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:36:37.280' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (18, 401, N'Default expense', 4, N'Expence', 2, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:37:40.657' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (19, 402, N'Product Purchase', 4, N'Expence', 2, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:37:52.893' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (20, 403, N'Employee Salary', 4, N'Expence', 2, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:38:05.280' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (21, 501, N'Non Current Liabilities', 5, N'Liabilities', 2, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:38:31.247' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (22, 502, N'Current Liabilities', 5, N'Liabilities', 2, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:38:46.100' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (23, 50201, N'Account Payable', 22, N'Current Liabilities', 3, N'L', 0, 1, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:39:02.270' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (24, 50202, N'Tax', 22, N'Current Liabilities', 3, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:39:22.153' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (25, 50203, N'Employee Ledger', 22, N'Current Liabilities', 3, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:39:51.353' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (26, 102020000001, N'1 - Walking Customer', 11, N'Account Receivable', 4, N'A', 1, 0, 0, 0, 1, NULL, 0, CAST(N'2020-12-03T20:22:53.077' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO
SET IDENTITY_INSERT [dbo].[AttendanceStatuses] ON 
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (1, N'Not Set', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (2, N'Attended', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (3, N'Absent', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (4, N'Absent with Permission', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[AttendanceStatuses] OFF
GO
SET IDENTITY_INSERT [dbo].[AttendeeTypes] ON 
GO
INSERT [dbo].[AttendeeTypes] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (1, N'Attendee', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendeeTypes] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (2, N'Guest', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[AttendeeTypes] OFF
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 
GO
INSERT [dbo].[Customers] ([Id], [Name], [ContactName], [ContactTitle], [CountryId], [StateId], [CityId], [Address], [RegionId], [PostalCode], [Phone], [Fax], [Website], [Email], [EmailAddress], [PreviousCreditBalance], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [CustomerGroupId], [CNIC], [NTN], [STRN], [SalesMan], [Vat], [OrderBooker]) VALUES (1, N'Walking Customer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, CAST(N'2020-10-17T16:13:29.123' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Languages] ON 
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (1, N'en', N'English')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (2, N'ru', N'Russian')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (3, N'es', N'Spanish')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (4, N'tr', N'Turkish')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (5, N'de', N'German')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (6, N'zh-CN', N'Chinese (Simplified)')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (7, N'it', N'Italian')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (8, N'pt', N'Portuguese')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (9, N'pt-BR', N'Portuguese (Brazil)')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (10, N'fa', N'Farsi')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (11, N'vi-VN', N'Vietnamese (Vietnam)')
GO
SET IDENTITY_INSERT [dbo].[Languages] OFF
GO
SET IDENTITY_INSERT [dbo].[ResolutionStatuses] ON 
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (1, N'Unknown', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (2, N'In Progress', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (3, N'Overdue', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (4, N'Postponed', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (5, N'Unresolved', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (6, N'Resolved', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[ResolutionStatuses] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([UserId], [Username], [DisplayName], [Email], [Source], [PasswordHash], [PasswordSalt], [LastDirectoryUpdate], [UserImage], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive]) VALUES (1, N'admin', N'admin', N'admin@dummy.com', N'site', N'DGIVMpMHCq+bNUo2abZiuYw1A5jZh6zAuIdfFWE5+vAwmXIMVvTUIVMgsogdTZ7+UbYEQY4K7PF6mvMsCIeJ/w', N'vcpzy', NULL, NULL, CAST(N'2014-01-01T00:00:00.000' AS DateTime), 1, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20141103140000, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20141103_140000_Initial')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20141111113000, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20141111_113000_Permissions')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20160515072600, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20160515_072600_UserPreferences')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20161029130000, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20161029_130000_ExceptionLog')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20201115140000, CAST(N'2020-12-03T15:22:53.000' AS DateTime), N'DefaultDB_20201115_140000_InitialDBScript')
GO
/****** Object:  Index [UC_Accounts_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [UC_Accounts_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_AgendaDecisions_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[AgendaDecisions] ADD  CONSTRAINT [UC_AgendaDecisions_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_AgendaItems_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[AgendaItems] ADD  CONSTRAINT [UC_AgendaItems_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_AgendaItemTypes_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[AgendaItemTypes] ADD  CONSTRAINT [UC_AgendaItemTypes_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Attendance_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Attendance] ADD  CONSTRAINT [UC_Attendance_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_AttendanceStatuses_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[AttendanceStatuses] ADD  CONSTRAINT [UC_AttendanceStatuses_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_AttendeeTypes_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[AttendeeTypes] ADD  CONSTRAINT [UC_AttendeeTypes_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Banks_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Banks] ADD  CONSTRAINT [UC_Banks_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UC_Products_Barcode]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [UC_Products_Barcode] UNIQUE NONCLUSTERED 
(
	[Barcode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Products_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [UC_Products_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UC_Products_ProductName]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [UC_Products_ProductName] UNIQUE NONCLUSTERED 
(
	[ProductName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UC_Products_SerialNo]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [UC_Products_SerialNo] UNIQUE NONCLUSTERED 
(
	[SN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_PurchaseDetails_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[PurchaseDetails] ADD  CONSTRAINT [UC_PurchaseDetails_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Purchases_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [UC_Purchases_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_QuotationDetails_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[QuotationDetails] ADD  CONSTRAINT [UC_QuotationDetails_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Quotations_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [UC_Quotations_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_SaleDetails_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[SaleDetails] ADD  CONSTRAINT [UC_SaleDetails_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_SalesId]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [UC_SalesId] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_ServiceInvoiceDetails_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[ServiceInvoiceDetails] ADD  CONSTRAINT [UC_ServiceInvoiceDetails_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_ServiceInvoices_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [UC_ServiceInvoices_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Services_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Services] ADD  CONSTRAINT [UC_Services_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Shippers_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Shippers] ADD  CONSTRAINT [UC_Shippers_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_States_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[States] ADD  CONSTRAINT [UC_States_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Stocks_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [UC_Stocks_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_SupplierGroups_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[SupplierGroups] ADD  CONSTRAINT [UC_SupplierGroups_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Suppliers_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Suppliers] ADD  CONSTRAINT [UC_Suppliers_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Territories_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Territories] ADD  CONSTRAINT [UC_Territories_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Transactions_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [UC_Transactions_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Units_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Units] ADD  CONSTRAINT [UC_Units_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UC_Warehouses_Id]    Script Date: 7/7/2022 8:29:19 PM ******/
ALTER TABLE [dbo].[Warehouses] ADD  CONSTRAINT [UC_Warehouses_Id] UNIQUE NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_HeadLevel]  DEFAULT ((0)) FOR [HeadLevel]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsTransaction]  DEFAULT ((0)) FOR [IsTransaction]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsGL]  DEFAULT ((0)) FOR [IsGL]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsBudget]  DEFAULT ((0)) FOR [IsBudget]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsDepreciation]  DEFAULT ((0)) FOR [IsDepreciation]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_DepreciationRate]  DEFAULT ((0)) FOR [DepreciationRate]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AgendaDecisions] ADD  CONSTRAINT [DF_AgendaDecisions_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AgendaItems] ADD  CONSTRAINT [DF_AgendaItems_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AgendaItemTypes] ADD  CONSTRAINT [DF_AgendaItemTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Attendance] ADD  CONSTRAINT [DF_Attendance_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AttendanceStatuses] ADD  CONSTRAINT [DF_AttendanceStatuses_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AttendeeTypes] ADD  CONSTRAINT [DF_AttendeeTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Banks] ADD  CONSTRAINT [DF_Banks_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Brands] ADD  CONSTRAINT [DF_Brands_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Categories] ADD  CONSTRAINT [DF_Categories_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Cities] ADD  CONSTRAINT [DF_Cities_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_VatPercentage]  DEFAULT ((0)) FOR [VatPercentage]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_CurrencyPosition]  DEFAULT ((1)) FOR [CurrencyPosition]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_VatType]  DEFAULT ((2)) FOR [VatType]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_ShowVat]  DEFAULT ((0)) FOR [ShowVatOnPDF]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_ShowVatOnPurchase]  DEFAULT ((0)) FOR [ShowVatOnPurchase]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_AllowNegetiveInventory]  DEFAULT ((1)) FOR [AllowNegetiveInventory]
GO
ALTER TABLE [dbo].[Countries] ADD  CONSTRAINT [DF_Countries_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Currencies] ADD  CONSTRAINT [DF_Currencies_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[CustomerGroups] ADD  CONSTRAINT [DF_CustomerGroups_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_PreviousCreditBalance]  DEFAULT ((0)) FOR [PreviousCreditBalance]
GO
ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_LastDayClosing]  DEFAULT ((0)) FOR [LastDayClosing]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_CashIn]  DEFAULT ((0)) FOR [CashIn]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_CashOut]  DEFAULT ((0)) FOR [CashOut]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Amount]  DEFAULT ((0)) FOR [Amount]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Adjustment]  DEFAULT ((0)) FOR [Adjustment]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Status]  DEFAULT ((1)) FOR [Status]
GO
ALTER TABLE [dbo].[DamagedProducts] ADD  CONSTRAINT [DF_DamagedProducts_PurchasePrice]  DEFAULT ((0)) FOR [PurchasePrice]
GO
ALTER TABLE [dbo].[DamagedProducts] ADD  CONSTRAINT [DF_DamagedProducts_Quantity]  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[DamagedProducts] ADD  CONSTRAINT [DF_DamagedProducts_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Deduction] ADD  CONSTRAINT [DF_Deduction_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Departments] ADD  CONSTRAINT [DF_Departments_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Designations] ADD  CONSTRAINT [DF_Designations_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeBankAccounts] ADD  CONSTRAINT [DF_EmployeeBankAccounts_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeDeduction] ADD  CONSTRAINT [DF_EmployeeDeduction_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[EmployeeIncome] ADD  CONSTRAINT [DF_EmployeeIncome_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_RateType]  DEFAULT ((1)) FOR [RateType]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_HoureRateSalary]  DEFAULT ((0)) FOR [HoureRateSalary]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_BasicSalary]  DEFAULT ((0)) FOR [BasicSalary]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_IsProtected]  DEFAULT ((1)) FOR [IsProtected]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_DuplicateCount]  DEFAULT ((1)) FOR [DuplicateCount]
GO
ALTER TABLE [dbo].[Expenses] ADD  CONSTRAINT [DF_Expenses_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Expenses] ADD  CONSTRAINT [DF_Expenses_Amount]  DEFAULT ((0)) FOR [Amount]
GO
ALTER TABLE [dbo].[Expenses] ADD  CONSTRAINT [DF_Expenses_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ExpenseTypes] ADD  CONSTRAINT [DF_ExpenseTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[GoodsIssue] ADD  CONSTRAINT [DF_GoodsIssue_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[GoodsIssue] ADD  CONSTRAINT [DF_Table1_GrandTotal]  DEFAULT ((0)) FOR [TotalQuantity]
GO
ALTER TABLE [dbo].[GoodsIssue] ADD  CONSTRAINT [DF_GoodsIssue_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[GoodsIssueDetails] ADD  CONSTRAINT [DF_GoodsIssueDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[GoodsReceipt] ADD  CONSTRAINT [DF_GoodsReceipt_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[GoodsReceipt] ADD  CONSTRAINT [DF_GoodsReceipt_TotalQuantity]  DEFAULT ((0)) FOR [TotalQuantity]
GO
ALTER TABLE [dbo].[GoodsReceipt] ADD  CONSTRAINT [DF_GoodsReceipt_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[GoodsReceiptDetails] ADD  CONSTRAINT [DF_GoodsReceiptDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Income] ADD  CONSTRAINT [DF_Income_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Locations] ADD  CONSTRAINT [DF_Locations_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[MeetingAttendees] ADD  CONSTRAINT [DF_MeetingAttendees_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Meetings] ADD  CONSTRAINT [DF_Meetings_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[MeetingTypes] ADD  CONSTRAINT [DF_MeetingTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
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
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_UnitPrice]  DEFAULT ((0)) FOR [UnitPrice]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_UnitsInStock]  DEFAULT ((0)) FOR [UnitsInStock]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_UnitsOnOrder]  DEFAULT ((0)) FOR [UnitsOnOrder]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_ReorderLevel]  DEFAULT ((10)) FOR [ReorderLevel]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_IsActive_1]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[PurchaseDetails] ADD  CONSTRAINT [DF_PurchaseDetails_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[PurchaseDetails] ADD  CONSTRAINT [DF_PurchaseDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Table_1_SaleDiscount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_PaidAmount]  DEFAULT ((0)) FOR [PaidAmount]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_Due]  DEFAULT ((0)) FOR [Due]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_Change]  DEFAULT ((0)) FOR [Change]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_Vat]  DEFAULT ((0)) FOR [Vat]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_TotalTax]  DEFAULT ((0)) FOR [TotalTax]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_VatPercentage]  DEFAULT ((0)) FOR [VatPercentage]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_NoTax]  DEFAULT ((0)) FOR [NoTax]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_VatType]  DEFAULT ((0)) FOR [VatType]
GO
ALTER TABLE [dbo].[QuotationDetails] ADD  CONSTRAINT [DF_QuotationDetails_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[QuotationDetails] ADD  CONSTRAINT [DF_QuotationDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_Vat]  DEFAULT ((0)) FOR [Vat]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_TotalTax]  DEFAULT ((0)) FOR [TotalTax]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_VatPercentage]  DEFAULT ((0)) FOR [VatPercentage]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_NoTax]  DEFAULT ((0)) FOR [NoTax]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_VatType]  DEFAULT ((0)) FOR [VatType]
GO
ALTER TABLE [dbo].[Regions] ADD  CONSTRAINT [DF_Regions_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ResolutionStatuses] ADD  CONSTRAINT [DF_ResolutionStatuses_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[SaleDetails] ADD  CONSTRAINT [DF_SaleDetails_PurchasePrice]  DEFAULT ((0)) FOR [PurchasePrice]
GO
ALTER TABLE [dbo].[SaleDetails] ADD  CONSTRAINT [DF_SaleDetails_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[SaleDetails] ADD  CONSTRAINT [DF_SaleDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_SaleDiscount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Vat]  DEFAULT ((0)) FOR [Vat]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_TotalTax]  DEFAULT ((0)) FOR [TotalTax]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_PaidAmount]  DEFAULT ((0)) FOR [PaidAmount]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Due]  DEFAULT ((0)) FOR [Due]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Change]  DEFAULT ((0)) FOR [Change]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_VatPercentage]  DEFAULT ((0)) FOR [VatPercentage]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_NoTax_1]  DEFAULT ((0)) FOR [NoTax]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_VatType]  DEFAULT ((0)) FOR [VatType]
GO
ALTER TABLE [dbo].[ServiceInvoiceDetails] ADD  CONSTRAINT [DF_ServiceInvoiceDetails_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[ServiceInvoiceDetails] ADD  CONSTRAINT [DF_ServiceInvoiceDetails_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_Vat]  DEFAULT ((0)) FOR [Vat]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_TotalTax]  DEFAULT ((0)) FOR [TotalTax]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_PaidAmount]  DEFAULT ((0)) FOR [PaidAmount]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_Due]  DEFAULT ((0)) FOR [Due]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_Change]  DEFAULT ((0)) FOR [Change]
GO
ALTER TABLE [dbo].[ServiceInvoices] ADD  CONSTRAINT [DF_ServiceInvoices_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Services] ADD  CONSTRAINT [DF_Services_Charge]  DEFAULT ((0)) FOR [Charge]
GO
ALTER TABLE [dbo].[Services] ADD  CONSTRAINT [DF_Services_Tax]  DEFAULT ((0)) FOR [Tax]
GO
ALTER TABLE [dbo].[Services] ADD  CONSTRAINT [DF_Services_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Shippers] ADD  CONSTRAINT [DF_Shippers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[States] ADD  CONSTRAINT [DF_States_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [DF_Stocks_Mode]  DEFAULT ((1)) FOR [Mode]
GO
ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [DF_Stocks_Status]  DEFAULT ((2)) FOR [Status]
GO
ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [DF_Stocks_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[SupplierGroups] ADD  CONSTRAINT [DF_SupplierGroups_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Suppliers] ADD  CONSTRAINT [DF_Suppliers_PreviousCreditBalance]  DEFAULT ((0)) FOR [PreviousCreditBalance]
GO
ALTER TABLE [dbo].[Suppliers] ADD  CONSTRAINT [DF_Suppliers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Territories] ADD  CONSTRAINT [DF_Territories_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_VDate]  DEFAULT (getdate()) FOR [VDate]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_Debit]  DEFAULT ((0)) FOR [Debit]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_Credit]  DEFAULT ((0)) FOR [Credit]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_IsPosted]  DEFAULT ((0)) FOR [IsPosted]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_IsAppove]  DEFAULT ((0)) FOR [IsAppove]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_IsOpening]  DEFAULT ((0)) FOR [IsOpening]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Units] ADD  CONSTRAINT [DF_Units_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[UserPermissions] ADD  CONSTRAINT [DF_UserPermissions_Granted]  DEFAULT ((1)) FOR [Granted]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Warehouses] ADD  CONSTRAINT [DF_Warehouses_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Accounts] FOREIGN KEY([ParentHead])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Accounts]
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Customers]
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Suppliers]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_AgendaItems] FOREIGN KEY([RelatedAgendaItem])
REFERENCES [dbo].[AgendaItems] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_AgendaItems]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_Employees] FOREIGN KEY([AssignedTo])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_Employees]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_Meetings] FOREIGN KEY([Meeting])
REFERENCES [dbo].[Meetings] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_Meetings]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_ResolutionStatuses] FOREIGN KEY([ResolutionStatus])
REFERENCES [dbo].[ResolutionStatuses] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_ResolutionStatuses]
GO
ALTER TABLE [dbo].[AgendaItems]  WITH CHECK ADD  CONSTRAINT [FK_AgendaItems_AgendaItemTypes] FOREIGN KEY([ItemType])
REFERENCES [dbo].[AgendaItemTypes] ([Id])
GO
ALTER TABLE [dbo].[AgendaItems] CHECK CONSTRAINT [FK_AgendaItems_AgendaItemTypes]
GO
ALTER TABLE [dbo].[AgendaItems]  WITH CHECK ADD  CONSTRAINT [FK_AgendaItems_Employees] FOREIGN KEY([RequestedBy])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[AgendaItems] CHECK CONSTRAINT [FK_AgendaItems_Employees]
GO
ALTER TABLE [dbo].[AgendaItems]  WITH CHECK ADD  CONSTRAINT [FK_AgendaItems_Meetings] FOREIGN KEY([Meeting])
REFERENCES [dbo].[Meetings] ([Id])
GO
ALTER TABLE [dbo].[AgendaItems] CHECK CONSTRAINT [FK_AgendaItems_Meetings]
GO
ALTER TABLE [dbo].[Attendance]  WITH CHECK ADD  CONSTRAINT [FK_Attendance_Employees] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[Attendance] CHECK CONSTRAINT [FK_Attendance_Employees]
GO
ALTER TABLE [dbo].[Categories]  WITH CHECK ADD  CONSTRAINT [FK_Categories_Categories] FOREIGN KEY([ParentCategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Categories] CHECK CONSTRAINT [FK_Categories_Categories]
GO
ALTER TABLE [dbo].[Cities]  WITH CHECK ADD  CONSTRAINT [FK_Cities_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Cities] CHECK CONSTRAINT [FK_Cities_Countries]
GO
ALTER TABLE [dbo].[Cities]  WITH CHECK ADD  CONSTRAINT [FK_Cities_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Cities] CHECK CONSTRAINT [FK_Cities_States]
GO
ALTER TABLE [dbo].[Companies]  WITH CHECK ADD  CONSTRAINT [FK_Companies_Currencies] FOREIGN KEY([CurrencyId])
REFERENCES [dbo].[Currencies] ([Id])
GO
ALTER TABLE [dbo].[Companies] CHECK CONSTRAINT [FK_Companies_Currencies]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Cities]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Countries]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Regions]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_States]
GO
ALTER TABLE [dbo].[DamagedProducts]  WITH CHECK ADD  CONSTRAINT [FK_DamagedProducts_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[DamagedProducts] CHECK CONSTRAINT [FK_DamagedProducts_Categories]
GO
ALTER TABLE [dbo].[DamagedProducts]  WITH CHECK ADD  CONSTRAINT [FK_DamagedProducts_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[DamagedProducts] CHECK CONSTRAINT [FK_DamagedProducts_Products]
GO
ALTER TABLE [dbo].[Departments]  WITH CHECK ADD  CONSTRAINT [FK_Departments_Departments] FOREIGN KEY([ParentDepartmentId])
REFERENCES [dbo].[Departments] ([Id])
GO
ALTER TABLE [dbo].[Departments] CHECK CONSTRAINT [FK_Departments_Departments]
GO
ALTER TABLE [dbo].[Designations]  WITH CHECK ADD  CONSTRAINT [FK_Designations_Designations] FOREIGN KEY([ParentDesignationId])
REFERENCES [dbo].[Designations] ([Id])
GO
ALTER TABLE [dbo].[Designations] CHECK CONSTRAINT [FK_Designations_Designations]
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
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Cities]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Countries]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Departments] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Departments] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Departments]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Designations] FOREIGN KEY([DesignationId])
REFERENCES [dbo].[Designations] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Designations]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Regions]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_States]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Territories] FOREIGN KEY([TerritoryId])
REFERENCES [dbo].[Territories] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Territories]
GO
ALTER TABLE [dbo].[Expenses]  WITH CHECK ADD  CONSTRAINT [FK_Expenses_ExpenseTypes] FOREIGN KEY([ExpenseTypeId])
REFERENCES [dbo].[ExpenseTypes] ([Id])
GO
ALTER TABLE [dbo].[Expenses] CHECK CONSTRAINT [FK_Expenses_ExpenseTypes]
GO
ALTER TABLE [dbo].[GoodsIssue]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssue_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssue] CHECK CONSTRAINT [FK_GoodsIssue_Customers]
GO
ALTER TABLE [dbo].[GoodsIssue]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssue_Employees] FOREIGN KEY([EmployeenId])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssue] CHECK CONSTRAINT [FK_GoodsIssue_Employees]
GO
ALTER TABLE [dbo].[GoodsIssue]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssue_Sales] FOREIGN KEY([SaleId])
REFERENCES [dbo].[Sales] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssue] CHECK CONSTRAINT [FK_GoodsIssue_Sales]
GO
ALTER TABLE [dbo].[GoodsIssueDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssueDetails_GoodsIssue] FOREIGN KEY([GoodsIssueId])
REFERENCES [dbo].[GoodsIssue] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssueDetails] CHECK CONSTRAINT [FK_GoodsIssueDetails_GoodsIssue]
GO
ALTER TABLE [dbo].[GoodsIssueDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssueDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssueDetails] CHECK CONSTRAINT [FK_GoodsIssueDetails_Products]
GO
ALTER TABLE [dbo].[GoodsIssueDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssueDetails_Warehouses] FOREIGN KEY([WarehouseId])
REFERENCES [dbo].[Warehouses] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssueDetails] CHECK CONSTRAINT [FK_GoodsIssueDetails_Warehouses]
GO
ALTER TABLE [dbo].[GoodsReceipt]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceipt_Employees] FOREIGN KEY([EmployeenId])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceipt] CHECK CONSTRAINT [FK_GoodsReceipt_Employees]
GO
ALTER TABLE [dbo].[GoodsReceipt]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceipt_Purchases] FOREIGN KEY([PurchaseId])
REFERENCES [dbo].[Purchases] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceipt] CHECK CONSTRAINT [FK_GoodsReceipt_Purchases]
GO
ALTER TABLE [dbo].[GoodsReceipt]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceipt_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceipt] CHECK CONSTRAINT [FK_GoodsReceipt_Suppliers]
GO
ALTER TABLE [dbo].[GoodsReceiptDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceiptDetails_GoodsReceipt] FOREIGN KEY([GoodsReceiptId])
REFERENCES [dbo].[GoodsReceipt] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceiptDetails] CHECK CONSTRAINT [FK_GoodsReceiptDetails_GoodsReceipt]
GO
ALTER TABLE [dbo].[GoodsReceiptDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceiptDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceiptDetails] CHECK CONSTRAINT [FK_GoodsReceiptDetails_Products]
GO
ALTER TABLE [dbo].[GoodsReceiptDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceiptDetails_Warehouses] FOREIGN KEY([WarehouseId])
REFERENCES [dbo].[Warehouses] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceiptDetails] CHECK CONSTRAINT [FK_GoodsReceiptDetails_Warehouses]
GO
ALTER TABLE [dbo].[Locations]  WITH CHECK ADD  CONSTRAINT [FK_Locations_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Locations] CHECK CONSTRAINT [FK_Locations_Cities]
GO
ALTER TABLE [dbo].[Locations]  WITH CHECK ADD  CONSTRAINT [FK_Locations_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Locations] CHECK CONSTRAINT [FK_Locations_Countries]
GO
ALTER TABLE [dbo].[Locations]  WITH CHECK ADD  CONSTRAINT [FK_Locations_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Locations] CHECK CONSTRAINT [FK_Locations_States]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_AttendanceStatuses] FOREIGN KEY([AttendanceStatus])
REFERENCES [dbo].[AttendanceStatuses] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_AttendanceStatuses]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_AttendeeTypes] FOREIGN KEY([AttendeeType])
REFERENCES [dbo].[AttendeeTypes] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_AttendeeTypes]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_Employees] FOREIGN KEY([Attendee])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_Employees]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_Meetings] FOREIGN KEY([Meeting])
REFERENCES [dbo].[Meetings] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_Meetings]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Departments] FOREIGN KEY([Department])
REFERENCES [dbo].[Departments] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Departments]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Employees] FOREIGN KEY([Reporter])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Employees]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Employees1] FOREIGN KEY([OrganizedBy])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Employees1]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Locations] FOREIGN KEY([Location])
REFERENCES [dbo].[Locations] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Locations]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_MeetingTypes] FOREIGN KEY([MeetingType])
REFERENCES [dbo].[MeetingTypes] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_MeetingTypes]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Units] FOREIGN KEY([UnitId])
REFERENCES [dbo].[Units] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Units]
GO
ALTER TABLE [dbo].[PurchaseDetails]  WITH CHECK ADD  CONSTRAINT [FK_PurchaseDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[PurchaseDetails] CHECK CONSTRAINT [FK_PurchaseDetails_Products]
GO
ALTER TABLE [dbo].[PurchaseDetails]  WITH CHECK ADD  CONSTRAINT [FK_PurchaseDetails_Purchases] FOREIGN KEY([PurchaseId])
REFERENCES [dbo].[Purchases] ([Id])
GO
ALTER TABLE [dbo].[PurchaseDetails] CHECK CONSTRAINT [FK_PurchaseDetails_Purchases]
GO
ALTER TABLE [dbo].[Purchases]  WITH CHECK ADD  CONSTRAINT [FK_Purchases_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[Purchases] CHECK CONSTRAINT [FK_Purchases_Suppliers]
GO
ALTER TABLE [dbo].[QuotationDetails]  WITH CHECK ADD  CONSTRAINT [FK_QuotationDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[QuotationDetails] CHECK CONSTRAINT [FK_QuotationDetails_Products]
GO
ALTER TABLE [dbo].[QuotationDetails]  WITH CHECK ADD  CONSTRAINT [FK_QuotationDetails_Quotations] FOREIGN KEY([QuotationId])
REFERENCES [dbo].[Quotations] ([Id])
GO
ALTER TABLE [dbo].[QuotationDetails] CHECK CONSTRAINT [FK_QuotationDetails_Quotations]
GO
ALTER TABLE [dbo].[QuotationDetails]  WITH CHECK ADD  CONSTRAINT [FK_QuotationDetails_Units] FOREIGN KEY([UnitId])
REFERENCES [dbo].[Units] ([Id])
GO
ALTER TABLE [dbo].[QuotationDetails] CHECK CONSTRAINT [FK_QuotationDetails_Units]
GO
ALTER TABLE [dbo].[Quotations]  WITH CHECK ADD  CONSTRAINT [FK_Quotations_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Quotations] CHECK CONSTRAINT [FK_Quotations_Customers]
GO
ALTER TABLE [dbo].[RolePermissions]  WITH CHECK ADD  CONSTRAINT [FK_RolePermissions_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[RolePermissions] CHECK CONSTRAINT [FK_RolePermissions_RoleId]
GO
ALTER TABLE [dbo].[SaleDetails]  WITH CHECK ADD  CONSTRAINT [FK_SaleDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[SaleDetails] CHECK CONSTRAINT [FK_SaleDetails_Products]
GO
ALTER TABLE [dbo].[SaleDetails]  WITH CHECK ADD  CONSTRAINT [FK_SaleDetails_Sales] FOREIGN KEY([SaleId])
REFERENCES [dbo].[Sales] ([Id])
GO
ALTER TABLE [dbo].[SaleDetails] CHECK CONSTRAINT [FK_SaleDetails_Sales]
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD  CONSTRAINT [FK_Sales_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Sales] CHECK CONSTRAINT [FK_Sales_Customers]
GO
ALTER TABLE [dbo].[ServiceInvoiceDetails]  WITH CHECK ADD  CONSTRAINT [FK_ServiceInvoiceDetails_ServiceInvoices] FOREIGN KEY([ServiceInvoiceId])
REFERENCES [dbo].[ServiceInvoices] ([Id])
GO
ALTER TABLE [dbo].[ServiceInvoiceDetails] CHECK CONSTRAINT [FK_ServiceInvoiceDetails_ServiceInvoices]
GO
ALTER TABLE [dbo].[ServiceInvoiceDetails]  WITH CHECK ADD  CONSTRAINT [FK_ServiceInvoiceDetails_Services] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[Services] ([Id])
GO
ALTER TABLE [dbo].[ServiceInvoiceDetails] CHECK CONSTRAINT [FK_ServiceInvoiceDetails_Services]
GO
ALTER TABLE [dbo].[ServiceInvoices]  WITH CHECK ADD  CONSTRAINT [FK_ServiceInvoices_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[ServiceInvoices] CHECK CONSTRAINT [FK_ServiceInvoices_Customers]
GO
ALTER TABLE [dbo].[States]  WITH CHECK ADD  CONSTRAINT [FK_States_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[States] CHECK CONSTRAINT [FK_States_Countries]
GO
ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Products]
GO
ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Warehouses] FOREIGN KEY([WarehouseId])
REFERENCES [dbo].[Warehouses] ([Id])
GO
ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Warehouses]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_Cities]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_Countries]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_Regions]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_States]
GO
ALTER TABLE [dbo].[Territories]  WITH CHECK ADD  CONSTRAINT [FK_Territories_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Territories] CHECK CONSTRAINT [FK_Territories_Regions]
GO
ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Accounts] FOREIGN KEY([COAId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Accounts]
GO
ALTER TABLE [dbo].[UserPermissions]  WITH CHECK ADD  CONSTRAINT [FK_UserPermissions_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserPermissions] CHECK CONSTRAINT [FK_UserPermissions_UserId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_RoleId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_UserId]
GO
ALTER TABLE [dbo].[Warehouses]  WITH CHECK ADD  CONSTRAINT [FK_Warehouses_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Warehouses] CHECK CONSTRAINT [FK_Warehouses_Cities]
GO
ALTER TABLE [dbo].[Warehouses]  WITH CHECK ADD  CONSTRAINT [FK_Warehouses_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Warehouses] CHECK CONSTRAINT [FK_Warehouses_Countries]
GO
ALTER TABLE [dbo].[Warehouses]  WITH CHECK ADD  CONSTRAINT [FK_Warehouses_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Warehouses] CHECK CONSTRAINT [FK_Warehouses_States]
GO
/****** Object:  Trigger [dbo].[OnBankAddCOA]    Script Date: 7/7/2022 8:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnBankAddCOA]
ON [dbo].[Banks]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive]
		   ,BankId)
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Cash At Bank'),
		   (SELECT TOP 1 ([HeadCode] * 100)+1 FROM [dbo].[Accounts] where [HeadName] ='Cash At Bank')
		   ) as HeadCode,
		    i.BankName as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Cash At Bank') as [ParentHead],
		   'Cash At Bank' as [PHeadName]
		   ,'4' as [HeadLevel]
           ,'A' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL [CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   ,i.Id
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Banks] ENABLE TRIGGER [OnBankAddCOA]
GO
/****** Object:  Trigger [dbo].[OnCustomerAddCOA]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnCustomerAddCOA]
ON [dbo].[Customers]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive])
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Account Receivable' AND [HeadCode]>10000000),
		    (SELECT TOP 1 ([HeadCode] * 10000000)+1 FROM [dbo].[Accounts] where [HeadName] ='Account Receivable')
		   ) as HeadCode,
		   --(SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Account Receivable') as HeadCode,
		    Convert(nvarchar(100),i.Id)+' - '+ i.[Name] as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Account Receivable') as [ParentHead],
		   'Account Receivable' as [PHeadName]
		   ,'4' as [HeadLevel]
           ,'A' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,i.Id [CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Customers] ENABLE TRIGGER [OnCustomerAddCOA]
GO
/****** Object:  Trigger [dbo].[OnDamagedProductsINSERTStocks]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[OnDamagedProductsINSERTStocks]
ON [dbo].[DamagedProducts]
AFTER INSERT   
AS
BEGIN

INSERT INTO [dbo].[Stocks]
           ([ProductId]
           ,[Quantity]
           ,[VNo]
                   
           ,[Mode]
           ,[TransactionType])
     Select 
	 i.ProductId AS ProductId,
	 i.Quantity AS Quantity,
	 [VNo],
	
	 --WarehouseId ,
	 'OUT' AS Mode ,
	 'DamagedProducts' AS TransactionType

	 FROM inserted i
           

END;
GO
ALTER TABLE [dbo].[DamagedProducts] ENABLE TRIGGER [OnDamagedProductsINSERTStocks]
GO
/****** Object:  Trigger [dbo].[OnDamagedProductsUPDATEStocks]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[OnDamagedProductsUPDATEStocks]
ON [dbo].[DamagedProducts]
AFTER UPDATE   
AS
BEGIN
DECLARE @VNo as bigint
DECLARE @ProductId as bigint
DECLARE @IsActive as int


select top 1 @VNo=d.[VNo], @ProductId=d.ProductId ,@IsActive=d.[IsActive] from deleted d
SET NOCOUNT ON
DELETE FROM [dbo].[Stocks] WHERE [VNo]=@VNo AND [ProductId]=@ProductId

	IF (@IsActive=1)
	BEGIN
		INSERT INTO [dbo].[Stocks]
           ([ProductId]
           ,[Quantity]
           ,[VNo]
                
           ,[Mode]
           ,[TransactionType])
		 Select 
		 i.ProductId AS ProductId,
		 i.Quantity AS Quantity,
		 [VNo],
	
		 --WarehouseId ,
		 'OUT' AS Mode ,
		 'DamagedProducts' AS TransactionType

		 FROM inserted i
           
	END;
END;
GO
ALTER TABLE [dbo].[DamagedProducts] ENABLE TRIGGER [OnDamagedProductsUPDATEStocks]
GO
/****** Object:  Trigger [dbo].[OnEmployeeAddCOA]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnEmployeeAddCOA]
ON [dbo].[Employees]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive]
		   ,EmployeeId)
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Employee Ledger'),
		   (SELECT TOP 1 ([HeadCode] * 10000)+1 FROM [dbo].[Accounts] where [HeadName] ='Employee Ledger')
		   ) as HeadCode,
		    Convert(nvarchar(100),i.Id)+' - '+ i.[FirstName]+' '+i.[LastName] as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Employee Ledger') as [ParentHead],
		   'Employee Ledger' as [PHeadName]
		   ,'3' as [HeadLevel]
           ,'L' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL[CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   ,i.Id
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Employees] ENABLE TRIGGER [OnEmployeeAddCOA]
GO
/****** Object:  Trigger [dbo].[OnExpensesAddTransactions]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE TRIGGER [dbo].[OnExpensesAddTransactions]
ON [dbo].[Expenses]
AFTER INSERT   
AS
BEGIN
DECLARE @ExpenseTypeId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float


DECLARE @ExpenceCOAId as bigint
DECLARE @ExpenceHeadCode as bigint

select top 1 @ExpenseTypeId=i.[ExpenseTypeId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[Amount] ,@DateTime=i.[Date],@PaidAmount=i.[Amount] from inserted i


select top 1 @ExpenceCOAId=[Id],@ExpenceHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Expence'
-- Transaction: Supplier
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Expense' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [ExpenseTypeId] =i.[ExpenseTypeId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [ExpenseTypeId] =i.[ExpenseTypeId]) as [COA]
		   ,(SELECT top 1 'Expense. '+[Type] FROM [dbo].[ExpenseTypes] where [Id] =i.[ExpenseTypeId]) as [Narration]		   
		   ,0 as [Debit]
		   ,i.[Amount] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Expense' [Vtype]
		   ,@DateTime [VDate]
		   ,@ExpenceCOAId as [COAId]
		   , @ExpenceHeadCode as [COA]
		   ,(SELECT top 1 'Expense Credit For '+[Type] FROM [dbo].[ExpenseTypes] where [Id] =i.[ExpenseTypeId]) as [Narration]	
		   ,i.[Amount] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Expense' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		    ,(SELECT top 1 'Paid amount for Expense. '+[Type] FROM [dbo].[ExpenseTypes] where [Id] =i.[ExpenseTypeId]) as [Narration] 		   
		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	
   
END;
END;
GO
ALTER TABLE [dbo].[Expenses] ENABLE TRIGGER [OnExpensesAddTransactions]
GO
/****** Object:  Trigger [dbo].[OnExpenseTypesAddCOA]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnExpenseTypesAddCOA]
ON [dbo].[ExpenseTypes]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive]
		   ,ExpenseTypeId)
     
           
		   SELECT 
		   (SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Expence') as HeadCode,
		   i.[Type] as HeadName,
		   (SELECT top 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Expence') as [ParentHead],
		   'Expence' as [PHeadName]
		   ,'2' as [HeadLevel]
           ,'E' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL [CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   ,i.Id
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[ExpenseTypes] ENABLE TRIGGER [OnExpenseTypesAddCOA]
GO
/****** Object:  Trigger [dbo].[OnPurchaseINSERTStocks]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[OnPurchaseINSERTStocks]
ON [dbo].[PurchaseDetails]
AFTER INSERT   
AS
BEGIN

INSERT INTO [dbo].[Stocks]
           ([ProductId]
           ,[Quantity]
           ,[VNo]
                   
           ,[Mode]
           ,[TransactionType])
     Select 
	 i.ProductId AS ProductId,
	 i.Quantity AS Quantity,
	 (SELECT TOP (1) [VNo]  FROM [dbo].[Purchases] WHERE Id=i.[PurchaseId]) AS VNo,
	
	 --WarehouseId ,
	 'IN' AS Mode ,
	 'PURCHASE' AS TransactionType

	 FROM inserted i
           

END;
GO
ALTER TABLE [dbo].[PurchaseDetails] ENABLE TRIGGER [OnPurchaseINSERTStocks]
GO
/****** Object:  Trigger [dbo].[OnPurchaseUPDATEStocks]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[OnPurchaseUPDATEStocks]
ON [dbo].[PurchaseDetails]
AFTER UPDATE   
AS
BEGIN
DECLARE @OrderId as bigint
DECLARE @ProductId as bigint
DECLARE @IsActive as int
select top 1 @OrderId=d.[PurchaseId], @ProductId=d.ProductId ,@IsActive=d.[IsActive] from deleted d
SET NOCOUNT ON
DELETE FROM [dbo].[Stocks] WHERE [VNo]=(SELECT TOP (1) [VNo]  FROM [dbo].[Purchases] WHERE Id=@OrderId) AND [ProductId]=@ProductId

	IF (@IsActive=1)
	BEGIN
		INSERT INTO [dbo].[Stocks]
           ([ProductId]
           ,[Quantity]
           ,[VNo]
                
           ,[Mode]
           ,[TransactionType])
		 Select 
		 i.ProductId AS ProductId,
		 i.Quantity AS Quantity,
		 (SELECT TOP (1) [VNo]  FROM [dbo].[Purchases] WHERE [IsActive]=1 AND Id=i.[PurchaseId]) AS VNo,
	
		 --WarehouseId ,
		 'IN' AS Mode ,
		 'PURCHASE' AS TransactionType

		 FROM inserted i
           
	END;
END;
GO
ALTER TABLE [dbo].[PurchaseDetails] ENABLE TRIGGER [OnPurchaseUPDATEStocks]
GO
/****** Object:  Trigger [dbo].[OnPurchasesAddTransactions]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnPurchasesAddTransactions]
ON [dbo].[Purchases]
AFTER INSERT   
AS
BEGIN
DECLARE @SupplierId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float
DECLARE @InventoryCOAId as bigint
DECLARE @InventoryHeadCode as bigint

DECLARE @ProductPurchaseCOAId as bigint
DECLARE @ProductPurchaseHeadCode as bigint

select top 1 @SupplierId=i.[SupplierId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount] from inserted i


select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ProductPurchaseCOAId=[Id],@ProductPurchaseHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Product Purchase'
-- Transaction: Inventory Debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   ,@InventoryCOAId as [COAId]
		   , @InventoryHeadCode as [COA]
		   ,(SELECT top 1 'Inventory Debit For Supplier '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Supplier
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COA]
		   ,(SELECT top 1 'Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		   
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   ,@ProductPurchaseCOAId as [COAId]
		   , @ProductPurchaseHeadCode as [COA]
		   ,(SELECT top 1 'Company Credit For '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		    ,(SELECT top 1 'Paid amount for Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		  		   
		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COA]
		    ,(SELECT top 1 'Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		  		   
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
GO
ALTER TABLE [dbo].[Purchases] ENABLE TRIGGER [OnPurchasesAddTransactions]
GO
/****** Object:  Trigger [dbo].[OnPurchasesUpdateUpdateTransactions]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create TRIGGER [dbo].[OnPurchasesUpdateUpdateTransactions]
ON [dbo].[Purchases]
AFTER UPDATE   
AS
BEGIN
SET NOCOUNT ON;  
DECLARE @DeletedVNo as bigint

select top 1 @DeletedVNo=d.[VNo]from deleted d
delete from [dbo].[Transactions] where [VNo]=@DeletedVNo

DECLARE @IsActive AS INT
DECLARE @SupplierId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float
DECLARE @InventoryCOAId as bigint
DECLARE @InventoryHeadCode as bigint

DECLARE @ProductPurchaseCOAId as bigint
DECLARE @ProductPurchaseHeadCode as bigint

select top 1 @SupplierId=i.[SupplierId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount],@IsActive=i.[IsActive] from inserted i

IF (@IsActive>0)
BEGIN

select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ProductPurchaseCOAId=[Id],@ProductPurchaseHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Product Purchase'
-- Transaction: Inventory Debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   ,@InventoryCOAId as [COAId]
		   , @InventoryHeadCode as [COA]
		   ,(SELECT top 1 'Inventory Debit For Supplier '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Supplier
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COA]
		   ,(SELECT top 1 'Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		   
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   ,@ProductPurchaseCOAId as [COAId]
		   , @ProductPurchaseHeadCode as [COA]
		   ,(SELECT top 1 'Company Credit For '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		    ,(SELECT top 1 'Paid amount for Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		  		   
		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COA]
		    ,(SELECT top 1 'Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		  		   
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
END;




/********************************************************************************************************************/

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
ALTER TABLE [dbo].[Purchases] ENABLE TRIGGER [OnPurchasesUpdateUpdateTransactions]
GO
/****** Object:  Trigger [dbo].[OnSaleINSERTStocks]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE TRIGGER [dbo].[OnSaleINSERTStocks]
ON [dbo].[SaleDetails]
AFTER INSERT   
AS
BEGIN

INSERT INTO [dbo].[Stocks]
           ([ProductId]
           ,[Quantity]
           ,[VNo]
               
           ,[Mode]
           ,[TransactionType])
     Select 
	 i.ProductId AS ProductId,
	 i.Quantity AS Quantity,
	 (SELECT TOP (1) [VNo]  FROM [dbo].[Sales] WHERE Id=i.[SaleId]) AS VNo,
	
	 --WarehouseId ,
	 'OUT' AS Mode ,
	 'SALE' AS TransactionType

	 FROM inserted i
           

END;
GO
ALTER TABLE [dbo].[SaleDetails] ENABLE TRIGGER [OnSaleINSERTStocks]
GO
/****** Object:  Trigger [dbo].[OnSaleUPDATEStocks]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[OnSaleUPDATEStocks]
ON [dbo].[SaleDetails]
AFTER UPDATE   
AS
BEGIN
DECLARE @OrderId as bigint
DECLARE @ProductId as bigint
DECLARE @IsActive as int
select top 1 @OrderId=d.[SaleId], @ProductId=d.ProductId,@IsActive=d.[IsActive] from deleted d
SET NOCOUNT ON
DELETE FROM [dbo].[Stocks] WHERE [VNo]=(SELECT TOP (1) [VNo]  FROM [dbo].[Sales] WHERE Id=@OrderId) AND [ProductId]=@ProductId

IF (@IsActive=1)
BEGIN
	INSERT INTO [dbo].[Stocks]
			   ([ProductId]
			   ,[Quantity]
			   ,[VNo]
              
			   ,[Mode]
			   ,[TransactionType])
		 Select 
		 i.ProductId AS ProductId,
		 i.Quantity AS Quantity,
		 (SELECT TOP (1) [VNo]  FROM [dbo].[Sales] WHERE  Id=i.[SaleId]) AS VNo,
	
		 --WarehouseId ,
		 'OUT' AS Mode ,
		 'SALE' AS TransactionType

		 FROM inserted i
           
END
END;
GO
ALTER TABLE [dbo].[SaleDetails] ENABLE TRIGGER [OnSaleUPDATEStocks]
GO
/****** Object:  Trigger [dbo].[OnSalesAddTransactions]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnSalesAddTransactions]
ON [dbo].[Sales]
AFTER INSERT   
AS
BEGIN
DECLARE @CustomerId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float
DECLARE @InventoryCOAId as bigint
DECLARE @InventoryHeadCode as bigint

DECLARE @ProductSaleCOAId as bigint
DECLARE @ProductSaleHeadCode as bigint

DECLARE @PaymentAccountName as NVARCHAR(100)
select top 1 @CustomerId=i.[CustomerId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount] 
,@PaymentAccountName=(SELECT top 1 [HeadName] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount])
from inserted i

select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ProductSaleCOAId=[Id],@ProductSaleHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Product Sale'

-- Transaction: Inventory Debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , @InventoryCOAId as [COAId]
		   , @InventoryHeadCode as [COA]
		   --,(SELECT top 1 'Inventory credit For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,'Inventory credit For Invoice No. '+CONVERT(nvarchar(50),i.Id) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Customer debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		   ,(SELECT top 1 'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id)
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   ,@ProductSaleCOAId as [COAId]
		   ,@ProductSaleHeadCode as [COA]
		   ,(SELECT top 1 'Sale Income For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		   --,(SELECT top 1 'Sale Income For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		   ,(SELECT top 1 @PaymentAccountName+' in Sale for Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		    --,(SELECT top 1 'Customer credit for Paid Amount For . '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		    --,(SELECT top 1 'Customer. '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]	
			,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
GO
ALTER TABLE [dbo].[Sales] ENABLE TRIGGER [OnSalesAddTransactions]
GO
/****** Object:  Trigger [dbo].[OnSalesUpdateUpdateTransactions]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnSalesUpdateUpdateTransactions]
ON [dbo].[Sales]
AFTER UPDATE   
AS
BEGIN
SET NOCOUNT ON;  
DECLARE @DeletedVNo as bigint

select top 1 @DeletedVNo=d.[VNo]from deleted d
delete from [dbo].[Transactions] where [VNo]=@DeletedVNo

DECLARE @IsActive AS INT
DECLARE @CustomerId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float
DECLARE @InventoryCOAId as bigint
DECLARE @InventoryHeadCode as bigint

DECLARE @ProductSaleCOAId as bigint
DECLARE @ProductSaleHeadCode as bigint

DECLARE @PaymentAccountName as NVARCHAR(100)
select top 1 @CustomerId=i.[CustomerId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount] 
,@PaymentAccountName=(SELECT top 1 [HeadName] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]),@IsActive=i.[IsActive]
from inserted i

IF (@IsActive>0)
BEGIN
select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ProductSaleCOAId=[Id],@ProductSaleHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Product Sale'

-- Transaction: Inventory Debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , @InventoryCOAId as [COAId]
		   , @InventoryHeadCode as [COA]
		   --,(SELECT top 1 'Inventory credit For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,'Inventory credit For Invoice No. '+CONVERT(nvarchar(50),i.Id) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Customer debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		   ,(SELECT top 1 'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id)
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   ,@ProductSaleCOAId as [COAId]
		   ,@ProductSaleHeadCode as [COA]
		   ,(SELECT top 1 'Sale Income For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		   --,(SELECT top 1 'Sale Income For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		   ,(SELECT top 1 @PaymentAccountName+' in Sale for Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		    --,(SELECT top 1 'Customer credit for Paid Amount For . '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		    --,(SELECT top 1 'Customer. '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]	
			,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
END;

GO
ALTER TABLE [dbo].[Sales] ENABLE TRIGGER [OnSalesUpdateUpdateTransactions]
GO
/****** Object:  Trigger [dbo].[OnServiceInvoicesAddTransactions]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnServiceInvoicesAddTransactions]
ON [dbo].[ServiceInvoices]
AFTER INSERT   
AS
BEGIN
DECLARE @CustomerId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float

--DECLARE @InventoryCOAId as bigint
--DECLARE @InventoryHeadCode as bigint

DECLARE @ServiceIncomeCOAId as bigint
DECLARE @ServiceIncomeHeadCode as bigint

DECLARE @PaymentAccountName as NVARCHAR(100)


select top 1 @CustomerId=i.[CustomerId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount]
,@PaymentAccountName=(SELECT top 1 [HeadName] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount])
from inserted i

--select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ServiceIncomeCOAId=[Id],@ServiceIncomeHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Service Income'
-- Transaction: Customer debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		   ,(SELECT top 1 'Customer debit for Service No. '+CONVERT(nvarchar(50),i.Id) +' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		   
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   ,@ServiceIncomeCOAId as [COAId]
		   ,@ServiceIncomeHeadCode as [COA]
		   --,(SELECT top 1 'Service Income For Service No. '+CONVERT(nvarchar(50),i.Id)+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,'Service Income For Service No. '+CONVERT(nvarchar(50),i.Id) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		    --,(SELECT top 1 'Customer credit for Paid Amount For . '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
			 ,(SELECT top 1 @PaymentAccountName+' for Service No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		    --,(SELECT top 1 'Customer. '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
			,(SELECT top 1 'Customer credit for Paid Amount For Service No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
GO
ALTER TABLE [dbo].[ServiceInvoices] ENABLE TRIGGER [OnServiceInvoicesAddTransactions]
GO
/****** Object:  Trigger [dbo].[OnServiceInvoicesUpdateUpdateTransactions]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnServiceInvoicesUpdateUpdateTransactions]
ON [dbo].[ServiceInvoices]
AFTER UPDATE   
AS
BEGIN
SET NOCOUNT ON;  
DECLARE @DeletedVNo as bigint

select top 1 @DeletedVNo=d.[VNo]from deleted d
delete from [dbo].[Transactions] where [VNo]=@DeletedVNo


DECLARE @IsActive AS INT
DECLARE @CustomerId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float

--DECLARE @InventoryCOAId as bigint
--DECLARE @InventoryHeadCode as bigint

DECLARE @ServiceIncomeCOAId as bigint
DECLARE @ServiceIncomeHeadCode as bigint

DECLARE @PaymentAccountName as NVARCHAR(100)


select top 1 @CustomerId=i.[CustomerId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount]
,@PaymentAccountName=(SELECT top 1 [HeadName] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]),@IsActive=i.[IsActive]
from inserted i


IF (@IsActive>0)
BEGIN
--select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ServiceIncomeCOAId=[Id],@ServiceIncomeHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Service Income'
-- Transaction: Customer debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		   ,(SELECT top 1 'Customer debit for Service No. '+CONVERT(nvarchar(50),i.Id) +' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		   
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   ,@ServiceIncomeCOAId as [COAId]
		   ,@ServiceIncomeHeadCode as [COA]
		   --,(SELECT top 1 'Service Income For Service No. '+CONVERT(nvarchar(50),i.Id)+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,'Service Income For Service No. '+CONVERT(nvarchar(50),i.Id) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		    --,(SELECT top 1 'Customer credit for Paid Amount For . '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
			 ,(SELECT top 1 @PaymentAccountName+' for Service No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Service' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		    --,(SELECT top 1 'Customer. '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
			,(SELECT top 1 'Customer credit for Paid Amount For Service No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
END;


GO
ALTER TABLE [dbo].[ServiceInvoices] ENABLE TRIGGER [OnServiceInvoicesUpdateUpdateTransactions]
GO
/****** Object:  Trigger [dbo].[OnSupplierAddCOA]    Script Date: 7/7/2022 8:29:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnSupplierAddCOA]
ON [dbo].[Suppliers]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive])
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Account Payable'),
		    (SELECT TOP 1 ([HeadCode] * 1000000)+1 FROM [dbo].[Accounts] where [HeadName] ='Employee Ledger')
		   ) as HeadCode,
		    Convert(nvarchar(100),i.Id)+' - '+ i.[CompanyName] as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Account Payable') as [ParentHead],
		   'Account Payable' as [PHeadName]
		   ,'3' as [HeadLevel]
           ,'L' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL [CustomerId]
           ,i.Id [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Suppliers] ENABLE TRIGGER [OnSupplierAddCOA]
GO
