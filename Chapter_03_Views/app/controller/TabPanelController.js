Ext.define('Chapter3Views.controller.TabPanelController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            button: 'tabpaneldemo > tabpanel'
        },
        control: {
            button: {
                activeitemchange: 'activeitemchange'
            }
        }
    },

    activeitemchange: function (tabpanel, value, oldValue, eOpts) {
        var text = value.getHtml();
        console.log(text);
        Ext.Msg.alert('activeitemchange', text);
    }
});

