import React, { useEffect, useState } from "react";

import { NavMenu } from "./navMenu";

import styles from "./styles.module.scss";

function NavBar() {
  const [width, setWidth] = useState(window.innerWidth); // tamanho da tela, para detecção desktop/mobile

  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navContent}>
          <p className={styles.brand} href="/">
            WebTutor
          </p>
          <NavMenu platform={width < breakpoint ? "mobile" : "desktop"} />
        </div>
      </div>
    </>
  );
}

export { NavBar };
