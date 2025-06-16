
import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import MainPage from './components/Main/MainPage'
import Account from './components/Links/Account'
import MainLayout from './components/Main/MainLayout'
import  Basket from './components/Store/Basket'
import Services from './components/Links/Services'
import Features from './components/Links/Features'
import About from './components/Links/About'

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<MainLayout />}>
      <Route index element={<MainPage />}/>
      <Route path='/register' element={<Account />}/>
      <Route path='/card/:id' element={<Basket />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/feature' element={<Features />}/>
      <Route path='/about' element={<About />}/>
    </Route>
  )
)

const App = () => {
return <RouterProvider router={router}/>
}

export default App