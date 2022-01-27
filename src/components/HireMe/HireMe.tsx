import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import Divider from "../Divider/Divider";
import Input from "../Input/Input";
import VanillaTilt from "vanilla-tilt";
import styles from "./HireMe.module.scss";
import { FaFileAlt } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { Element } from "react-scroll";

const HireMe: React.FC = () => {
  const sendButton = useRef<HTMLButtonElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [mailSent, setMailSent] = useState<boolean>(false);
  const [mailLoading, setMailLoading] = useState<boolean>(false);

  useEffect(() => {
    if (sendButton.current) {
      VanillaTilt.init([sendButton.current], {
        "max-glare": 0.8,
        glare: true,
      });
    }
  }, []);

  useEffect(() => {
    if (mailSent) {
      setTimeout(() => {
        setMailSent(false);
      }, 6000); // six seconds
    }
  }, [mailSent]);

  const handleSubmit = async (e: SyntheticEvent) => {
    setMailLoading(true);
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ name, company, email, message }),
    });
    const res = await response.json();
    if (res.status) {
      setMailSent(true);
      setMailLoading(false);
    }
  }

  return (
    <Element name="hireMe">
      <div className={styles.hireMe}>
        <div className={styles.glass}>
          <div className={styles.navbar}>
            <div className={styles.logo}>Hire Me</div>
          </div>
          <Divider />
          <div className={styles.content}>
            <div className={styles.bgIcon}>
              <FaFileAlt />
            </div>
            <p className={styles.text}>
              <span>Send</span> me <span>a message</span> and I will{" "}
              <span>respond</span> as soon as <span>possible</span>
            </p>
            <form onSubmit={handleSubmit}>
              {mailSent && (
                <p className={styles.mailSent}>
                  <RiMailSendFill />
                  Thank You
                </p>
              )}
              <Input
                name="name"
                type="text"
                placeholder="name"
                required
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setName(e.currentTarget.value);
                }}
              />
              <Input
                name="company"
                type="text"
                placeholder="company"
                required
                value={company}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setCompany(e.currentTarget.value);
                }}
              />
              <Input
                name="email"
                type="email"
                placeholder="email"
                required
                value={email}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setEmail(e.currentTarget.value);
                }}
              />
              <Input
                textarea
                name="message"
                placeholder="message"
                required
                value={message}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setMessage(e.currentTarget.value);
                }}
              />
              <button type="submit" ref={sendButton}>
                {mailLoading ? (
                  <div className={styles.loadingIndicator}></div>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default HireMe;
