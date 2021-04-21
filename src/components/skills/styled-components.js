import styled from "styled-components";

export const StyledSkills = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledSkillCard = styled.div`
  text-align: center;
  color: #333;
  justify-content: center;
  background: #eff1ec;
  padding: 1rem 0.5rem;
  border-radius: 25px;

  h2 {
    font-size: 1rem;
    margin-top: 0.75rem;
    color: #333;
  }
`;
