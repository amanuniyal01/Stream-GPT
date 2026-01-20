import React, { useEffect } from 'react'
import Login from './Login'
import Header from './Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browser from './Browser'
import GPTSearch from './GPTSearch'
import MovieList from './MovieList'


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
    }
  ])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
