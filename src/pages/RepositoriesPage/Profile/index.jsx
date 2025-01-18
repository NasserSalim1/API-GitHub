import React from 'react'

import PropTypes from 'prop-types';

import { MdGroup, MdLocationCity, MdWork } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url}/>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data> 
          <MdGroup size={20}/> 
          {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.followers}&nbsp;<i>seguindo</i>
        </Data>
        <Data> <MdWork size={20}/>{user.company}</Data>
        <Data> <MdLocationCity size={20}/>{user.location}</Data>
      </Inner>
    </Container>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile