import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './style/index.css'
import store from './store/index'
import Header from './components/header/header'
import Login from './components/LoginPage/Login'
import Home from './components/homePage/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route path='' element={<Login/>}/>
              <Route path='/app/home' element={<Home />}/>
              <Route path='*' element={
                  <main style={{padding: '10px'}}>
                      <p>There's nothing here!</p>
                      <Link to="/"> Back to home ! </Link>
                  </main>
              }/>
            </Route>   
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
