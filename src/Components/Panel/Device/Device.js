import { useState, Fragment } from 'react';
import "./style.scss";
/**
 * Device component.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.value] 
 * @param {function} [props.onChange=() => {}] 
 * @param {Object} [props.style]
 * @param {string} [props.className] 
 * @returns {JSX.Element}
 */

const Device = (props) => {
  const {
    value = 'desktop',
    onChange = () => { },
    style,
    className,
  } = props
  const [show, setShow] = useState(false);
  const deviceValue = [
    {
      value: 'desktop',
      icon: 'dashicons-desktop',
    },
    { value: 'tablet', icon: 'dashicons-tablet' },
    { value: 'mobile', icon: 'dashicons-smartphone' },
  ];
  return (
    <Fragment>
      <div style={style} className={className}>
        {!show && (
          <div style={{ display: 'flex' }}>
            <button onClick={() => setShow(true)} className="single-device">
              <span
                className={`dashicons dashicons-${value === 'desktop'
                  ? 'desktop'
                  : value === 'tablet'
                    ? 'tablet'
                    : 'smartphone'
                  }`}
              ></span>
            </button>
          </div>
        )}

        {show && (
          <div style={{ display: 'flex' }}>
            {deviceValue.map(({ value, icon }, i) => (
              <button
                key={i}
                onClick={() => {
                  setShow(false);
                  onChange(value);
                }}
                className="single-device"
              >
                <span className={`dashicons ${icon}`}></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default Device 