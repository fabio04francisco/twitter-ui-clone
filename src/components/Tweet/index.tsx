import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon  
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você Retweetou
      </Retweeted>  

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <strong>@rocketseat</strong>
            <Dot />
            <time>18 de jul</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description> 

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
        
            <Status>
              <RetweetIcon />
              18
            </Status>
        
            <Status>
              <LikeIcon />
              18
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
    );
}

export default Tweet;