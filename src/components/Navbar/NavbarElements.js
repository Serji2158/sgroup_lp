import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { TfiEmail } from "react-icons/tfi";


export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "orange" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1000px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  margin-left: 24px;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 5px solid white;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #FFBF63;
  white-space: nowrap;
  padding: 5px 20px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

export const EmailLink2 = styled(TfiEmail)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 17px;
  fill: #FFBF63;    
`;

export const EmailLink = styled(TfiEmail)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: white;
  transition: all 0.2s ease-in-out;  
  width: 30px;
  height: 17px;    
`;
