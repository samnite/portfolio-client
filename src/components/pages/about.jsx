import React, { useEffect } from "react";
import { setMainPage } from "../../store/actions/projects-actions";
import { connect } from "react-redux";
import styled from "styled-components";
import avatarImg from "../../img/avatar/avatar.png";

const StyledAbout = styled.div`
  max-width: 800px;
  height: 70vh;
  color: #333;
  margin: auto;
  padding: 2rem 2rem;
  overflow: hidden;
  h2 {
    color: var(--primary-hover-color);
    margin-bottom: 1rem;
  }
  img {
    display: block;
    height: 150px;
    border-radius: 150px;
    margin: auto auto 1rem;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const About = ({ setMainPage }) => {
  useEffect(() => {
    setMainPage(false);
    // eslint-disable-next-line
  }, []);
  return (
    <StyledAbout>
      <img src={avatarImg} alt="Alex Gribenchenko" />
      <h2>Hi! My name is Alex.</h2>
      <p>
        If you are looking for someone who can hit the ground running and loves
        working with website, I’d love to be considered. I am a front-end web
        developer, who can take care of your website from scratch to advance
        stage.
      </p>
      <p>
        My key skills are the following: HTML, CSS, JavaScript,TypeScript,
        React, Redux, Context API, Firebase, WordPress.{" "}
      </p>
      <p>
        I am highly motivated and innovative developer with a keen eye for
        detail and a strong work ethic. Send me a message and let's discuss
        everything further. I will be glad to apply my experience and knowledge
        working on your product!
      </p>
    </StyledAbout>
  );
};

export default connect(
  null,
  { setMainPage }
)(About);
