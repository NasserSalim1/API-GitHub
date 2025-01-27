import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter'
import Repositories from './Repositories';

import { Container, SideBar, Main } from './styles';

import { getLangsFrom } from '../../services/api'

function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState();
  
  const user = {
    name: 'Nasser Salim',
    login: 'NasserSalim1',
    avatar_url: 'https://avatars.githubusercontent.com/u/87777276?v=4',
    followers: 3,
    following: 3,
    company: 'Tereos',
    location: 'São José do Rio Preto',
  };
  
  const repositories = [
    {
      id: 1,
      name: 'Repo 1', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'JavaScript'
    },

    {
      id: 2,
      name: 'Repo 2', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'JavaScript'
    },

    {
      id: 3,
      name: 'Repo 3', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'C'
    },

    {
      id: 4,
      name: 'Repo 4', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'Ruby'
    },

    {
      id: 5,
      name: 'Repo 5', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'Python'
    },

    {
      id: 6,
      name: 'Repo 6', 
      description: 'Descrição', 
      html_url: 'https://github.com/NasserSalim1/API-GitHub', 
      language: 'Python'
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return( 
    <Container>
      <SideBar>
        <Profile user={user}/>
        <Filter 
          languages={languages}
          currentLanguage={currentLanguage} // Corrigido
          onClick={onFilterClick}
        />    

      </SideBar>
      <Main>
        <Repositories repositories={repositories}/>
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
