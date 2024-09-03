import { Outlet, useNavigate } from "react-router-dom";
import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
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
import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState([]);
  const navigate = useNavigate();

  const onClickParent = (id) => {
    if (open.includes(id)) {
      let data = open.filter((value) => value !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }
  };

  const onClickLogo = () => {
    navigate("/");
  };
  const onLogOut = () => {
    navigate("/");
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>Webbrain CRM</Logo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
            const active = open.includes(parent.id)
            const { icon: Icon } = parent;
            return (
              <>
                <MenuItem
                  key={parent.id}
                  onClick={() => {
                    onClickParent(parent.id);
                  }}
                >
                  <MenuItem.Title>
                    <Icon className="icon" /> {parent.title}
                    {parent?.children?.length && <Arrow active={active}/>}
                  </MenuItem.Title>
                </MenuItem>
                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id}>
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </>
            );
          })}
        </Menu>

        <LogOut onClick={onLogOut}>Chiqish</LogOut>
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
