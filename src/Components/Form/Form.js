import React, { Fragment, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosEye, IoIosEyeOff } from '../../utils/icons';
import ResetForm from './ResetForm';
// const Toaster = {}
const Form = ({ attributes, nonce }) => {
  const { formInput, labels, button, additional, errorMessage, messages } = attributes;
  const [showPass, setShowPass] = useState(false);
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [formType, setFormType] = useState("loginform");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const handleLoginForm = async (e) => {
    e.preventDefault()
    setBtnDisabled(true)
    setFormErrorMessage("")
    const form = e.target;
    const userName = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;
    if (!userName) {
      setErrorUserName(true)
      setBtnDisabled(false)
    } else if (userName) {
      setErrorUserName(false)
    }
    if (!password) {
      setErrorPassword(true)
      setBtnDisabled(false)
    } else if (password) {
      setErrorPassword(false)
    }
    if (!errorUserName && !errorPassword) {

      const formData = new FormData();

      formData.append('action', 'lgfr_login');
      formData.append('nonce', nonce);
      formData.append('user_login', userName);
      formData.append('user_password', password);
      formData.append('remember', remember);
      try {
        const res = await fetch(`${window.location.origin + wp.ajax.settings.url}`, {
          method: 'POST',
          body: formData
        });
        const response = await res.json();
        if (response.success) {
          setBtnDisabled(false);
          messages.type === "toast" && toast.success(`${messages.success.text}`, { className: "bpl-success-message", position: `${messages.position}` });
          if (additional.loginRedirect) {
            setTimeout(() => {
              window.location.href = additional.loginRedirect;
            }, 1500);
          } else {
            setTimeout(() => {
              window.location.href = window.location.origin
            }, 1500);

          }
        } else {
          const usernameErr = `The username <strong>${userName}</strong> is not registered`;
          const passwordErr = `</strong> The password you entered for the username <strong>${userName}</strong> is incorrect`;
          const wrongPassEmail = `<strong>Error:</strong> The password you entered for the email address <strong>${userName}</strong> is incorrect`;
          if (response.data.message.includes(usernameErr)) {
            messages.type === "toast" && toast(`The username ${userName} is not registered`, { className: "lgfr-login-failed-error" })
            setFormErrorMessage(`The username ${userName} is not registered`)
          } else if (response.data.message.includes(passwordErr) || response.data.message.includes(wrongPassEmail)) {
            messages.type === "toast" && toast("Your password is incorrect.", { className: "lgfr-login-failed-error", position: `${messages.position}` })
            setFormErrorMessage("Your password is incorrect.")
          } else if (response.data.message.includes("Unknown email address")) {
            messages.type === "toast" && toast(`Email address ${userName} is not registered`, { className: "lgfr-login-failed-error", position: `${messages.position}` })
            setFormErrorMessage(`Email address ${userName} is not registered`)
          }
          setBtnDisabled(false);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.message);
      }

    }
  }

  return (
    <Fragment>
      {
        formType === "resetform" && <ResetForm setFormType={setFormType} nonce={nonce} attributes={attributes} />
      }
      {
        formType === "loginform" && <div className="login-form-main-wrapper">
          <form onSubmit={handleLoginForm} className="login-form-wrapper">

            <div className="form-field">
              {labels.show && (
                <label className='form-label' htmlFor="username">{labels.username}</label>
              )}
              <input
                type="text"
                name="username"
                id="username"
                placeholder={formInput.username}
              />
              {
                errorUserName && <span className='loginForm-errorMessage'>{errorMessage.username}</span>
              }

            </div>
            <div className="form-field">
              {labels.show && (
                <label className='form-label' htmlFor="password">{labels.password}</label>
              )}
              <div className='password-inputField'>
                <input
                  type={formInput.icon.show ? (showPass ? "text" : "password") : "password"}
                  name="password"
                  id="password"
                  placeholder={formInput.password}
                />
                {
                  formInput.icon.show && <span onClick={() => setShowPass(!showPass)} className='passwordEyeIcon'>
                    {showPass ? <IoIosEye /> : <IoIosEyeOff />}
                  </span>
                }
              </div>
              {errorPassword && <span className='loginForm-errorMessage'>{errorMessage.password}</span>}
            </div>
            {
              additional.remember &&
              <div className="login-checkbox form-label">
                <input type="checkbox" name="remember" id="checkbox" />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
            }
            <div className="login-submitBtn">
              <button type="submit" disabled={btnDisabled} className={`submitBtn ${button.animation} ${btnDisabled && "btnDisabled"}`}>
                {button.text}
              </button>
            </div>
            {
              additional.lostPass && <div className="login-lostPassword">
                <a onClick={() => setFormType("resetform")}>{additional.lostPassText}</a>
              </div>
            }
          </form>
          {
            messages.type === "normal" && formErrorMessage.length > 0 && <div className='form-error-message'>
              <span>{formErrorMessage}</span>
            </div>
          }
          <Toaster />
        </div>
      }
    </Fragment>
  );
};

export default Form;