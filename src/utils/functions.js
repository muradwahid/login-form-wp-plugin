export const defaultBoxValue = { top: "0px", left: "0px", bottom: "0px", right: "0px" }
export const resetBoxValue = { top: "1px", left: "1px", bottom: "1px", right: "1px" }

export const inputPaddingReset = { top: "10px", left: "10px", bottom: "10px", right: "10px" }
export const buttonPaddingReset = { top: "15px", left: "30px", bottom: "15px", right: "30px" }

export const buttonBorderTypes = [{ label: "Default", value: "default" }, {label:"None",value:"none"}, { label: "Solid", value: "solid" }, { label: "Double", value: "double" }, { label: "Dotted", value: "dotted" }, { label: "Dashed", value: "dashed" }, { label: "Groove", value: "groove" }]

export const animationOptions = [{ label: "None", value: "none" }, {label:"Grow",value:"grow"}, { label: "Shrink", value: "shrink" }, { label: "Pulse", value: "pulse" }, { label: "Pulse Grow", value: "pulsegrow" }, { label: "Pulse Shrink", value: "pulseshrink" }, { label: "Push", value: "push" }, { label: "Pop", value: "pop" }, { label: "Bounce In", value: "bouncein" }, { label: "Bounce Out", value: "bounceout" }, { label: "Rotate", value: "rotate" }, { label: "Grow Rotate", value: "growrotate" }, { label: "Float", value: "float" }, { label: "Sink", value: "sink" }, { label: "Bob", value: "bob" }, { label: "Hang", value: "hang" }, { label: "Skew", value: "skew" }, { label: "Skew Forward", value: "skewforward" }, { label: "Skew Backward", value: "skewbackward" }, { label: "Wobble Vertical", value: "wobblevertical" }, { label: "Wobble Horizontal", value: "wobblehorizontal" }, { label: "Wobble To Bottom Right", value: "wobbletobottomright" }, { label: "Wobble To Top Right", value: "wobbletotopright" }, { label: "Wobble Top", value: "wobbletop" }, { label: "Wobble Bottom", value: "wobblebottom" }, { label: "Wobble Skew", value: "wobbleskew" }, { label: "Buzz", value: "buzz" }, { label: "Buzz Out", value: "buzzout" }]

export const getBoxCss = (value) => {
  return `${value?.top} ${value?.right} ${value?.bottom} ${value?.left}`
}