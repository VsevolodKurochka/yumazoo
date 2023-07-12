import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/home';
import { AddRecipe } from 'pages/add-recipe';
import { Toaster } from 'react-hot-toast';
import { TOASTER_DFEAULT_OPTIONS } from 'shared/libs/toast';
import { RecipeSingle } from 'pages/recipe-single';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeSingle />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster position="bottom-right" toastOptions={TOASTER_DFEAULT_OPTIONS} />
    </>
  )
};
