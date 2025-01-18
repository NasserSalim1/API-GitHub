import React from 'react';

import Profile from './Profile';
import Filter from './Filter'
import Repositories from './Repositories';

import { Container, SideBar, Main } from './styles';

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
      language: 'Ruby'
    },

    {
      name: 'Repo 5', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'Java'
    },

    {
      name: 'Repo 6', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'TypeScript'
    },
  ];

// Calculo dos filters
  const languages = [
    { name: 'JavaScript', count: 3, color: '#f1c40f' },
    { name: 'Sheell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 1, color: '#3498db' },
    { name: 'Ruby', count: 2, color: '#E03131' },
  ]

  return( 
    <Container>
      <SideBar>
        <Profile user={user}/>
        <Filter languages={languages} />
      </SideBar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
