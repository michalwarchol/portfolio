import React, { useEffect, useRef } from "react";
import { IconType } from "react-icons";
import styles from "./GlassPanel.module.scss";
import VanillaTilt from "vanilla-tilt";

interface Props {
  animationDelay: string;
  MyIcon?: IconType;
}

const GlassPanel: React.FC<Props> = ({ animationDelay, MyIcon, children }) => {
  const glass = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glass.current) {
      VanillaTilt.init(glass.current, {
        "max-glare": 0.8,
        glare: true,
      });
    }
  }, []);

  return (
    <div
      ref={glass}
      className={styles.glassPanel}
      style={{ animationDelay: animationDelay }}
    >
      {children}
      {MyIcon && (
        <div className={styles.iconContainer}>
          <MyIcon />
        </div>
      )}
    </div>
  );
};
export default GlassPanel;
