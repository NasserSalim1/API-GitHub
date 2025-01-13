import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

function Repository() {
  return (
    <Container color='#f1c40f'>
        <Name>Repository Name</Name>
        <Description>Repository Description</Description>
        <Footer color='#f1c40f'>
            <Lang>Repository Lang</Lang>
            <Link href='https://class.devsamurai.com.br' target='_blank'>VER</Link>
        </Footer>
    </Container>
  )
}

export default Repository