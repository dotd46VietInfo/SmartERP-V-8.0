
namespace SmartERP.Distributor {

    @Serenity.Decorators.registerClass()
    export class DistributorDialog extends Serenity.EntityDialog<DistributorsRow, any> {
        protected getFormKey() { return DistributorsRow.formKey; }
        protected getIdProperty() { return DistributorsRow.idProperty; }
        protected getLocalTextPrefix() { return DistributorsRow.localTextPrefix; }
        protected getNameProperty() { return DistributorsRow.nameProperty; }
        protected getService() { return DistributorService.baseUrl; }
        protected getDeletePermission() { return DistributorsRow.deletePermission; }
        protected getInsertPermission() { return DistributorsRow.insertPermission; }
        protected getUpdatePermission() { return DistributorsRow.updatePermission; }

        protected form = new DistributorForm(this.idPrefix);


    }
}