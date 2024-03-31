/* eslint-disable no-unused-vars */
import { useState } from 'react';
const {
  Button,
  ColorPalette,
  Dashicon,
  Dropdown,
} = wp.components;
/**
 * PanelColorControl component.
 *
 * @component
 * @param {Object} props
 * @param {String} [props.label] - Optional
 * @param {String} [props.value]
 * @param {Array} [props.colors] - Optional
 * @param {Function} [props.onChange=() => {}] 
 * @param {Object} [props.style] - Optional
 * @returns {JSX.Element}
 */

const PanelColorControl = (props) => {
  const { label, value, colors, onChange = () => { }, style } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={style}>
      <style>
        {`
          .custom-color-palette-container .custom-color-palette-style{
            width: 25px;
            height: 25px;
            border:1px solid #ccc;
            border-radius: 50%;
          }
          `}
      </style>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: '0' }}>{label}</p>
        <Dropdown
          className="my-container-class-name"
          contentClassName="my-popover-content-classname"
          renderToggle={({ isOpen, onToggle, onClose }) => (
            <div
              onClick={onToggle}
              aria-expanded={isOpen}
              style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
              className='custom-color-palette-container'
            >
              <span
                className="custom-color-palette-style"
                style={{background:value}}
              ></span>
              <Button>
                <Dashicon icon="edit" />
              </Button>
            </div>
          )}
          renderContent={({ isOpen, onToggle, onClose }) => (
            <div style={{ padding: '10px' }}>
              <ColorPalette
                colors={colors}
                value={value}
                onChange={(val) => onChange(val)}
              />
              <div onClick={onClose}></div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PanelColorControl