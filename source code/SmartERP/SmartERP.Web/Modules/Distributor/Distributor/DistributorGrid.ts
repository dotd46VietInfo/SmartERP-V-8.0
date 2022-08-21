
namespace SmartERP.Distributor {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class DistributorGrid extends Serenity.EntityGrid<DistributorsRow, any> {
        protected getColumnsKey() { return 'Distributor.Distributor'; }
        protected getDialogType() { return DistributorDialog; }
        protected getIsActiveProperty() { return DistributorsRow.isActiveProperty; }
        protected getIdProperty() { return DistributorsRow.idProperty; }
        protected getInsertPermission() { return DistributorsRow.insertPermission; }
        protected getLocalTextPrefix() { return DistributorsRow.localTextPrefix; }
        protected getService() { return DistributorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}