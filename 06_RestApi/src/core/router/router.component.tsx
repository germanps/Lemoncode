import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { switchRoutes } from './routes'
import { CharacterScene, CharacterCollectionScene } from 'scenes'

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.characterCollection} />} />
        <Route path={switchRoutes.characterCollection} element={<CharacterCollectionScene />} />
        <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
      </Routes>
    </HashRouter>
  );
};
