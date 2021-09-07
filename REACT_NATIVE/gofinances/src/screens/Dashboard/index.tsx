import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  Icon
  } from './styles'

export function Dashboard(){
  return(
  <Container>
    <Header>
     <UserWrapper>
      <UserInfo>
        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/37560590?v=4'}} />
        <User>
          <UserGreeting>Olá</UserGreeting>
          <UserName>Lucas</UserName>
          </User>
      </UserInfo>
      <Icon name="power"/>
     </UserWrapper>
   </Header>

   <HighlightCard />
  </Container>
  )
}
