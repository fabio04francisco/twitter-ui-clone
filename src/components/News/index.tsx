import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  local: string;
}

const News: React.FC<Props> = ({title, local}) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{local}</strong>
    </Container>

  );
}

export default News;