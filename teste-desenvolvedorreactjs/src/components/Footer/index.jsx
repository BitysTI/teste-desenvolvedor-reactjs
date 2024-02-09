import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FooterStyled } from "./style";

function Footer() {
  return (
    <FooterStyled>
      <p className="pBitys">© Bitys Ltda.</p>
      <p className="pSolucoes">
        Soluções digitais para impulsionar o seu negócio
      </p>
    </FooterStyled>
  );
}

export default Footer;
