import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import i18n from "i18next";
import { useLanguageTranslation } from "../translate/config";
import {
  languageConstants,
  languageTypes,
} from "../../language/languageConstants";
import "./login.css";

/**
 * Return fields a s required
 */
function Required() {
  return <span style={{ color: "red" }}>*</span>;
}

export default function Login() {
  const { translate } = useLanguageTranslation();
  const [login, setLogin] = useState({ email: "", password: "" });
  const { en, fr, tn } = languageTypes;
  const [languageSelected, setLanguageSelected] = useState(en);

  /**
   * Set the appropriate value to the key
   * @param e
   */
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e?.target?.name]: e?.target?.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email = "", password = "" } = login;
    if (!email) {
      return toast.warn(translate(languageConstants.EMAIL_IS_REQUIRED));
    }
    if (!password) {
      return toast.warn(translate(languageConstants.PASSWORD_IS_REQUIRED));
    }
    toast.success(translate(languageConstants.LOGIN_SUCCESSFULLY));
  };

  /**
   * Set selected language
   */
  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    setLanguageSelected(lang);
  }

  return (
    <div className="div-container">
      <div className="login-container">
        <div className="login-header">
          <h3>{translate(languageConstants.SIGN_IN)}</h3>
        </div>
        <div className="input-container">
          <div className="div-input">
            <label>
              {translate(languageConstants.EMAIL_ADDRESS)} <Required />
            </label>
            <input
              type={"email"}
              name="email"
              required={true}
              onChange={(e) => handleOnchange(e)}
              value={login.email || ""}
              className="input-email"
              autoComplete="off"
              autoFocus={true}
            />
          </div>
          <div className="div-input">
            <label>
              {translate(languageConstants.PASSWORD)} <Required />
            </label>
            <input
              type={"password"}
              name="password"
              required={true}
              onChange={(e) => handleOnchange(e)}
              value={login.password || ""}
              className="input-password"
            />
          </div>
        </div>
        <div className="login-footer">
          <button
            className="sign-in-button"
            type={"submit"}
            onClick={handleSubmit}
          >
            {translate(languageConstants.SIGN_IN)}
          </button>
        </div>
        <div className="language-footer">
          <p>
            {translate(languageConstants.PLEASE_SELECT_YOUR_FAVORITE_LANGUAGE)}:
          </p>
          <input
            type="radio"
            name="fav_language"
            checked={languageSelected === tn}
            onClick={() => changeLanguage(tn)}
          />
          <label>{translate(languageConstants.TAMIL)}</label>
          <input
            type="radio"
            name="fav_language"
            checked={languageSelected === en}
            onClick={() => changeLanguage(en)}
          />
          <label>{translate(languageConstants.ENGLISH)}</label>
          <input
            type="radio"
            name="fav_language"
            checked={languageSelected === fr}
            onClick={() => changeLanguage(fr)}
          />
          <label>{translate(languageConstants.FRENCH)}</label>
        </div>
      </div>
    </div>
  );
}
