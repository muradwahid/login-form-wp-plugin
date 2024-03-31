import { PanelBody, __experimentalBoxControl as BoxControl, SelectControl, PanelRow } from '@wordpress/components';
import React, { Fragment, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { updateData } from '../../utils/helper';
import { inputPaddingReset } from '../../utils/functions';
import { Background, BorderControl, Label, Typography } from '../../../../Components';
import { tostPositionOptions } from '../../utils/options';
import PanelColorControl from '../Panel/PanelColorControl/PanelColorControl';
import Tab from '../Panel/Tab/Tab';

const MessageStyles = ({ attributes, setAttributes }) => {
  const { messages } = attributes;
  const [tab, setTab] = useState("Success");
  return (
    <Fragment>
      <PanelBody title={__("Form Messages","b-blocks")} initialOpen={false}>
        <PanelRow>
          <Label className="mb10">{__("Message Type", "b-blocks")}</Label>
          <SelectControl value={messages.type} options={[{ label: "Normal", value: "normal" }, { label: "Toast", value: "toast" }]} onChange={(value) => setAttributes({ messages: updateData(messages, "type", value) })} />
        </PanelRow>

        {
          messages.type === "normal" && <Fragment>
            <PanelColorControl  label={__("Text Color", "b-blocks")} value={messages.normal.color.text} onChange={(value) => setAttributes({ messages: updateData(messages, "normal", value, "color", "text") })} />
            <Background label={__("Background", "b-blocks")} value={messages.normal.color.bg} onChange={(value) => setAttributes({ messages: updateData(messages, "normal", value, "color", "bg") })} />
            <BoxControl label={__("Padding", "b-blocks")} values={inputPaddingReset} onChange={(value) => setAttributes({ messages: updateData(messages, "normal", value, "padding") })} />


            <BorderControl className='mt20' label={__("Border", "b-blocks")} value={messages.normal.border}
              onChange={val => setAttributes({ messages: updateData(messages, "normal", val, "border") })} defaults={{ width: '1px' }} />
          </Fragment>
        }

        {
          messages.type === "toast" && <Fragment>

            <BoxControl label={__("Padding", "b-blocks")} allowReset={true} resetValues={inputPaddingReset} values={messages.padding} onChange={(value) => setAttributes({ messages: updateData(messages, "padding", value) })} />

            <Typography label={__("Typography", "b-blocks")} value={messages.typography} onChange={(value) => setAttributes({ messages: updateData(messages, "typography", value) })} />

            <SelectControl label={__("Position", "b-blocks")} value={messages.position} onChange={(value) => setAttributes({ messages: updateData(messages, "position", value) })} options={tostPositionOptions} />


            <Tab options={["Success", "Error"]} value={tab} onChange={(value) => setTab(value)} />
            {
              tab === "Success" && <Fragment>
                <Fragment>
                  <PanelColorControl label={__("Text Color", "b-blocks")} value={messages.success.color.text} onChange={(value) => setAttributes({ messages: updateData(messages, "success", value, "color", "text") })} />
                  <PanelColorControl label={__("Background", "b-blocks")} value={messages.success.color.bg} onChange={(value) => setAttributes({ messages: updateData(messages, "success", value, "color", "bg") })} />
                </Fragment>
              </Fragment>
            }
            {
              tab === "Error" && <Fragment>
                <PanelColorControl label={__("Text Color", "b-blocks")} value={messages.error.color.text} onChange={(value) => setAttributes({ messages: updateData(messages, "error", value, "color", "text") })} />
                <PanelColorControl label={__("Background", "b-blocks")} value={messages.error.color.bg} onChange={(value) => setAttributes({ messages: updateData(messages, "error", value, "color", "bg") })} />
              </Fragment>
            }
          </Fragment>
        }
      </PanelBody>
    </Fragment>
  );
};

export default MessageStyles;