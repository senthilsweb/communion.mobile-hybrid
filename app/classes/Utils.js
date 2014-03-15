Ext.define('Communion.classes.Utils', {
    singleton: true,
    ConvertJsonDateToDDMMYYFormat: function (value) {
        var dx = new Date(parseInt(value.substr(6)));
        var dd = dx.getDate();
        var mm = dx.getMonth() + 1;
        var yy = dx.getFullYear();
        if (dd <= 9) { dd = "0" + dd; }
        if (mm <= 9) { mm = "0" + mm; }
        return dd + "/" + mm + "/" + yy;
    }
});