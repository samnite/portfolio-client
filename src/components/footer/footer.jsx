import React from "react";
import {
  faFacebook,
  faLinkedin,
  faSkype,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { StyledCopy, StyledFooter } from "./components";
import FooterItem from "./footer-item";

const Footer = () => (
  <>
    <StyledFooter>
      <FooterItem
        icon={faEnvelope}
        link="mailto:samnite87@gmail.com"
        title="Mail Me"
      />
      <FooterItem
        icon={faSkype}
        link="https://join.skype.com/invite/eNxfykF1nU9F"
        title="Call Me"
      />
      <FooterItem
        icon={faTelegram}
        link="https://t.me/samnite"
        title="Telegram Me"
      />
      <FooterItem
        icon={faFacebook}
        link="https://www.facebook.com/samnite87"
        title="Alex Gribenchenko"
      />
      <FooterItem
        icon={faLinkedin}
        link="https://www.linkedin.com/in/alex-gribenchenko/"
        title="Link Me"
      />
    </StyledFooter>
    <StyledCopy>
      Copyright &copy; {new Date().getFullYear()} Alex Gribenchenko. All Rights
      Reserved
    </StyledCopy>
  </>
);

export default Footer;
