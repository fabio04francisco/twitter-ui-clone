import React from 'react';

import Feed from '../Feed';
import ImageProfile from '../../assets/4475792.jpg';

import { Container,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar>
          <img src={ImageProfile} alt="Foto Perfil"/>
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Fábio Francisco</h1>
        <h2>@fabio04francisco</h2>

        <p>
          Developer at <a href="http://centrodata.com.br">@Centrodata</a> 
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santa Catarina, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 04 de março de 1985
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>  
  );
}

export default ProfilePage;