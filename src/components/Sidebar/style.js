import styled from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";
import exit from "../../assets/icons/exit.svg?react";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Arrow = styled(arrow)`
  margin-left: auto;
  transform: ${({ active }) => active === "true" && "rotate(90deg)"};
  transition: all 0.1s;
`;

const Side = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  width: 280px;
  background-color: white;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Logo = styled.div`
  position: sticky;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(24, 144, 255, 1);
  padding: 16px 24px;
  border-bottom: 1px solid rgba(222, 225, 227, 1);
  cursor: pointer;
  background-color: white;
`;

const LogOut = styled(Logo)`
  position: sticky;
  display: flex;
  font-size: 14px;
  margin-top: auto;
  border-top: 1px solid rgba(222, 225, 227, 1);
  border-bottom: 0;
  align-items: center;
`;

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  border: 2px coral solid;
  margin: 16px;
  background-color: white;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 24px 32px 24px;
`;

ProfileContainer.Image = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;

ProfileContainer.Name = styled.div`
  width: 168px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primaryColor);
`;

ProfileContainer.Email = styled.div`
  width: 168px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--secondaryColor);
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  text-decoration: none;
  background-color: ${({ active }) =>
    active === "true" ? "rgba(248, 250, 252, 1)" : "none"};
  color: ${({ active }) =>
    active === "true" ? "var(--activeColor)" : "var(--primaryColor)"};
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 24px;
  &:hover {
    cursor: pointer;
    background-color: rgba(248, 250, 252, 1);
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === "true" && "var(--activeColor)"};
  }
  .icon {
    margin-right: 16px;
  }
`;

const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({ active }) => (active === 'true' ? "auto" : "0px")};
  overflow: hidden;
`;

const ExitIcon = styled(exit)`
  margin-right: 16px;
`;

export {
  Container,
  Arrow,
  Body,
  Side,
  Wrapper,
  Logo,
  LogOut,
  ProfileContainer,
  Menu,
  MenuItem,
  ChildWrapper,
  ExitIcon,
};
