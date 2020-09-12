import * as React from 'react'
import Accordion, { AccordionProps as MuiAccordionProps } from '@material-ui/core/Accordion'
import AccordionSummary, { AccordionSummaryProps as MuiAccordionSummaryProps } from '@material-ui/core/AccordionSummary'
import AccordionDetails, { AccordionDetailsProps as MuiAccordionDetailsProps } from '@material-ui/core/AccordionDetails'
import { TypographyProps as MuiTypographyProps } from '@material-ui/core/Typography'
import { isUndefined } from '../../schemaManager/lodash'
import BaseIcon from '../../baseComponents/BaseIcon'
import { chevronDown } from '../../common/svgIcons'
import classNames from 'classnames'

import * as types from '../../schemaManager/types'
import { ItemProps } from '../../common/propTypes'

// import Icon from '../generalComponents/Icon'
import Text from '../../common/Text'

export const styles = {
  root: {
    width: '100%'
  },
  dense: {
    padding: '5px',
  }
}

export interface IAccordionState {
  expanded: boolean
}

export default class VsAccordion extends React.Component<ItemProps, IAccordionState> {
  private get comp(): types.IComponentAccordion { return this.props.comp as types.IComponentAccordion }
  // @ts-ignore
  private AccordionProps: MuiAccordionProps = {}
  private AccordionSummaryProps: MuiAccordionSummaryProps = {}
  private AccordionDetailsProps: MuiAccordionDetailsProps = {}
  private TypographyProps: MuiTypographyProps = {}
  // private IconProps: MuiIconProps = {}
  private componentEventParams: types.IComponentEventParams = this.props.schemaManager.getComponentEventParams(this.props.comp)

  constructor(props: ItemProps) {
    super(props)
    this.initProps()
    this.state = {
      expanded: !!(this.comp.expanded)
    }
  }

  public render() {
    return (
      <Accordion {...this.AccordionProps} expanded={this.state.expanded} >
        <AccordionSummary {...this.AccordionSummaryProps}>
          <Text text={this.comp.label as string} {...this.TypographyProps} />
        </AccordionSummary>
        <AccordionDetails {...this.AccordionDetailsProps}>{this.props.children}</AccordionDetails>
      </Accordion>
    )
  }

  public changeExpanded = (_event: object, expanded: boolean) => {
    let canChange = true
    const params = { ...this.componentEventParams, expanded }
    if (this.comp.onBeforeChange) {
      const p = { ...params, canChange: true }
      this.comp.onBeforeChange(p)
      canChange = p.canChange
    }
    if (canChange) {
      this.setState({ expanded })
      this.props.schemaManager.changeExpanded(this.comp, expanded, !!this.props.designMode)
      if (this.comp.onChange) {
        this.comp.onChange(params)
      }
    }
  }

  private initProps() {

    const { AccordionSummaryProps, AccordionDetailsProps, TypographyProps, IconProps, ...AccordionProps } = this.comp.props!
    if (AccordionProps) { this.AccordionProps = AccordionProps }
    if (AccordionSummaryProps) { this.AccordionSummaryProps = AccordionSummaryProps }
    if (AccordionDetailsProps) { this.AccordionDetailsProps = AccordionDetailsProps }
    if (TypographyProps) { this.TypographyProps = TypographyProps }
    this.AccordionProps.onChange = this.changeExpanded
    this.AccordionProps.className = classNames(this.props.classes.root, this.AccordionProps.className)
    if (this.comp.dense) {
      this.AccordionDetailsProps.className = classNames(this.props.classes.dense, this.AccordionDetailsProps.className)
    }
    this.AccordionSummaryProps.expandIcon = <BaseIcon svg={chevronDown} />
    if (isUndefined(this.AccordionProps.expanded)) {
      this.AccordionProps.expanded = false
    }
  }
}
