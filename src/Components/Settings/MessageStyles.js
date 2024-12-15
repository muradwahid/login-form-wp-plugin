import { PanelBody, __experimentalBoxControl as BoxControl, SelectControl, PanelRow } from '@wordpress/components';
import React, { Fragment, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { updateData } from '../../utils/helper';
import { inputPaddingReset } from '../../utils/functions';
import { Background, Label, Typography, ColorControl } from '../../../../bpl-tools/Components';
import { BorderControl } from '../../../../bpl-tools/Components/Deprecated';
import { tostPositionOptions } from '../../utils/options';
import Tab from '../Panel/Tab/Tab';

const MessageStyles = ({ attributes, setAttributes }) => {
  const { messages } = attributes;
  const [tab, setTab] = useState("Success");
  return (
    <Fragment>
      <PanelBody title={__("Form Messages","login-form-block")} initialOpen={false}>
        <PanelRow>
          <Label className="mb10">{__("Message Type", "login-form-block")}</Label>
          <SelectControl value={messages.type} options={[{ label: "Normal", value: "normal" }, { label: "Toast", value: "toast" }]} onChange={(value) => setAttributes({ messages: updateData(messages, "type", value) })} />
        </PanelRow>

        {
          messages.type === "normal" && <Fragment>
            <ColorControl  label={__("Text Color", "login-form-block")} value={messages.normal.color.text} onChange={(value) => setAttributes({ messages: updateData(messages, "normal", value, "color", "text") })} />
            <Background label={__("Background", "login-form-block")} value={messages.normal.color.bg} onChange={(value) => setAttributes({ messages: updateData(messages, "normal", value, "color", "bg") })} />
            <BoxControl label={__("Padding", "login-form-block")} values={inputPaddingReset} onChange={(value) => setAttributes({ messages: updateData(messages, "normal", value, "padding") })} />


            <BorderControl className='mt20' label={__("Border", "login-form-block")} value={messages.normal.border}
              onChange={val => setAttributes({ messages: updateData(messages, "normal", val, "border") })} defaults={{ width: '1px' }} />
          </Fragment>
        }

        {
          messages.type === "toast" && <Fragment>

            <BoxControl label={__("Padding", "login-form-block")} allowReset={true} resetValues={inputPaddingReset} values={messages.padding} onChange={(value) => setAttributes({ messages: updateData(messages, "padding", value) })} />

            <Typography label={__("Typography", "login-form-block")} value={messages.typography} onChange={(value) => setAttributes({ messages: updateData(messages, "typography", value) })} />

            <SelectControl label={__("Position", "login-form-block")} value={messages.position} onChange={(value) => setAttributes({ messages: updateData(messages, "position", value) })} options={tostPositionOptions} />


            <Tab options={["Success", "Error"]} value={tab} onChange={(value) => setTab(value)} />
            {
              tab === "Success" && <Fragment>
                <Fragment>
                  <ColorControl label={__("Text Color", "login-form-block")} value={messages.success.color.text} onChange={(value) => setAttributes({ messages: updateData(messages, "success", value, "color", "text") })} />
                  <ColorControl label={__("Background", "login-form-block")} value={messages.success.color.bg} onChange={(value) => setAttributes({ messages: updateData(messages, "success", value, "color", "bg") })} />
                </Fragment>
              </Fragment>
            }
            {
              tab === "Error" && <Fragment>
                <ColorControl label={__("Text Color", "login-form-block")} value={messages.error.color.text} onChange={(value) => setAttributes({ messages: updateData(messages, "error", value, "color", "text") })} />
                <ColorControl label={__("Background", "login-form-block")} value={messages.error.color.bg} onChange={(value) => setAttributes({ messages: updateData(messages, "error", value, "color", "bg") })} />
              </Fragment>
            }
          </Fragment>
        }
      </PanelBody>
    </Fragment>
  );
};

export default MessageStyles;