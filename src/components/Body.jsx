import React, { useEffect } from 'react'
import Login from './Login'
import Header from './Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browser from './Browser'
import GPTSearch from './GPTSearch'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'


const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Login />
        </>
      )
    },
    {
      path: "/browser",
      element: (
        <>
          <Header />
          <Browser />
        </>
      )
    },
    {
      path: "/gpt",
      element: (
        <>
          <Header />
          <GPTSearch />
        </>
      )
    },
  ])



  return (
    <div>
      <RouterProvider router={appRouter} />
         <MovieDetails />
    </div>
  )
}

export default Body
