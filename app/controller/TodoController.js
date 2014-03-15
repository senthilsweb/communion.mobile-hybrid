Ext.define('Communion.controller.TodoController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            todoDtls: 'todoview # MyTodos'
        },
        control: {
            'button[action=btnTodoClick]': { tap: "ShowTodo" },
            'button[action=btnAddTodo]': { tap: "AddTodo" },
            'button[action=btncreatesubmit]': { tap: "AddMoreTodo" },
            'button[action=btnhome]': { tap: "showdashboard" }
        }
    },
    ShowTodo: function () {
        var count = Ext.getStore('TodoStore').getData().length;
        if (count >= 1) {
            //if(networkState != Connection.NONE || networkState != Connection.UNKNOWN){
            var todoValue = Ext.getStore('TodoStore').getData().all[0].getData();
            var htmlValue = [

             '<div class="vm_dvList"></i><h4 class="vm_txtName"><span class="vm_listHeader"><label>' + todoValue.Name +'</label></span><span class="vm_dte"><tpl if="Date == null">NULL</tpl><tpl if="Date != \'null\'">' + todoValue.Date +'</tpl></span></h4>' 
                               
                ];
            var todo = Ext.create('Communion.view.TodoView');
            Ext.Viewport.setActiveItem(todo);   
            Ext.getCmp('MyTodos').setHtml(htmlValue);
//            Ext.getCmp('MyTodos').hide();
//            Ext.getCmp('editButton').show();
            //}
            /*else{
            Ext.Msg.alert("Error!","No Network connection!"+networkState);
            }*/
        }
        else {
            //if(networkState != Connection.NONE || networkState != Connection.UNKNOWN){
            var todoView = Ext.create('Ext.Panel', {
                cls: 'background',
                items: [
                        {
                            xtype: 'titlebar',
                            docked: 'top', //placed at the top
                            title: 'Todos',
                            //cls: 'topToolbar',
                            //ui: 'dark',
                            items: [{
                                itemId: 'homeButton',
                                hidden: false,
                                iconMask: true,
                                iconCls: 'home',

                                action: 'btnhome',
                                //align: 'left',
                                ui: 'confirm'
                            }, {
                                itemId: 'addBtn',
                                action: 'btnAddTodo',
                                hidden: false,
                                //docked: 'right',
                                //cls:'rightalign',
                                iconMask: true,
                                iconCls: 'add',
                                align: 'right',
                                ui: 'confirm'
                            }
                      ]
                        },
                        {
                            xtype: 'footer',
                            docked: 'bottom'
                        },
                        {
                            xtype: 'panel',
                            html: '<div>'
                                + '<Table class="table table-condensed table-striped">'
                                + '<Tr>'
                                + '<Th>No ToDo details added</Th>'
                                + '</Tr>'

                                + '<Tr>'
                                + '<Td>Please click add button to add ToDos.</Td>'
                                + '</Tr>'
                                + '</Table>'
                                + '</div>'
                        }
                    ]
            });
            Ext.Viewport.setActiveItem(todoView);
           //Ext.getCmp('addBtn').show();
//            Ext.getCmp('editButton').hide();
            //}
            /*else{
            Ext.Msg.alert("Error!","No Network connection!");
            }*/
        }
    },
    showdashboard: function () {


        Ext.Viewport.setActiveItem({ xtype: 'navigation' });

    },
    AddTodo: function () {


        Ext.Viewport.setActiveItem({ xtype: 'todocreateview' });

    },

    AddMoreTodo: function (btn) {

        var formVals = btn.up('formpanel'), err = 0,
            vals = btn.up('formpanel').getValues();
        var store = Ext.getStore('TodoStore');


            store.add(vals);
            store.sync();
            //Ext.Msg.alert("Message!", "Successfully Saved");
            Ext.Viewport.setActiveItem({ xtype: 'todoview' });

    }


});