import styled from 'styled-components';

export const StyledBtnWhats = styled.a`
  position: fixed;
  right: 10px; 
  bottom: 50px; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background-color: white;
  border-radius: 10px;

  z-index: 9; 
  transition: background-color 0.3s ease;
  border: none;
  margin: 0;
  padding: 0;

  .WhatsApp {
    width: 70px;
    height: 70px;
  };
`
  