import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
  ExitIcon,
  LogOut,
  Logo,
  Menu,
  MenuItem,
  Side,
  Wrapper,
} from "./style";
import Navbar from "../Navbar";
import { Profile } from "./profile";
import sidebar from "../../utils/sidebar";
import React, { useEffect, useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setOpen(JSON.parse(localStorage.getItem("open")) || []);
  }, []);
  useEffect(() => {}, [location]);

  const onClickParent = ({ id, children, path }, e) => {
    if (!children) {
      e.preventDefault();
      navigate(path);
    }
    if (open.includes(id)) {
      let data = open.filter((value) => value !== id);
      localStorage.setItem("open", JSON.stringify(data));
      setOpen(data);
    } else {
      localStorage.setItem("open", JSON.stringify([...open, id]));
      setOpen([...open, id]);
    }
  };

  const onClickLogo = () => {
    navigate("/");
  };
  const onLogOut = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>Webbrain CRM</Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
            const active = open.includes(parent.id);
            const activePath = location.pathname?.includes(parent.path);
            const { icon: Icon } = parent;
            return !parent.hidden ? (
              <React.Fragment key={parent.id}>
                <MenuItem
                  onClick={(e) => {
                    onClickParent(parent, e);
                  }}
                  active={activePath.toString()}
                >
                  <MenuItem.Title active={activePath.toString()}>
                    <Icon className="icon" /> {parent.title}
                    {parent?.children?.length && (
                      <Arrow active={active.toString()} />
                    )}
                  </MenuItem.Title>
                </MenuItem>
                <ChildWrapper active={active.toString()}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem
                        key={child?.id}
                        to={child.path}
                        active={(location.pathname === child.path).toString()}
                      >
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </React.Fragment>
            ) : null;
          })}
        </Menu>

        <LogOut onClick={onLogOut}>
          <ExitIcon /> Chiqish
        </LogOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};
