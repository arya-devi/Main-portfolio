import React, { useRef, useState } from "react";
import styled from "styled-components";
import { sendMail } from "../../../utils/email";

const StyledContactMeSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  padding: 15% 0;

  .form-title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4em;
    color: var(--white);
    font-size: 1.4em;
  }

  .form-title {
    text-align: center;
  }

  .form-description {
    text-align: center;
    color: var(--theme-light-text-color);
    font-size: 0.7em;
  }

  .say-hello-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .name-and-email-container {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: space-between;
    width: 70%;
  }

  .name-and-email-container > * {
    width: 45%;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }

  .message-field-container {
    width: 70%;
  }

  label {
    color: var(--theme-text-color);
    font-size: 0.8em;
  }

  input {
    background: none;
    border: none;
    border-image: var(--theme-grad-background);
    border-bottom: 1px solid transparent;
    border-image-slice: 1;
    color: var(--theme-text-color);
    padding-bottom: 0.5em;
  }

  input::placeholder,
  input::-moz-placeholder {
    color: var(--theme-light-text-color);
  }

  .form-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    position: relative;
    background: none;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    color: var(--white);
    font-weight: bold;
    top: 3em;
    transition: transform 0.3s ease-in-out;
    border-radius: 3px;
  }

  .form-submit::before,
  .form-submit::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-image: var(--theme-grad-background) 30;
    border-width: 2px;
    padding: 2px;
    border-image-slice: 1;
    border-style: solid;
    background: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    z-index: 1;
    border-radius: 3px;
  }

  .form-submit::after {
    border-image: var(--theme-reverse-grad-background) 30;
    opacity: 1;
  }

  .form-submit:hover::after {
    opacity: 0;
  }

  .form-submit:hover {
    transform: scale(1.1);
  }

  .submit-icon {
    font-size: 2.2em;
  }

  .loading {
    animation: spin 1s infinite linear;
  }

  .shoot-text {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1em;
    font-weight: bold;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    .form-description {
      font-size: 0.4em;
    }

    .submit-icon {
      font-size: 1.2em;
    }

    .loading {
      animation: spin 1s infinite linear;
    }

    .shoot-text {
      font-size: 0.6em;
    }

    .name-and-email-container,
    .message-field-container {
      width: 100%;
    }

    label,
    input {
      font-size: 0.5em;
    }

    .form-submit {
      padding: 0.4em 0.7em;
    }
  }
`;
export default function ContactMeSection() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setSent(false);
      setLoading(true);
      setError(false);
      await sendMail(formRef.current);
      setSent(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const emailState = loading
    ? { text: "LOADING", icon: "autorenew" }
    : error
    ? { text: "TRY AGAIN", icon: "replay" }
    : sent
    ? { text: "THANKS", icon: "check" }
    : { text: "SHOOT", icon: "arrow_right_alt" };

  return (
    <StyledContactMeSection loading={loading}>
      <div className="form-title-container">
        <h3 className="form-title">Send Me A Message!</h3>
        <div className="form-description">
          Got a question or proposal, or just want <br /> to say hello? Go
          ahead.
        </div>
      </div>

      <form className="say-hello-form" ref={formRef} onSubmit={onSubmit}>
        <div className="name-and-email-container">
          <div className="name-field-container input-container">
            <label className="name-label" form="name-input">
              Your Name
            </label>
            <input
              type="text"
              required
              className="name-input"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="email-address-field-container input-container">
            <label className="email-address-label" form="email-address-input">
              Email Address
            </label>
            <input
              type="text"
              required
              className="email-address-input"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="message-field-container input-container">
          <label className="message-label" form="message-input">
            Your Message
          </label>
          <input
            type="text"
            required
            className="message-input"
            name="message"
            placeholder="Hey, I got the job for you"
          />
        </div>
        <button className="form-submit" type="submit">
          <div className="shoot-text">{emailState["text"]}</div>
          <i className={`material-icons submit-icon ${loading && "loading"}`}>
            {emailState["icon"]}
          </i>
        </button>
      </form>
    </StyledContactMeSection>
  );
}
