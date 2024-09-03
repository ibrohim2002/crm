import React from "react";
import { ProfileContainer } from "./style";
import noImg from "../../assets/images/noUser.webp";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg} />
      <div>
        <ProfileContainer.Name>Ibrokhim Dadamukhamedov</ProfileContainer.Name>
        <ProfileContainer.Email>
          i.dadamukhamedov@gmail.com
        </ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};
