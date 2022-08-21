
namespace SmartERP.Distributor.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Distributor.Distributor")]
    [BasedOnRow(typeof(Entities.DistributorsRow), CheckNames = true)]
    public class DistributorForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public String Avatar { get; set; }
        public String Link { get; set; }
    }
}