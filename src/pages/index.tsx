import React from 'react'
import Head from 'next/head'
import {
  ButtonContainer,
  Container,
  ImageLogo,
  MainContainer
} from '@/styles/pages/index'
import Logo from '../public/logo.svg'
import { Button } from '@/styles/UI'
const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Homepage</title>
        </Head>

        <MainContainer>
          <ImageLogo>
            <Logo />
          </ImageLogo>
          <ButtonContainer>
            <Button color="green">Jogar</Button>
            <Button color="blue">Criar uma Partida</Button>
            <Button color="yellow">Perfil</Button>
          </ButtonContainer>
        </MainContainer>
      </Container>
    </>
  )
}

export default Home
