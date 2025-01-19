import React from 'react';

import Profile from './Profile';
import Filter from './Filter'
import Repositories from './Repositories';

import { Container, SideBar, Main } from './styles';

import { getLangsFrom } from '../../services/api'

function RepositoriesPage() {
  const user = {
    name: 'Nasser Salim',
    login: 'NasserSalim1',
    avatar_url: 'https://avatars.githubusercontent.com/u/87777276?v=4',
    followers: 3,
    following: 3,
    company: 'Tereos',
    location: 'São José do Rio PReto',
  };
  
  const repositories = [
    {
      name: 'Repo 1', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'JavaScript'
    },

    {
      name: 'Repo 2', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'JavaScript'
    },

    {
      name: 'Repo 3', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'PHP'
    },

    {
      name: 'Repo 4', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'Python'
    },

    {
      name: 'Repo 5', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'Python'
    },

    {
      name: 'Repo 6', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'Python'
    },
  ];

  const languages = getLangsFrom(repositories);

  // console.log(stats);

  return( 
    <Container>
      <SideBar>
        <Profile user={user}/>
        <Filter languages={languages} />
      </SideBar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
