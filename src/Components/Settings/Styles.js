import { PanelBody, RangeControl, __experimentalBoxControl as BoxControl, SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment, useState } from 'react';
import { updateData } from '../../utils/helper';
import { animationOptions, defaultBoxValue } from '../../utils/functions';
import { Background, BorderControl, ColorsControl, MultiShadowControl, Typography } from "../../../../Components"
import MessageStyles from './MessageStyles';
import { emUnit, pxUnit } from '../../../../Components/utils/options';
import Device from '../Panel/Device/Device';
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
import Tab from '../Panel/Tab/Tab';

const Styles = ({ attributes, setAttributes }) => {
  const { form, formInput, labels, button, errorMessage } = attributes;
  const [formPaddingDevice, setFormPaddingDevice] = useState("desktop");
  const [formMarginDevice, setFormMarginDevice] = useState("desktop");
  const [hover, setHover] = useState("normal");
  return (
    <Fragment>
      <PanelBody title={__("Form", "b-blocks")} initialOpen={true}>
        <UnitControl label={__('Field Gap', "b-blocks")} labelPosition='left' value={form.fieldGap} onChange={(value) => setAttributes({ form: updateData(form, "fieldGap", value) })} units={[pxUnit(), emUnit()]} />

        <div style={{ position: "relative", marginTop: "10px" }}>
          <Device style={{ position: "absolute", left: "55px", top: "-4px" }} value={formPaddingDevice} onChange={(value) => setFormPaddingDevice(value)} />
          <BoxControl label={__("Padding", "b-blocks")} resetValues={defaultBoxValue} values={form.padding[formPaddingDevice]} onChange={(value) => setAttributes({ form: updateData(form, "padding", value, formPaddingDevice) })} />
        </div>

        <div style={{ position: "relative" }}>
          <Device style={{ position: "absolute", left: "55px", top: "-4px" }} value={formMarginDevice} onChange={(value) => setFormMarginDevice(value)} />
          <BoxControl label={__("Margin", "b-blocks")} resetValues={defaultBoxValue} values={form.margin[formMarginDevice]} onChange={(value) => setAttributes({ form: updateData(form, "margin", value, formMarginDevice) })} />
        </div>

        <BorderControl className='mt20' label={__("Border", "b-blocks")} value={form.border} onChange={val => setAttributes({ form: updateData(form, "border", val) })} defaults={{ width: '0px' }} />

        <PanelColorControl label={__("Links Color", "b-blocks")} value={form.linkColor} onChange={(value) => setAttributes({ form: updateData(form, "linkColor", value) })} />

        <PanelColorControl label={__("Links Hover Color", "b-blocks")} value={form.linkHovColor} onChange={(value) => setAttributes({ form: updateData(form, "linkHovColor", value) })} />

        <Background label={__("Background", "b-blocks")} value={form.background} onChange={(value) => setAttributes({ form: updateData(form, "background", value) })} />

        <MultiShadowControl className='mt20' label={__("Shadow", "b-blocks")} value={form.shadow} onChange={(value) => setAttributes({ form: updateData(form, "shadow", value) })} />
      </PanelBody>


      <PanelBody title={__("Label", "b-blocks")} initialOpen={false}>
        <UnitControl label={__("Spacing", "b-blocks")} labelPosition='left' value={labels.space} onChange={(value) => setAttributes({ labels: updateData(labels, "space", value) })} units={[pxUnit(), emUnit()]} />

        <PanelColorControl label={__("Text Color", "b-blocks")} value={labels.color} onChange={(value) => setAttributes({ labels: updateData(labels, "color", value) })} />

        <Typography label={__("Typography", "b-blocks")} value={labels.typography} onChange={(value) => setAttributes({ labels: updateData(labels, "typography", value) })} />
      </PanelBody>


      <PanelBody title={__("Input Fields", "b-blocks")} initialOpen={false}>
        <PanelColorControl label={__("Text Color", "b-blocks")} value={formInput.color} onChange={(value) => setAttributes({ formInput: updateData(formInput, "color", value) })} />

        <Typography label={__("Typography", "b-blocks")} value={formInput.typography} onChange={(value) => setAttributes({ formInput: updateData(formInput, "typography", value) })} />

        <PanelColorControl label={__("Background", "b-blocks")} value={formInput.bgColor} onChange={(value) => setAttributes({ formInput: updateData(formInput, "bgColor", value) })} />

        <BorderControl className='mt20' label={__("Border", "b-blocks")} value={formInput.border} onChange={val => setAttributes({ formInput: updateData(formInput, "border", val) })} defaults={{ width: '1px' }} />
        {
          formInput.icon.show && <Fragment>
            <RangeControl label={__("Icon Position", "form-input")} min={0} max={200} value={formInput.icon.position} onChange={(value) => setAttributes({ formInput: updateData(formInput, "icon", value, "position") })} />
            <RangeControl label={__("Icon Size", "b-blocks")} value={formInput.icon.size} onChange={(value) => setAttributes({ formInput: updateData(formInput, "icon", value, "size") })} />
            <PanelColorControl label={__("Icon Color", "b-blocks")} value={formInput.icon.color} onChange={(value) => setAttributes({ formInput: updateData(formInput, "icon", value, "color") })} />
          </Fragment>
        }

      </PanelBody>


      <PanelBody title={__("Input Error Message", "b-blocks")} initialOpen={false}>
        <Typography label={__("Typography", "b-blocks")} value={errorMessage.typography} onChange={(value) => setAttributes({ errorMessage: updateData(errorMessage, "typography", value) })} />
        <PanelColorControl label={__("Text Color", "b-blocks")} value={errorMessage.color} onChange={(value) => setAttributes({ errorMessage: updateData(errorMessage, "color", value) })} />
      </PanelBody>


      <PanelBody title={__("Button", "b-blocks")} initialOpen={false}>
        <Tab options={["normal", "hover"]} value={hover} onChange={(value) => setHover(value)} />

        {hover === "normal" && <>
          <Typography label={__("Typography", "b-blocks")} value={button.typography} onChange={(value) => setAttributes({ button: updateData(button, "typography", value) })} />

          <ColorsControl className='mt20' label={__('Colors:', 'b-blocks')} value={button.colors} onChange={(value) => setAttributes({ button: updateData(button, "colors", value) })} defaults={{ color: "#f9f9f9", bg: "#ffa500" }} />

          <br />

          <BoxControl label={__("Padding", "b-blocks")} values={button.padding} resetValues={defaultBoxValue} onChange={(value) => setAttributes({ button: updateData(button, "padding", value) })} />

          <BorderControl className='mt20' label={__("Border", "b-blocks")} value={button.border} onChange={val => setAttributes({ button: updateData(button, "border", val) })} defaults={{ radius: '3px' }} />

          <MultiShadowControl className='mt20' label={__('Shadow:', 'b-blocks')} value={button.shadow} onChange={(value) => setAttributes({ button: updateData(button, "shadow", value) })} />
        </>}


        {hover === "hover" && <>
          <ColorsControl label={__('Colors:', 'b-blocks')} value={button.hovColors} onChange={(value) => setAttributes({ button: updateData(button, "hovColors", value) })} defaults={{ color: "#f9f9f9", bg: "#ffa500" }} />

          <PanelColorControl label={__("Border Color", "b-blocks")} value={button.borderHovColor} onChange={(value) => setAttributes({ button: updateData(button, "borderHovColor", value) })} />

          <SelectControl className='mt20' label={__("Animation", "b-blocks")} value={button.animation} options={animationOptions} onChange={(value) => setAttributes({ button: updateData(button, "animation", value) })} />
        </>}
      </PanelBody>


      <MessageStyles attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};

export default Styles;
