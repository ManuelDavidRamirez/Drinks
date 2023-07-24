import { BrowserRouter } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CartProvider } from "./context/CartProvider"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { UserProvider } from "./context/UserProvider"
import { MainLayout } from "./layouts"
import { AppRoutes } from './routes'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <DrinksProvider>
            <CartProvider>
              <MainLayout>
                <AppRoutes />
              </MainLayout>
            </CartProvider>
          </DrinksProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App