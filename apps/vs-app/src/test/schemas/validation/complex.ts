import { ISchemaDesign, Component, DataType, ButtonAction } from '@vs-form/vs-form'

const schema: ISchemaDesign = {
  name: 'complexSchema',
  label: 'Tabs',
  components: {
    root: {
      type: Component.panel,
      children: ['tabs', 'btnOk', 'btnCancel'],
    },
    tabs: {
      type: Component.tabs,
      label: 'Tab',
      tabs: ['tab0', 'tab1', 'tab2'],
    },
    tab0: {
      type: Component.tab,
      label: 'Containers',
      icon: ['contain'],
      children: ['text2']
    },
    contain: {
      type: Component.icon,
      svg: 'M19,2.8V6L19,9.2C19,9.5 18.7,9.8 18.4,9.7C18.4,9.7 14.5,7.1 10,7.1V9.5H10.2C10.7,9.5 11.2,9.7 11.4,10.1L12.7,11.9C12.9,12.1 13,12.4 13,12.6V20.6C13,21.3 12.3,22 11.5,22H6.5C5.7,22 5,21.4 5,20.6V12.6C5,12.3 5.1,12.1 5.3,11.9L6.6,10.1C6.9,9.7 7.3,9.5 7.8,9.5H8V8C7.6,8.5 7,8.8 6.4,8.8C5.1,8.8 4,7.5 4,6C4,4.5 5.1,3.2 6.4,3.2C7,3.3 7.6,3.6 8,4V2.6H10V5C14.5,5 18.4,2.4 18.4,2.4C18.7,2.3 19,2.5 19,2.8Z',
    },
    tab1: {
      type: Component.tab,
      tooltip: 'Tab with subsschema',
      label: 'Address',
      icon: 'account',
      children: ['customerAddress']
    },
    tab2: {
      type: Component.tab,
      label: 'Billing address',
      icon: 'credit-card',
      children: ['exp']
    },
    exp: {
      type: Component.accordion,
      children: ['exp1'],
      label: 'Accordion',
    },
    exp1: {
      type: Component.accordion,
      children: ['text1'],
      label: 'Accordion',
    },
    text2: {
      type: Component.textinput,
      data: {
        field: 'text2',
        dataType: DataType.string,
        validations: {
          required: true
        }
      },
      label: 'Text'
    },
    text1: {
      type: Component.textinput,
      data: {
        field: 'text',
        dataType: DataType.string,
        validations: {
          required: true
        }
      },
      label: 'Text'
    },
    customerAddress: {
      type: Component.subschema,
      data: {
        field: 'customerAddress',
        dataType: DataType.object
      },
      schemaName: 'address',
      label: 'Customer Address'
    },
    btnOk: {
      type: Component.button,
      tooltip: 'Click to save',
      disabled: false,
      action: ButtonAction.save,
      gridItem: {
        md: 2
      },
    },
    btnCancel: {
      type: Component.button,
      action: ButtonAction.cancel,
      gridItem: {
        md: 2
      },
    },

  }
}

export default schema
