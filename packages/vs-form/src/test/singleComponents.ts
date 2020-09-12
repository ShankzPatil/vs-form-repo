import { ISchemaDesign, IComponent, Component, DataType } from '../index'
// import { registerComponent } from '../custom'
// registerComponent(Component.selectext)


export interface IRenderedComp {
  comp: IComponent,
  renderedNodes: string[]
}

const field = 'test'
const label = 'label'

const card: IRenderedComp = {
  comp: {
    type: Component.card,
    children: [],
    label,
  },
  renderedNodes: ['VsCard']
}

const panel: IRenderedComp = {
  comp: {
    type: Component.panel,
    children: [],
    label,
  },
  renderedNodes: ['VsPanelWithLabel']
}

const tabs: IRenderedComp = {
  comp: {
    type: Component.tabs,
    tabs: [],
    label,
  },
  renderedNodes: ['VsTabs']
}

export const tab: IRenderedComp = {
  comp: {
    type: Component.tab,
    children: [],
  },
  renderedNodes: ['VsTab']
}

const exp: IRenderedComp = {
  comp: {
    type: Component.accordion,
    children: [],
    label,
  },
  renderedNodes: ['VsAccordion']
}

const text: IRenderedComp = {
  comp: {
    type: Component.textinput,
    data: {
      field,
      dataType: DataType.string,
    },
    label,
  },
  renderedNodes: ['VsTextInput', 'input']
}

const number: IRenderedComp = {
  comp: {
    type: Component.number,
    data: {
      field,
      dataType: DataType.number,
    },
    label,
  },
  renderedNodes: ['VsNumber', 'input']
}

const select: IRenderedComp = {
  comp: {
    type: Component.select,
    data: {
      field,
      dataType: DataType.number,
      items: []
    },
    label,
  },
  renderedNodes: ['VsSelect', 'input']
}


const date: IRenderedComp = {
  comp: {
    type: Component.date,
    data: {
      field,
      dataType: DataType.date,
    },
    label,
  },
  renderedNodes: ['VsDate', 'input']
}

const radiogroup: IRenderedComp = {
  comp: {
    type: Component.radiogroup,
    data: {
      field,
      dataType: DataType.string,
      items: [{ value: '1', text: 'first' }, { value: '2', text: 'second' }]
    },
    label,
  },
  renderedNodes: ['VsRadioGroup']
}

const checkbox: IRenderedComp = {
  comp: {
    type: Component.checkbox,
    data: {
      field,
      dataType: DataType.boolean,
    },
    label,
  },
  renderedNodes: ['VsCheckbox', 'input']
}

const switch1: IRenderedComp = {
  comp: {
    type: Component.switch,
    data: {
      field,
      dataType: DataType.boolean,
    },
    label,
  },
  renderedNodes: ['VsSwitch', 'input']
}

const checklistbox: IRenderedComp = {
  comp: {
    type: Component.checklistbox,
    data: {
      field,
      dataType: DataType.arrayString,
      items: [{ value: '1', text: 'first' }, { value: '2', text: 'second' }],
    },
    label,
  },
  renderedNodes: ['VsChecklistBox']
}

export const textOnly: IRenderedComp = {
  comp: {
    type: Component.text,
    text: 'dada'
  },
  renderedNodes: ['VsText']
}

const button: IRenderedComp = {
  comp: {
    type: Component.button,
    label,
  },
  renderedNodes: ['VsButton']
}

const iconbutton: IRenderedComp = {
  comp: {
    type: Component.iconbutton,
    icon: 'tractor',
  },
  renderedNodes: ['VsIconButton']
}

const icon: IRenderedComp = {
  comp: {
    type: Component.icon,
    icon: 'tractor',
  },
  renderedNodes: ['VsIcon']
}

const svgicon: IRenderedComp = {
  comp: {
    type: Component.icon,
    svg: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
  },
  renderedNodes: ['VsIcon', 'svg']
}

const mediastatic: IRenderedComp = {
  comp: {
    type: Component.mediastatic,
    props: {
      image: "https://thumbs.dreamstime.com/z/iguana-lizard-reptile-940676.jpg",
      title: "Reptile"
    },
  },
  renderedNodes: ['VsMediaStatic']
}


export const schema: ISchemaDesign = {
  name: 't',
  components: {
    root: {
      type: Component.form,
      children: [],
    }
  }
}

export const componentList: IRenderedComp[] = [card, panel, tabs, tab, exp, text, number, select, date, radiogroup, checkbox, switch1, checklistbox, textOnly, button, iconbutton, icon, svgicon, mediastatic]

