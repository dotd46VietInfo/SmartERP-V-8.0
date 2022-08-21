using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace SmartERP.Distributor.Entities
{
    [ConnectionKey("Default"), Module("Distributor"), TableName("[dbo].[Distributor]")]
    [DisplayName("Distributor"), InstanceName("Distributor")]
    //[ReadPermission(PermissionKeys.Sales.View)]
    //[InsertPermission(PermissionKeys.Sales.Create)]
    //[UpdatePermission(PermissionKeys.Sales.Update)]
    //[DeletePermission(PermissionKeys.Sales.Delete)]
    public class DistributorsRow: SmartERP.LoggingRow<DistributorsRow.RowFields>, IIdRow, INameRow
    {

        public DistributorsRow()
        {
        }

        public DistributorsRow(RowFields fields)
            : base(fields)
        {
        }

        [DisplayName("Id"), Identity, IdProperty, Unique]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(250), NotNull,QuickSearch, NameProperty]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Size(4000), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Avatar"), Size(500), QuickSearch]
        public String Avatar
        {
            get { return Fields.Avatar[this]; }
            set { Fields.Avatar[this] = value; }
        }
        [DisplayName("Link"), Size(500), QuickSearch]
        public String Link
        {
            get { return Fields.Link[this]; }
            set { Fields.Link[this] = value; }
        }
        public class RowFields : SmartERP.LoggingRowFields
        {
            public Int64Field Id;
            public StringField Name;
            public StringField Description;
            public StringField Avatar;
            public StringField Link;
        }
    }
}
