import React, { useEffect, useRef } from "react";
import { IconType } from "react-icons/lib";
import styles from "./Button.module.scss";
import VanillaTilt from "vanilla-tilt";

interface Props {
  text: string;
  Icon: IconType;
  type: "fill" | "outline";
  onClick?(): void | undefined;
}

const Button: React.FC<Props> = ({ text, Icon, type, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init([ref.current], {
        "max-glare": 0.8,
        glare: true,
      });
    }
  }, [ref]);

  return (
    <div className={styles[type]} ref={ref} onClick={onClick}>
      <span>{text}</span>
      <div>
        <div className={styles.arrow}>
          <Icon />
        </div>
      </div>
    </div>
  );
};
export default Button;
