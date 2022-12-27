import React, { useState } from "react";

import styles from "./styles.module.scss";

function NavMenu({ platform }) {
  const [navMenuOpen, setNavMenuOpen] = useState(false); // menu (mobile) aberto?

  function getMenuStyle() {
    // verificar estilo a ser aplicado no menu com base na plataforma/interação com o botão
    if (platform === "mobile") {
      if (navMenuOpen) {
        return styles.navMenuOpen;
      } else return styles.navMenu;
    } else return styles.navMenuDesktopContainer;
  }

  return (
    <div className={styles.navMenuMobileContainer}>
      <ul className={getMenuStyle()}>
        <li>Perfil</li>
        <li>Sair</li>
      </ul>

      {platform !== "desktop" && (
        <button onClick={() => setNavMenuOpen((prev) => !prev)}>
          {navMenuOpen ? "✕" : "☰"}
        </button>
      )}
    </div>
  );
}

export { NavMenu };
