import { PanelBody, PanelRow, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { Fragment, useState } from 'react';
import { updateData } from '../../utils/helper';

import { Label } from '../../../../Components';
import Device from '../Panel/Device/Device';
import PanelAlign from '../Panel/PanelAlign/PanelAlign';
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight } from '../../utils/icons';
const Settings = ({ attributes, setAttributes }) => {
  const { formInput, labels, button, additional, errorMessage } = attributes;
  const [alignDevice, setAlignDevice] = useState("desktop");

  return (
    <>
      <PanelBody title={__('Labels', 'b-blocks')} initialOpen={true}>
        <ToggleControl
          label={__('Show Label', 'b-blocks')}
          checked={labels.show}
          value={labels.show}
          onChange={(value) =>
            setAttributes({ labels: updateData(labels, 'show', value) })
          }
        />
        {
          labels.show && <Fragment>
            <TextControl label={__("User Name", "b-blocks")} value={labels.username} onChange={(value) => setAttributes({ labels: updateData(labels, "username", value) })} />
            <div style={{ marginTop: "-10px" }}>
              <TextControl label={__("Password", "b-blocks")} value={labels.password} onChange={(value) => setAttributes({ labels: updateData(labels, "password", value) })} />
            </div>
          </Fragment>
        }
      </PanelBody>


      <PanelBody title={__("Placeholder", "b-blocks")} initialOpen={false}>
        <TextControl label={__("User Name", "b-blocks")} value={formInput.username} onChange={(value) => setAttributes({ formInput: updateData(formInput, "username", value) })} />
        <div style={{ marginTop: "-10px" }}>
          <TextControl label={__("Password", "b-blocks")} value={formInput.password} onChange={(value) => setAttributes({ formInput: updateData(formInput, "password", value) })} />
        </div>

      </PanelBody>

      <PanelBody title={__("Elements", "b-blocks")} initialOpen={false}>
        <ToggleControl label={__("Show password view icon", "b-blocks")} checked={formInput.icon.show} value={formInput.icon.show} onChange={(value) => setAttributes({ formInput: updateData(formInput, "icon", value, "show") })} />
      </PanelBody>


      <PanelBody title={__('Submit Button', 'b-blocks')} initialOpen={false}>
        <PanelRow
        >
          <Label className="">{__('Text', 'b-blocks')}</Label>
          <TextControl
            style={{ width: '130px' }}
            value={button.text}
            onChange={(value) =>
              setAttributes({ button: updateData(button, 'text', value) })
            }
          />
        </PanelRow>

        <div style={{ position: "relative" }}>
          <Device  value={alignDevice} onChange={(value) => setAlignDevice(value)} style={{ position: "absolute", left: "72px", top: "3px" }} />
          <PanelAlign label={__("Alignment", "b-blocks")} labelPosition="top" icons={[{ label: "left", value: <FaAlignLeft /> }, { label: "center", value: <FaAlignCenter /> }, { label: "right", value: <FaAlignRight /> }, { label: "justify", value: <FaAlignJustify /> }]} value={button.alignment[alignDevice]} onChange={(value) => setAttributes({ button: updateData(button, "alignment", value, alignDevice) })} />
        </div>
      </PanelBody>


      <PanelBody title={__("Input Error Message","b-blocks")} initialOpen={false}>
        <TextControl label={__("UserName or Email", "b-blocks")} value={errorMessage.username} onChange={(value) => setAttributes({ errorMessage: updateData(errorMessage, "username", value) })} />
        <TextControl label={__("Password", "b-blocks")} value={errorMessage.password} onChange={(value) => setAttributes({ errorMessage: updateData(errorMessage, "password", value) })} />
      </PanelBody>


      <PanelBody title={__("Addition Options", "b-blocks")} initialOpen={false}>
        <TextControl className='mb0' placeholder='https://your-link.com'
          value={additional.loginRedirect}
          onChange={(value) => setAttributes({ additional: updateData(additional, "loginRedirect", value) })}
        />
        <small>{__('If you want to redirect after login, please insert the redirect link; otherwise, leave it blank.', 'b-blocks')}</small>


        <TextControl className='mt20 mb0' placeholder='https://your-link.com'
          value={additional.logoutRedirect}
          onChange={(value) => setAttributes({ additional: updateData(additional, "logoutRedirect", value) })}
        />
        <small>{__('If you want to redirect after logout, please insert the redirect link; otherwise, leave it blank. Ensure that you provide your current website link!', 'b-blocks')}</small>


        <ToggleControl className='mt20' label={__("Lost your password", "b-blocks")} checked={additional.lostPass} value={additional.lostPass}
          onChange={(value) => setAttributes({ additional: updateData(additional, "lostPass", value) })}
        />
        {
          additional.lostPass && <TextControl value={additional.lostPassText} onChange={(value) => setAttributes({ additional: updateData(additional, "lostPassText", value) })} />
        }
        <ToggleControl label={__("Remember Me", "b-blocks")} checked={additional.remember} value={additional.remember}
          onChange={(value) => setAttributes({ additional: updateData(additional, "remember", value) })}
        />
      </PanelBody>
    </>
  );
};

export default Settings;
