import styled from "styled-components";

export const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-sidebar);
  height: 100vh;
  width: 270px;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.35s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.18);
  
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
