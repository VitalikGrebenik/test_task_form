import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './style/index.css'
import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
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
  </React.StrictMode>
)
