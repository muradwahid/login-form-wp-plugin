import React from 'react';
import { getBackgroundCSS, getBorderCSS, getTypoCSS, getMultiShadowCSS, getColorsCSS,getBoxCSS } from "../../../../bpl-tools/utils/getCSS"
const Style = ({ attributes }) => {
  const { cId, formInput, button, form, labels, errorMessage, messages } = attributes;
  const mainWrapper = `#lgfr-login-form-${cId} .login-form-main-wrapper`;
  const formWrapper = `${mainWrapper} .login-form-wrapper`;
  const field = `${formWrapper} .form-field`;
  return (
    <style>{`
    ${getTypoCSS('', labels.typography)?.googleFontLink}
    ${getTypoCSS('', formInput.typography)?.googleFontLink}
    ${getTypoCSS('', errorMessage.typography)?.googleFontLink}
    ${getTypoCSS('', messages.typography)?.googleFontLink}
    ${formWrapper}{
      row-gap: ${form.fieldGap};
      padding:${getBoxCSS(form.padding?.desktop)};
      margin:${getBoxCSS(form.margin?.desktop)};
      ${getBorderCSS(form.border)}
      ${getBackgroundCSS(form.background)};
      box-shadow:${getMultiShadowCSS(form.shadow)};
    }
    ${field} input{
      padding:${getBoxCSS(formInput.padding)};
      color:${formInput.color};
      background-color:${formInput.bgColor};
      ${getBorderCSS(formInput.border)}
      }
      ${getTypoCSS(`${field} input`, formInput.typography).styles}
      ${formWrapper} .login-submitBtn{
        display:flex;
        justify-content:${button.alignment.desktop}
      }
      ${field} .loginForm-errorMessage{
        color:${errorMessage.color} !important;
      }
      ${getTypoCSS(`${field} .loginForm-errorMessage`, errorMessage.typography).styles}
      ${field} .password-inputField .passwordEyeIcon{
        right:${formInput.icon.position}px;
        color:${formInput.icon.color};
        font-size:${formInput.icon.size}px;
      }
      ${formWrapper} .login-submitBtn .submitBtn{
        ${getColorsCSS(button.colors)};
        ${button.alignment.desktop === "justify" && `width:100%`};
        padding:${getBoxCSS(button.padding)};
        ${getBorderCSS(button.border)};
        box-shadow:${getMultiShadowCSS(button.shadow)};
        transition:all 0.3s ease-in-out;
      }
      ${formWrapper} .login-submitBtn .submitBtn:hover{
        ${getColorsCSS(button.hovColors)};
        border-color:${button.borderHovColor};
      }
      ${formWrapper} .login-submitBtn .submitBtn a{
        transition:all 0.3s ease-in-out;
      }
      ${getTypoCSS(`${formWrapper} .login-submitBtn .submitBtn`, button.typography).styles}
      ${formWrapper} .login-submitBtn .submitBtn:hover a{
      }
      ${formWrapper} .login-lostPassword a{
        color:${form.linkColor}
      }
      ${formWrapper} .login-lostPassword a:hover{
        color:${form.linkHovColor}
      }
      ${formWrapper} .form-label{
        padding-bottom: ${labels.space};
        color:${labels.color}
      }
      ${getTypoCSS(`${formWrapper} .form-label`, labels.typography).styles}
      ${getTypoCSS(`${formWrapper} .bpl-success-message`, labels.typography).styles}
      .bpl-success-message{
        color:${messages.success.color.text};
        background:${messages.success.color.bg};
        padding:${getBoxCSS(messages.padding)};
      }
      ${getTypoCSS(`${formWrapper} .lgfr-login-failed-error`, labels.typography).styles}
      .lgfr-login-failed-error{
        color:${messages.error.color.text};
        background:${messages.error.color.bg};
        padding:${getBoxCSS(messages.padding)};

      }
      ${mainWrapper} .form-error-message{
        ${getBackgroundCSS(messages.normal.color.bg)};
        padding:${getBoxCSS(messages.normal.padding)};
        ${getBorderCSS(messages.normal.border)}
      }
      ${mainWrapper} .form-error-message :where(svg,span){
        color:${messages.normal.color.text};
      }


      @media (min-width: 641px) and (max-width: 1024px) {
        ${formWrapper}{
          padding:${getBoxCSS(form.padding?.tablet)};
          margin:${getBoxCSS(form.margin?.tablet)};
        }
        ${formWrapper} .login-submitBtn{
          justify-content:${button.alignment.tablet}
        }
        ${formWrapper} .login-submitBtn .submitBtn{
          ${button.alignment.tablet === "justify" && `width:100%`};
        }
      }

      @media screen and (max-width: 640px) {
        ${formWrapper}{
          padding:${getBoxCSS(form.padding?.mobile)};
          margin:${getBoxCSS(form.margin?.mobile)};
        }
        ${formWrapper} .login-submitBtn{
          justify-content:${button.alignment.mobile}
        }
        ${formWrapper} .login-submitBtn .submitBtn{
          ${button.alignment.mobile === "justify" && `width:100%`};
        }
      }
    `}</style>
  );
};

export default Style;
