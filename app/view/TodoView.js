Ext.define("vmlabs.view.TodoView", {
    extend: "Ext.form.Panel",
    xtype: 'todoview',
//    requires: [
//        'vmlabs.store.TodoStore',
//        'Ext.dataview.List'],

    config: {
        cls: 'whiteBackground',
        layout: 'fit',
        items: [

         {
             xtype: 'titlebar',
             docked: 'top', //placed at the top
             title: 'My Todos',
             cls: 'topToolbar',
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
                      id: 'addBtn',
                      action: 'btnAddTodo',
                      hidden: false,
                      //docked:'right',
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
                xtype: 'list',
                title: 'My Todos',
                //id: 'id2',
                styleHtmlContent: true,
                store: 'TodoStore',
                grouped: true,
                
                //itemTpl: "{Name}",
                //width: '50em',
                //height: '60em',
                //onItemDisclosure: true,

                itemTpl: '{Name}'
                //itemTpl:

                            
                    //'<div class="vm_dvList"></i><h4 class="vm_txtName"><span class="vm_listHeader"><span>{Name}</span></span><span class="vm_dte"><tpl if="Date == null">NULL</tpl></span></h4>' 

                     //'<div class="vm_subDesc">{Description}</div></div></div>'

                    
                    
                
            }
        ]
    }

});