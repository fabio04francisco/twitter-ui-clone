import React from 'react';
import StickyBox from 'react-sticky-box';

import News from '../News';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import { 
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você custa"
            elements={[
              <FollowSuggestion 
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion 
                name="Luke Morales"
                nickname="@lukemorales"
              />,
              <FollowSuggestion 
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,                        
            ]}
          />

          <List 
            title="Talvez você custa"
            elements={[ 
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat"
              />,
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat" 
              />,
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat" 
              />,              
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat"
              />]}
          />

          <List 
            title="Talvez você custa"
            elements={[ 
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat"
              />,
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat" 
              />,
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat" 
              />,              
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat"
              />]}
          />

          <List 
            title="Talvez você custa"
            elements={[ 
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat"
              />,
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat" 
              />,
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat" 
              />,              
              <News
                title="Assunto do momento no Brasil"
                local="BootCamp da Rocketseat"
              />]}
          />
       </Body>
      </StickyBox>
    </Container>
    );
}

export default SideBar;