import {
  PanelBody,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import React, { Fragment, useState } from "react";
import {
  Background,
  BoxControl,
  ColorControl,
  ColorsControl,
  Device,
  ShadowControl,
  Typography,
} from "../../../../bpl-tools/Components";
import { BorderControl } from "../../../../bpl-tools/Components/Deprecated";
import { emUnit, pxUnit } from "../../../../Components/utils/options";
import { animationOptions, defaultBoxValue } from "../../utils/functions";
import { updateData } from "../../utils/helper";
import Tab from "../Panel/Tab/Tab";
import MessageStyles from "./MessageStyles";

const Styles = ({ attributes, setAttributes, device }) => {
  const { form, formInput, labels, button, errorMessage } = attributes;
  const [hover, setHover] = useState("normal");
  return (
    <Fragment>
      <PanelBody title={__("Form", "login-form-block")} initialOpen={true}>
        <UnitControl
          label={__("Field Gap", "login-form-block")}
          labelPosition="left"
          value={form.fieldGap}
          onChange={(value) =>
            setAttributes({ form: updateData(form, "fieldGap", value) })
          }
          units={[pxUnit(), emUnit()]}
        />

        <div style={{ position: "relative", marginTop: "10px" }}>
          <Device style={{ position: "absolute", left: "55px", top: "-4px" }} />
          <BoxControl
            label={__("Padding", "login-form-block")}
            resetValues={defaultBoxValue}
            values={form.padding[device]}
            onChange={(value) =>
              setAttributes({
                form: updateData(form, "padding", value, device),
              })
            }
          />
        </div>

        <div style={{ position: "relative" }}>
          <Device style={{ position: "absolute", left: "55px", top: "-4px" }} />
          <BoxControl
            label={__("Margin", "login-form-block")}
            resetValues={defaultBoxValue}
            values={form.margin[device]}
            onChange={(value) =>
              setAttributes({ form: updateData(form, "margin", value, device) })
            }
          />
        </div>

        <BorderControl
          className="mt20"
          label={__("Border", "login-form-block")}
          value={form.border}
          onChange={(val) =>
            setAttributes({ form: updateData(form, "border", val) })
          }
          defaults={{ width: "0px" }}
        />

        <ColorControl
          label={__("Links Color", "login-form-block")}
          value={form.linkColor}
          onChange={(value) =>
            setAttributes({ form: updateData(form, "linkColor", value) })
          }
        />

        <ColorControl
          label={__("Links Hover Color", "login-form-block")}
          value={form.linkHovColor}
          onChange={(value) =>
            setAttributes({ form: updateData(form, "linkHovColor", value) })
          }
        />

        <Background
          label={__("Background", "login-form-block")}
          value={form.background}
          onChange={(value) =>
            setAttributes({ form: updateData(form, "background", value) })
          }
        />

        <ShadowControl
          className="mt20"
          label={__("Shadow", "login-form-block")}
          value={form.shadow}
          onChange={(value) =>
            setAttributes({ form: updateData(form, "shadow", value) })
          }
        />
      </PanelBody>

      <PanelBody title={__("Label", "login-form-block")} initialOpen={false}>
        <UnitControl
          label={__("Spacing", "login-form-block")}
          labelPosition="left"
          value={labels.space}
          onChange={(value) =>
            setAttributes({ labels: updateData(labels, "space", value) })
          }
          units={[pxUnit(), emUnit()]}
        />

        <ColorControl
          label={__("Text Color", "login-form-block")}
          value={labels.color}
          onChange={(value) =>
            setAttributes({ labels: updateData(labels, "color", value) })
          }
        />

        <Typography
          label={__("Typography", "login-form-block")}
          value={labels.typography}
          onChange={(value) =>
            setAttributes({ labels: updateData(labels, "typography", value) })
          }
        />
      </PanelBody>

      <PanelBody
        title={__("Input Fields", "login-form-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Text Color", "login-form-block")}
          value={formInput.color}
          onChange={(value) =>
            setAttributes({ formInput: updateData(formInput, "color", value) })
          }
        />

        <Typography
          label={__("Typography", "login-form-block")}
          value={formInput.typography}
          onChange={(value) =>
            setAttributes({
              formInput: updateData(formInput, "typography", value),
            })
          }
        />

        <ColorControl
          label={__("Background", "login-form-block")}
          value={formInput.bgColor}
          onChange={(value) =>
            setAttributes({
              formInput: updateData(formInput, "bgColor", value),
            })
          }
        />

        <BorderControl
          className="mt20"
          label={__("Border", "login-form-block")}
          value={formInput.border}
          onChange={(val) =>
            setAttributes({ formInput: updateData(formInput, "border", val) })
          }
          defaults={{ width: "1px" }}
        />
        {formInput.icon.show && (
          <Fragment>
            <RangeControl
              label={__("Icon Position", "form-input")}
              min={0}
              max={200}
              value={formInput.icon.position}
              onChange={(value) =>
                setAttributes({
                  formInput: updateData(formInput, "icon", value, "position"),
                })
              }
            />
            <RangeControl
              label={__("Icon Size", "login-form-block")}
              value={formInput.icon.size}
              onChange={(value) =>
                setAttributes({
                  formInput: updateData(formInput, "icon", value, "size"),
                })
              }
            />
            <ColorControl
              label={__("Icon Color", "login-form-block")}
              value={formInput.icon.color}
              onChange={(value) =>
                setAttributes({
                  formInput: updateData(formInput, "icon", value, "color"),
                })
              }
            />
          </Fragment>
        )}
      </PanelBody>

      <PanelBody
        title={__("Input Error Message", "login-form-block")}
        initialOpen={false}
      >
        <Typography
          label={__("Typography", "login-form-block")}
          value={errorMessage.typography}
          onChange={(value) =>
            setAttributes({
              errorMessage: updateData(errorMessage, "typography", value),
            })
          }
        />
        <ColorControl
          label={__("Text Color", "login-form-block")}
          value={errorMessage.color}
          onChange={(value) =>
            setAttributes({
              errorMessage: updateData(errorMessage, "color", value),
            })
          }
        />
      </PanelBody>

      <PanelBody title={__("Button", "login-form-block")} initialOpen={false}>
        <Tab
          options={["normal", "hover"]}
          value={hover}
          onChange={(value) => setHover(value)}
        />

        {hover === "normal" && (
          <>
            <Typography
              label={__("Typography", "login-form-block")}
              value={button.typography}
              onChange={(value) =>
                setAttributes({
                  button: updateData(button, "typography", value),
                })
              }
            />

            <ColorsControl
              className="mt20"
              label={__("Colors:", "login-form-block")}
              value={button.colors}
              onChange={(value) =>
                setAttributes({ button: updateData(button, "colors", value) })
              }
              defaults={{ color: "#f9f9f9", bg: "#ffa500" }}
            />

            <br />

            <BoxControl
              label={__("Padding", "login-form-block")}
              values={button.padding}
              resetValues={defaultBoxValue}
              onChange={(value) =>
                setAttributes({ button: updateData(button, "padding", value) })
              }
            />

            <BorderControl
              className="mt20"
              label={__("Border", "login-form-block")}
              value={button.border}
              onChange={(val) =>
                setAttributes({ button: updateData(button, "border", val) })
              }
              defaults={{ radius: "3px" }}
            />

            <ShadowControl
              className="mt20"
              label={__("Shadow:", "login-form-block")}
              value={button.shadow}
              onChange={(value) =>
                setAttributes({ button: updateData(button, "shadow", value) })
              }
            />
          </>
        )}

        {hover === "hover" && (
          <>
            <ColorsControl
              label={__("Colors:", "login-form-block")}
              value={button.hovColors}
              onChange={(value) =>
                setAttributes({
                  button: updateData(button, "hovColors", value),
                })
              }
              defaults={{ color: "#f9f9f9", bg: "#ffa500" }}
            />

            <ColorControl
              label={__("Border Color", "login-form-block")}
              value={button.borderHovColor}
              onChange={(value) =>
                setAttributes({
                  button: updateData(button, "borderHovColor", value),
                })
              }
            />

            <SelectControl
              className="mt20"
              label={__("Animation", "login-form-block")}
              value={button.animation}
              options={animationOptions}
              onChange={(value) =>
                setAttributes({
                  button: updateData(button, "animation", value),
                })
              }
            />
          </>
        )}
      </PanelBody>

      <MessageStyles attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};
export default withSelect((select) => {
  return {
    device: select("core/edit-post")
      .__experimentalGetPreviewDeviceType()
      .toLowerCase(),
  };
})(Styles);
