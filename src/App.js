import "./App.css"
import { Routes, Route } from 'react-router-dom'
import {
  HomePage,
  MainLayout,
  Login,
  Register,
  NotFound,
  CategoryPage,
  ProductPage
} from "./Components/ImportedComponent";
import Cart from "./Components/Pages/Cart/Cart";
import { ToastContainer, Zoom } from "react-toastify";
import CheckoutPage from "./Components/Pages/Checkout/CheckoutPage";
import PaymentPage from "./Components/Pages/Payment/PaymentPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:slug' element={<CategoryPage />} />
          <Route path='/:slug/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/payment' element={<PaymentPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </>
  )
}

export default App;
