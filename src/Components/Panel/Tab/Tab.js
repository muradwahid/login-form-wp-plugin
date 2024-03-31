import React from 'react';


/**
 * Tab component.
 *
 * @component
 * @param {Object} props
 * @param {Array} [props.options]
 * @param {Function} [props.onChange=() => {}] -Optional 
 * @param {String} [props.value] -Optional
 * @param {Number} [props.padding] -Optional
 * @returns {JSX.Element}
 */


const Tab = (props) => {
  const { options, onChange = () => { }, value, padding = 4 } = props;
  return (
    <>
      <style>
        {`
          .includeExclude {
            display: flex;
            justify-content: space-between;
            border: 1px solid #ccc;
            margin:8px 0px;
          }
          .isActive-include {
            background: #d7d7d7;
          }
          .single-includeExclude {
            display: flex;
            width: 100%;
            justify-content: center;
            transition: background 0.2s ease-in-out;
            cursor: pointer;
          }
          .single-includeExclude p {
              margin: 0;
              padding: ${padding}px 0;
            }
          .single-includeExclude-hover:hover {
            background: #ebebeb;
          }
          `}
      </style>
      <div className="includeExclude">
        {options?.map((option, i) => (
          <div
            key={i}
            onClick={() => onChange(option)}
            className={`single-includeExclude ${
              value === option
                ? 'isActive-include'
                : 'single-includeExclude-hover'
            }`}
          >
            <p style={{ textTransform: 'capitalize' }}>{option}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab