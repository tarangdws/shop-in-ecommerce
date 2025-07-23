import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import {
  HomePage,
  MainLayout,
  Login,
  Register,
  NotFound,
  CategoryPage,
  ProductPage
} from "./Components/ImportedComponent";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:slug' element={<CategoryPage />} />
            <Route path='/:slug/product/:id' element={<ProductPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
